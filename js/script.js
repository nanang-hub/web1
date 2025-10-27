// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === MENU HAMBURGER ===
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
  });
}

// FAQ accordion toggle
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("active");

    // Tutup yang lain
    faqItems.forEach((other) => {
      if (other !== item) other.classList.remove("active");
    });
  });
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .zoom-in"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // agar tidak berulang
        }
      });
    },
    { threshold: 0.2 } // muncul saat 20% elemen terlihat
  );

  elements.forEach((el) => observer.observe(el));
});

