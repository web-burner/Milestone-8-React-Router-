import { useLoaderData } from "react-router";
import Cards from "../../Pages/cards/Cards";
import Banner from "../banner/Banner";

const Home = () => {
  const data = useLoaderData().data;

  return (
    <div>
      <Banner />
      <h2 className=" text-2xl font-bold text-center my-10">Books</h2>
      <Cards data={data} />
    </div>
  );
};

export default Home;
