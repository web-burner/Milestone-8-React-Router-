import { useState } from "react";
import TrendApp from "../Component/trendingApps/TrendApp";
import { useFetchData } from "../Hooks/Hooks";
import Spinner from "./Spinner";

const AllApps = () => {
  const { data, loading } = useFetchData();
  const [search, setSearch] = useState("");
  const term = search.toLowerCase().trim();
  const matchedData = data.filter((app) =>
    app.title.toLowerCase().includes(term),
  );
  return (
    <div className=" min-h-162.5">
      <div className=" pt-5 text-center">
        <h1 className=" text-3xl font-bold">Our All Applications</h1>
        <p className=" text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className=" flex justify-between pt-3 w-11/12 mx-auto mb-5">
        <p>({matchedData.length}) Apps found</p>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
          name="search"
          defaultValue={search}
          placeholder="Search App"
          className=" border p-1 rounded-md border-gray-400 outline-none"
        />
      </div>
      <div className=" grid grid-cols-4 gap-5 w-11/12 mx-auto mb-5">
        {loading ? (
          <Spinner />
        ) : (
          matchedData.map((app) => <TrendApp key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default AllApps;
