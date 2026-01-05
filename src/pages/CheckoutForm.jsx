import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ cartItems, onPaymentSuccess }) => {
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "https://ecommerce-backend-3-7f0t.onrender.com";
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError("");

    try {
      // 1️⃣ Create PaymentIntent on backend
      const res = await axios.post(`${API_URL}/payment/create`, { cartItems });
      const clientSecret = res.data.payment.clientSecret;

      // 2️⃣ Confirm Card Payment
      const card = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
        },
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
        setLoading(false);
        return;
      }

      if (paymentResult.paymentIntent.status === "succeeded") {
        // 3️⃣ Verify payment on backend
        const verifyRes = await axios.post(`${API_URL}/payment/verify`, {
          paymentIntentId: paymentResult.paymentIntent.id,
        });

        if (verifyRes.data.success) {
          setSuccess(true);
          onPaymentSuccess(); // refresh cart in parent
        } else {
          setError(verifyRes.data.message || "Payment verification failed");
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <CardElement className="p-3 bg-slate-200 border rounded mb-4" />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-500 mb-2">Payment successful!</p>}
      <button type="submit" disabled={!stripe || loading} className="bg-green-500 text-white px-4 py-2 rounded">
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;