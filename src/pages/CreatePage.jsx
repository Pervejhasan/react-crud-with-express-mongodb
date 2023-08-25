import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    if (name === "" || price === "" || quantity === "" || image === "") {
      alert("Please fill out all input completely ");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/api/products", {
        name: name,
        price: price,
        quantity: quantity,
        image: image,
      });
      toast.success(`save ${response.data.name} successfully`, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false);
      navigate("/");
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

      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded-lg mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Create a Product
      </h2>

      <form onSubmit={saveProduct} action="">
        <div className="space-y-2">
          <div>
            <label className="font-semibold ">Name</label>
            <input
              type="text"
              name=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Name"
            />
          </div>

          <div>
            <label className="font-semibold ">Price</label>
            <input
              type="number"
              name=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Price"
            />
          </div>

          <div>
            <label className="font-semibold ">Quantity</label>
            <input
              type="number"
              name=""
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter quantity"
            />
          </div>

          <div>
            <label className="font-semibold ">Image URL</label>
            <input
              type="text"
              name=""
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
              placeholder="Enter Image URL"
            />
          </div>

          <div>
            {!isLoading && (
              <button className="block w-full mt-6 hover:bg-blue-500 bg-blue-800 text-white rounded-sm font-semibold py-2 px-4">
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
