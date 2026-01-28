import { Droplets, Flame, Milk, Sparkles } from "lucide-react";

const industries = [
  {
    icon: Flame,
    title: "Edible Oils",
    description: "Mustard oil, sunflower oil, groundnut oil, and refined cooking oils. Food-grade bottles that preserve freshness.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Droplets,
    title: "Packaged Water",
    description: "Crystal-clear bottles for mineral water and drinking water. Perfect clarity for premium presentation.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Milk,
    title: "Dairy & Beverages",
    description: "Suitable for juices, flavored drinks, and dairy products. UV-resistant options available.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Sparkles,
    title: "Chemicals & Cleaners",
    description: "Industrial-grade bottles for household cleaners, detergents, and chemical solutions.",
    color: "bg-purple-500/10 text-purple-600",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted Across Industries
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From food & beverages to industrial applications, our bottles meet the highest quality standards.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${industry.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon size={32} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {industry.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
