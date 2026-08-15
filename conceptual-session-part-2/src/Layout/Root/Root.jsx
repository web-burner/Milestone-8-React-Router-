import { Outlet } from "react-router";
import Footer from "../../Pages/Footer/Footer";
import Nav from "../../Pages/Navbar/Nav";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className=" w-10/12 mx-auto">
      <Nav />
      <div className=" min-h-140">
        <Outlet />
      </div>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;
