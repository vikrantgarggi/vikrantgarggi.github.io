import { Package } from "lucide-react";

interface ProductCardProps {
  id: string;
  size: string;
  description: string;
  features: string[];
  image?: string;
  productType: string;
  category: string;
}

const ProductCard = ({
  size,
  description,
  features,
  image,
  productType,
  category,
}: ProductCardProps) => {
  // Generate placeholder color based on product type
  const getPlaceholderStyle = () => {
    if (productType.includes("Bottle")) {
      return "from-blue-100 to-blue-50";
    } else if (productType.includes("Jar")) {
      return "from-green-100 to-green-50";
    } else if (productType.includes("Closure")) {
      return "from-amber-100 to-amber-50";
    }
    return "from-gray-100 to-gray-50";
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border">
      {/* Product Image / Placeholder */}
      <div className={`relative h-48 bg-gradient-to-b ${getPlaceholderStyle()} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={`${category} ${size}`}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <Package size={48} className="text-muted-foreground/40 mb-2" />
            <span className="text-xs text-muted-foreground/60 text-center">
              Image Coming Soon
            </span>
          </div>
        )}
        
        {/* Size Badge */}
        <div className="absolute top-3 right-3 bg-accent-gradient text-foreground text-sm font-bold px-3 py-1 rounded-full shadow-sm">
          {size}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h4 className="font-display text-lg font-semibold text-foreground mb-1">
          {size} {category.split(" ")[0]}
        </h4>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded"
            >
              {feature}
            </span>
          ))}
          {features.length > 3 && (
            <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded font-medium">
              +{features.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
