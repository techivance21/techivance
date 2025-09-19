"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Orbitron } from "next/font/google";

// Orbitron for headings
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
});

const testimonials = [
  {
    img: "/client1.png",
    text: "Techivance exceeded my expectations. Their expertise in online marketing transformed my business, driving traffic, and generating impressive results. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Software Engineer",
  },
  {
    img: "/client2.png",
    text: "Working with Techivance was a game-changer. From strategy to execution, their team delivered futuristic solutions that boosted my growth massively.",
    author: "Sophia Martinez",
    role: "Business Woman",
  },
  {
    img: "/client3.png",
    text: "The Techivance team truly understands technology. Their AI integrations streamlined our operations and saved us tons of resources.",
    author: "Isabella Johnson",
    role: "Entrepreneur",
  },
];

export default function Client() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Client Testimonials | Techivance Reviews & Success Stories</title>
        <meta
          name="description"
          content="Discover what clients say about Techivance. From software engineers to entrepreneurs, our clients praise our AI integrations, websites, apps, and digital marketing strategies."
        />
        <meta
          name="keywords"
          content="Techivance testimonials, client reviews, success stories, AI agency feedback, software engineer reviews, business growth stories"
        />
        <meta property="og:title" content="Techivance — Client Testimonials" />
        <meta
          property="og:description"
          content="Hear directly from our clients: how Techivance delivers AI-powered websites, apps, and marketing solutions that fuel success."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/testimonials" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Techivance Client Reviews & Success Stories"
        />
        <meta
          name="twitter:description"
          content="Client testimonials showcasing Techivance’s expertise in AI, design, development, and marketing."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <section
        className="relative w-full py-20 text-white"
        style={{
          backgroundImage: "url('/bg2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <h2
            className={`text-center text-3xl md:text-4xl font-extrabold mb-12 relative group w-fit mx-auto ${orbitron.className}`}
          >
            <span className="text-white group-hover:text-pink-400 transition duration-300">
              What Our Clients Say
            </span>
            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-pink-400 group-hover:w-full transition-all duration-500"></span>
          </h2>

          {/* Slider Content */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[index].img}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-[350px] md:h-[400px] overflow-hidden shadow-lg"
                >
                  <Image
                    src={testimonials[index].img}
                    alt={`Client testimonial - ${testimonials[index].author}`}
                    fill
                    className="object-cover !rounded-none"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Upcoming Image Preview */}
              <div className="hidden md:block absolute -left-28 top-1/2 transform -translate-y-1/2 w-28 h-40 opacity-30">
                <Image
                  src={testimonials[(index + 1) % testimonials.length].img}
                  alt={`Upcoming testimonial - ${testimonials[(index + 1) % testimonials.length].author}`}
                  fill
                  className="object-cover !rounded-none"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[index].text}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-lg md:text-xl font-[var(--font-inter)] mb-6 text-gray-200 leading-relaxed">
                    {testimonials[index].text}
                  </p>
                  <h4 className="text-xl md:text-2xl text-purple-500 font-[var(--font-cossette-titre)]">
                    {testimonials[index].author}
                  </h4>
                  <span className="text-sm text-gray-400 italic font-[var(--font-story-script)]">
                    {testimonials[index].role}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Circles */}
          <div className="flex justify-center mt-12 space-x-6">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 border-2 border-pink-500 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-500/20 transition"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 border-2 border-pink-500 rounded-full flex items-center justify-center text-pink-400 hover:bg-pink-500/20 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
