import { CiStar } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useFetchData } from "../../Hooks/Hooks";
import Spinner from "../../Pages/Spinner";

const TrendApp = ({ app }) => {
  const { loading } = useFetchData();
  const { id, image, title, ratingAvg, downloads } = app;

  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        loading ? <Spinner /> : navigate(`/appDetails/${id}`, { state: app })
      }
      className=" shadow-xl bg-base-200 rounded-2xl p-3 "
    >
      <img
        className=" 
        rounded-lg
        min-h-32 min-w-32
        md:h-auto md:w-50
        lg:h-auto lg:w-60
       2xl:w-70
        "
        src={image}
        alt="App Image"
      />
      <h1 className=" text-lg font-bold my-3">{title}</h1>
      <div className=" flex justify-between items-center rounded-md">
        <p className=" p-1 bg-green-200 text-green-600 flex justify-center items-center gap-1 rounded-md">
          {" "}
          <IoCloudDownloadOutline /> {downloads}
        </p>
        <p className=" p-1 bg-red-200 rounded-md flex items-center justify-center gap-1 text-red-600">
          {" "}
          <CiStar />
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default TrendApp;
