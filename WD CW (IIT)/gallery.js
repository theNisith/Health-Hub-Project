document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');// The modal container
  const modalImg = document.getElementById('modal-img'); // The image inside the modal
  const captionText = document.getElementById('caption'); // The caption text
  

  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
      img.addEventListener('click', function() { // When the close button is clicked, hide the modal
          modal.style.display = 'block';
          modalImg.src = this.getAttribute('data-full');
          captionText.innerHTML = this.getAttribute('data-caption');
      });
  });

  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function() {
    // When the close button is clicked, hide the modal
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  });
});