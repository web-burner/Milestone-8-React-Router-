import { Link } from "react-router";
import Banner from "../Component/banner/Banner";
import TrendingApp from "../Component/trendingApps/TrendingApp";
import { useFetchData } from "../Hooks/Hooks";
import Spinner from "./Spinner";
const Home = () => {
  const { data, loading } = useFetchData();
  return (
    <div>
      <Banner />
      {loading ? <Spinner /> : <TrendingApp data={data} />}
      <div className=" flex justify-center  p-10">
        <Link className=" bg-violet-500 btn text-white " to={"/apps"}>
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
