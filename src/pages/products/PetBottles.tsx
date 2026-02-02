import ProductPageLayout from "@/components/ProductPageLayout";
import { getProductById } from "@/config/productCatalog";

const PetBottles = () => {
  const product = getProductById("pet-bottles");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPageLayout product={product} />;
};

export default PetBottles;
