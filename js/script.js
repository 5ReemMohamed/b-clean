 window.history.scrollRestoration = "manual"; 
    window.onload = function() {
        window.scrollTo(0, 0);
    };
    
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-collapse');
        if (navbarToggler.classList.contains('show')) {
            new bootstrap.Collapse(navbarToggler).hide();
        }
    });
});

    
    let currentLang = "ar"; 
    const langBtn = document.getElementById("langBtn");

    applyLanguage(currentLang);

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        const elements = document.querySelectorAll("[data-en]");

        elements.forEach(el => {
            const val = el.getAttribute(`data-${lang}`);
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = val;
            } else {
              
                const icon = el.querySelector("i");
                if (icon) {
                    el.innerHTML = `${icon.outerHTML} ${val}`;
                } else {
                    el.textContent = val;
                }
            }
        });

       
        const nextLang = lang === "ar" ? "en" : "ar";
        const btnIcon = `<i class="fas fa-language"></i>`;
        langBtn.innerHTML = `${btnIcon} ${nextLang.toUpperCase()}`;

    
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
    }
   
    const bubblesContainer = document.querySelector(".bubbles-container");
    if (bubblesContainer) {
        const bubbleCount = 15;
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement("div");
            bubble.classList.add("bubble");

            const size = Math.random() * 60 + 20; 
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            bubble.style.left = `${Math.random() * 100}%`;

            const duration = Math.random() * 10 + 10; 
            bubble.style.animation = `floatUp ${duration}s linear infinite`;

            const delay = Math.random() * 5;
            bubble.style.animationDelay = `${delay}s`;

            bubblesContainer.appendChild(bubble);
        }
    }
});
 AOS.init({
        duration: 1000,
        once: false     
    });