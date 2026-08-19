import TrendApp from "./TrendApp";

const TrendingApp = ({data}) => {
    const appData = data.slice(0,8)
    return (
        <div className=" text-center pt-10">
            <h2 className=" text-3xl font-bold">Trending Apps</h2>
            <p className=" text-gray-400 mt-2">Explore All Trending Apps on the Market developed by us</p>
            <div className=" grid grid-cols-4 gap-5 w-10/12 mx-auto mt-5">
                {
                    appData.map(app=> <TrendApp key={app.id} app={app} />)
                }

            </div>
        </div>
    );
};

export default TrendingApp;