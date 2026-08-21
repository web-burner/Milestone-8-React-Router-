import { Link } from "react-router";
import heroImage from "../../assets/hero.png";
import TrustedSection from "./TrustedSection";
const Banner = () => {
  return (
    <div className=" text-center bg-white pt-10">
      <div>
        <div className=" space-y-3 mb-5 p-3 md:p-0">
          <h2 className=" text-3xl md:text-6xl font-bold">
            We Build <br />{" "}
            <span className=" text-violet-500">Productive </span>
            Apps
          </h2>
          <p className=" text-sm text-gray-500 mb-5">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
          <div className=" flex justify-center items-center gap-3">
            <Link
              to={"https://play.google.com/store/games?hl=en"}
              className=" btn border-0 hover:shadow-xl flex justify-center items-center gap-2 bg-base-300"
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
              className=" btn border-0 hover:shadow-xl flex justify-center items-center gap-2 bg-base-300"
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
          <img src={heroImage} className=" w-11/12 " alt="" />
        </div>
        <TrustedSection/>
      </div>
    </div>
  );
};

export default Banner;
