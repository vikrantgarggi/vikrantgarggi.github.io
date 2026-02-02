import { Link } from "react-router-dom";
import { ArrowRight, Wine, Package, CircleDot, Circle, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Wine,
  Package,
  CircleDot,
  Circle,
};

interface ProductCategoryCardProps {
  id: string;
  name: string;
  shortName: string;
  description: string;
  route: string;
  material: "PET" | "PP";
  icon: string;
  applications: string[];
  categoryCount: number;
  totalProducts: number;
}

const ProductCategoryCard = ({
  name,
  description,
  route,
  material,
  icon,
  applications,
  categoryCount,
  totalProducts,
}: ProductCategoryCardProps) => {
  const IconComponent = iconMap[icon] || Package;
  const materialColor = material === "PET" ? "bg-blue-500/10 text-blue-600" : "bg-amber-500/10 text-amber-600";
  const materialBadgeColor = material === "PET" ? "bg-blue-500" : "bg-amber-500";

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-border">
      {/* Material Badge */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${materialColor}`}>
            <IconComponent size={28} />
          </div>
          <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${materialBadgeColor}`}>
            {material}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Applications */}
        <div className="flex flex-wrap gap-2 mb-4">
          {applications.map((app) => (
            <span
              key={app}
              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
            >
              {app.replace(" Bottles", "").replace(" Jars", "").replace(" Caps", "").replace(" Lids", "")}
            </span>
          ))}
          {categoryCount > 3 && (
            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md font-medium">
              +{categoryCount - 3} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span>{categoryCount} Categories</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>{totalProducts} Products</span>
        </div>

        {/* CTA */}
        <Link to={route}>
          <Button variant="outline" size="sm" className="w-full group/btn">
            View Range
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
