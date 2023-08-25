import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { VITE_BACKEND_URL } from "../main";

const Product = ({ product, getProducts }) => {
  const { _id, image, name, price, quantity } = product;

  const deleteProduct = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${VITE_BACKEND_URL}/api/products/${_id}`);
        getProducts();
        toast.success("Delete product Successfully", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="bg-slate-100 p-5 rounded-lg shadow-lg">
      <img
        className="h-72 w-full rounded-lg mb-4 mx-auto"
        src={image}
        alt={`${name}-image`}
      />
      <div>
        <h4 className="h-4 font-semibold my-2">Name: {name}</h4>
        <h5 className="h-3 font-semibold my-2">Price: {price} </h5>
        <h5 className="h-3 font-semibold">Quantity: {quantity}</h5>
      </div>
      <div className="mt-2 flex gap-4">
        <Link
          to={`/edit/${_id}`}
          className="inline-block mt-4 w-full text-center shadow-md text-white bg-slate-800 rounded-lg px-4 py-1  font-semibold hover:bg-slate-600 hover:cursor-pointer"
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProduct(_id)}
          className="inline-block mt-4 w-full text-center shadow-md text-white bg-red-800 rounded-lg px-4 py-1  font-semibold hover:bg-red-600 hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  //   image: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   quantity: PropTypes.number.isRequired,
};

export default Product;
