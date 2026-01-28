import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bottle500ml from "@/assets/bottle-500ml.jpg";
import bottle1l from "@/assets/bottle-1l.jpg";
import bottle2l from "@/assets/bottle-2l.jpg";
import bottle5l from "@/assets/bottle-5l.jpg";

const products = [
  {
    id: 1,
    name: "500ml Bottle",
    capacity: "500ml",
    description: "Compact size ideal for single-serve beverages and small oil packages.",
    image: bottle500ml,
    features: ["Lightweight", "BPA Free", "Recyclable"],
  },
  {
    id: 2,
    name: "1 Liter Bottle",
    capacity: "1L",
    description: "Perfect for cooking oils, water, and everyday household products.",
    image: bottle1l,
    features: ["Standard Size", "Easy Grip", "Leak Proof"],
  },
  {
    id: 3,
    name: "2 Liter Bottle",
    capacity: "2L",
    description: "Family-size bottles for bulk consumers and retail distribution.",
    image: bottle2l,
    features: ["Value Pack", "Sturdy Build", "Clear Visibility"],
  },
  {
    id: 4,
    name: "5 Liter Bottle",
    capacity: "5L",
    description: "Large capacity with ergonomic handle for commercial and institutional use.",
    image: bottle5l,
    features: ["With Handle", "Heavy Duty", "Cost Effective"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bottles for Every Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From compact 500ml to large 5-liter containers, we offer the perfect packaging solution for your products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent-gradient text-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {product.capacity}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full group/btn">
                  View Details
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom size? We can manufacture bottles tailored to your specifications.
          </p>
          <Button variant="hero" size="lg">
            Request Custom Quote
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
