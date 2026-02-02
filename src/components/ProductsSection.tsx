import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import { productCategoryCards } from "@/config/productCatalog";

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
            Complete Packaging Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From PET bottles and jars to PP closures, we offer comprehensive packaging solutions for every industry need.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {productCategoryCards.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCategoryCard {...category} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom size? We can manufacture products tailored to your specifications.
          </p>
          <Button variant="hero" size="lg" onClick={() => window.location.href = "#contact"}>
            Request Custom Quote
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
