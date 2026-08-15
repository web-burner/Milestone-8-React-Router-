import Product from "../product/Product";

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div className=" grid grid-cols-3 gap-5 mt-5">
      {featuredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
