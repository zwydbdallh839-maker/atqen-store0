const products = [
    {
        id: 1,
        nameEn: "Essential Black Tee",
        nameAr: "تيشيرت أسود أساسي",
        category: "T-shirts",
        price: 550,
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80",
        descEn: "Clean silhouette with a premium heavy-cotton feel.",
        descAr: "تصميم نظيف بقصة بسيطة مع قطن ثقيل يعطي إحساسًا فاخرًا."
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
        nameAr: "تيشيرت فينتاج أسيد",
        category: "T-shirts",
        price: 650,
        img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
        descEn: "Washed finish for a more textured streetwear look.",
        descAr: "تشطيب مغسول يمنح شكل ستريت وير أكثر خشونة وتميزًا."
    },
    {
        id: 5,
        nameEn: "Street Graphic Tee",
        nameAr: "تيشيرت جرافيك ستريت",
        category: "T-shirts",
        price: 650,
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=80",
        descEn: "More expressive front presence without over-design.",
        descAr: "تصميم جرافيك بسيط يعطي حضورًا قويًا بدون مبالغة."
    },
    {
        id: 6,
        nameEn: "Minimal Box Tee",
        nameAr: "تيشيرت مينيمل بوكس",
        category: "T-shirts",
        price: 500,
        img: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=80",
        descEn: "Simple branding and relaxed fit for easy daily wear.",
        descAr: "تصميم بسيط وقصة مريحة للاستخدام اليومي."
    },
    {
        id: 7,
        nameEn: "Midnight Oversize Tee",
        nameAr: "تيشيرت أوفرسايز ميدنايت",
        category: "T-shirts",
        price: 700,
        img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=900&q=80",
        descEn: "Oversized cut for a bolder and more current look.",
        descAr: "قصة أوفرسايز تعطي شكلًا عصريًا وأكثر جرأة."
    },
    {
        id: 8,
        nameEn: "Shadow Tee",
        nameAr: "تيشيرت شادو",
        category: "T-shirts",
        price: 580,
        img: "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=900&q=80",
        descEn: "Balanced silhouette with understated premium energy.",
        descAr: "توازن ممتاز بين البساطة والشكل الفاخر."
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
        descAr: "قطعة هادئة بألوان ناعمة تناسب الستايل الطبقي."
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
        descAr: "هودي بألوان ترابية يعطي إحساسًا دافئًا وفخمًا."
    },
    {
        id: 14,
        nameEn: "Urban Zip Hoodie",
        nameAr: "هودي أوربن زيب",
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
        descAr: "هودي أسود قوي يعطي مظهرًا واثقًا وواضحًا."
    },
    {
        id: 16,
        nameEn: "Iconic White Hoodie",
        nameAr: "هودي أيكونيك وايت",
        category: "Hoodies",
        price: 950,
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
        descEn: "Bright minimal option with polished neutral styling.",
        descAr: "اختيار أبيض بسيط وأنيق بإطلالة نظيفة."
    }
];

const whatsappNumber = "201006629472";
const shippingRules = {
    cairo: ["Cairo", "Giza", "Qalyubia"],
    delta: ["Alexandria", "Beheira", "Dakahlia", "Damietta", "Gharbia", "Kafr El Sheikh", "Monufia", "Sharqia", "Port Said", "Ismailia", "Suez"]
};

