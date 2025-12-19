import React from "react";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* ------------------- HERO SECTION ------------------- */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>

        <h1 className="relative text-6xl md:text-7xl font-serif font-bold 
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 
            animate-fadeUp">
          Contact Us
        </h1>
      </section>

      {/* ------------------- CONTACT FORM ------------------- */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Left - Info */}
          <div className="animate-slideUp">
            <h2 className="text-4xl font-serif font-bold text-yellow-400 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Have questions? We're here to help.  
              Reach out for product inquiries, support, or collaborations.
            </p>

            <div className="mt-10 space-y-5">
              <p className="text-gray-300"><span className="text-yellow-400">📍 Address:</span> Luxe Watches HQ, Chennai</p>
              <p className="text-gray-300"><span className="text-yellow-400">📧 Email:</span> support@luxewatches.com</p>
              <p className="text-gray-300"><span className="text-yellow-400">📞 Phone:</span> +91 9876543210</p>
            </div>
          </div>

          {/* Right - Form */}
          <form
            className="bg-black/40 backdrop-blur-lg p-10 rounded-xl border border-yellow-700/30 
            shadow-xl animate-fadeUp"
          >
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Send a Message</h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/70 border border-yellow-600/20 
              text-yellow-300 focus:border-yellow-400 transition mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/70 border border-yellow-600/20 
              text-yellow-300 focus:border-yellow-400 transition mb-4"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-black/70 border border-yellow-600/20 
              text-yellow-300 focus:border-yellow-400 transition mb-6"
            ></textarea>

            <button className="w-full py-3 rounded-lg font-semibold 
              bg-gradient-to-r from-yellow-400 to-yellow-600 text-black
              hover:scale-105 shadow-lg transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
