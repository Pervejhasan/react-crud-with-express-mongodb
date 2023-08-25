import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" mt-10 px-6 grid text-center lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  gap-4 ">
      {!isLoading ? (
        <div className="flex items-center justify-center h-full">
          <button className="  text-white font-bold py-1 px-8 rounded-full transition duration-300 ease-in-out transform scale-110 mx-auto">
            <svg
              className="animate-spin h-6 w-6 text-blue-500 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="bg-blue-600"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            products.map((product) => (
              <Product
                getProducts={getProducts}
                product={product}
                key={product._id}
              ></Product>
            ))
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
