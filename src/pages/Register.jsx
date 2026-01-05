import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/register`, {
        name: form.username,
        email: form.email,
        password: form.password,
      });
       alert("Register successfully!");
        setError("");

      // ⭐ Redirect to Login
      // navigate("/login");

    } catch (err) {
      setError(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center 
        bg-black bg-[url('https://images.unsplash.com/photo-1602526218669-6f8f2c582f62?auto=format&fit=crop&q=80')]
        bg-cover bg-center
        relative
      "
    >

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Register Card */}
      <form
        onSubmit={handleRegister}
        className="
          relative z-10 p-10 w-96 rounded-2xl 
          bg-black/60 border border-yellow-600/20 shadow-xl
          animate-fadeUp
        "
      >
        <h2
          className="
            text-3xl font-bold mb-6 text-center 
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500
          "
        >
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-3 animate-pulse">
            {error}
          </p>
        )}

        <input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="
            w-full p-3 mb-4 rounded-lg text-white 
            bg-black/40 border border-yellow-700/30 
            focus:border-yellow-400 outline-none transition
          "
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="
            w-full p-3 mb-4 rounded-lg text-white 
            bg-black/40 border border-yellow-700/30 
            focus:border-yellow-400 outline-none transition
          "
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="
            w-full p-3 mb-6 rounded-lg text-white 
            bg-black/40 border border-yellow-700/30 
            focus:border-yellow-400 outline-none transition
          "
          required
        />

        <button
          className="
            w-full py-3 rounded-lg text-black font-bold
            bg-gradient-to-r from-yellow-300 to-yellow-500 
            hover:from-yellow-400 hover:to-yellow-600 
            transition transform hover:scale-105
          "
        >
          Register
        </button>

        {/* Redirect to Login */}
        <p className="text-center text-yellow-300 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-500 hover:text-yellow-300 underline transition"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
