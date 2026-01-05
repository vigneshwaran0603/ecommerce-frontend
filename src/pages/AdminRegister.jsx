import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AdminRegister = () => {
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";
    const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
      await axios.post(`${API_URL}/admin/register`, {
        name: form.username,
        email: form.email,
        password: form.password,
      });
       alert("Register successfully!");
    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

// 2
// const AdminRegister = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/admin/register", {
//         name: form.username,
//         email: form.email,
//         password: form.password,
//       });
//        alert("Register successfully!");

//       setError("");

//       // ⭐ Redirect to Login
//       // navigate("/login");

//     } catch (err) {
//       setError(err.response?.data?.message || "Registration failed!");
//     }
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      
      <div className="bg-opacity-20 backdrop-blur-xl bg-zinc-900 p-10 rounded-3xl border border-yellow-500/30 w-full max-w-md animate-fadeUp shadow-[0_0_30px_rgba(255,215,0,0.2)]">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6 tracking-wide">
          Admin Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Username */}
          <input
            type="text"
            name="username"
            value={form.username}
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-yellow-500/40 text-yellow-200 focus:outline-none focus:border-yellow-500 transition-all"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-yellow-500/40 text-yellow-200 focus:outline-none focus:border-yellow-500 transition-all"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-black/40 border border-yellow-500/40 text-yellow-200 focus:outline-none focus:border-yellow-500 transition-all"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 glow-gold transition-all"
          >
            Register
          </button>

        </form>

        {/* Redirect to login */}
        <p className="text-center text-gray-300 mt-5">
          Already have an account?{" "}
          <Link
            to="/adminlogin"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            Login here
          </Link>
        </p>

      </div>

    </div>
  );
};

export default AdminRegister;
