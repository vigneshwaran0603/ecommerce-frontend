import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UpdateProduct() {
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`);
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-black px-6 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-center text-5xl font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]
      mb-14 tracking-wider animate-fadeIn">
        LARVEX PRODUCT MANAGER
      </h1>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={product._id}
            className="relative bg-gradient-to-b from-gray-900 to-black border border-yellow-600/40 
          rounded-2xl p-5 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.7)]
          hover:scale-105 transition-all duration-300 group animate-slideUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* GOLD TOP EDGE LIGHT */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600"></div>

            {/* PRODUCT IMAGE */}
            <div className="w-full h-56 rounded-xl overflow-hidden bg-black/60 mb-4 border border-yellow-500/30">
              {product.image ? (
                <img
               
                src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              ) : (
                <div className="flex items-center justify-center text-yellow-500 h-full">
                  No Image
                </div>
              )}
            </div>

            {/* PRODUCT NAME */}
            <h2 className="text-2xl font-bold text-yellow-400 drop-shadow mb-2">
              {product.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-sm line-clamp-2 mb-4">
              {product.description}
            </p>

            {/* PRICE */}
            <p className="text-xl font-bold text-yellow-300 mb-1">
              ₹ {product.price}
            </p>

            {/* CATEGORY */}
            <p className="text-sm text-yellow-500 mb-6">Category: {product.category}</p>

            {/* UPDATE BUTTON */}
            <button
              onClick={() => navigate(`/update/${product._id}`)}
              className="w-full py-3 font-semibold rounded-xl 
              bg-gradient-to-r from-yellow-600 to-yellow-400 text-black
              hover:shadow-[0_0_20px_rgba(255,215,0,0.9)] 
              hover:scale-105 transition-all duration-300"
            >
              UPDATE PRODUCT
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
