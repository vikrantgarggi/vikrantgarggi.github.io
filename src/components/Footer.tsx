import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Products", href: "#products" },
    { label: "Industries", href: "#industries" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    { label: "500ml Bottles", href: "#products" },
    { label: "1 Liter Bottles", href: "#products" },
    { label: "2 Liter Bottles", href: "#products" },
    { label: "5 Liter Bottles", href: "#products" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sales@petbottles.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">PB</span>
              </div>
              <span className="font-display font-bold text-xl">
                PET<span className="text-accent">Bottles</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              Your trusted partner for high-quality PET bottles. Serving businesses across India with excellence since 2009.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent-gradient transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>Industrial Area</li>
              <li>Your City, State</li>
              <li>India - XXXXXX</li>
              <li className="pt-2">
                <a href="tel:+919800000000" className="hover:text-accent transition-colors">
                  +91 98XXX XXXXX
                </a>
              </li>
              <li>
                <a href="mailto:sales@petbottles.com" className="hover:text-accent transition-colors">
                  sales@petbottles.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} PET Bottles. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
