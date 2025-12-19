// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className=" bg-gray-900 text-gray-300 py-10 my-0 ">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Brand */}
//         <div>
//           <h2 className="text-2xl font-bold text-white mb-3">ShopEase</h2>
//           <p className="text-sm">
//             Your one-stop shop for all the latest products. Quality and trust guaranteed.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/" className="hover:text-white">Home</Link></li>
//             <li><Link to="/products" className="hover:text-white">Products</Link></li>
//             <li><Link to="/about" className="hover:text-white">About Us</Link></li>
//             <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Customer Service */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
//           <ul className="space-y-2 text-sm">
//             <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
//             <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
//             <li><Link to="/returns" className="hover:text-white">Returns & Refunds</Link></li>
//             <li><Link to="/support" className="hover:text-white">Support</Link></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
//           <p className="text-sm mb-3">Get updates about new products & offers.</p>
//           <div className="flex">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-sm focus:outline-none text-white"
//             />
//             <button className="px-4 py-2 bg-blue-600 rounded-r-md text-white text-sm hover:bg-blue-700">
//               Subscribe
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
//         <p>© {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// 2
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        w-full mt-20 pt-12 pb-6 
        bg-black/80 backdrop-blur-xl 
        border-t border-yellow-700/20
        animate-fadeUp
      "
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* -------- Logo & Description -------- */}
        <div className="flex flex-col gap-3 animate-slideUp">
          <h1
            className="
              text-3xl font-serif font-bold
              text-transparent bg-clip-text 
              bg-gradient-to-r from-yellow-300 to-yellow-500
            "
          >
            LARVEX
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Premium luxury watches crafted with precision, elegance,
            and timeless design. Redefining sophistication for every moment.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-3">
            {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="
                    text-yellow-400 text-2xl cursor-pointer
                    hover:text-yellow-300 transition
                    hover:scale-110 hover:drop-shadow-[0_0_8px_gold]
                  "
                />
              )
            )}
          </div>
        </div>

        {/* -------- Quick Links -------- */}
        <div className="animate-slideUp">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h2>

          <ul className="flex flex-col gap-3 text-gray-300">
            {["Home", "Shop", "About", "Contact", "Login", "Register"].map(
              (item, i) => (
                <li key={i}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="
                      hover:text-yellow-300 transition 
                      hover:translate-x-1 inline-block duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* -------- Contact Info -------- */}
        <div className="animate-slideUp">
          <h2 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-300 mb-2">📍 Chennai, Tamil Nadu, India</p>
          <p className="text-gray-300 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-300">✉️ support@larvex.com</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-400 mt-10 pt-5 border-t border-yellow-700/20">
        © {new Date().getFullYear()} LARVEX — All Rights Reserved
      </div>
    </footer>
  );
}
