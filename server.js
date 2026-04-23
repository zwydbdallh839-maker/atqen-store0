const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const app = express();

loadEnvFile();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
    res.status(200).json({ ok: true });
});

const mailUser = process.env.MAIL_USER;
const mailPass = process.env.MAIL_PASS;
const mailTo = process.env.MAIL_TO || mailUser;

function escapeHtml(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function loadEnvFile() {
    const envPath = path.join(__dirname, ".env");
    if (!fs.existsSync(envPath)) {
        return;
    }

    const envContent = fs.readFileSync(envPath, "utf8");
    envContent.split(/\r?\n/).forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) {
            return;
        }

        const separatorIndex = trimmed.indexOf("=");
        if (separatorIndex === -1) {
            return;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        const value = trimmed.slice(separatorIndex + 1).trim();
        if (key && !process.env[key]) {
            process.env[key] = value;
        }
    });
}

function isValidOrder(order) {
    return Boolean(
        order &&
        typeof order.name === "string" &&
        typeof order.phone === "string" &&
        typeof order.address === "string" &&
        typeof order.gov === "string" &&
        Array.isArray(order.items) &&
        order.items.length > 0 &&
        Number.isFinite(Number(order.total)) &&
        Number.isFinite(Number(order.shipping))
    );
}

function createTransporter() {
    if (!mailUser || !mailPass) {
        return null;
    }

    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: mailUser,
            pass: mailPass
        }
    });
}

app.post("/api/order", async (req, res) => {
    const order = req.body;

    if (!isValidOrder(order)) {
        return res.status(400).json({ success: false, message: "Invalid order data." });
    }

    const transporter = createTransporter();
    if (!transporter) {
        return res.status(500).json({
            success: false,
            message: "Email service is not configured. Set MAIL_USER and MAIL_PASS."
        });
    }

    const itemsHtml = order.items.map((item) => {
        const productName = escapeHtml(item.nameEn || item.nameAr || "Product");
        const qty = Number(item.qty) || 1;
        const price = Number(item.price) || 0;

        return `
            <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee;">${productName}</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee;text-align:center;">${qty}</td>
                <td style="padding:12px 0;border-bottom:1px solid #eee;text-align:right;">${price * qty} EGP</td>
            </tr>
        `;
    }).join("");

    const safeName = escapeHtml(order.name);
    const safePhone = escapeHtml(order.phone);
    const safeGov = escapeHtml(order.gov);
    const safeAddress = escapeHtml(order.address);
    const safeShipping = Number(order.shipping) || 0;
    const safeTotal = Number(order.total) || 0;

    const mailOptions = {
        from: `"ATQEN STORE Orders" <${mailUser}>`,
        to: mailTo,
        subject: `New order from ${safeName} - ${safeGov}`,
        html: `
            <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;border:1px solid #e8d6b6;border-radius:18px;overflow:hidden;">
                <div style="padding:28px;background:#18120e;color:#fff;">
                    <p style="letter-spacing:4px;color:#d0a360;font-size:12px;text-transform:uppercase;margin:0 0 10px;">ATQEN STORE</p>
                    <h1 style="margin:0;font-size:28px;">New Website Order</h1>
                </div>
                <div style="padding:28px;background:#fffaf5;color:#201915;">
                    <p><strong>Customer:</strong> ${safeName}</p>
                    <p><strong>Phone:</strong> ${safePhone}</p>
                    <p><strong>Governorate:</strong> ${safeGov}</p>
                    <p><strong>Address:</strong> ${safeAddress}</p>
                    <table style="width:100%;border-collapse:collapse;margin:20px 0;">
                        <thead>
                            <tr>
                                <th style="text-align:left;padding-bottom:12px;border-bottom:2px solid #d8b171;">Item</th>
                                <th style="text-align:center;padding-bottom:12px;border-bottom:2px solid #d8b171;">Qty</th>
                                <th style="text-align:right;padding-bottom:12px;border-bottom:2px solid #d8b171;">Total</th>
                            </tr>
                        </thead>
                        <tbody>${itemsHtml}</tbody>
                    </table>
                    <div style="margin-top:20px;padding:18px;background:#ffffff;border-radius:14px;border:1px solid #eee3d0;">
                        <p style="margin:0 0 10px;"><strong>Shipping:</strong> ${safeShipping} EGP</p>
                        <p style="margin:0;font-size:22px;"><strong>Grand Total:</strong> <span style="color:#b88a44;">${safeTotal} EGP</span></p>
                    </div>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Order email failed:", error);
        return res.status(500).json({ success: false, message: "Failed to send order email." });
    }
});

app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
});
