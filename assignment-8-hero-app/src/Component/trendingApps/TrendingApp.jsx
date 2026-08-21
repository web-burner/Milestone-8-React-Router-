import TrendApp from "./TrendApp";

const TrendingApp = ({ data }) => {
  const appData = data.slice(0, 8);
  return (
    <div className=" text-center pt-10">
      <h2 className=" text-3xl font-bold">Trending Apps</h2>
      <p className=" text-gray-400 mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className=" 
      grid grid-cols-2 
      sm:grid-cols-3
      md:grid-cols-4 md:p-5 
      lg:grid-cols-4 lg:w-11/12
      mx-auto 
      gap-4 p-3 mt-5">
        {appData.map((app) => (
          <TrendApp key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default TrendingApp;