const text = {
    en: {
        add: "Add to bag",
        remove: "Remove",
        empty: "Your bag is empty. Add a couple of pieces and the checkout will appear here.",
        shipping: "Shipping",
        shippingHint: "Shipping calculated from your governorate.",
        checkoutTitle: "Complete your order",
        checkoutHint: "Fill in your details and send the order on WhatsApp.",
        subtotal: "Subtotal",
        total: "Grand total",
        placeOrder: "Send on WhatsApp",
        sending: "Opening WhatsApp...",
        validation: "Please complete your name, phone, governorate, and address first.",
        orderReady: "Your order is ready on WhatsApp.",
        cartTitle: "Shopping bag",
        selected: "Your selection",
        continueShopping: "Continue shopping",
        close: "Close",
        name: "Full name",
        phone: "Phone number",
        gov: "Governorate",
        address: "Address details"
    },
    ar: {
        add: "أضف للسلة",
        remove: "حذف",
        empty: "السلة فارغة حاليًا. أضف بعض القطع وسيظهر ملخص الطلب هنا.",
        shipping: "الشحن",
        shippingHint: "يتم حساب الشحن حسب المحافظة.",
        checkoutTitle: "أكمل طلبك",
        checkoutHint: "املأ بياناتك وسيتم فتح واتساب بالطلب جاهزًا.",
        subtotal: "الإجمالي",
        total: "الإجمالي النهائي",
        placeOrder: "إرسال على واتساب",
        sending: "جارٍ فتح واتساب...",
        validation: "من فضلك أكمل الاسم ورقم الهاتف والمحافظة والعنوان أولًا.",
        orderReady: "الطلب جاهز على واتساب.",
        cartTitle: "سلة التسوق",
        selected: "اختياراتك",
        continueShopping: "متابعة التسوق",
        close: "إغلاق",
        name: "الاسم بالكامل",
        phone: "رقم الهاتف",
        gov: "المحافظة",
        address: "تفاصيل العنوان"
    }
};

const state = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    lang: localStorage.getItem("lang") || "en",
    filter: "all",
    shipping: 0
};

const els = {};
let cardObserver = null;
let revealQueued = false;

document.addEventListener("DOMContentLoaded", () => {
    cacheElements();
    setupObserver();
    bindEvents();
    applyThemeFromStorage();
    applyLanguage(state.lang);
    renderProducts();
    updateCart();
    updateShipping();

    observeCards();
});

function cacheElements() {
    els.intro = document.getElementById("intro-screen");
    els.grid = document.getElementById("product-grid");
    els.cartSide = document.getElementById("cart-side");
    els.cartItems = document.getElementById("cart-items");
    els.overlay = document.getElementById("overlay");
    els.modal = document.getElementById("modal");
    els.langToggle = document.getElementById("lang-toggle");
    els.themeToggle = document.getElementById("theme-toggle");
    els.bagCount = document.getElementById("bag-count");
    els.subtotal = document.getElementById("subtotal");
}

function setupObserver() {
    if ("IntersectionObserver" in window) {
        cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });
    }
}

function bindEvents() {
    if (els.langToggle) {
        els.langToggle.addEventListener("click", () => {
            state.lang = state.lang === "en" ? "ar" : "en";
            localStorage.setItem("lang", state.lang);
            applyLanguage(state.lang);
            renderProducts();
            updateCart();
        });
    }

    if (els.themeToggle) {
        els.themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") {
            return;
        }

        if (els.modal && els.modal.classList.contains("open")) {
            closeModal();
        } else if (els.cartSide && els.cartSide.classList.contains("active")) {
            toggleCart(false);
        }
    });
}

function applyThemeFromStorage() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    if (els.langToggle) {
        els.langToggle.textContent = lang === "en" ? "العربية" : "English";
    }

    if (els.themeToggle) {
        els.themeToggle.textContent = document.body.classList.contains("dark-mode") ? "◑" : "◐";
    }

    document.querySelectorAll("[data-en]").forEach((node) => {
        const value = node.dataset[lang];
        if (typeof value === "string" && value.length > 0) {
            node.textContent = value;
        }
    });
}

function startExperience() {
    hideIntro(false);
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function hideIntro(forceSeen = false) {
    if (!els.intro) {
        return;
    }

    els.intro.classList.add("hidden");
    els.intro.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
        els.intro.style.display = "none";
    }, 750);
}

