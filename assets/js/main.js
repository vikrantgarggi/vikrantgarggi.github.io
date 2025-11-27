// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.style.display !== 'none';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
      menuIcon.style.display = isOpen ? 'block' : 'none';
      closeIcon.style.display = isOpen ? 'none' : 'block';
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  }

  // Product Carousels
  const productCarousels = document.querySelectorAll('.product-carousel');
  
  productCarousels.forEach(carousel => {
    const category = carousel.getAttribute('data-category');
    const track = carousel.querySelector('.product-carousel-track');
    const prevBtn = document.querySelector(`.carousel-prev[data-target="${category}"]`);
    const nextBtn = document.querySelector(`.carousel-next[data-target="${category}"]`);
    
    if (track && prevBtn && nextBtn) {
      const scrollAmount = 280; // Width of card + gap
      
      prevBtn.addEventListener('click', function() {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      
      nextBtn.addEventListener('click', function() {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        phone: document.getElementById('contact-phone').value.trim(),
        products: document.getElementById('contact-products')?.value || '',
        message: document.getElementById('contact-message').value.trim()
      };
      
      // Basic validation
      if (!formData.name || !formData.email || !formData.phone || !formData.products || !formData.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Phone validation (basic - at least 10 digits)
      const phoneRegex = /^[0-9]{10,}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        showFormMessage('Please enter a valid phone number.', 'error');
        return;
      }
      
      // Simulate form submission (you can replace this with actual API call)
      // For now, we'll just show a success message
      showFormMessage('Thank you for your inquiry! We will contact you soon.', 'success');
      
      // Reset form
      contactForm.reset();
      
      // Scroll to message
      if (formMessage) {
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      
      // Hide message after 5 seconds
      setTimeout(() => {
        if (formMessage) {
          formMessage.style.display = 'none';
        }
      }, 5000);
    });
  }
  
  function showFormMessage(message, type) {
    if (formMessage) {
      formMessage.textContent = message;
      formMessage.className = `form-message ${type}`;
      formMessage.style.display = 'block';
    }
  }
});
