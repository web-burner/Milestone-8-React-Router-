import { Link, NavLink } from "react-router";
// import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar shadow-sm md:px-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"apps"}>Apps</NavLink>
            <NavLink to={"installation"}>Installation</NavLink>
          </ul>
        </div>

        <Link
          to={"/"}
          className={"text-2xl flex items-center justify-center font-bold"}
        >
          {/* <img src={logo} alt="Website Logo" className=" h-10" /> */}
          <div className=" border-y-6 rounded-full h-10 w-10 flex justify-center items-center mr-2">
            <div className=" h-5 w-5 bg-black rounded-full "></div>
          </div>
          <h1 className=" text-violet-500">HERO.IO</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 flex gap-3
         text-md font-bold"
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"apps"}>Apps</NavLink>
          <NavLink to={"installation"}>Installation</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to={"https://github.com/web-burner"}
          className={" btn bg-violet-500 text-white "}
        >
          <FaGithub /> Contribute
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
