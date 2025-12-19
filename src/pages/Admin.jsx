import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Admin() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // const handleImage = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImagePreview(URL.createObjectURL(file));
  //   }
  // };
 const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      if (image) formData.append("image", image);

      const res = await axios.post("http://localhost:5000/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Product created successfully!");
      alert("Product created successfully!");
      console.log(res.data);

      // Clear form
      setName("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImage(null);
    } catch (error) {
      setMessage(error.response?.data?.error || "Failed to add product");
    }
  };


  // update function
  

  return (
    <div className="min-h-screen bg-black text-white px-10 py-16">

      {/* ADMIN PAGE TITLE */}
      <h1 className="text-4xl font-serif font-bold text-center text-yellow-400 animate-fadeDown">
        Admin Dashboard
      </h1>

      {/* BUTTONS */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => setShowAddForm(true)}
          className="
            px-8 py-3 rounded-full 
            bg-gradient-to-r from-yellow-400 to-yellow-600 
            text-black font-semibold
            shadow-lg hover:scale-105 transition-all duration-300
          "
        >
          Add Product
        </button>

        <Link to={'/updateproduct'}>
        <button
       
          className="
            px-8 py-3 rounded-full border border-yellow-500
            text-yellow-400 font-semibold
            hover:bg-yellow-500 hover:text-black
            shadow-lg transition-all duration-300
          "
        >
          Update Product
        </button>
        </Link>
      </div>

      {/* ADD PRODUCT FORM */}
      {showAddForm && (
        <div
          className="
            mt-14 max-w-2xl mx-auto p-10 rounded-xl 
            bg-black/70 border border-yellow-600/20 shadow-xl
            animate-slideUp
          "
        >
          <h2 className="text-3xl font-serif font-bold text-yellow-400 mb-6 text-center">
            Add New Product
          </h2>

          <form className="flex flex-col gap-6" onSubmit={handleAddProduct}>

            {/* Name */}
            <div>
              <label className="text-lg text-yellow-300">Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full mt-2 p-3 rounded-lg bg-black/50 border border-yellow-600/30
                  text-white focus:border-yellow-500 outline-none
                  transition-all duration-300
                "
                placeholder="Enter product name"
              />
            </div>

            {/* Price */}
            <div>
              <label className="text-lg text-yellow-300">Price</label>
              <input
                type="number"
                value={price}
                 onChange={(e) => setPrice(e.target.value)}
                className="
                  w-full mt-2 p-3 rounded-lg bg-black/50 border border-yellow-600/30
                  text-white focus:border-yellow-500 outline-none
                  transition-all duration-300
                "
                placeholder="Enter price"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-lg text-yellow-300">Category</label>
              <input
                type="text"
                value={category}
                 onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full mt-2 p-3 rounded-lg bg-black/50 border border-yellow-600/30
                  text-white focus:border-yellow-500 outline-none
                  transition-all duration-300
                "
                placeholder="Enter category"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-lg text-yellow-300">Description</label>
              <textarea
              value={description}
               onChange={(e) => setDescription(e.target.value)}
                className="
                  w-full mt-2 p-3 rounded-lg bg-black/50 border border-yellow-600/30
                  text-white focus:border-yellow-500 outline-none
                  transition-all duration-300
                "
                placeholder="Enter description"
                rows={4}
              ></textarea>
            </div>

            {/* Upload Image */}
            <div>
              <label className="text-lg text-yellow-300">Product Image</label>

              {/* <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="
                  w-full mt-2 p-3 rounded-lg bg-black/50 border border-yellow-600/30
                  text-white cursor-pointer
                "
              /> */}
{/* 2 */}
              <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mt-2 p-3 rounded-lg bg-black/50 border border-yellow-600/30
                  text-white cursor-pointer"
        />

              {/* Image Preview */}
              {/* {imagePreview && (
                <img
                  src={imagePreview}
                  className="mt-5 w-40 h-40 object-cover rounded-xl border border-yellow-600/40 shadow-lg animate-fadeUp"
                />
              )} */}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
                mt-6 px-10 py-3 rounded-full 
                bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold
                shadow-lg hover:scale-105 transition-all duration-300
              "
            >
              Submit Product
            </button>
          </form>



          
        </div>
      )}

      {/* Update PRODUCT FORM */}
     



    </div>
  );
}
