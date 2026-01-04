// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;


  const fetchProducts = async () => {
    try {
    const res = await axios.get(`${API_URL}/products`);   
    setProducts(res.data);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // add to cart
const addToCart = async (product) => {
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

  return (

   

//3
<div className="min-h-screen bg-black px-8 py-14">
  {/* 🔥 HEADING */}
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
    {products.map((p, index) => (
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
        {/* WATCH IMAGE WITH GLASS EFFECT */}
        <div
          className="group relative w-full h-[300px] mb-3 rounded-xl overflow-hidden
          bg-gradient-to-b from-[#111] to-[#050505]
          flex items-center justify-center"
        >
          {/* GLASS REFLECTION */}
          <div
            className="absolute inset-0 z-10 pointer-events-none
            opacity-0 group-hover:opacity-100
            transition-all duration-700
            bg-gradient-to-tr from-white/25 via-white/10 to-transparent
            translate-x-[-100%] group-hover:translate-x-[100%]"
          />

          {p.image ? (
            <img
             src={p.image}
              alt={p.name}
              className="h-full object-contain
              transition-transform duration-500
              group-hover:scale-105"
            />
          ) : (
            <span className="text-yellow-500">No Image</span>
          )}
        </div>

        {/* TITLE */}
        <h2 className="text-lg font-semibold text-yellow-400 mb-1 text-center">
          {p.name}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm line-clamp-2 mb-2 text-center">
          {p.description}
        </p>

        {/* PRICE */}
        <p className="text-lg font-bold text-yellow-300 mb-2 text-center">
          ₹ {p.price}
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
    ))}
  </div>
</div>







      )}
    
 

export default Products;