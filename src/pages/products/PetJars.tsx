import ProductPageLayout from "@/components/ProductPageLayout";
import { getProductById } from "@/config/productCatalog";

const PetJars = () => {
  const product = getProductById("pet-jars");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPageLayout product={product} />;
};

export default PetJars;
