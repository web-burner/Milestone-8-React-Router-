import { useLocation, useNavigate } from "react-router";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { toast } from "react-toastify";
import { addToLS, getFromLS } from "../localStorage/localStorage";
import { useState } from "react";
import NotFoundApp from "./NotFoundApp";
import { useFetchData } from "../Hooks/Hooks";
import Spinner from "./Spinner";
const AppDetails = () => {
  const appData = useLocation().state;
  const { id, image, title, companyName, size, description, ratings } = appData;
  const { loading } = useFetchData();

  const company = companyName.toLowerCase().split(" ").join("");
  const navigate = useNavigate();
  const exist = getFromLS().some((app) => app.id === id);
  const [install, setInstall] = useState(exist);

  const handleDownload = (app) => {
    const { title } = app;
    const savedData = getFromLS();
    const exist = savedData.some((d) => d.id === app.id);

    if (!exist) {
      app["downloaded"] = true;
      toast(`${title} is Downloading Successfully!`);
      addToLS([...savedData, app]);
      setInstall(true);
    }
  };
  return !appData ? (
    <NotFoundApp />
  ) : loading ? (
    <Spinner />
  ) : (
    <div className=" min-h-162.5  bg-base-200 pt-10">
      <div className=" w-11/12 mx-auto flex gap-5">
        <div>
          <figure className=" p-4 bg-base-300 rounded-2xl">
            <img src={image} alt="" className=" rounded-2xl w-60 h-60 " />
          </figure>
        </div>
        <div>
          <div className=" pb-3 border-b border-gray-400 ">
            <h1 className=" text-2xl font-bold">{title}</h1>
            <h2>
              Developed By{" "}
              <span className=" text-violet-600 font-semibold">
                {company}.io
              </span>
            </h2>
          </div>
          <div className=" flex gap-10 py-5">
            <div>
              <p className=" text-3xl font-extrabold text-green-600">
                <IoCloudDownloadOutline />
              </p>
              <p>Downloads</p>
              <p className=" text-4xl font-bold">8M</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-yellow-400">
                <FaStar />
              </p>
              <p>Average Ratings</p>
              <p className=" text-4xl font-bold">4.9</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-violet-500">
                <MdRateReview />
              </p>
              <p>Total Reviews</p>
              <p className=" text-4xl font-bold">54K</p>
            </div>
          </div>
          <button
            disabled={install}
            onClick={() => handleDownload(appData)}
            className=" btn bg-green-600 text-white"
          >
            {install ? "Installed" : `Install Now(${size}MB)`}
          </button>
          <button
            onClick={() => navigate(-1)}
            className=" btn bg-violet-600 text-white ml-1"
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="   ml-10 my-5">
        <BarChart width={600} height={200} data={ratings} layout="vertical">
          <XAxis type="number" />
          <YAxis type="category" dataKey={"name"} />
          <Bar dataKey="count" fill="green" />
        </BarChart>
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className=" text-2xl font-semibold">Descriptions</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
