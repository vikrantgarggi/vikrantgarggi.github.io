import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig, navigationConfig } from "@/config/siteConfig";
import { productCatalog } from "@/config/productCatalog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (!isHomePage) {
        window.location.href = "/" + href;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">
                {siteConfig.logoText}
              </span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              {siteConfig.brandName}<span className="text-gradient">{siteConfig.brandHighlight}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationConfig.items.map((item) => {
              // Products dropdown
              if (item.label === "Products") {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-elevated border border-border overflow-hidden z-50">
                        <div className="p-2">
                          {productCatalog.map((product) => (
                            <Link
                              key={product.id}
                              to={product.route}
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <span className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${
                                product.material === "PET" 
                                  ? "bg-blue-500/10 text-blue-600" 
                                  : "bg-amber-500/10 text-amber-600"
                              }`}>
                                {product.material}
                              </span>
                              <div>
                                <span className="block text-sm font-medium text-foreground">
                                  {product.name}
                                </span>
                                <span className="block text-xs text-muted-foreground">
                                  {product.categories.length} categories
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-border p-2">
                          <Link
                            to="/#products"
                            className="block px-4 py-2 text-sm text-center text-accent hover:bg-muted rounded-lg transition-colors"
                            onClick={() => {
                              setIsProductsOpen(false);
                              if (isHomePage) {
                                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                              }
                            }}
                          >
                            View All Products
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Regular nav items
              return (
                <a
                  key={item.label}
                  href={isHomePage ? item.href : `/${item.href}`}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href={isHomePage ? "#contact" : "/#contact"}>
              <Button variant="hero" size="default">
                {navigationConfig.ctaButton.label}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {/* Products Accordion */}
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  Products
                  <ChevronDown size={16} className={`transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 mt-2 space-y-1 border-l-2 border-border ml-2">
                    {productCatalog.map((product) => (
                      <Link
                        key={product.id}
                        to={product.route}
                        className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          product.material === "PET" 
                            ? "bg-blue-500/10 text-blue-600" 
                            : "bg-amber-500/10 text-amber-600"
                        }`}>
                          {product.material}
                        </span>
                        {product.shortName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other nav items */}
              {navigationConfig.items
                .filter((item) => item.label !== "Products")
                .map((item) => (
                  <a
                    key={item.label}
                    href={isHomePage ? item.href : `/${item.href}`}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              
              <a href={isHomePage ? "#contact" : "/#contact"}>
                <Button variant="hero" size="default" className="mt-2 w-full">
                  {navigationConfig.ctaButton.label}
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
