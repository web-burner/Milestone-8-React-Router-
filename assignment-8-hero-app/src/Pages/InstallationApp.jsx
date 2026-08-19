import { getFromLS, removeFromLS } from "../localStorage/localStorage";
import InstalledApp from "../Component/InstalledApp";
import { useState } from "react";
import { toast } from "react-toastify";
import NotInstalled from "./NotInstalled";

const InstallationApp = () => {
  const data = getFromLS();
  const [apps, setApps] = useState(data);
  const [sort, setSort] = useState("");
  const handleSort = () => {
    
    if (sort === "asc") {
      const sorted = [...apps].sort((a, b) => b.ratingAvg - a.ratingAvg);
      setApps(sorted);
    }
    if (sort === "desc") {
      const sorted = [...apps].sort((a, b) => b.size - a.size);
      setApps(sorted);
    }
  };

  const handleRemove = (id,title) => {
    const updatedData = apps.filter((app) => app.id !== id);
    setApps(updatedData);
    removeFromLS(id)
    toast(`${title} uninstalled successfully!`)
  };
  return (
    apps.length === 0 ? <NotInstalled/> :
    <div className=" min-h-162.5  w-10/12 mx-auto p-10">
      <div className=" text-center">
        <h1 className=" text-3xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="">
        <div className=" flex justify-between mb-5">
          <p>({apps.length}) App Found</p>

          <select
            defaultValue={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select"
          >
            <option disabled={true}>Sort By</option>
            
            <option onClick={handleSort} value={"asc"}>
              Top Rated
            </option>
            <option onClick={handleSort} value={"desc"}>
              Size
            </option>
          </select>
        </div>
        <div>
          {apps.map((app) => (
            <InstalledApp app={app} key={app.id} handleRemove={handleRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationApp;
