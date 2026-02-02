import ProductPageLayout from "@/components/ProductPageLayout";
import { getProductById } from "@/config/productCatalog";

const PpJarClosures = () => {
  const product = getProductById("pp-jar-closures");

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPageLayout product={product} />;
};

export default PpJarClosures;
