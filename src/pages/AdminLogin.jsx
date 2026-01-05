import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";
    const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/admin/login`, form);
      localStorage.setItem("adminToken", res.data.token);
    //   alert("Login successful!");
       navigate("/admin");   // <<< redirect to admin page
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };
// 2

// const AdminLogin = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/admin/login", {
//         email: form.email,
//         password: form.password,
//       });

//       alert("Login successfully!");
//       setError("");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed!");
//     }
//   };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      <div className="bg-opacity-20 backdrop-blur-xl bg-zinc-900 p-10 rounded-3xl border border-yellow-500/30 w-full max-w-md animate-fadeUp shadow-[0_0_30px_rgba(255,215,0,0.2)]">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6 tracking-wide">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-yellow-500/40 text-yellow-200 focus:outline-none focus:border-yellow-500 transition-all"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-yellow-500/40 text-yellow-200 focus:outline-none focus:border-yellow-500 transition-all"
          />

          {/* Button */}
          
          <button
            type="submit"
           
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 glow-gold transition-all"
          >
           
            Login 
          </button>

        </form>

        {/* Redirect to Register */}
        <p className="text-center text-gray-300 mt-5">
          Don't have an account?{" "}
          <Link
            to="/adminregister"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            Register here
          </Link>
        </p>

      </div>

    </div>
  );
};

export default AdminLogin;
