import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();     // 🔥 GET ID FROM URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const [preview, setPreview] = useState("");


  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();

      setProduct({
        name: data.name,
        price: data.price,
        category: data.category,
        description: data.description,
        image: null,
      });

      setPreview(`http://localhost:5000${data.image}`);
    };

    fetchProduct();
  }, [id]);


  // Handle new image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
    setPreview(URL.createObjectURL(file));
  };


  // Update product API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("description", product.description);

    if (product.image) {
      formData.append("image", product.image);
    }

    await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      body: formData,
    });

    alert("Product Updated Successfully!");
    navigate("/shop");
  };


  return (
    <div className="p-6 max-w-xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">Update Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          className="w-full p-2 border rounded"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
        />

        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        <div>
          <label className="block font-semibold">Image</label>
          <input type="file" onChange={handleImageChange} />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 mt-3 object-cover border rounded"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 px-4 rounded"
        >
          Update
        </button>

      </form>

    </div>
  );
};

export default UpdateProduct;