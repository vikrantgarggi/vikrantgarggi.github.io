/**
 * Site Configuration
 * 
 * Edit this file to update all content across the website.
 * Changes here will reflect in all components automatically.
 */

// ============================================
// ASSET IMPORTS
// ============================================
// Import your images here - these can be replaced with your own images
import heroBottles from "@/assets/hero-bottles.jpg";
import bottle500ml from "@/assets/bottle-500ml.jpg";
import bottle1l from "@/assets/bottle-1l.jpg";
import bottle2l from "@/assets/bottle-2l.jpg";
import bottle5l from "@/assets/bottle-5l.jpg";

// ============================================
// SITE METADATA
// ============================================
export const siteConfig = {
  name: "PET Bottles",
  logoText: "PB",
  brandName: "PET",
  brandHighlight: "Bottles",
  tagline: "Your trusted partner for high-quality PET bottles",
  foundedYear: 2009,
};

// ============================================
// NAVIGATION
// ============================================
export const navigationConfig = {
  items: [
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaButton: {
    label: "Get Quote",
    href: "#contact",
  },
};

// ============================================
// HERO SECTION
// ============================================
export const heroConfig = {
  badge: "Trusted by 500+ Businesses",
  headline: "Premium PET Bottles for",
  headlineHighlight: "Your Business",
  description:
    "High-quality, food-grade PET bottles in various sizes. Perfect for edible oils, water, beverages, and more. Built for businesses that demand excellence.",
  image: heroBottles,
  imageAlt: "PET Bottles Collection",
  highlights: ["Food-Grade Quality", "Custom Sizes Available", "Bulk Orders Welcome"],
  primaryCta: {
    label: "View Products",
    href: "#products",
  },
  secondaryCta: {
    label: "Contact Sales",
    href: "#contact",
  },
  floatingCard: {
    value: "15+",
    label: "Years",
    sublabel: "Of Excellence",
  },
};

// ============================================
// PRODUCTS SECTION
// ============================================
export const productsConfig = {
  sectionLabel: "Our Products",
  headline: "Bottles for Every Need",
  description:
    "From compact 500ml to large 5-liter containers, we offer the perfect packaging solution for your products.",
  customCta: {
    text: "Need a custom size? We can manufacture bottles tailored to your specifications.",
    buttonLabel: "Request Custom Quote",
    href: "#contact",
  },
  items: [
    {
      id: 1,
      name: "500ml Bottle",
      capacity: "500ml",
      description: "Compact size ideal for single-serve beverages and small oil packages.",
      image: bottle500ml,
      features: ["Lightweight", "BPA Free", "Recyclable"],
    },
    {
      id: 2,
      name: "1 Liter Bottle",
      capacity: "1L",
      description: "Perfect for cooking oils, water, and everyday household products.",
      image: bottle1l,
      features: ["Standard Size", "Easy Grip", "Leak Proof"],
    },
    {
      id: 3,
      name: "2 Liter Bottle",
      capacity: "2L",
      description: "Family-size bottles for bulk consumers and retail distribution.",
      image: bottle2l,
      features: ["Value Pack", "Sturdy Build", "Clear Visibility"],
    },
    {
      id: 4,
      name: "5 Liter Bottle",
      capacity: "5L",
      description: "Large capacity with ergonomic handle for commercial and institutional use.",
      image: bottle5l,
      features: ["With Handle", "Heavy Duty", "Cost Effective"],
    },
  ],
};

// ============================================
// INDUSTRIES SECTION
// ============================================
export const industriesConfig = {
  sectionLabel: "Industries We Serve",
  headline: "Trusted Across Industries",
  description:
    "From food & beverages to industrial applications, our bottles meet the highest quality standards.",
  items: [
    {
      iconName: "Flame",
      title: "Edible Oils",
      description:
        "Mustard oil, sunflower oil, groundnut oil, and refined cooking oils. Food-grade bottles that preserve freshness.",
      colorClass: "bg-amber-500/10 text-amber-600",
    },
    {
      iconName: "Droplets",
      title: "Packaged Water",
      description:
        "Crystal-clear bottles for mineral water and drinking water. Perfect clarity for premium presentation.",
      colorClass: "bg-blue-500/10 text-blue-600",
    },
    {
      iconName: "Milk",
      title: "Dairy & Beverages",
      description:
        "Suitable for juices, flavored drinks, and dairy products. UV-resistant options available.",
      colorClass: "bg-green-500/10 text-green-600",
    },
    {
      iconName: "Sparkles",
      title: "Chemicals & Cleaners",
      description:
        "Industrial-grade bottles for household cleaners, detergents, and chemical solutions.",
      colorClass: "bg-purple-500/10 text-purple-600",
    },
  ],
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutConfig = {
  sectionLabel: "Why Choose Us",
  headline: "Your Trusted Packaging Partner",
  description:
    "With over 15 years in the industry, we understand what businesses need — quality products, reliable delivery, and competitive pricing. We're not just a supplier; we're your packaging partner.",
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "10M+", label: "Bottles Delivered" },
    { value: "99%", label: "Quality Rate" },
  ],
  features: [
    {
      iconName: "Shield",
      title: "Food-Grade Quality",
      description: "All our bottles meet FDA and FSSAI standards for food-safe packaging.",
    },
    {
      iconName: "Factory",
      title: "Modern Manufacturing",
      description: "State-of-the-art blow molding technology for consistent quality.",
    },
    {
      iconName: "Recycle",
      title: "Eco-Friendly",
      description: "100% recyclable PET material. Committed to sustainability.",
    },
    {
      iconName: "Truck",
      title: "Pan-India Delivery",
      description: "Reliable logistics network for timely deliveries across India.",
    },
    {
      iconName: "Users",
      title: "Dedicated Support",
      description: "Expert team to help you choose the right packaging solution.",
    },
    {
      iconName: "Award",
      title: "Certified Excellence",
      description: "ISO certified manufacturing processes and quality control.",
    },
  ],
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactConfig = {
  sectionLabel: "Get In Touch",
  headline: "Ready to Partner With Us?",
  description: "Let's discuss your packaging needs. Fill out the form below or reach out directly.",
  formTitle: "Request a Quote",
  formFields: {
    name: { label: "Your Name", placeholder: "John Doe", required: true },
    email: { label: "Email Address", placeholder: "john@company.com", required: true },
    phone: { label: "Phone Number", placeholder: "+91 98765 43210", required: false },
    company: { label: "Company Name", placeholder: "Your Company", required: false },
    message: {
      label: "Your Requirements",
      placeholder:
        "Tell us about your packaging needs — bottle sizes, quantities, customization requirements, etc.",
      required: true,
    },
  },
  submitButton: "Send Inquiry",
  contactInfo: [
    {
      iconName: "Phone",
      label: "Phone",
      value: "+91 98XXX XXXXX",
      href: "tel:+919800000000",
    },
    {
      iconName: "Mail",
      label: "Email",
      value: "sales@petbottles.com",
      href: "mailto:sales@petbottles.com",
    },
    {
      iconName: "MapPin",
      label: "Location",
      value: "Industrial Area, India",
      href: "#",
    },
  ],
  businessHours: {
    title: "Business Hours",
    schedule: "Monday - Saturday: 9:00 AM - 6:00 PM",
    closed: "Sunday: Closed",
  },
};

// ============================================
// FOOTER
// ============================================
export const footerConfig = {
  description:
    "Your trusted partner for high-quality PET bottles. Serving businesses across India with excellence since 2009.",
  quickLinks: [
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  productLinks: [
    { label: "500ml Bottles", href: "#products" },
    { label: "1 Liter Bottles", href: "#products" },
    { label: "2 Liter Bottles", href: "#products" },
    { label: "5 Liter Bottles", href: "#products" },
  ],
  address: {
    line1: "Industrial Area",
    line2: "Your City, State",
    line3: "India - XXXXXX",
    phone: "+91 98XXX XXXXX",
    phoneHref: "tel:+919800000000",
    email: "sales@petbottles.com",
    emailHref: "mailto:sales@petbottles.com",
  },
  socialLinks: [
    { platform: "Facebook", href: "#" },
    { platform: "Instagram", href: "#" },
    { platform: "LinkedIn", href: "#" },
    { platform: "Email", href: "mailto:sales@petbottles.com" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyright: "PET Bottles. All rights reserved.",
};
