const products = [
    {
        id: 1,
        nameEn: "Essential Black Tee",
        nameAr: "تيشيرت أسود أساسي",
        category: "T-shirts",
        price: 550,
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80",
        descEn: "Clean silhouette with a premium heavy-cotton feel.",
        descAr: "تصميم نظيف بقصة بسيطة مع قطن ثقيل يعطي إحساساً فاخراً."
    },
    {
        id: 2,
        nameEn: "Pure White Tee",
        nameAr: "تيشيرت أبيض نقي",
        category: "T-shirts",
        price: 550,
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
        descEn: "Minimal everyday staple that works with any outfit.",
        descAr: "قطعة أساسية يومية بسيطة تناسب جميع الإطلالات."
    },
    {
        id: 3,
        nameEn: "Slate Grey Tee",
        nameAr: "تيشيرت رمادي هادئ",
        category: "T-shirts",
        price: 600,
        img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
        descEn: "Soft neutral tone with elevated casual styling.",
        descAr: "لون هادئ مع ستايل كاجوال أنيق ومميز."
    },
    {
        id: 4,
        nameEn: "Vintage Acid Tee",
        nameAr: "تيشيرت فينتاج أسيـد",
        category: "T-shirts",
        price: 650,
        img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
        descEn: "Washed finish for a more textured streetwear look.",
        descAr: "تشطيب مغسول يعطي مظهر ستريت وير أكثر خشونة وتميز."
    },
    {
        id: 5,
        nameEn: "Street Graphic Tee",
        nameAr: "تيشيرت جرافيك ستريت",
        category: "T-shirts",
        price: 650,
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
        descEn: "More expressive front presence without over-design.",
        descAr: "تصميم جرافيك بسيط يعطي حضور قوي بدون مبالغة."
    },
    {
        id: 6,
        nameEn: "Minimal Box Tee",
        nameAr: "تيشيرت مينيمل بوكس",
        category: "T-shirts",
        price: 500,
        img: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80",
        descEn: "Simple branding and relaxed fit for easy daily wear.",
        descAr: "تصميم بسيط بقصة مريحة للاستخدام اليومي."
    },
    {
        id: 7,
        nameEn: "Midnight Oversize Tee",
        nameAr: "تيشيرت أوفرسايز ميدنايت",
        category: "T-shirts",
        price: 700,
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=80",
        descEn: "Oversized cut for a bolder and more current look.",
        descAr: "قصة أوفرسايز لإطلالة عصرية وجريئة."
    },
    {
        id: 8,
        nameEn: "Shadow Tee",
        nameAr: "تيشيرت شادو",
        category: "T-shirts",
        price: 580,
        img: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=900&q=80",
        descEn: "Balanced silhouette with understated premium energy.",
        descAr: "تصميم متوازن بسيط مع إحساس فاخر."
    },
    {
        id: 9,
        nameEn: "Phantom Hoodie",
        nameAr: "هودي فانتوم",
        category: "Hoodies",
        price: 950,
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
        descEn: "Dark essential with a clean heavyweight profile.",
        descAr: "قطعة داكنة أساسية بقماش ثقيل وتصميم نظيف."
    },
    {
        id: 10,
        nameEn: "Gold Crest Hoodie",
        nameAr: "هودي جولد كريست",
        category: "Hoodies",
        price: 1200,
        img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=900&q=80",
        descEn: "Premium statement hoodie with refined brand attitude.",
        descAr: "هودي فاخر يعكس هوية براند قوية وواضحة."
    },
    {
        id: 11,
        nameEn: "Cloud Grey Hoodie",
        nameAr: "هودي كلاود جراي",
        category: "Hoodies",
        price: 950,
        img: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?auto=format&fit=crop&w=900&q=80",
        descEn: "Soft-toned layering piece for understated styling.",
        descAr: "قطعة هادئة بألوان ناعمة تناسب الطبقات اليومية."
    },
    {
        id: 12,
        nameEn: "Tech Fleece Hoodie",
        nameAr: "هودي تيك فليس",
        category: "Hoodies",
        price: 1100,
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=900&q=80",
        descEn: "A sharper silhouette that feels more modern and athletic.",
        descAr: "تصميم حديث ورياضي بقصة حادة وواضحة."
    },
    {
        id: 13,
        nameEn: "Earth Core Hoodie",
        nameAr: "هودي إيرث كور",
        category: "Hoodies",
        price: 1000,
        img: "https://images.unsplash.com/photo-1513789178605-8930c7464972?auto=format&fit=crop&w=900&q=80",
        descEn: "Earth-tone hoodie with warmer premium styling.",
        descAr: "هودي بألوان ترابية تعطي إحساس دافئ وفخم."
    },
    {
        id: 14,
        nameEn: "Urban Zip Hoodie",
        nameAr: "هودي أوربان زيب",
        category: "Hoodies",
        price: 1150,
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
        descEn: "Versatile zip silhouette for layered city looks.",
        descAr: "هودي بسوستة عملي يناسب ستايلات المدينة."
    },
    {
        id: 15,
        nameEn: "Stealth Black Hoodie",
        nameAr: "هودي ستيلث بلاك",
        category: "Hoodies",
        price: 1300,
        img: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=900&q=80",
        descEn: "High-impact black hoodie for a confident look.",
        descAr: "هودي أسود قوي يعطي ثقة وحضور واضح."
    },
    {
        id: 16,
        nameEn: "Iconic White Hoodie",
        nameAr: "هودي آيكونيك وايت",
        category: "Hoodies",
        price: 950,
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
        descEn: "Bright minimal option with polished neutral styling.",
        descAr: "اختيار أبيض بسيط وأنيق بإطلالة نظيفة."
    }
];

