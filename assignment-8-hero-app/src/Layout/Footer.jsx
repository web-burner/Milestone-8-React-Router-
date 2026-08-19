import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="  p-5 bg-blue-950">
      <div className=" flex justify-between w-10/12 mx-auto border-b border-gray-300 pb-2">
        <div className=" flex items-center gap-1 text-xl font-bold text-violet-500 ">
          <img className=" w-10" src={logo} alt="" /> <h1>HERO.IO</h1>
        </div>
        <div className=" text-center text-white">
          <p>Social Link</p>
          <div className=" flex gap-2 items-center">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedin />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
      <div className=" text-center text-white mt-2">
        <p>Copyright © 2025 - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
