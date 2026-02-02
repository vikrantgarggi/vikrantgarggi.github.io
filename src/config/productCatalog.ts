/**
 * Product Catalog Configuration
 * 
 * Comprehensive product structure for PET bottles, jars, and PP closures.
 * Edit this file to add/remove products, sizes, or categories.
 */

// ============================================
// TYPES
// ============================================
export interface ProductSize {
  id: string;
  size: string;
  description: string;
  features: string[];
  image?: string; // Will use placeholder if not provided
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string; // Lucide icon name
  sizes: ProductSize[];
}

export interface ProductType {
  id: string;
  name: string;
  shortName: string;
  description: string;
  route: string;
  material: "PET" | "PP";
  icon: string; // Lucide icon name
  heroImage?: string;
  categories: ProductCategory[];
}

// ============================================
// PRODUCT CATALOG
// ============================================
export const productCatalog: ProductType[] = [
  // PET BOTTLES
  {
    id: "pet-bottles",
    name: "PET Bottles",
    shortName: "Bottles",
    description: "High-quality food-grade PET bottles for various applications",
    route: "/products/pet-bottles",
    material: "PET",
    icon: "Wine",
    categories: [
      {
        id: "edible-oil",
        name: "Edible Oil Bottles",
        description: "Premium bottles designed for cooking oils with excellent clarity and durability",
        icon: "Flame",
        sizes: [
          {
            id: "oil-500ml",
            size: "500ml",
            description: "Compact size for small households and trial packs",
            features: ["Food-Grade", "BPA Free", "Leak Proof", "UV Resistant"],
          },
          {
            id: "oil-1l",
            size: "1 Liter",
            description: "Standard family size for everyday cooking needs",
            features: ["Easy Grip", "Wide Mouth", "Recyclable", "Crystal Clear"],
          },
          {
            id: "oil-2l",
            size: "2 Liters",
            description: "Value pack for larger families and frequent users",
            features: ["Sturdy Build", "Handle Option", "Stackable", "Eco-Friendly"],
          },
          {
            id: "oil-5l",
            size: "5 Liters",
            description: "Commercial size with ergonomic handle for easy pouring",
            features: ["Built-in Handle", "Heavy Duty", "Cost Effective", "Bulk Friendly"],
          },
          {
            id: "oil-15l",
            size: "15 Liters",
            description: "Industrial size for commercial kitchens and restaurants",
            features: ["Industrial Grade", "Tap Ready", "Reinforced", "Long Shelf Life"],
          },
        ],
      },
      {
        id: "water",
        name: "Water Bottles",
        description: "Crystal-clear bottles perfect for packaged drinking water",
        icon: "Droplets",
        sizes: [
          {
            id: "water-250ml",
            size: "250ml",
            description: "Single-serve size ideal for events and catering",
            features: ["Lightweight", "Portable", "Hygienic Seal", "Premium Finish"],
          },
          {
            id: "water-500ml",
            size: "500ml",
            description: "Perfect for on-the-go hydration",
            features: ["Ergonomic Design", "Easy Carry", "BPA Free", "Recyclable"],
          },
          {
            id: "water-1l",
            size: "1 Liter",
            description: "Standard size for home and office",
            features: ["Crystal Clear", "Tamper Evident", "Food Safe", "Stackable"],
          },
          {
            id: "water-2l",
            size: "2 Liters",
            description: "Family size for home delivery and retail",
            features: ["Value Pack", "Easy Pour", "Durable", "UV Protected"],
          },
        ],
      },
      {
        id: "beverages",
        name: "Beverage Bottles",
        description: "Versatile bottles for juices, soft drinks, and flavored beverages",
        icon: "GlassWater",
        sizes: [
          {
            id: "bev-200ml",
            size: "200ml",
            description: "Mini size perfect for juices and health drinks",
            features: ["Compact", "Child Friendly", "Colorful Options", "Safe Seal"],
          },
          {
            id: "bev-300ml",
            size: "300ml",
            description: "Popular size for flavored drinks and energy beverages",
            features: ["Sleek Design", "Wide Mouth", "Modern Look", "Recyclable"],
          },
          {
            id: "bev-500ml",
            size: "500ml",
            description: "Standard beverage size for retail distribution",
            features: ["Retail Ready", "Attractive Shape", "Easy Label", "Strong Base"],
          },
          {
            id: "bev-1l",
            size: "1 Liter",
            description: "Economy size for family packs and parties",
            features: ["Family Size", "Resealable", "Party Pack", "Value Offer"],
          },
        ],
      },
      {
        id: "cleaning",
        name: "Cleaning Solution Bottles",
        description: "Durable bottles for household cleaners and industrial chemicals",
        icon: "Sparkles",
        sizes: [
          {
            id: "clean-500ml",
            size: "500ml",
            description: "Handy size for bathroom and kitchen cleaners",
            features: ["Chemical Resistant", "Trigger Compatible", "Durable", "Safe Lock"],
          },
          {
            id: "clean-1l",
            size: "1 Liter",
            description: "Standard size for home cleaning products",
            features: ["Easy Pour Spout", "Sturdy Build", "Refillable", "Leak Proof"],
          },
          {
            id: "clean-2l",
            size: "2 Liters",
            description: "Bulk size for floor cleaners and detergents",
            features: ["Bulk Pack", "Handle Design", "Industrial Use", "Cost Saving"],
          },
          {
            id: "clean-5l",
            size: "5 Liters",
            description: "Commercial size for industrial cleaning applications",
            features: ["Commercial Grade", "Heavy Duty", "Stackable", "Refill Station"],
          },
        ],
      },
    ],
  },

  // PET JARS
  {
    id: "pet-jars",
    name: "PET Jars",
    shortName: "Jars",
    description: "Wide-mouth PET jars perfect for food storage and packaging",
    route: "/products/pet-jars",
    material: "PET",
    icon: "Package",
    categories: [
      {
        id: "dry-fruits",
        name: "Dry Fruits Jars",
        description: "Crystal-clear jars that showcase premium dry fruits beautifully",
        icon: "Nut",
        sizes: [
          {
            id: "df-100g",
            size: "100g",
            description: "Gift pack size for premium dry fruits assortments",
            features: ["Premium Look", "Gift Ready", "Airtight Seal", "Reusable"],
          },
          {
            id: "df-250g",
            size: "250g",
            description: "Popular retail size for almonds, cashews, and raisins",
            features: ["Retail Ready", "Clear Display", "Tamper Evident", "Stackable"],
          },
          {
            id: "df-500g",
            size: "500g",
            description: "Family pack for regular consumption",
            features: ["Family Size", "Wide Mouth", "Easy Access", "Long Freshness"],
          },
          {
            id: "df-1kg",
            size: "1 Kg",
            description: "Value pack for bulk buyers and retailers",
            features: ["Value Pack", "Bulk Friendly", "Durable", "Commercial Use"],
          },
        ],
      },
      {
        id: "pickles",
        name: "Pickle Jars",
        description: "Specially designed jars for pickles and preserves",
        icon: "Salad",
        sizes: [
          {
            id: "pickle-200g",
            size: "200g",
            description: "Trial size for new flavors and varieties",
            features: ["Trial Pack", "Easy Open", "Flavor Lock", "Traditional Look"],
          },
          {
            id: "pickle-400g",
            size: "400g",
            description: "Standard household size for regular use",
            features: ["Home Size", "Airtight", "Oil Resistant", "Long Lasting"],
          },
          {
            id: "pickle-1kg",
            size: "1 Kg",
            description: "Economy pack for pickle lovers",
            features: ["Economy Size", "Wide Mouth", "Easy Scoop", "Durable"],
          },
          {
            id: "pickle-5kg",
            size: "5 Kg",
            description: "Commercial size for restaurants and caterers",
            features: ["Commercial", "Bulk Pack", "Heavy Duty", "Cost Effective"],
          },
        ],
      },
      {
        id: "ghee",
        name: "Ghee Jars",
        description: "Premium jars designed for ghee and clarified butter storage",
        icon: "Cookie",
        sizes: [
          {
            id: "ghee-200g",
            size: "200g",
            description: "Starter size perfect for small families",
            features: ["Compact", "Pure Ghee Safe", "Easy Scoop", "Premium Look"],
          },
          {
            id: "ghee-500g",
            size: "500g",
            description: "Popular household size for daily cooking",
            features: ["Household Size", "Wide Mouth", "Easy Clean", "Food Grade"],
          },
          {
            id: "ghee-1kg",
            size: "1 Kg",
            description: "Family pack for regular ghee users",
            features: ["Family Size", "Airtight Seal", "Long Freshness", "Value Pack"],
          },
          {
            id: "ghee-5kg",
            size: "5 Kg",
            description: "Bulk pack for commercial use and resellers",
            features: ["Bulk Pack", "Commercial Use", "Heavy Duty", "Cost Saving"],
          },
        ],
      },
    ],
  },

  // PP BOTTLE CLOSURES
  {
    id: "pp-bottle-closures",
    name: "PP Bottle Closures",
    shortName: "Bottle Caps",
    description: "High-quality polypropylene caps and closures for bottles",
    route: "/products/pp-bottle-closures",
    material: "PP",
    icon: "CircleDot",
    categories: [
      {
        id: "screw-caps",
        name: "Screw Caps",
        description: "Standard screw-on caps for various bottle types",
        icon: "Disc",
        sizes: [
          {
            id: "cap-28mm",
            size: "28mm",
            description: "Standard cap for water and beverage bottles",
            features: ["Universal Fit", "Tamper Evident", "Easy Open", "Leak Proof"],
          },
          {
            id: "cap-38mm",
            size: "38mm",
            description: "Medium size for oil and juice bottles",
            features: ["Secure Seal", "Oil Resistant", "Durable Thread", "Color Options"],
          },
          {
            id: "cap-46mm",
            size: "46mm",
            description: "Large cap for 5L and bulk containers",
            features: ["Heavy Duty", "Grip Design", "Industrial Use", "Long Life"],
          },
          {
            id: "cap-63mm",
            size: "63mm",
            description: "Extra-large for 15L and commercial containers",
            features: ["Commercial Grade", "Ergonomic Grip", "Tamper Ring", "Leak Free"],
          },
        ],
      },
      {
        id: "flip-top",
        name: "Flip-Top Caps",
        description: "Convenient flip-top closures for easy dispensing",
        icon: "ArrowUpFromDot",
        sizes: [
          {
            id: "flip-20mm",
            size: "20mm",
            description: "Small flip-top for sauce and condiment bottles",
            features: ["Easy Flip", "Controlled Pour", "Snap Shut", "Hygienic"],
          },
          {
            id: "flip-24mm",
            size: "24mm",
            description: "Standard flip-top for personal care products",
            features: ["Smooth Action", "Secure Close", "Recyclable", "Modern Design"],
          },
          {
            id: "flip-28mm",
            size: "28mm",
            description: "Medium flip-top for various applications",
            features: ["Versatile", "Strong Hinge", "Easy Clean", "Durable"],
          },
        ],
      },
      {
        id: "pour-spouts",
        name: "Pour Spouts",
        description: "Specialized pour spouts for controlled dispensing",
        icon: "Droplet",
        sizes: [
          {
            id: "spout-oil",
            size: "Oil Spout",
            description: "Precision pour spout for cooking oil bottles",
            features: ["Drip Free", "Precise Pour", "Easy Attach", "Clean Design"],
          },
          {
            id: "spout-thin",
            size: "Thin Stream",
            description: "Fine stream spout for sauces and dressings",
            features: ["Fine Control", "No Mess", "Easy Use", "Food Safe"],
          },
          {
            id: "spout-wide",
            size: "Wide Pour",
            description: "Wide mouth spout for quick pouring",
            features: ["Fast Pour", "Easy Clean", "Sturdy Build", "Replacement Friendly"],
          },
        ],
      },
    ],
  },

  // PP JAR CLOSURES
  {
    id: "pp-jar-closures",
    name: "PP Jar Closures",
    shortName: "Jar Lids",
    description: "Premium polypropylene lids and closures for jars",
    route: "/products/pp-jar-closures",
    material: "PP",
    icon: "Circle",
    categories: [
      {
        id: "screw-lids",
        name: "Screw Lids",
        description: "Standard screw lids for jars of all sizes",
        icon: "Disc3",
        sizes: [
          {
            id: "lid-53mm",
            size: "53mm",
            description: "Standard lid for small to medium jars",
            features: ["Easy Open", "Airtight Seal", "Liner Included", "Food Safe"],
          },
          {
            id: "lid-63mm",
            size: "63mm",
            description: "Popular size for pickle and jam jars",
            features: ["Wide Mouth", "Secure Fit", "Tamper Evident", "Durable"],
          },
          {
            id: "lid-82mm",
            size: "82mm",
            description: "Large lid for ghee and bulk storage jars",
            features: ["Premium Quality", "Thick Build", "Long Lasting", "Commercial Use"],
          },
          {
            id: "lid-110mm",
            size: "110mm",
            description: "Extra-large for commercial containers",
            features: ["Industrial Grade", "Heavy Duty", "Easy Grip", "Airtight"],
          },
        ],
      },
      {
        id: "press-lids",
        name: "Press-Fit Lids",
        description: "Push-on lids for easy access containers",
        icon: "CircleDashed",
        sizes: [
          {
            id: "press-small",
            size: "Small (50-65mm)",
            description: "Press lids for spice and masala jars",
            features: ["Quick Access", "Snap Fit", "Reusable", "Tight Seal"],
          },
          {
            id: "press-medium",
            size: "Medium (70-85mm)",
            description: "Press lids for dry fruit and snack jars",
            features: ["Easy Press", "Secure Hold", "Stackable", "Food Grade"],
          },
          {
            id: "press-large",
            size: "Large (90-110mm)",
            description: "Press lids for large storage containers",
            features: ["Heavy Duty", "Easy Remove", "Durable", "Commercial Ready"],
          },
        ],
      },
      {
        id: "specialty-lids",
        name: "Specialty Lids",
        description: "Special purpose lids with unique features",
        icon: "Settings",
        sizes: [
          {
            id: "inner-seal",
            size: "Inner Seal Lid",
            description: "Lid with foil/wax inner seal for freshness",
            features: ["Freshness Lock", "Tamper Proof", "Premium", "Long Shelf Life"],
          },
          {
            id: "spoon-cavity",
            size: "Spoon Cavity Lid",
            description: "Lid with built-in spoon holder for powders",
            features: ["Built-in Spoon", "Hygienic", "Convenient", "Premium Look"],
          },
          {
            id: "flip-lid",
            size: "Flip-Top Jar Lid",
            description: "Jar lid with flip-top for easy dispensing",
            features: ["Easy Dispense", "Quick Access", "Modern Design", "Versatile"],
          },
        ],
      },
    ],
  },
];

// ============================================
// HOME PAGE CATEGORY CARDS CONFIG
// ============================================
export const productCategoryCards = productCatalog.map((product) => ({
  id: product.id,
  name: product.name,
  shortName: product.shortName,
  description: product.description,
  route: product.route,
  material: product.material,
  icon: product.icon,
  applications: product.categories.map((cat) => cat.name).slice(0, 3),
  categoryCount: product.categories.length,
  totalProducts: product.categories.reduce((acc, cat) => acc + cat.sizes.length, 0),
}));

// ============================================
// HELPER FUNCTIONS
// ============================================
export const getProductByRoute = (route: string): ProductType | undefined => {
  return productCatalog.find((p) => p.route === route);
};

export const getProductById = (id: string): ProductType | undefined => {
  return productCatalog.find((p) => p.id === id);
};

export const getCategoryById = (
  productId: string,
  categoryId: string
): ProductCategory | undefined => {
  const product = getProductById(productId);
  return product?.categories.find((c) => c.id === categoryId);
};
