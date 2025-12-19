import React from "react";
import { motion } from "framer-motion";
import LorvexWatch from "../assets/LorvexWatch.png"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden ">
      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-[#caa65b]/10"></div>

      {/* Background Luxury Pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10?auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          alt: "not work",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 pt-25 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover <span className="text-[#d4af37]">Timeless</span> Luxury
          </h1>

          <p className="mt-5 text-lg text-gray-300 max-w-md">
            Elevate your style with premium handcrafted watches — elegance,
            precision, and luxury combined in every tick.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-8 py-3 rounded-full bg-[#d4af37] text-black font-semibold shadow-lg hover:bg-[#b8932f] transition"
            >
            <Link to='/shop'> Shop Now</Link>
            </motion.button>

           
          </div>
        </motion.div>

        {/* RIGHT WATCH IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
        <img
  src={LorvexWatch}
  alt="Lorvex Watch"
  className="w-[320px] md:w-[450px] drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]"
/>

        </motion.div> 
       



      </div>
    </section>
  );
};

export default HeroSection;