const shippingZones = {
    cairo: ["Cairo", "Giza", "Qalyubia"],
    delta: ["Alexandria", "Beheira", "Dakahlia", "Damietta", "Gharbia", "Kafr El Sheikh", "Monufia", "Sharqia", "Port Said", "Ismailia", "Suez"]
};

const text = {
    en: {
        add: "Add to bag",
        empty: "Your bag is empty. Add a couple of pieces and the checkout will appear here.",
        shippingPending: "Choose your governorate to calculate shipping.",
        shipping: "Shipping",
        success: "Order placed successfully. We will contact you shortly.",
        orderError: "Something went wrong while sending the order. Please try again.",
        validation: "Please complete your name, phone, governorate, and address first.",
        cartRequired: "Add at least one product before checkout.",
        sending: "Sending your order...",
        sendingCta: "Sending...",
        placeOrderCta: "Place order",
        remove: "Remove",
        cartTitle: "Shopping bag",
        checkoutTitle: "Complete your order",
        checkoutHint: "Fill in your details and press place order."
    },
    ar: {
        add: "أضف إلى السلة",
        empty: "السلة فارغة حالياً. أضف بعض المنتجات وسيظهر لك إتمام الطلب هنا.",
        shippingPending: "اختر المحافظة لحساب تكلفة الشحن.",
        shipping: "الشحن",
        success: "تم إرسال الطلب بنجاح. سنتواصل معك قريباً.",
        orderError: "حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.",
        validation: "من فضلك أكمل الاسم ورقم الهاتف والمحافظة والعنوان أولاً.",
        cartRequired: "أضف منتجاً واحداً على الأقل قبل إتمام الطلب.",
        sending: "جارٍ إرسال الطلب...",
        sendingCta: "جارٍ الإرسال...",
        placeOrderCta: "تأكيد الطلب",
        remove: "حذف",
        cartTitle: "سلة التسوق",
        checkoutTitle: "أكمل طلبك",
        checkoutHint: "املأ البيانات ثم اضغط تأكيد الطلب."
    }
};

let cart = JSON.parse(localStorage.getItem("cart") || "[]");
let currentLang = localStorage.getItem("lang") || "en";
let currentFilter = "all";
let shippingCost = 60;
let revealTicking = false;

const els = {};

document.addEventListener("DOMContentLoaded", () => {
    cacheElements();
    setupChrome();
    bindEvents();
    render(currentFilter);
    applyLang(currentLang);
    updateUI();
    updateShipping();

    if (localStorage.getItem("seenIntro") === "1") {
        hideIntro(true);
    }

    requestAnimationFrame(reveal);
    window.addEventListener("scroll", queueReveal, { passive: true });
});

