import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import { useFetchData } from "../Hooks/Hooks";
import Spinner from "../Pages/Spinner";

const Root = () => {
  const { loading } = useFetchData();

  return loading ? (
    <Spinner/>
  ) : (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Root;
