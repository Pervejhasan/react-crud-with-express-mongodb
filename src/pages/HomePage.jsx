import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="container mx-auto p-2 h-full">
      <Navbar></Navbar>
      <Link
        className="inline-block my-3 shadow-md py-2 px-5 hover:cursor-pointer font-semibold bg-blue-500 text-white rounded-md"
        to={"/create"}
      >
        Create Product
      </Link>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default HomePage;
