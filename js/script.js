window.history.scrollRestoration = "manual";
window.onload = function () {
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
function initTestimonialSwiper() {
  if (window.testimonialSwiper) {
    window.testimonialSwiper.destroy(true, true);
  }

  window.testimonialSwiper = new Swiper(".testimonial-slider", {
    loop: true,
    autoplay: { delay: 2000, disableOnInteraction: false },
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    },
    observer: true,
    observeParents: true,
  });
}


    function initSwiper(direction) {
        if (window.swipers && window.swipers.length) {
            window.swipers.forEach(sw => sw.destroy(true, true));
        }
        window.swipers = [];
        document.querySelectorAll(".myCardSwiper").forEach(swiperEl => {
            let swiper = new Swiper(swiperEl, {
                effect: "cards",
                grabCursor: true,
               
                cardsEffect: {
                    perSlideRotate: 2,
                    perSlideOffset: 8
                },
                rtl: direction === "rtl",
            });
            window.swipers.push(swiper);
        });
    }

   function applyLanguage(lang) {
    
   document.querySelectorAll("[data-ar]").forEach(node => {
    const val = node.getAttribute(`data-${lang}`);

    if (node.tagName === "INPUT" || node.tagName === "TEXTAREA") {
        if (val) node.placeholder = val;
    } else if (node.tagName === "SELECT") {
        if (val) node.setAttribute("aria-label", val);
        node.querySelectorAll("option").forEach(option => {
            const optVal = option.getAttribute(`data-${lang}`);
            if (optVal) option.textContent = optVal;
        });
    } else if (node.tagName === "OPTION") {
        if (val) node.textContent = val;
    } else {
        if (val) {
            const icon = node.querySelector("i");
            if (icon) node.innerHTML = `${icon.outerHTML} ${val}`;
            else node.textContent = val;
        }
    }

    if (val) node.setAttribute("title", val);
      setTimeout(() => {
    initTestimonialSwiper();
  }, 0);
});


    if (langBtn) {
        const nextLang = lang === "en" ? "ar" : "en";
        langBtn.innerHTML = `<i class="fas fa-language"></i> ${nextLang.toUpperCase()}`;
    }

    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
}


    applyLanguage(currentLang);

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        applyLanguage(currentLang);
    });

   
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

 
    window.calculatePrice = function () {
        let serviceType = document.getElementById("serviceType").value;
        let area = parseFloat(document.getElementById("area").value);
        let visits = document.getElementById("visits").value;
        let priceDisplay = document.getElementById("priceDisplay");

        if (!serviceType || !area || !visits) {
            priceDisplay.innerHTML = "اختر الخيارات لحساب السعر";
            return;
        }
        let pricePerSqm;
        switch (serviceType) {
            case "regular":
                pricePerSqm = 10;
                break;
            case "deep":
                pricePerSqm = 15;
                break;
            case "specialized":
                pricePerSqm = 20;
                break;
            default:
                pricePerSqm = 0;
        }

        let visitMultiplier;
        switch (visits) {
            case "once":
                visitMultiplier = 1;
                break;
            case "weekly":
                visitMultiplier = 4;
                break;
            case "monthly":
                visitMultiplier = 12;
                break;
            default:
                visitMultiplier = 1;
        }

        let totalPrice = pricePerSqm * area * visitMultiplier;
        priceDisplay.innerHTML = totalPrice.toLocaleString() + " جنيه سوداني";
    };

 
    AOS.init({
        duration: 1000,
        once: false
    });

});
