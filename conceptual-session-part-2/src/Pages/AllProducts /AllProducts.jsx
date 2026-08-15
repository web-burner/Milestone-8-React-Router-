import Product from "../product/Product";

const AllProducts = ({ products }) => {
  return products.length === 0 ? (
    <div className=" flex justify-center items-center h-130 text-4xl text-gray-400 font-bold">
      <p>Products Not Found</p>
    </div>
  ) : (
    <div className=" grid grid-cols-3 gap-4 mt-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
