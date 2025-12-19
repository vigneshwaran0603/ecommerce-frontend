// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   // Fix: handle input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Fix: handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/login", {
//         email: form.email,
//         password: form.password,
//       });

//       alert("Login successful!");
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//         {error && <p className="text-red-500 text-center mb-3">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           <div>
//             <label className="block mb-1 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           New User?{" "}
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Create an Account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// Login Page

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email: form.email,
        password: form.password,
      });

      alert("Login successfully!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div
      className="
        w-full h-screen flex justify-center items-center 
        bg-black text-white 
        bg-cover bg-center 
        relative
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=2000&q=90')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl"></div>

      {/* LOGIN CARD */}
      <form
        onSubmit={handleLogin}
        className="
          relative z-10 w-96 p-10 
          bg-black/60 border border-yellow-600/30 rounded-2xl 
          shadow-xl animate-slideUp
        "
      >
        <h2
          className="
            text-3xl font-serif font-bold text-center 
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500
            animate-fadeDown
          "
        >
          LOGIN
        </h2>

        {error && (
          <p className="text-red-500 mt-3 mb-2 text-center animate-fadeUp">
            {error}
          </p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="
            w-full mt-6 p-3 rounded-lg 
            bg-black/40 border border-yellow-600/40 
            text-white placeholder-gray-300 
            focus:border-yellow-400 outline-none
            transition-all duration-300
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="
            w-full mt-4 p-3 rounded-lg 
            bg-black/40 border border-yellow-600/40 
            text-white placeholder-gray-300 
            focus:border-yellow-400 outline-none
            transition-all duration-300
          "
        />

        {/* Login Button */}
        <button
          className="
            w-full mt-6 py-3 rounded-full
            bg-gradient-to-r from-yellow-400 to-yellow-600 
            text-black font-semibold 
            shadow-lg hover:scale-105 
            transition-all duration-300
          "
        >
          Login
        </button>

        {/* Register Redirect */}
        <p
          className="
            text-center mt-4 text-gray-300 
            animate-fadeUp
          "
        >
          New user?{" "}
          <Link
            to="/register"
            className="
              text-yellow-400 hover:text-yellow-300 
              font-semibold underline-offset-2 hover:underline
              transition-all duration-300
            "
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//    const [form, setForm] = useState({ email: "", password: "" });
//    const [error, setError] = useState("");

//    const handleLogin = async (e) => {
//      e.preventDefault();
//      try {
//        const res = await axios.post("http://localhost:5000/auth/login", {
//         email: form.email,
//         password: form.password,
//       });
//        alert("Login successfully!");
//        setError("");
//      } catch (err) {
//        setError(err.response?.data?.message || "Login failed!");
//      }
//    };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 mb-4 border rounded-lg"
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 mb-4 border rounded-lg"
//             onChange={handleChange}
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//           >
//             Login
//           </button>
//         </form>

//         {/* Redirect to Register */}
//         <p className="text-center mt-4 text-gray-600">
//           New user?{" "}
//           <Link to="/register" className="text-blue-600 hover:underline">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

