import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";



export default function Home() {
  return (
    <>
    

<Header />

<HeroSection />
    <div className="w-full min-h-screen bg-black text-white overflow-hidden">

      

      {/* ---------------------- FEATURED WATCHES ---------------------- */}
      <section className="py-24 px-10">
        <h2 className="text-4xl font-serif font-bold text-center mb-14 animate-fadeUp">
          Featured Collections
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              name: "Royal Gold Edition",
               img: "https://media.istockphoto.com/id/587778116/photo/modern-watch-isolated.jpg?s=612x612&w=0&k=20&c=3CaF_-RtCL7un_zn-hQxFY8rTg48tCPZhZxRDhUvj8w=",
            },
            {
              name: "Black Phantom Series",
              img: "https://media.istockphoto.com/id/1250131890/photo/black-automatic-self-winding-wristwatch.jpg?s=612x612&w=0&k=20&c=yknMri4bxiGIEU3-SGmncjgQRnhfv4R9yC3wWjDHbuw=",
            },
            {
              name: "Premium Leather Elegance",
             img: "https://media.istockphoto.com/id/1331924010/photo/gold-wrist-watch-on-a-black-background-luxury-accessories-for-men.jpg?s=612x612&w=0&k=20&c=z5dL2CUjTikk1gTyw8hNeJ5TrATyTTuUPYQopdginxE=",
            },
          ].map((watch, index) => (
            <div
              key={index}
              className="group bg-black/70 border border-yellow-600/20 rounded-xl overflow-hidden 
                shadow-lg hover:shadow-yellow-600/50 hover:scale-105 transition-all duration-500
                animate-slideUp"
              style={{ animationDelay: `${0.3 * index}s` }}
            >
              <img
                src={watch.img}
                className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-500"
                alt={watch.name}
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-yellow-400">{watch.name}</h3>
                <button className="mt-4 px-6 py-2 rounded-full border border-yellow-500
                  text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- BRAND HIGHLIGHTS ---------------------- */}
      <section className="py-24 bg-black/90 px-10 border-t border-yellow-700/10">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 animate-fadeUp">
          Why Choose Larvex
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Premium Craftsmanship",
              desc: "Every watch is meticulously designed with attention to detail and precision.",
            },
            {
              title: "Authentic Luxury",
              desc: "Guaranteed quality and original luxury designs curated for elegance.",
            },
            {
              title: "Worldwide Delivery",
              desc: "Delivered to your doorstep with safe packaging and insurance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-xl bg-gradient-to-b from-black to-yellow-950/10 
                border border-yellow-700/20 text-center shadow-lg
                hover:shadow-yellow-500/40 hover:-translate-y-2 
                transition-all duration-400 animate-fadeUp"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------- TESTIMONIALS ---------------------- */}
      <section className="py-24 px-10">
        <h2 className="text-4xl font-serif font-bold text-center mb-14 animate-fadeUp">
          Customer Impressions
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Arjun R.",
              text: "The craftsmanship is unmatched. The gold detailing is flawless!",
            },
            {
              name: "Daniel P.",
              text: "This is easily the best luxury watch store I’ve ever purchased from.",
            },
          ].map((test, index) => (
            <div
              key={index}
              className="bg-black/70 border border-yellow-600/20 p-8 rounded-xl 
                shadow-lg hover:shadow-yellow-600/40 hover:-translate-y-2 
                transition-all duration-300 animate-slideUp"
              style={{ animationDelay: `${0.3 * index}s` }}
            >
              <p className="text-gray-300 italic">"{test.text}"</p>
              <h4 className="mt-4 font-semibold text-yellow-400">— {test.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* footer section */}
    <Footer />
    </>
  );
}




