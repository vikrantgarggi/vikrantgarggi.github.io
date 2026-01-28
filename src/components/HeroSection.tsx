import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBottles from "@/assets/hero-bottles.jpg";

const HeroSection = () => {
  const highlights = [
    "Food-Grade Quality",
    "Custom Sizes Available",
    "Bulk Orders Welcome",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-primary-foreground/80 text-sm font-medium">
                Trusted by 500+ Businesses
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Premium PET Bottles for{" "}
              <span className="text-gradient">Your Business</span>
            </h1>

            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              High-quality, food-grade PET bottles in various sizes. Perfect for edible oils, water, beverages, and more. Built for businesses that demand excellence.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle size={18} className="text-accent" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg">
                View Products
                <ArrowRight size={20} />
              </Button>
              <Button variant="hero-outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroBottles}
                alt="PET Bottles Collection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">15+</span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Years</p>
                  <p className="text-muted-foreground text-sm">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
