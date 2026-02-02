import ProductPageLayout from "@/components/ProductPageLayout";
import { getProductById } from "@/config/productCatalog";

const PpBottleClosures = () => {
  const product = getProductById("pp-bottle-closures");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPageLayout product={product} />;
};

export default PpBottleClosures;
