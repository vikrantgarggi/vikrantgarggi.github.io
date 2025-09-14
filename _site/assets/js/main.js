// Main JavaScript for PET Bottles Business Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initSmoothScrolling();
    initMobileMenu();
    initImagePopup();
    initScrollAnimations();
    initWhatsAppIntegration();
    initContactForm();
    
    // Category Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const categorySections = document.querySelectorAll('.category-section');
    
    tabButtons.forEach((button) => {
        button.onclick = function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Remove active from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked tab
            this.classList.add('active');
            
            // Hide all sections
            categorySections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show target section
            const targetSection = document.getElementById(targetCategory);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        };
    });
    
    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileMenuToggle && mobileMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                this.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                });
            });
        }
    }
    
    
    // Image popup functionality
    function initImagePopup() {
        const productImages = document.querySelectorAll('.product-image img');
        const popup = document.getElementById('imagePopup');
        const popupImage = document.getElementById('popupImage');
        const popupClose = document.querySelector('.image-popup-close');
        
        if (productImages.length > 0 && popup && popupImage) {
            productImages.forEach(img => {
                img.addEventListener('click', function() {
                    popupImage.src = this.src;
                    popupImage.alt = this.alt;
                    popup.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Close popup functionality
            if (popupClose) {
                popupClose.addEventListener('click', function() {
                    popup.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            }
            
            // Close popup when clicking outside
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    popup.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
            
            // Close popup with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && popup.classList.contains('active')) {
                    popup.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    }
    
    // Scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animateElements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
        animateElements.forEach(el => observer.observe(el));
    }
    
    // WhatsApp integration
    function initWhatsAppIntegration() {
        const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
        
        whatsappButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Let the default link behavior handle WhatsApp opening
                // This function can be extended for analytics or other tracking
            });
        });
    }
    
    // Contact form functionality
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        // Debug: Check if siteConfig is available
        console.log('siteConfig available:', window.siteConfig);
        console.log('API URL from config:', window.siteConfig?.apiContactUrl);
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                submitForm();
            });
        }
    }
    
    function submitForm() {
        const form = document.getElementById('contactForm');
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Add timestamp
        data.timestamp = new Date().toISOString();
        
        // Debug logging
        console.log('JSON data being sent:', data);
        console.log('API URL:', window.siteConfig.apiContactUrl);
        
        // Simple fetch request
        fetch(window.siteConfig.apiContactUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            console.log('Success response:', result);
            
            // Reset form
            form.reset();
            
            // Show success message
            showSuccessMessage('Form submitted successfully! We will get back to you soon.');
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            console.error('Error details:', {
                name: error.name,
                message: error.message,
                stack: error.stack
            });
            
            // Handle different types of errors
            let errorMessage = 'Failed to submit form. Please try again or contact us directly.';
            
            if (error.message) {
                errorMessage = `Error: ${error.message}`;
            }
            
            // Show error message
            showErrorMessage(errorMessage);
            
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    }
    
    function showSuccessMessage(message = 'Form submitted successfully! We will get back to you soon.') {
        // Remove any existing messages
        removeExistingMessages();
        
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'form-message success-message';
        successMessage.innerHTML = `
            <div style="
                background-color: #d4edda;
                color: #155724;
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid #c3e6cb;
                margin-top: 1rem;
                text-align: center;
            ">
                <strong>✅ ${message}</strong>
            </div>
        `;
        
        // Insert after form
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(successMessage, form.nextSibling);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    function showErrorMessage(message) {
        // Remove any existing messages
        removeExistingMessages();
        
        // Create error message element
        const errorMessage = document.createElement('div');
        errorMessage.className = 'form-message error-message';
        errorMessage.innerHTML = `
            <div style="
                background-color: #f8d7da;
                color: #721c24;
                padding: 1rem;
                border-radius: 0.5rem;
                border: 1px solid #f5c6cb;
                margin-top: 1rem;
                text-align: center;
            ">
                <strong>❌ ${message}</strong>
            </div>
        `;
        
        // Insert after form
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(errorMessage, form.nextSibling);
        
        // Remove message after 7 seconds (longer for errors)
        setTimeout(() => {
            errorMessage.remove();
        }, 7000);
    }
    
    function removeExistingMessages() {
        const existingMessages = document.querySelectorAll('.form-message');
        existingMessages.forEach(message => message.remove());
    }
    
});