const root = document.documentElement;
const themeToggle = document.querySelector("#theme-toggle");
const rippleCircle = document.querySelector("#ripple-circle");
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");
const revealElements = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll(".tilt-card");
const magneticElements = document.querySelectorAll(".magnetic");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    themeToggle.checked = savedTheme === "light";
}

const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!isReducedMotion && cursor && cursorFollower) {
    const cursorState = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        followerX: window.innerWidth / 2,
        followerY: window.innerHeight / 2
    };

    const renderCursor = () => {
        cursorState.followerX += (cursorState.x - cursorState.followerX) * 0.14;
        cursorState.followerY += (cursorState.y - cursorState.followerY) * 0.14;

        cursor.style.left = `${cursorState.x}px`;
        cursor.style.top = `${cursorState.y}px`;
        cursorFollower.style.left = `${cursorState.followerX}px`;
        cursorFollower.style.top = `${cursorState.followerY}px`;

        window.requestAnimationFrame(renderCursor);
    };

    window.addEventListener("mousemove", (event) => {
        cursorState.x = event.clientX;
        cursorState.y = event.clientY;
    });

    document.querySelectorAll("a, button, input, textarea, .tilt-card").forEach((element) => {
        element.addEventListener("mouseenter", () => document.body.classList.add("cursor-active"));
        element.addEventListener("mouseleave", () => document.body.classList.remove("cursor-active"));
    });

    renderCursor();
}

function triggerRipple(target) {
    if (!rippleCircle || isReducedMotion) {
        return;
    }

    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    rippleCircle.style.left = `${centerX}px`;
    rippleCircle.style.top = `${centerY}px`;
    rippleCircle.classList.remove("active");

    window.requestAnimationFrame(() => {
        rippleCircle.classList.add("active");
    });

    window.setTimeout(() => {
        rippleCircle.classList.remove("active");
    }, 950);
}

themeToggle?.addEventListener("change", (event) => {
    const useLightTheme = event.target.checked;

    triggerRipple(event.target);

    window.setTimeout(() => {
        const theme = useLightTheme ? "light" : "dark";
        root.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, isReducedMotion ? 0 : 180);
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
});

revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 80, 240)}ms`;
    revealObserver.observe(element);
});
if (!isReducedMotion) {
    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const bounds = card.getBoundingClientRect();
            const offsetX = event.clientX - bounds.left;
            const offsetY = event.clientY - bounds.top;
            const rotateY = ((offsetX / bounds.width) - 0.5) * 10;
            const rotateX = ((offsetY / bounds.height) - 0.5) * -10;

            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    magneticElements.forEach((element) => {
        element.addEventListener("mousemove", (event) => {
            const bounds = element.getBoundingClientRect();
            const moveX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
            const moveY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        element.addEventListener("mouseleave", () => {
            element.style.transform = "";
        });
    });
}

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = event.currentTarget.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Message Sent";
    button.disabled = true;

    window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        event.currentTarget.reset();
    }, 1800);
});