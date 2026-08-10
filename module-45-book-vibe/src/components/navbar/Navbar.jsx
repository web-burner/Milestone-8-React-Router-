import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center nav-btn flex gap-5">
        <NavLink className={'btn bg-transparent border-transparent shadow-none rounded-full'} to={"/"}>Home</NavLink>
        <NavLink className={'btn bg-transparent border-transparent shadow-none rounded-full'} to={"/listedBooks"}>Listed Books</NavLink>
        <NavLink className={'btn bg-transparent border-transparent shadow-none rounded-full'} to={"/pages"}>Pages to Read</NavLink>
      </div>
      <div className="navbar-end flex gap-3">
        <NavLink className={'btn border-transparent shadow-none rounded-full bg-teal-600 text-white'}>Sign In</NavLink>
        <NavLink className={'btn border-transparent shadow-none rounded-full bg-green-600 text-white'}>Sign Up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
