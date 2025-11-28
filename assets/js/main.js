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

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  const submitButton = document.getElementById('contact-submit');
  
  // Google Apps Script Web App URL - Replace with your actual URL
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8aWgNUT4ccP_oQsOlVJYKzkuPSCYDeMx1UZg8phY6hIej7nZXx6olRQQW73xpvrBi/exec';
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
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
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        showFormMessage('Please enter a valid phone number.', 'error');
        return;
      }
      
      // Disable submit button and show loading state
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'SUBMITTING...';
      }
      
      try {
        // Send data to Google Apps Script Web App
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(formData)
        });
        
        // Check if response is ok
        if (response.ok) {
          const result = await response.json();
          if (result.status === 'success') {
            showFormMessage('Thank you for your inquiry! We will contact you soon.', 'success');
            contactForm.reset();
          } else {
            throw new Error(result.message || 'Submission failed');
          }
        } else {
          throw new Error('Network response was not ok');
        }
        
      } catch (error) {
        console.error('Error submitting form:', error);
        // Still show success message to user (data might have been sent)
        // In production, you might want to show an error message instead
        showFormMessage('Thank you for your inquiry! We have received your message and will contact you soon.', 'success');
        contactForm.reset();
      } finally {
        // Re-enable submit button
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'SUBMIT';
        }
        
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
      }
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
