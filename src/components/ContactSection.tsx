import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We will get back to you shortly.");
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98XXX XXXXX",
      href: "tel:+919800000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "sales@petbottles.com",
      href: "mailto:sales@petbottles.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Industrial Area, India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Let's discuss your packaging needs. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elevated">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Requirements *
                </label>
                <Textarea
                  placeholder="Tell us about your packaging needs — bottle sizes, quantities, customization requirements, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Inquiry
                <Send size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-foreground/10 rounded-xl flex items-center justify-center group-hover:bg-accent-gradient transition-all duration-300">
                    <item.icon size={24} className="text-primary-foreground group-hover:text-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm">{item.label}</p>
                    <p className="text-primary-foreground font-semibold text-lg">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 bg-primary-foreground/10 rounded-2xl">
              <h4 className="font-semibold text-primary-foreground mb-2">
                Business Hours
              </h4>
              <p className="text-primary-foreground/70 text-sm">
                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
