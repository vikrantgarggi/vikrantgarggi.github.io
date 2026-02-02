
# Product Catalog Restructure Plan

## Overview
Transform the current simple product listing into a comprehensive, multi-page product catalog that properly showcases your complete PET and PP product range with proper categorization.

---

## Product Hierarchy Structure

```text
+----------------------------------+
|         GANPATI INDUSTRIES       |
+----------------------------------+
           |
    +------+------+
    |             |
  PET           PP
 Products     Products
    |             |
 +--+--+      +---+---+
 |     |      |       |
Bottles Jars  Bottle  Jar
              Closures Closures
    |     |
 +--+--+  +--+--+
 |  |  |  |  |  |
Oil Water Dry Pickles
Bev Clean Fruits Ghee
```

---

## What Will Be Created

### 1. New Pages (4 product category pages)

| Page | Route | Content |
|------|-------|---------|
| PET Bottles | `/products/pet-bottles` | Bottles for Edible Oil, Water, Beverages, Cleaning Solutions |
| PET Jars | `/products/pet-jars` | Jars for Dry Fruits, Pickles, Ghee |
| PP Bottle Closures | `/products/pp-bottle-closures` | Caps/closures for bottles |
| PP Jar Closures | `/products/pp-jar-closures` | Lids/closures for jars |

### 2. Updated Home Page Products Section
- Replace the current flat product grid with category overview cards
- Each card links to its dedicated product page
- Shows material type (PET/PP), product type, and key applications

### 3. New Configuration Structure in `siteConfig.ts`

The config will be expanded to support:
- **Material categories** (PET, PP)
- **Product types** (Bottles, Jars, Closures)
- **Application categories** (Oil, Water, Beverages, etc.)
- **Size variants** within each category
- **Placeholder image references** for each product

---

## Page Designs

### Home Page - Products Section (Updated)

The current grid of 4 bottles becomes a category showcase:

```text
+------------------------------------------+
|          OUR PRODUCTS                    |
|   Complete Packaging Solutions           |
+------------------------------------------+
|                                          |
|  +----------------+  +----------------+  |
|  | [PET Icon]     |  | [PP Icon]      |  |
|  | PET BOTTLES    |  | PET JARS       |  |
|  | Edible Oil,    |  | Dry Fruits,    |  |
|  | Water, Bev...  |  | Pickles, Ghee  |  |
|  | [View Range]   |  | [View Range]   |  |
|  +----------------+  +----------------+  |
|                                          |
|  +----------------+  +----------------+  |
|  | [Cap Icon]     |  | [Lid Icon]     |  |
|  | BOTTLE CAPS    |  | JAR LIDS       |  |
|  | PP Closures    |  | PP Closures    |  |
|  | for bottles    |  | for jars       |  |
|  | [View Range]   |  | [View Range]   |  |
|  +----------------+  +----------------+  |
+------------------------------------------+
```

### Individual Product Pages Layout

Each product page will feature:

```text
+------------------------------------------+
|  [Header]                                |
+------------------------------------------+
|  PET BOTTLES                             |
|  Premium bottles for your products       |
+------------------------------------------+
|  [Tab: Edible Oil] [Water] [Bev] [Clean] |
+------------------------------------------+
|                                          |
|  +--------+  +--------+  +--------+      |
|  |[Image] |  |[Image] |  |[Image] |      |
|  | 500ml  |  | 1L     |  | 2L     |      |
|  | Oil    |  | Oil    |  | Oil    |      |
|  |Features|  |Features|  |Features|      |
|  +--------+  +--------+  +--------+      |
|                                          |
|  [Request Quote Button]                  |
+------------------------------------------+
|  [Footer]                                |
+------------------------------------------+
```

---

## Files to Create/Modify

### New Files

| File | Purpose |
|------|---------|
| `src/pages/products/PetBottles.tsx` | PET Bottles category page |
| `src/pages/products/PetJars.tsx` | PET Jars category page |
| `src/pages/products/PpBottleClosures.tsx` | PP Bottle Closures page |
| `src/pages/products/PpJarClosures.tsx` | PP Jar Closures page |
| `src/components/ProductCategoryCard.tsx` | Reusable category card for home page |
| `src/components/ProductGrid.tsx` | Reusable product grid with filtering |
| `src/components/ProductCard.tsx` | Individual product card component |

### Modified Files

| File | Changes |
|------|---------|
| `src/config/siteConfig.ts` | Add comprehensive product catalog structure |
| `src/components/ProductsSection.tsx` | Update to show category cards linking to pages |
| `src/App.tsx` | Add routes for new product pages |
| `src/components/Header.tsx` | Add Products dropdown menu |
| `src/components/Footer.tsx` | Update product links |

---

## Updated Configuration Example

```typescript
// In siteConfig.ts - New product catalog structure

export const productCatalog = {
  // PET Products
  pet: {
    bottles: {
      name: "PET Bottles",
      description: "High-quality food-grade bottles",
      route: "/products/pet-bottles",
      categories: {
        edibleOil: {
          name: "Edible Oil Bottles",
          sizes: ["500ml", "1L", "2L", "5L", "15L"],
          // Each size has: image, features, applications
        },
        water: {
          name: "Water Bottles",
          sizes: ["250ml", "500ml", "1L", "2L"],
        },
        beverages: {
          name: "Beverage Bottles",
          sizes: ["200ml", "300ml", "500ml", "1L"],
        },
        cleaningSolutions: {
          name: "Cleaning Solution Bottles",
          sizes: ["500ml", "1L", "2L", "5L"],
        }
      }
    },
    jars: {
      name: "PET Jars",
      route: "/products/pet-jars",
      categories: {
        dryFruits: { name: "Dry Fruits Jars", sizes: [...] },
        pickles: { name: "Pickle Jars", sizes: [...] },
        ghee: { name: "Ghee Jars", sizes: [...] }
      }
    }
  },
  // PP Products
  pp: {
    bottleClosures: {
      name: "Bottle Closures",
      route: "/products/pp-bottle-closures",
      // Types and sizes
    },
    jarClosures: {
      name: "Jar Closures",
      route: "/products/pp-jar-closures",
      // Types and sizes
    }
  }
};
```

---

## Navigation Updates

The header will get a dropdown menu:

```text
Products (dropdown)
  +-- PET Bottles
  +-- PET Jars
  +-- PP Bottle Closures
  +-- PP Jar Closures
```

---

## Technical Notes

1. **Placeholder Images**: Will use a consistent placeholder style with product type icons until you upload real photos

2. **Routing**: Uses React Router for navigation between pages

3. **Configuration-Driven**: All product data remains in `siteConfig.ts` - you can easily add/remove sizes or categories by editing the config

4. **Responsive Design**: Product grids will adapt from 1 column (mobile) to 4 columns (desktop)

5. **Tab Navigation**: On individual product pages, tabs allow quick switching between application types (Oil, Water, etc.)

---

## Implementation Order

1. Update `siteConfig.ts` with new product catalog structure
2. Create shared components (ProductCategoryCard, ProductGrid, ProductCard)
3. Create the 4 product category pages
4. Update routing in App.tsx
5. Modify ProductsSection for home page category display
6. Update Header with dropdown navigation
7. Update Footer with new product links