function cacheElements() {
    els.intro = document.getElementById("intro-screen");
    els.grid = document.getElementById("product-grid");
    els.cartSide = document.getElementById("cart-side");
    els.cartItems = document.getElementById("cart-items");
    els.overlay = document.getElementById("overlay");
    els.modal = document.getElementById("modal");
    els.modalContent = els.modal ? els.modal.querySelector(".modal-content") : null;
    els.status = document.getElementById("status-message");
    els.subtotal = document.getElementById("subtotal");
    els.bagCount = document.getElementById("bag-count");
    els.langToggle = document.getElementById("lang-toggle");
    els.themeToggle = document.getElementById("theme-toggle");

    if (els.overlay) {
        els.overlay.classList.add("overlay");
    }

    if (els.cartItems) {
        els.cartItems.classList.add("cart-items");
    }

    if (els.status) {
        els.status.classList.add("status-message");
    }
}

function setupChrome() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
}

function bindEvents() {
    if (els.langToggle) {
        els.langToggle.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "ar" : "en";
            localStorage.setItem("lang", currentLang);
            applyLang(currentLang);
            updateUI();
            updateShipping();
        });
    }

    if (els.themeToggle) {
        els.themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    if (els.overlay) {
        els.overlay.addEventListener("click", () => toggleCart(false));
    }
}

