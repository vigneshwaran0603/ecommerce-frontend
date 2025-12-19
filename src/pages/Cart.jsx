import React, { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch cart from backend
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/cart");
      setCartItems(res.data.cart);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ Delete cart item using your API
  const handleDelete = async (productId) => {
    try {
      const res = await axios.delete(`http://localhost:5000/cart/${productId}`);
      alert(res.data.message);
      fetchCart(); // reload cart
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to remove item");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="border p-4 rounded mb-3 flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{item.productId.name}</p>
                <p>Price: ₹ {item.productId.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹ {item.productId.price * item.quantity}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Checkout This Product
                </button>

                {/* ❌ DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(item.productId._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Stripe Checkout Form */}
          {selectedItem && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Checkout</h3>
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  cartItems={[
                    {
                      productId: selectedItem.productId._id,
                      quantity: selectedItem.quantity,
                    },
                  ]}
                  onPaymentSuccess={fetchCart}
                />
              </Elements>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;