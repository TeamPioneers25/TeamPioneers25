// Modal logic for candidate details
document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', function() {
    document.getElementById('modalPhoto').src = this.dataset.photo;
    document.getElementById('modalName').textContent = this.dataset.name;
    document.getElementById('modalVision').textContent = this.dataset.vision;
    document.getElementById('candidateModal').style.display = 'block';
  });
});


window.onclick = function(event) {
  if (event.target == document.getElementById('candidateModal')) {
    document.getElementById('candidateModal').style.display = 'none';
  }
};
