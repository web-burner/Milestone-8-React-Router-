import { useLoaderData, useNavigate } from "react-router";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";

const Home = () => {
  const products = useLoaderData();
  const featuredProducts = products.slice(0,6)
  const navigate = useNavigate()

  return (
    <div>
      <div className=" flex justify-between items-center">
        <h2 className=" text-2xl font-bold">Featured Products</h2>
        <button className=" btn bg-transparent shadow-none " onClick={()=> navigate('/allProducts')}>See All Products</button>
      </div>
      <FeaturedProducts featuredProducts={featuredProducts} />
    </div>
  );
};

export default Home;