function startExperience() {
    hideIntro(false);
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function hideIntro(fromStorage) {
    if (!els.intro) {
        return;
    }

    els.intro.classList.add("hidden");
    els.intro.setAttribute("aria-hidden", "true");
    if (!fromStorage) {
        localStorage.setItem("seenIntro", "1");
    }
    setTimeout(() => {
        if (els.intro) {
            els.intro.style.display = "none";
        }
    }, 750);
}

function render(filter = "all") {
    if (!els.grid) {
        return;
    }

    const filteredProducts = filter === "all"
        ? products
        : products.filter((product) => product.category === filter);

    els.grid.innerHTML = filteredProducts.map((product, index) => {
        const name = currentLang === "ar" ? product.nameAr : product.nameEn;
        const desc = currentLang === "ar" ? product.descAr : product.descEn;

        return `
            <article class="card" style="transition-delay:${Math.min(index * 40, 240)}ms">
                <div class="card-image">
                    <img src="${product.img}" alt="${escapeHtml(name)}" loading="lazy">
                </div>
                <div class="card-body">
                    <div class="product-topline">
                        <span class="product-category">${escapeHtml(product.category)}</span>
                    </div>
                    <h3 class="product-name">${escapeHtml(name)}</h3>
                    <p class="product-copy">${escapeHtml(desc)}</p>
                    <div class="product-bottom">
                        <strong class="price">${product.price} EGP</strong>
                        <button class="add-btn" type="button" onclick="addToCart(${product.id})">
                            ${escapeHtml(text[currentLang].add)}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    requestAnimationFrame(reveal);
}

function filterProducts(category, event) {
    currentFilter = category;
    render(category);

    document.querySelectorAll(".f-btn").forEach((btn) => {
        btn.classList.toggle("active", btn === event?.currentTarget);
    });
}

function addToCart(id) {
    const product = products.find((item) => item.id === id);
    if (!product) {
        return;
    }

    const existing = cart.find((item) => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateUI();
    toggleCart(true);
}

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    saveCart();
    updateUI();
}

function changeQty(id, delta) {
    const item = cart.find((entry) => entry.id === id);
    if (!item) {
        return;
    }

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter((entry) => entry.id !== id);
    }

    saveCart();
    updateUI();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateUI() {
    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    shippingCost = cart.length ? 60 : 0;

    if (els.bagCount) {
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        els.bagCount.textContent = `(${totalQty})`;
    }

    if (els.subtotal) {
        els.subtotal.textContent = subtotal.toFixed(0);
    }

    if (els.cartItems) {
        if (!cart.length) {
            els.cartItems.innerHTML = `<p class="empty-state">${escapeHtml(text[currentLang].empty)}</p>`;
        } else {
            els.cartItems.innerHTML = cart.map((item) => {
                const name = currentLang === "ar" ? item.nameAr : item.nameEn;
                return `
                    <div class="cart-item-premium">
                        <img class="cart-item-img" src="${item.img}" alt="${escapeHtml(name)}">
                        <div class="cart-item-meta">
                            <h4>${escapeHtml(name)}</h4>
                            <p>${item.price} EGP</p>
                            <div class="qty-controls">
                                <button class="qty-btn" type="button" onclick="changeQty(${item.id}, -1)">-</button>
                                <span>${item.qty}</span>
                                <button class="qty-btn" type="button" onclick="changeQty(${item.id}, 1)">+</button>
                            </div>
                            <button class="button-link" type="button" onclick="removeFromCart(${item.id})">${escapeHtml(text[currentLang].remove)}</button>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }

    if (els.modal && els.modal.classList.contains("open")) {
        refreshCheckoutSummary();
    }
}

function updateShipping() {
    shippingCost = cart.length ? 60 : 0;
}

function toggleCart(open) {
    if (!els.cartSide || !els.overlay) {
        return;
    }

    els.cartSide.classList.toggle("active", open);
    els.overlay.classList.toggle("active", open);
    document.body.classList.toggle("cart-open", open);
}

function openCheckout() {
    if (!cart.length) {
        showModal(text[currentLang].cartRequired, true);
        toggleCart(true);
        return;
    }

    if (!els.modal || !els.modalContent) {
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    const shipping = shippingCost || 60;
    const total = subtotal + shipping;

    els.modalContent.innerHTML = `
        <div class="modal-head">
            <div>
                <p class="mini-label">${escapeHtml(currentLang === "ar" ? "الدفع" : "Checkout")}</p>
                <h2>${escapeHtml(text[currentLang].checkoutTitle)}</h2>
            </div>
            <button class="close-btn" type="button" onclick="closeModal()">×</button>
        </div>
        <p class="status-message" id="status-message">${escapeHtml(text[currentLang].checkoutHint)}</p>
        <form id="checkout-form" class="checkout-form" onsubmit="event.preventDefault(); placeOrder();">
            <div class="form-grid">
                <label>
                    <span>${currentLang === "ar" ? "الاسم" : "Name"}</span>
                    <input id="customer-name" type="text" autocomplete="name" />
                </label>
                <label>
                    <span>${currentLang === "ar" ? "رقم الهاتف" : "Phone"}</span>
                    <input id="customer-phone" type="tel" autocomplete="tel" />
                </label>
                <label>
                    <span>${currentLang === "ar" ? "المحافظة" : "Governorate"}</span>
                    <select id="customer-gov">
                        <option value="">${currentLang === "ar" ? "اختر المحافظة" : "Choose governorate"}</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Giza">Giza</option>
                        <option value="Qalyubia">Qalyubia</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Beheira">Beheira</option>
                        <option value="Dakahlia">Dakahlia</option>
                        <option value="Damietta">Damietta</option>
                        <option value="Gharbia">Gharbia</option>
                        <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                        <option value="Monufia">Monufia</option>
                        <option value="Sharqia">Sharqia</option>
                        <option value="Port Said">Port Said</option>
                        <option value="Ismailia">Ismailia</option>
                        <option value="Suez">Suez</option>
                    </select>
                </label>
                <label class="full-span">
                    <span>${currentLang === "ar" ? "العنوان" : "Address"}</span>
                    <input id="customer-address" type="text" autocomplete="street-address" />
                </label>
            </div>
            <div class="checkout-summary">
                <div class="summary-row"><span>${currentLang === "ar" ? "الإجمالي" : "Subtotal"}</span><strong>${subtotal} EGP</strong></div>
                <div class="summary-row"><span>${text[currentLang].shipping}</span><strong>${shipping} EGP</strong></div>
                <div class="summary-row total-row"><span>${currentLang === "ar" ? "الإجمالي النهائي" : "Grand total"}</span><strong>${total} EGP</strong></div>
            </div>
            <div class="modal-actions">
                <button class="secondary-btn" type="button" onclick="closeModal()">${currentLang === "ar" ? "إغلاق" : "Close"}</button>
                <button class="primary-btn" id="place-order-btn" type="submit">${escapeHtml(text[currentLang].placeOrderCta)}</button>
            </div>
        </form>
    `;

    els.status = document.getElementById("status-message");
    els.modal.classList.add("open");
    document.body.classList.add("modal-open");
}

function closeModal() {
    if (!els.modal) {
        return;
    }

    els.modal.classList.remove("open");
    document.body.classList.remove("modal-open");
    els.modalContent.innerHTML = `
        <h2 data-en="Complete your order" data-ar="أكمل طلبك">Complete your order</h2>
        <p id="status-message"></p>
        <button onclick="placeOrder()" data-en="Place order" data-ar="تأكيد الطلب">Place order</button>
    `;
    els.status = document.getElementById("status-message");
    if (els.status) {
        els.status.classList.add("status-message");
    }
}

async function placeOrder() {
    const name = valueOf("customer-name");
    const phone = valueOf("customer-phone");
    const gov = valueOf("customer-gov");
    const address = valueOf("customer-address");

    if (!name || !phone || !gov || !address || !cart.length) {
        showModal(text[currentLang].validation, true);
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    const shipping = shippingCost || 60;
    const total = subtotal + shipping;

    showModal(text[currentLang].sending, false);
    setCheckoutLoading(true);

    try {
        const response = await fetch("/api/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                phone,
                gov,
                address,
                items: cart,
                shipping,
                total
            })
        });

        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.success) {
            throw new Error(data.message || text[currentLang].orderError);
        }

        cart = [];
        saveCart();
        updateUI();
        showModal(text[currentLang].success, false);
    } catch (error) {
        showModal(error.message || text[currentLang].orderError, true);
    } finally {
        setCheckoutLoading(false);
    }
}

