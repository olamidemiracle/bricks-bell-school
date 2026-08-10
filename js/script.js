// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Footer year
document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Contact form (no backend configured yet — guide the visitor to call directly)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = document.getElementById("formNote");
    note.textContent =
      "Thanks! This form isn't connected to email yet — please call 0703 759 2007 so the school office can assist you right away.";
    note.style.color = "#1d4ed8";
    contactForm.reset();
  });
}
