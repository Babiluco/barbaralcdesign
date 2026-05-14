/* =========================================
   BARBARA COSTA — main.js
   ========================================= */

/* =========================================
   DARK MODE
   ========================================= */

const toggle = document.getElementById("theme-toggle");
const label = document.getElementById("theme-label");

function updateThemeLabel() {

  const isDark =
    document.documentElement.getAttribute("data-theme") === "dark";

  if (label) {
    label.textContent = isDark ? "Light" : "Dark";
  }

}

if (localStorage.getItem("theme") === "dark") {

  document.documentElement.setAttribute("data-theme", "dark");

}

updateThemeLabel();

if (toggle) {

  toggle.addEventListener("click", () => {

    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {

      document.documentElement.removeAttribute("data-theme");

      localStorage.setItem("theme", "light");

    } else {

      document.documentElement.setAttribute("data-theme", "dark");

      localStorage.setItem("theme", "dark");

    }

    updateThemeLabel();

  });

}

/* =========================================
   SCROLL REVEAL
   ========================================= */

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
