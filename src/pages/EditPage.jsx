import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });
  const navigate = useNavigate();
  let { id } = useParams();
  const url = `http://localhost:3000/api/products/${id}`;

  const getProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      // console.log(response);
      setProduct({
        name: response.data.name,
        price: response.data.price,
        quantity: response.data.quantity,
        image: response.data.image,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
  };

  useEffect(() => {
    getProduct();
  }, []);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.put(`http://localhost:3000/api/products/${id}`, product);
      toast.success("Update product Successfully", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
  };

  return (
    <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded-lg mt-6">
      <h2 className="font-semibold text-2xl mb-4 block text-center">
        Update a Product
      </h2>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <form onSubmit={updateProduct} action="">
            <div className="space-y-2">
              <div>
                <label className="font-semibold ">Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  value={product.name}
                  className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
                  placeholder="Enter Name"
                />
              </div>

              <div>
                <label className="font-semibold ">Price</label>
                <input
                  type="number"
                  onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                  }
                  value={product.price}
                  className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
                  placeholder="Enter Price"
                />
              </div>

              <div>
                <label className="font-semibold ">Quantity</label>
                <input
                  type="number"
                  onChange={(e) =>
                    setProduct({ ...product, quantity: e.target.value })
                  }
                  value={product.quantity}
                  className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <label className="font-semibold ">Image URL</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setProduct({ ...product, image: e.target.value })
                  }
                  value={product.image}
                  className="w-full block border p-3 text-gray-700 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400 "
                  placeholder="Enter Image URL"
                />
              </div>

              <div>
                {!isLoading && (
                  <button className="block w-full mt-6 hover:bg-blue-500 bg-blue-800 text-white rounded-sm font-semibold py-2 px-4">
                    Update
                  </button>
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPage;
