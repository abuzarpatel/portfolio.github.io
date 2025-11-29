// Simple interactivity

// Hire Me Button
document.getElementById("hireBtn").addEventListener("click", () => {
  alert("Thank you for your interest! Please contact me below 👇");
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
  e.target.reset();
});