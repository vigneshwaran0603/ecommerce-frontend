import React from "react";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        <h1
          className="relative z-10 text-6xl md:text-7xl font-serif font-bold 
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 
          animate-fadeUp tracking-wide"
        >
          About Us
        </h1>
      </section>

      {/* -------------------- ABOUT CONTENT -------------------- */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div
            className="rounded-xl overflow-hidden shadow-yellow-500/20 shadow-2xl
            animate-slideUp"
          >
            <img
              src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg"
              className="w-full h-[420px] object-cover hover:scale-110 transition-all duration-700"
              alt="Luxury Watch"
            />
          </div>

          {/* Right Content */}
          <div className="animate-fadeUp">
            <h2 className="text-4xl font-serif font-bold text-yellow-400 mb-5">
              Crafting Time, Crafting Luxury
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At <span className="text-yellow-400 font-semibold">Luxe Watches</span>, 
              we celebrate the artistry of premium timekeeping.  
              For many years, we have delivered exclusive luxury watches with 
              world-class craftsmanship, timeless elegance, and unmatched precision.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Every watch we curate is hand-picked for those who value excellence, 
              sophistication, and a touch of royalty. Our mission is to bring 
              world-class luxury straight to your wrist.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------- VALUES SECTION -------------------- */}
      <section className="py-20 px-10 bg-black/90 border-t border-yellow-700/20">
        <h2 className="text-center text-4xl font-serif font-bold text-yellow-400 mb-12 animate-fadeUp">
          Our Commitments
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {[
            {
              title: "Exceptional Craftsmanship",
              desc: "Every timepiece is crafted with detail, precision, and a blend of tradition & innovation.",
            },
            {
              title: "Authentic Collection",
              desc: "We guarantee authenticity and premium quality in all our luxury watch collections.",
            },
            {
              title: "Customer Excellence",
              desc: "We focus on delivering elite customer experience with premium packaging and service.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 bg-gradient-to-b from-black to-yellow-950/10 
              rounded-xl border border-yellow-700/30 text-center
              shadow-xl hover:shadow-yellow-500/40 hover:-translate-y-2 
              transition-all duration-500 animate-fadeUp"
              style={{ animationDelay: `${0.2 * i}s` }}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- ENDING SECTION -------------------- */}
      <section className="py-20 px-10 text-center max-w-4xl mx-auto animate-fadeUp">
        <h2 className="text-4xl font-serif font-bold text-yellow-400">
          “Luxury is not just a style,  
          <br /> it is a statement.”
        </h2>
        <p className="text-gray-300 text-lg mt-6">
          At Luxe Watches, we believe that a watch is more than a timekeeper —  
          it is a symbol of power, confidence, and prestige.
        </p>
      </section>
    </div>
  );
}
