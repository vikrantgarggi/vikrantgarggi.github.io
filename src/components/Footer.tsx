import { Facebook, Instagram, Linkedin, Mail, LucideIcon } from "lucide-react";
import { siteConfig, footerConfig } from "@/config/siteConfig";

// Icon mapping for social platforms
const socialIconMap: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  Email: Mail,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">
                  {siteConfig.logoText}
                </span>
              </div>
              <span className="font-display font-bold text-xl">
                {siteConfig.brandName}<span className="text-accent">{siteConfig.brandHighlight}</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm mb-6">
              {footerConfig.description}
            </p>
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((social) => {
                const IconComponent = socialIconMap[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent-gradient transition-all duration-300 group"
                    aria-label={social.platform}
                  >
                    {IconComponent && <IconComponent size={18} className="group-hover:text-foreground transition-colors" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerConfig.quickLinks.map((link) => (
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
              {footerConfig.productLinks.map((link) => (
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
              <li>{footerConfig.address.line1}</li>
              <li>{footerConfig.address.line2}</li>
              <li>{footerConfig.address.line3}</li>
              <li className="pt-2">
                <a href={footerConfig.address.phoneHref} className="hover:text-accent transition-colors">
                  {footerConfig.address.phone}
                </a>
              </li>
              <li>
                <a href={footerConfig.address.emailHref} className="hover:text-accent transition-colors">
                  {footerConfig.address.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} {footerConfig.copyright}</p>
            <div className="flex gap-6">
              {footerConfig.legal.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
