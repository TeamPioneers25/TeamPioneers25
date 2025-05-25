document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Simple fake form submission response
  document.getElementById("form-message").textContent = "Thank you for reaching out! We will get back to you soon.";
  this.reset();
});
