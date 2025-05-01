// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic Back-to-Top Button
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Lazy Loading Images
document.querySelectorAll("img").forEach(img => {
  img.loading = "lazy";
});

// Project Filtering
const projectFilter = document.getElementById("project-filter");
const projectCards = document.querySelectorAll(".project-card");
projectFilter.addEventListener("input", e => {
  const searchTerm = e.target.value.toLowerCase();
  projectCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? "block" : "none";
  });
});

// Section Animations on Scroll
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
