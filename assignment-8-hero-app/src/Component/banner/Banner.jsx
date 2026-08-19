import { Link } from "react-router";
import heroImage from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className=" text-center bg-base-200 pt-10">
      <div>
        <div className=" space-y-3 mb-5">
          <h2 className=" text-6xl font-bold">
            We Build <br />{" "}
            <span className=" text-violet-500">Productive </span>
            Apps
          </h2>
          <p>
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className=" flex justify-center items-center gap-3">
            <Link
              to={"https://play.google.com/store/games?hl=en"}
              className=" btn flex justify-center items-center gap-2 bg-white"
            >
              <img
                className=" h-7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi792B_OOJ-n8Tqtl9Fje1bOBn2IbQU8t28nPZvYSWEQ&s=10"
                alt="Google Play Store"
              />
              <p>Google Play</p>
            </Link>
            <Link
              to={"https://apps.apple.com"}
              className=" btn flex justify-center items-center gap-2 bg-white"
            >
              <img
                className=" h-7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ54OuVFeDFoct9KGhaCo_xtt2ypg68wJYY_0THPFvmZQ&s=10"
                alt="Apple App Store"
              />
              <p>App Store</p>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center">
          <img src={heroImage} alt="" />
        </div>
        <div className=" bg-linear-60 from-violet-900 to-violet-500 text-white py-10">
          <h2 className=" text-4xl font-bold">
            Trusted by Millions, Built for You
          </h2>
          <div className=" flex justify-center items-center mt-5 gap-30">
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
      </div>
    </div>
  );
};

export default Banner;
