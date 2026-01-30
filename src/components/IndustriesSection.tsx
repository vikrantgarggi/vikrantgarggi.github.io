import { Droplets, Flame, Milk, Sparkles, LucideIcon } from "lucide-react";
import { industriesConfig } from "@/config/siteConfig";

// Icon mapping for configuration
const iconMap: Record<string, LucideIcon> = {
  Flame,
  Droplets,
  Milk,
  Sparkles,
};

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            {industriesConfig.sectionLabel}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {industriesConfig.headline}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {industriesConfig.description}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industriesConfig.items.map((industry, index) => {
            const IconComponent = iconMap[industry.iconName];
            return (
              <div
                key={industry.title}
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${industry.colorClass} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
