
  function showCertificate(index) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const certificateImages = document.querySelectorAll('.certificate-img');
  
    modal.style.display = 'block';
    modalImage.src = certificateImages[index - 1].src;
  }
  
  function hideCertificate() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
// JavaScript to toggle the visibility of navigation links
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});

  