import { CiStar } from "react-icons/ci";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

const TrendApp = ({ app }) => {
  const { id,image, title, ratingAvg, downloads } = app;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/appDetails/${id}`,{state: app})}
      className=" shadow-md bg-base-200 rounded-2xl p-3 "
    >
      <img className=" rounded-lg h-74 w-74" src={image} alt="App Image" />
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
