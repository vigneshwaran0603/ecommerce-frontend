// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const addtoCart = async (product) => {

   const API_URL = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.post(`${API_URL}/cart`, {
        productId: product._id,
        quantity: 1,
      });

      if (res.data.success) {
        alert("Product added to cart!");
        navigate("/cart");
      } else {
        alert(res.data.message || "Failed to add to cart");
      }
    } catch (err) {
      console.error("Add Cart Error:", err);
      alert("Failed to add product to cart");
    }
  };
const ProductDetails = () => {
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";
  const navigate = useNavigate();
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/product?id=${id}`);
        setProduct(res.data);
      } catch {
        setError("Unable to fetch product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen bg-black text-gold flex items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-black text-red-500 flex items-center justify-center">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* WATCH IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>
            <img
              src={product.image}
              alt={product.name}
              className="relative w-[340px] h-[340px] object-cover rounded-2xl
                         "
            />
          </div>
        </motion.div>

        {/* DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm mb-3">
            Larvex Luxury Watches
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-5">
            {product.name || "Larvex Chrono Gold Edition"}
          </h1>

          <p className="text-gray-400 leading-relaxed mb-8">
            {product.description ||
              "A statement of precision and prestige. Crafted for individuals who value excellence, the Larvex Chrono Gold Edition blends timeless design with modern engineering."}
          </p>

          {/* SPECIFICATIONS */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {[
              ["Movement", "Automatic"],
              ["Glass", "Sapphire Crystal"],
              ["Water Resistance", "50m"],
              ["Strap", "Italian Leather"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="border border-white/10 rounded-xl p-4
                           hover:border-[#D4AF37]/60 transition"
              >
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <p className="text-sm font-medium text-white">{value}</p>
              </div>
            ))}
          </div>

          {/* PRICE */}
          <p className="text-3xl font-semibold text-[#D4AF37] mb-8">
            ₹ {product.price}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-5">
            <button
             onClick={() => addtoCart(product)}
              className="px-8 py-3 rounded-xl bg-[#D4AF37] text-black
                         font-semibold tracking-wide
                         hover:bg-[#e6c45a] transition-all"
            >
              Add to Cart
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 rounded-xl border border-white/20
                         hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
            >
              Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
