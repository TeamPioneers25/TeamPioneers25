document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Simple fake form submission response
  document.getElementById("form-message").textContent = "Thank you for reaching out! We will get back to you soon.";
  this.reset();
});

// Modal logic for candidate details
document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', function() {
    document.getElementById('modalPhoto').src = this.dataset.photo;
    document.getElementById('modalName').textContent = this.dataset.name;
    document.getElementById('modalVision').textContent = this.dataset.vision;
    document.getElementById('candidateModal').style.display = 'block';
  });
});

document.getElementById('closeModal').onclick = function() {
  document.getElementById('candidateModal').style.display = 'none';
};
window.onclick = function(event) {
  if (event.target == document.getElementById('candidateModal')) {
    document.getElementById('candidateModal').style.display = 'none';
  }
};