function renderProducts() {
    if (!els.grid) {
        return;
    }

    const items = state.filter === "all"
        ? products
        : products.filter((product) => product.category === state.filter);

    const fragment = document.createDocumentFragment();

    items.forEach((product, index) => {
        const card = document.createElement("article");
        card.className = "card";
        card.style.transitionDelay = `${Math.min(index * 40, 200)}ms`;

        const imageWrap = document.createElement("div");
        imageWrap.className = "card-image";

        const img = document.createElement("img");
        img.src = product.img;
        img.alt = currentProductName(product);
        img.loading = "lazy";
        imageWrap.appendChild(img);

        const body = document.createElement("div");
        body.className = "card-body";

        const top = document.createElement("div");
        top.className = "product-topline";

        const category = document.createElement("span");
        category.className = "product-category";
        category.textContent = product.category;

        const title = document.createElement("h3");
        title.className = "product-name";
        title.textContent = currentProductName(product);

        const desc = document.createElement("p");
        desc.className = "product-copy";
        desc.textContent = currentProductDescription(product);

        const bottom = document.createElement("div");
        bottom.className = "product-bottom";

        const price = document.createElement("strong");
        price.className = "price";
        price.textContent = `${product.price} EGP`;

        const addBtn = document.createElement("button");
        addBtn.className = "add-btn";
        addBtn.type = "button";
        addBtn.textContent = text[state.lang].add;
        addBtn.addEventListener("click", () => addToCart(product.id));

        top.appendChild(category);
        bottom.appendChild(price);
        bottom.appendChild(addBtn);
        body.appendChild(top);
        body.appendChild(title);
        body.appendChild(desc);
        body.appendChild(bottom);
        card.appendChild(imageWrap);
        card.appendChild(body);
        fragment.appendChild(card);
    });

    els.grid.replaceChildren(fragment);
    observeCards();
}

function observeCards() {
    if (!els.grid) {
        return;
    }

    const cards = els.grid.querySelectorAll(".card");
    cards.forEach((card) => {
        if (cardObserver) {
            cardObserver.observe(card);
        } else {
            card.classList.add("show");
        }
    });
}

function queueReveal() {
    if (revealQueued) {
        return;
    }

    revealQueued = true;
    requestAnimationFrame(() => {
        revealQueued = false;
    });
}

function currentProductName(product) {
    return state.lang === "ar" ? product.nameAr : product.nameEn;
}

function currentProductDescription(product) {
    return state.lang === "ar" ? product.descAr : product.descEn;
}

function filterProducts(category, event) {
    state.filter = category;

    document.querySelectorAll(".f-btn").forEach((button) => {
        button.classList.toggle("active", button === event?.currentTarget);
    });

    renderProducts();
}

function addToCart(id) {
    const product = products.find((item) => item.id === id);
    if (!product) {
        return;
    }

    const existing = state.cart.find((item) => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ ...product, qty: 1 });
    }

    saveCart();
    updateCart();
}

function removeFromCart(id) {
    state.cart = state.cart.filter((item) => item.id !== id);
    saveCart();
    updateCart();
}

function changeQty(id, delta) {
    const item = state.cart.find((entry) => entry.id === id);
    if (!item) {
        return;
    }

    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(state.cart));
}

