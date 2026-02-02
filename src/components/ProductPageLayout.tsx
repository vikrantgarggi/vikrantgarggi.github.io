import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ProductType } from "@/config/productCatalog";

interface ProductPageLayoutProps {
  product: ProductType;
}

const ProductPageLayout = ({ product }: ProductPageLayoutProps) => {
  const [activeCategory, setActiveCategory] = useState(product.categories[0]?.id || "");

  const scrollToContact = () => {
    // Navigate to home page contact section
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            {/* Material Badge */}
            <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-4 ${
              product.material === "PET" 
                ? "bg-blue-500/10 text-blue-600" 
                : "bg-amber-500/10 text-amber-600"
            }`}>
              {product.material} Products
            </span>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              {product.description}. Explore our range of {product.categories.length} categories 
              with {product.categories.reduce((acc, cat) => acc + cat.sizes.length, 0)}+ sizes available.
            </p>

            <div className="flex flex-wrap gap-3">
              {product.categories.map((cat) => (
                <span
                  key={cat.id}
                  className="text-sm bg-card text-muted-foreground px-3 py-1.5 rounded-lg border border-border"
                >
                  {cat.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products with Tabs */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            {/* Tab Navigation */}
            <div className="mb-8 overflow-x-auto pb-2">
              <TabsList className="inline-flex h-auto p-1 bg-muted rounded-xl">
                {product.categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2.5 text-sm font-medium rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm whitespace-nowrap"
                  >
                    {category.name.replace(" Bottles", "").replace(" Jars", "").replace(" Caps", "").replace(" Lids", "")}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Tab Content */}
            {product.categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {/* Category Header */}
                <div className="mb-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.sizes.map((size) => (
                    <ProductCard
                      key={size.id}
                      id={size.id}
                      size={size.size}
                      description={size.description}
                      features={size.features}
                      image={size.image}
                      productType={product.name}
                      category={category.name}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-card rounded-2xl p-8 lg:p-12 border border-border">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Need a Custom Size?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Can't find the exact size you need? We manufacture custom {product.name.toLowerCase()} 
              tailored to your specifications. Get in touch for a quote.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Request Custom Quote
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPageLayout;
