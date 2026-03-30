document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});


// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer"
];

let index = 0;
const roleText = document.getElementById("role-text");

function changeRole() {
  index = (index + 1) % roles.length;

  roleText.style.opacity = 0;

  setTimeout(() => {
    roleText.textContent = roles[index];
    roleText.style.opacity = 1;
  }, 300);
}

setInterval(changeRole, 2000);