function setCheckoutLoading(isLoading) {
    const button = document.getElementById("place-order-btn");
    if (button) {
        button.disabled = isLoading;
        button.textContent = isLoading ? text[currentLang].sendingCta : text[currentLang].placeOrderCta;
    }
}

function showModal(message, isError) {
    if (!els.modal || !els.modalContent) {
        return;
    }

    if (!els.modal.classList.contains("open")) {
        els.modal.classList.add("open");
        document.body.classList.add("modal-open");
    }

    if (!els.status) {
        els.status = document.getElementById("status-message");
    }

    if (els.status) {
        els.status.textContent = message;
        els.status.classList.toggle("error", Boolean(isError));
        els.status.classList.toggle("success", !isError && message === text[currentLang].success);
    }
}

function refreshCheckoutSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    shippingCost = cart.length ? 60 : 0;

    const totalRow = document.querySelector(".total-row strong");
    const shippingRow = document.querySelector(".checkout-summary .summary-row:nth-child(2) strong");

    if (totalRow) {
        totalRow.textContent = `${subtotal + shippingCost} EGP`;
    }

    if (shippingRow) {
        shippingRow.textContent = `${shippingCost} EGP`;
    }
}

function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-en],[data-ar]").forEach((node) => {
        const next = node.dataset[lang];
        if (typeof next === "string" && next.length) {
            node.textContent = next;
        }
    });

    if (els.langToggle) {
        els.langToggle.textContent = lang === "en" ? "العربية" : "English";
    }

    if (els.themeToggle) {
        els.themeToggle.textContent = document.body.classList.contains("dark-mode") ? "◑" : "○";
    }

    if (els.modal && els.modal.classList.contains("open")) {
        openCheckout();
    }

    render(currentFilter);
    updateUI();
}

function reveal() {
    document.querySelectorAll(".card").forEach((card) => card.classList.add("show"));
}

function queueReveal() {
    if (revealTicking) {
        return;
    }

    revealTicking = true;
    requestAnimationFrame(() => {
        reveal();
        revealTicking = false;
    });
}

function valueOf(id) {
    const node = document.getElementById(id);
    return node ? node.value.trim() : "";
}

function escapeHtml(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

window.startExperience = startExperience;
window.toggleCart = toggleCart;
window.openCheckout = openCheckout;
window.placeOrder = placeOrder;
window.filterProducts = filterProducts;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.closeModal = closeModal;
