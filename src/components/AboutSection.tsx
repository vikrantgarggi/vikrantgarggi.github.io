import { Award, Factory, Recycle, Shield, Truck, Users, LucideIcon } from "lucide-react";
import { aboutConfig } from "@/config/siteConfig";

// Icon mapping for configuration
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Factory,
  Recycle,
  Truck,
  Users,
  Award,
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              {aboutConfig.sectionLabel}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {aboutConfig.headline}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {aboutConfig.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {aboutConfig.stats.map((stat) => (
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
            {aboutConfig.features.map((feature, index) => {
              const IconComponent = iconMap[feature.iconName];
              return (
                <div
                  key={feature.title}
                  className="group flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-card hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && <IconComponent size={24} className="text-foreground" />}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
