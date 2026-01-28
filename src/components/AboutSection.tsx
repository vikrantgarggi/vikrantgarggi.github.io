import { Award, Factory, Recycle, Shield, Truck, Users } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "10M+", label: "Bottles Delivered" },
  { value: "99%", label: "Quality Rate" },
];

const features = [
  {
    icon: Shield,
    title: "Food-Grade Quality",
    description: "All our bottles meet FDA and FSSAI standards for food-safe packaging.",
  },
  {
    icon: Factory,
    title: "Modern Manufacturing",
    description: "State-of-the-art blow molding technology for consistent quality.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "100% recyclable PET material. Committed to sustainability.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Reliable logistics network for timely deliveries across India.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Expert team to help you choose the right packaging solution.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description: "ISO certified manufacturing processes and quality control.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Packaging Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              With over 15 years in the industry, we understand what businesses need — quality products, reliable delivery, and competitive pricing. We're not just a supplier; we're your packaging partner.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl lg:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-card hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