function updateCart() {
    const subtotal = state.cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);

    if (els.bagCount) {
        els.bagCount.textContent = `(${totalQty})`;
    }

    if (els.subtotal) {
        els.subtotal.textContent = subtotal.toFixed(0);
    }

    if (!els.cartItems) {
        return;
    }

    if (!state.cart.length) {
        els.cartItems.innerHTML = `<p class="empty-state">${text[state.lang].empty}</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();
    state.cart.forEach((item) => {
        const row = document.createElement("div");
        row.className = "cart-item-premium";

        const img = document.createElement("img");
        img.className = "cart-item-img";
        img.src = item.img;
        img.alt = currentCartName(item);

        const meta = document.createElement("div");
        meta.className = "cart-item-meta";

        const name = document.createElement("h4");
        name.textContent = currentCartName(item);

        const price = document.createElement("p");
        price.textContent = `${item.price} EGP`;

        const controls = document.createElement("div");
        controls.className = "qty-controls";

        const minus = document.createElement("button");
        minus.className = "qty-btn";
        minus.type = "button";
        minus.textContent = "-";
        minus.addEventListener("click", () => changeQty(item.id, -1));

        const qty = document.createElement("span");
        qty.textContent = item.qty;

        const plus = document.createElement("button");
        plus.className = "qty-btn";
        plus.type = "button";
        plus.textContent = "+";
        plus.addEventListener("click", () => changeQty(item.id, 1));

        const remove = document.createElement("button");
        remove.className = "button-link";
        remove.type = "button";
        remove.textContent = text[state.lang].remove;
        remove.addEventListener("click", () => removeFromCart(item.id));

        controls.appendChild(minus);
        controls.appendChild(qty);
        controls.appendChild(plus);
        meta.appendChild(name);
        meta.appendChild(price);
        meta.appendChild(controls);
        meta.appendChild(remove);
        row.appendChild(img);
        row.appendChild(meta);
        fragment.appendChild(row);
    });

    els.cartItems.replaceChildren(fragment);
}

function currentCartName(item) {
    return state.lang === "ar" ? item.nameAr : item.nameEn;
}

function toggleCart(open) {
    if (!els.cartSide || !els.overlay) {
        return;
    }

    els.cartSide.classList.toggle("active", open);
    els.overlay.classList.toggle("active", open);
    document.body.classList.toggle("cart-open", open);
}

function updateShipping() {
    const gov = document.getElementById("checkout-gov")?.value || "";
    if (!gov) {
        state.shipping = state.cart.length ? 60 : 0;
        return;
    }

    if (shippingRules.cairo.includes(gov)) {
        state.shipping = 50;
    } else if (shippingRules.delta.includes(gov)) {
        state.shipping = 70;
    } else {
        state.shipping = 100;
    }
}

function openCheckout() {
    if (!state.cart.length) {
        showCheckoutMessage(text[state.lang].validation, true);
        return;
    }

    toggleCart(false);
    injectCheckoutForm();
    updateShipping();
    syncCheckoutSummary();
    els.modal?.classList.add("open");
    document.body.classList.add("modal-open");
}

function injectCheckoutForm() {
    if (!els.modal) {
        return;
    }

    const subtotal = state.cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    const shipping = state.shipping || 60;

    els.modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-head">
                <div>
                    <p class="mini-label">${text[state.lang].selected}</p>
                    <h2>${text[state.lang].checkoutTitle}</h2>
                </div>
                <button class="close-btn" type="button" onclick="closeModal()">×</button>
            </div>
            <p id="status-message" class="status-message">${text[state.lang].checkoutHint}</p>
            <form id="checkout-form" class="checkout-form" onsubmit="event.preventDefault(); placeOrder();">
                <div class="form-grid">
                    <label>
                        <span>${text[state.lang].name}</span>
                        <input id="checkout-name" type="text" autocomplete="name" />
                    </label>
                    <label>
                        <span>${text[state.lang].phone}</span>
                        <input id="checkout-phone" type="tel" autocomplete="tel" />
                    </label>
                    <label>
                        <span>${text[state.lang].gov}</span>
                        <select id="checkout-gov" onchange="updateShipping(); syncCheckoutSummary();">
                            <option value="">${state.lang === "ar" ? "اختر المحافظة" : "Choose governorate"}</option>
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
                        <span>${text[state.lang].address}</span>
                        <input id="checkout-address" type="text" autocomplete="street-address" />
                    </label>
                </div>
                <div class="checkout-summary">
                    <div class="summary-row">
                        <span>${text[state.lang].subtotal}</span>
                        <strong><span id="checkout-subtotal">${subtotal.toFixed(0)}</span> EGP</strong>
                    </div>
                    <div class="summary-row">
                        <span>${text[state.lang].shipping}</span>
                        <strong><span id="checkout-shipping">${shipping.toFixed(0)}</span> EGP</strong>
                    </div>
                    <div class="summary-row total-row">
                        <span>${text[state.lang].total}</span>
                        <strong><span id="checkout-total">${(subtotal + shipping).toFixed(0)}</span> EGP</strong>
                    </div>
                </div>
                <p class="status-message" id="checkout-message"></p>
                <div class="modal-actions">
                    <button class="secondary-btn" type="button" onclick="closeModal()">${text[state.lang].close}</button>
                    <button id="place-order-btn" class="primary-btn" type="submit">${text[state.lang].placeOrder}</button>
                </div>
            </form>
        </div>
    `;
}

function closeModal() {
    els.modal?.classList.remove("open");
    document.body.classList.remove("modal-open");
}

