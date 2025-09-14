# Premium PET Bottles Business Website

A professional Jekyll website for a PET plastic bottle manufacturing business specializing in mustard oil and cooking oil packaging.

## 🏭 Business Overview

This website is designed for a small business that manufactures high-quality PET plastic bottles for:
- Mustard oil packaging
- Cooking oils (refined, sunflower, etc.)
- Food-grade packaging solutions
- Custom bottle manufacturing

## 🚀 Features

### Sales-Focused Design
- **Hero Section**: Compelling call-to-action with key benefits
- **Product Showcase**: Detailed product cards with specifications
- **Lead Generation**: Multiple contact points and WhatsApp integration
- **Trust Building**: Customer testimonials and company statistics

### Technical Features
- **Responsive Design**: Works perfectly on all devices
- **SEO Optimized**: Structured data, meta tags, and sitemap
- **Fast Loading**: Optimized images and CSS
- **Contact Forms**: Lead capture with WhatsApp integration
- **Product Modals**: Detailed product information popups

### Business Features
- **WhatsApp Integration**: Direct quote requests via WhatsApp
- **Contact Forms**: Lead capture with product interest tracking
- **Product Catalog**: Comprehensive bottle specifications
- **Mobile-First**: Optimized for mobile users (most B2B traffic)

## 📁 Project Structure

```
pet-bottles-business/
├── _config.yml          # Site configuration
├── _data/
│   └── products.yml     # Product data
├── _layouts/
│   └── default.html     # Main layout
├── assets/
│   ├── css/
│   │   └── main.css     # Main stylesheet
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Product images and assets
├── index.html           # Homepage
├── Gemfile              # Ruby dependencies
└── README.md           # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Ruby 2.7 or higher
- Bundler gem

### Installation
1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   bundle install
   ```

### Configuration
1. Update `_config.yml` with your business information:
   - Business name and tagline
   - Contact details (phone, email, WhatsApp)
   - Business address
   - Website URL

2. Add your product images to `assets/images/`
3. Update product data in `_data/products.yml`

### Running the Site
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

## 📝 Customization Guide

### Business Information
Update the following in `_config.yml`:
```yaml
business_name: "Your Company Name"
business_tagline: "Your Tagline"
business_address: "Your Address"
business_phone: "+91-XXXXX-XXXXX"
business_email: "your-email@domain.com"
business_whatsapp: "+91-XXXXX-XXXXX"
```

### Products
Edit `_data/products.yml` to add/modify products:
```yaml
bottle-500ml:
  name: "500ml PET Bottle"
  description: "Perfect for cooking oils"
  capacity: "500ml"
  height: "18.5cm"
  neck: "24mm PCO"
  weight: "16g"
  image: "/assets/images/bottle-500ml.jpg"
  applications: "Cooking oils, water bottles"
  popular: true
  price_range: "₹4-6 per piece"
```

### Styling
- Colors: Update CSS variables in `assets/css/main.css`
- Fonts: Change font imports in `_layouts/default.html`
- Layout: Modify sections in `index.html`

## 🎯 Marketing Features

### Lead Generation
- **WhatsApp Integration**: Direct quote requests
- **Contact Forms**: Lead capture with product interest
- **Multiple CTAs**: Strategic placement throughout the site
- **Trust Signals**: Testimonials and company stats

### SEO Optimization
- **Structured Data**: Organization and product markup
- **Meta Tags**: Optimized for search engines
- **Local SEO**: Business address and contact info
- **Mobile-First**: Responsive design for mobile users

### Conversion Optimization
- **Clear Value Proposition**: Benefits-focused messaging
- **Product Specifications**: Detailed technical information
- **Social Proof**: Customer testimonials
- **Easy Contact**: Multiple ways to get in touch

## 📱 Mobile Optimization

The website is fully responsive and optimized for mobile devices:
- Touch-friendly buttons and forms
- Fast loading on mobile networks
- WhatsApp integration for easy contact
- Mobile-first design approach

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Update `_config.yml` with your domain

### Netlify
1. Connect your GitHub repository
2. Build command: `bundle exec jekyll build`
3. Publish directory: `_site`

### Custom Server
1. Build the site: `bundle exec jekyll build`
2. Upload `_site` contents to your web server

## 📊 Analytics & Tracking

Consider adding:
- Google Analytics for visitor tracking
- Google Search Console for SEO monitoring
- Facebook Pixel for social media advertising
- WhatsApp Business API for advanced messaging

## 🔧 Maintenance

### Regular Updates
- Update product information as needed
- Add new testimonials and case studies
- Monitor and respond to contact form submissions
- Update pricing and availability

### Performance Monitoring
- Check site speed with Google PageSpeed Insights
- Monitor mobile usability
- Track conversion rates and lead generation

## 📞 Support

For technical support or customization requests, contact your web developer or refer to the Jekyll documentation.

## 📄 License

This project is created for business use. Please ensure you have proper licensing for any third-party assets used.

---

**Built with ❤️ for the PET bottle manufacturing industry**
