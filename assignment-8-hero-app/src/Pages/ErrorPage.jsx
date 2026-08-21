import { useNavigate } from "react-router";
import appError from "../assets/error-404.png";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className=" p-10  flex flex-col justify-center items-center min-h-height">
      <figure>
        <img src={appError} alt="" />
      </figure>
      <h2 className=" text-3xl font-bold mt-5">Oops, page not found!</h2>
      <p className=" text-sm text-gray-400">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate(-1)}
        className=" mt-5 btn bg-violet-600 text-white"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