function syncCheckoutSummary() {
    const subtotal = state.cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    updateShipping();

    const shippingNode = document.getElementById("checkout-shipping");
    const subtotalNode = document.getElementById("checkout-subtotal");
    const totalNode = document.getElementById("checkout-total");

    if (subtotalNode) {
        subtotalNode.textContent = subtotal.toFixed(0);
    }

    if (shippingNode) {
        shippingNode.textContent = state.shipping.toFixed(0);
    }

    if (totalNode) {
        totalNode.textContent = (subtotal + state.shipping).toFixed(0);
    }
}

function showCheckoutMessage(message, isError) {
    const node = document.getElementById("checkout-message");
    if (!node) {
        return;
    }

    node.textContent = message;
    node.classList.toggle("error", Boolean(isError));
    node.classList.toggle("success", !isError && message === text[state.lang].orderReady);
}

function setCheckoutLoading(isLoading) {
    const btn = document.getElementById("place-order-btn");
    if (btn) {
        btn.disabled = isLoading;
        btn.textContent = isLoading ? text[state.lang].sending : text[state.lang].placeOrder;
    }
}

function buildWhatsAppMessage() {
    const subtotal = state.cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
    const total = subtotal + state.shipping;
    const items = state.cart
        .map((item) => `- ${currentCartName(item)} x${item.qty} = ${item.price * item.qty} EGP`)
        .join("\n");

    const name = valueOf("checkout-name");
    const phone = valueOf("checkout-phone");
    const gov = valueOf("checkout-gov");
    const address = valueOf("checkout-address");

    const heading = state.lang === "ar" ? "طلب جديد من ATQEN STORE" : "New order from ATQEN STORE";
    const labels = state.lang === "ar"
        ? {
            name: "الاسم",
            phone: "الهاتف",
            gov: "المحافظة",
            address: "العنوان",
            subtotal: "الإجمالي",
            shipping: "الشحن",
            total: "الإجمالي النهائي",
            items: "المنتجات"
        }
        : {
            name: "Name",
            phone: "Phone",
            gov: "Governorate",
            address: "Address",
            subtotal: "Subtotal",
            shipping: "Shipping",
            total: "Grand total",
            items: "Items"
        };

    return [
        heading,
        "",
        `${labels.name}: ${name}`,
        `${labels.phone}: ${phone}`,
        `${labels.gov}: ${gov}`,
        `${labels.address}: ${address}`,
        "",
        `${labels.items}:`,
        items,
        "",
        `${labels.subtotal}: ${subtotal} EGP`,
        `${labels.shipping}: ${state.shipping} EGP`,
        `${labels.total}: ${total} EGP`
    ].join("\n");
}

function openWhatsAppOrder() {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

function placeOrder() {
    const name = valueOf("checkout-name");
    const phone = valueOf("checkout-phone");
    const gov = valueOf("checkout-gov");
    const address = valueOf("checkout-address");

    if (!name || !phone || !gov || !address || !state.cart.length) {
        showCheckoutMessage(text[state.lang].validation, true);
        return;
    }

    showCheckoutMessage(text[state.lang].sending, false);
    setCheckoutLoading(true);

    try {
        const message = buildWhatsAppMessage();
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        const popup = window.open(url, "_blank", "noopener,noreferrer");

        if (!popup) {
            window.location.href = url;
        }

        showCheckoutMessage(text[state.lang].orderReady, false);
        state.cart = [];
        saveCart();
        updateCart();

        window.setTimeout(() => {
            closeModal();
        }, 900);
    } catch (error) {
        showCheckoutMessage(text[state.lang].validation, true);
    } finally {
        setCheckoutLoading(false);
    }
}

function valueOf(id) {
    const node = document.getElementById(id);
    return node ? node.value.trim() : "";
}

window.startExperience = startExperience;
window.filterProducts = filterProducts;
window.toggleCart = toggleCart;
window.openCheckout = openCheckout;
window.closeModal = closeModal;
window.placeOrder = placeOrder;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.updateShipping = updateShipping;
window.syncCheckoutSummary = syncCheckoutSummary;
