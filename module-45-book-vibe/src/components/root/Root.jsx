import { Outlet, useNavigation } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Spinner from "../../Pages/Spinner";
import {ToastContainer} from 'react-toastify';
const Root = () => {
  const location = useNavigation();
    const isLocating = Boolean(location.location)
  return (<div>
    {
isLocating && <Spinner/>
    }
            <Navbar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>)
};

export default Root;
