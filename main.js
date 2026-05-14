/* =========================================
   BARBARA COSTA — main.js
   ========================================= */

/* 1. DARK MODE TOGGLE */
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.setAttribute("aria-label", "Alternar tema");

  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

/* 2. SCROLL REVEAL
   Funciona tanto com .reveal quanto com .fade-in usadas via JS
   (as .fade-in com animation CSS não precisam deste script —
    este script ativa apenas elementos com classe .reveal) */
const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach((el) => observer.observe(el));
}
