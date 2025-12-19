// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpg"
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";





// const Header = () => {
//   return (
//    <>
//    <header className="bg-white shadow-md  top-0 left-0 w-full z-50">
//   <div className=" mx-0 flex items-center justify-between p-5">

//     {/* Logo + Title */}
//     <div className="flex items-center space-x-3 mx-0">
//       <img src={logo} alt="logo" className="w-12 h-12 object-contain" />

//       <h1 className="text-2xl font-bold text-blue-600">
//         E-COMMERCE
//       </h1>
//     </div>

//     {/* Navigation */}
//     <nav className="flex items-center space-x-8 ">
//       <Link
//         to="/about"
//         className="text-gray-700 hover:text-blue-600 transition"
//       >
//         About
//       </Link>

//       <Link
//         to="/contact"
//         className="text-gray-700 hover:text-blue-600 transition"
//       >
//         Contact
//       </Link>

//       <Link
//         to="/login"
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Login
//       </Link>
// {/* register button */}
//       <Link
//         to="/register"
//         className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Register
//       </Link>

      
//     </nav>

//   </div>
// </header>

//     {/* <Router>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router> */}
//     </>
//   );
// };

// export default Header;







// 2
// src/components/Header.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//   return (
//     <header className="w-full py-6 px-10 flex items-center justify-between 
//                       bg-black/80 backdrop-blur-sm border-b border-yellow-700/20">

//       {/* Logo */}
//       <h1 className="text-2xl font-serif font-bold 
//                      text-transparent bg-clip-text 
//                      bg-gradient-to-r from-yellow-300 to-yellow-500 tracking-wide">
//         LUXE WATCHES
//       </h1>

//       {/* Navigation */}
//       <nav className="flex gap-10 text-lg font-medium">
//         <Link
//           to="/"
//           className="text-yellow-400 hover:text-yellow-300 transition-all duration-300"
//         >
//           Home
//         </Link>

//         <Link
//           to="/shop"
//           className="text-yellow-400 hover:text-yellow-300 transition-all duration-300"
//         >
//           Shop
//         </Link>

//         <Link
//           to="/about"
//           className="text-yellow-400 hover:text-yellow-300 transition-all duration-300"
//         >
//           About
//         </Link>

//         <Link
//           to="/contact"
//           className="text-yellow-400 hover:text-yellow-300 transition-all duration-300"
//         >
//           Contact
//         </Link>
//       </nav>
//     </header>
//   );
// }


// 3
// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ---------------------- HEADER BAR ---------------------- */}
      <header
        className="
        w-full py-6 px-10 flex items-center justify-between
        bg-black/70 backdrop-blur-xl
        border-b border-yellow-700/20
        animate-fadeDown
      "
      >
        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1 group cursor-pointer"
        >
          <span className="w-7 h-[3px] bg-yellow-400 rounded-lg group-hover:bg-yellow-300 transition-all"></span>
          <span className="w-7 h-[3px] bg-yellow-400 rounded-lg group-hover:bg-yellow-300 transition-all"></span>
          <span className="w-7 h-[3px] bg-yellow-400 rounded-lg group-hover:bg-yellow-300 transition-all"></span>
        </button>

        {/* Logo */}
     
     
        <h1
          className="
          text-4xl font-serif font-bold tracking-wide
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500
          animate-goldShine
        "
        >
          LARVEX
        </h1>

        {/* Navigation (Desktop Only) */}
        <nav className="hidden md:flex gap-10 text-lg font-medium">
           <Link
          to="/" 
          className=" text-yellow-400 hover:text-yellow-300 transition-all duration-300
              relative group
              animate-slideIn"
        > <span
                  className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-yellow-300 to-yellow-500
                group-hover:w-full transition-all duration-300
              "
                />
          Home
        </Link>
          {[ "Shop", "WishList", "Cart", "Login"].map(
            (item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase()}`}
                className="
              text-yellow-400 hover:text-yellow-300 transition-all duration-300
              relative group
              animate-slideIn
            "
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                {item}

                {/* Gold underline animation */}
                <span
                  className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-yellow-300 to-yellow-500
                group-hover:w-full transition-all duration-300
              "
                />
              </Link>
            )
          )}
        </nav>
      </header>

      {/* ---------------------- SIDE MENU (DRAWER) ---------------------- */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-black/95 
          border-r border-yellow-700/30 
          backdrop-blur-xl shadow-xl
          transform ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-500
          z-50
        `}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-yellow-400 text-2xl hover:text-yellow-300"
        >
          ✕
        </button>

        {/* Sidebar Navigation */}
        <div className="mt-20 flex flex-col gap-6 px-10">
           <Link
          to="/" 
          className=" text-yellow-400 hover:text-yellow-300 transition-all duration-300
              relative group
              animate-slideIn"
        > 
          Home
        </Link>
          {[ "Shop", "About", "Contact", "Login"].map(
            (item, i) => (
              <Link
                key={i}
                to={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="
                  text-yellow-400 text-lg font-medium
                  hover:text-yellow-200 transition-all
                  animate-slideIn
                "
                style={{ animationDelay: `${0.12 * i}s` }}
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* ---------------------- ADMIN BUTTON ---------------------- */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <Link
            to="/adminlogin"
            onClick={() => setMenuOpen(false)}
            className="
              px-8 py-3 rounded-full font-semibold text-black
              bg-gradient-to-r from-yellow-400 to-yellow-600
              shadow-xl hover:shadow-yellow-500/50 hover:scale-105
              transition-all duration-300
              animate-goldPulse
            "
          >
            ADMIN PANEL
          </Link>
        </div>
      </div>
    </>
  );
}
