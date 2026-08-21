
const TrustedSection = () => {
    return (
        <div className=" bg-linear-60 from-violet-900 to-violet-500 text-white md:py-10 p-10 md:p-0">
          <h2 className=" text-4xl font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className=" flex md:flex-row flex-col justify-center items-center mt-5 md:gap-30">
            <div>
              <p>Total Downloads</p>
              <p className=" text-4xl font-bold my-5">29.6M</p>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <p className=" text-4xl font-bold my-5">906K</p>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <p className=" text-4xl font-bold my-5">132+</p>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
    );
};

export default TrustedSection;