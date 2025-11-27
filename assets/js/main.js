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

  // Product category tabs
  const tabButtons = document.querySelectorAll('.tab-button');
  const productGrid = document.getElementById('product-grid');
  const categoryName = document.getElementById('category-name');
  const categoryDescription = document.getElementById('category-description');

  if (tabButtons.length && productGrid && window.productsData) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const categoryKey = this.getAttribute('data-category');
        const categoryData = window.productsData[categoryKey];

        if (categoryData) {
          // Update active tab
          tabButtons.forEach(btn => btn.classList.remove('tab-active'));
          this.classList.add('tab-active');

          // Update category info
          categoryName.textContent = categoryData.name;
          categoryDescription.textContent = categoryData.description;

          // Update product grid
          productGrid.innerHTML = categoryData.products.map(product => {
            const featuresHtml = product.features && product.features.length > 0
              ? `<ul class="product-features">
                  ${product.features.map(feature => `
                    <li class="product-feature">
                      <svg class="product-feature-icon"><use href="#icon-chevron-right"></use></svg>
                      <span>${feature}</span>
                    </li>
                  `).join('')}
                </ul>`
              : '';

            return `
              <div class="product-card">
                <div class="product-media">
                  <img src="${product.image || '/assets/images/default-product.png'}" 
                       alt="${product.name}" 
                       class="product-image" 
                       style="width: 100%; height: 100%; object-fit: contain;">
                </div>
                <h3>${product.name}</h3>
                ${product.capacity ? `<p class="product-capacity">${product.capacity}</p>` : ''}
                ${product.description ? `<p class="product-description">${product.description}</p>` : ''}
                ${featuresHtml}
              </div>
            `;
          }).join('');

          // Scroll to products section
          document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Set first tab as active
    if (tabButtons.length > 0) {
      tabButtons[0].classList.add('tab-active');
    }
  }

  // Contact form submission
  const contactSubmit = document.getElementById('contact-submit');
  if (contactSubmit) {
    contactSubmit.addEventListener('click', function(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const phone = document.getElementById('contact-phone').value;
      const message = document.getElementById('contact-message').value;

      if (name && email && message) {
        alert('Thank you for your inquiry! We will contact you soon.');
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-phone').value = '';
        document.getElementById('contact-message').value = '';
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }
});

