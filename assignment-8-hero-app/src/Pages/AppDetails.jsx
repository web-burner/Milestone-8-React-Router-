import { useLocation, useNavigate } from "react-router";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { toast } from "react-toastify";
import { addToLS, getFromLS } from "../localStorage/localStorage";
import { useState } from "react";
import NotFoundApp from "./NotFoundApp";
import Spinner from "./Spinner";
import { useFetchData } from "../Hooks/Hooks";
const AppDetails = () => {
  const appData = useLocation().state;
  const { loading } = useFetchData();

  const { id, image, title, companyName, size, description, ratings } = appData;

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
    <div className=" min-h-154  bg-base-200 py-5 md:p-0 md:pt-5">
      <div className=" w-11/12 mx-auto flex flex-col md:flex-row gap-5">
        <div>
          <figure className=" p-4 bg-base-300 w-48 md:w-auto rounded-2xl">
            <img
              src={image}
              alt=""
              className=" rounded-2xl h-40 w-40 md:w-60  md:h-60 "
            />
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
          <div className=" flex gap-10 py-5  space-y-3">
            <div className=" space-y-2">
              <p className=" text-3xl font-extrabold text-green-600">
                <IoCloudDownloadOutline />
              </p>
              <p>Downloads</p>
              <p className=" text-4xl font-bold">8M</p>
            </div>
            <div className=" space-y-2">
              <p className="text-3xl font-extrabold text-yellow-400">
                <FaStar />
              </p>
              <p>Average Ratings</p>
              <p className=" text-4xl font-bold">4.9</p>
            </div>
            <div className=" space-y-2">
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
      <div className="md:ml-5 my-2 w-11/12 h-60">
        <ResponsiveContainer width="90%" height="100%">
          <BarChart
            className=" sm:px-5 px-4"
            data={ratings}
            layout="vertical"
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey={"name"} />
            <Bar dataKey="count" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className=" text-2xl font-semibold">Descriptions</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
