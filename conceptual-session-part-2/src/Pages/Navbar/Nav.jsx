import { Link, NavLink } from "react-router";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link to={'/'} className="btn btn-ghost text-xl">Home Decor</Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allProducts"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}>Cart</NavLink>
          </li>
          <li>
            <NavLink to={"/login-form"}>Log In</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
