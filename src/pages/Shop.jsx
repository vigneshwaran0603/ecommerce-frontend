// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ⚠️ Fallback added to prevent crash
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";

  // 🔐 SAFE IMAGE HANDLER
  const getImageUrl = (image) => {
    if (typeof image !== "string") return "/no-image.png";
    if (image.startsWith("http")) return image;
    return `https://ecommerce-backend-3-7f0t.onrender.com${image}`;
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://ecommerce-backend-3-7f0t.onrender.com/products"
      );

      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 🛒 SAFE ADD TO CART (NO CRASH)
  const addToCart = async (product) => {
    if (!product?._id) return;

    try {
      const res = await axios.post(`${API_URL}/cart`, {
        productId: product._id,
        quantity: 1,
      });

      if (res?.data?.success) {
        alert("Product added to cart!");
        navigate("/cart");
      } else {
        alert(res?.data?.message || "Failed to add to cart");
      }
    } catch (err) {
      console.error("Add Cart Error:", err);
      alert("Failed to add product to cart");
    }
  };

  return (
    <div className="min-h-screen bg-black px-8 py-14">
      {/* HEADING */}
      <h1
        className="text-center text-4xl md:text-5xl font-extrabold
        text-transparent bg-clip-text
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300
        drop-shadow-[0_0_20px_rgba(255,215,0,0.6)]
        tracking-widest mb-16"
      >
        LARVEX PREMIUM COLLECTION
      </h1>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-13 gap-y-20 justify-center">
        {Array.isArray(products) && products.length === 0 && (
          <p className="text-gray-400 text-center col-span-full">
            No products found
          </p>
        )}

        {Array.isArray(products) &&
          products.map((p, index) => {
            if (!p || !p._id) return null;

            return (
              <div
                key={p._id}
                className="relative bg-gradient-to-b from-gray-900 to-black
                border border-yellow-600/30 rounded-2xl p-3
                shadow-[0_0_12px_rgba(255,215,0,0.25)]
                hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]
                hover:-translate-y-2 transition-all duration-300
                animate-slideUp
                w-[340px] mx-auto"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* IMAGE */}
                <div
                  className="group relative w-full h-[300px] mb-3 rounded-xl overflow-hidden
                  bg-gradient-to-b from-[#111] to-[#050505]
                  flex items-center justify-center"
                >
                  <img
                    src={getImageUrl(p.image)}
                    alt={p.name || "product"}
                    className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/no-image.png";
                    }}
                  />
                </div>

                {/* TITLE */}
                <h2 className="text-lg font-semibold text-yellow-400 mb-1 text-center">
                  {p.name || "No name"}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm line-clamp-2 mb-2 text-center">
                  {p.description || "No description"}
                </p>

                {/* PRICE */}
                <p className="text-lg font-bold text-yellow-300 mb-2 text-center">
                  ₹ {p.price ?? 0}
                </p>

                {/* VIEW DETAILS */}
                <center>
                  <button
                    className="tracking-wider block mx-auto w-[50%] py-1 font-semibold rounded-xl
                    text-yellow-500 hover:shadow-[0_0_18px_rgba(255,215,0,1)]
                    hover:scale-[1.05] transition-all duration-300"
                    onClick={() => navigate(`/watchdetails?id=${p._id}`)}
                  >
                    VIEW DETAILS →
                  </button>
                </center>

                {/* ADD TO CART */}
                <button
                  className="block mx-auto w-[50%] py-2 mt-3 font-semibold rounded-xl
                  bg-gradient-to-r from-yellow-600 to-yellow-400
                  text-black hover:shadow-[0_0_18px_rgba(255,215,0,1)]
                  hover:scale-[1.05] transition-all duration-300"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
