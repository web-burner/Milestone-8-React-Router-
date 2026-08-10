import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center nav-btn hidden lg:flex">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"mobile"}>Mobile</NavLink>
        <NavLink to={"laptop"}>Laptop</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/users2"}>Users2</NavLink>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </nav>
  );
};

export default Navbar;
