"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";

// Counter animation hook
const useCounter = (end: number, duration: number) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // every 16ms (~60fps)
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [end, duration]);
  return count;
};

export default function Success() {
  const projects = useCounter(500, 2000);
  const webapps = useCounter(200, 2000);
  const campaigns = useCounter(100, 2000);
  const ideas = useCounter(999, 2000);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance Success Stories Digital Growth & AI Solutions</title>
        <meta
          name="description"
          content="Discover Techivance success: 500+ projects, 200+ apps, and AI-powered campaigns delivered globally. We transform bold ideas into scalable digital solutions."
        />
        <meta
          name="keywords"
          content="Techivance success, AI solutions, web apps, creative campaigns, digital transformation, projects delivered"
        />
      </Head>

      <section
        className="relative w-full py-20 bg-black text-white"
        aria-labelledby="success-heading"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Overlapping Images */}
          <div className="relative flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-[340px] h-[460px] md:w-[400px] md:h-[520px] overflow-hidden shadow-lg"
            >
              <Image
                src="/image1.png"
                alt="Techivance successful digital project example"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-12 left-24 w-[280px] h-[380px] md:w-[340px] md:h-[440px] overflow-hidden shadow-lg"
            >
              <Image
                src="/image2.png"
                alt="Techivance client success portfolio showcase"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side - Text + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left font-[var(--font-manrope)]"
          >
            <h2
              id="success-heading"
              className="text-4xl md:text-5xl font-bold mb-6 text-white font-[var(--font-cossette-titre)]"
            >
              Unleash Your Success
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              At <span className="text-pink-400 font-semibold">Techivance</span>, we transform{" "}
              <strong>bold ideas</strong> into <strong>scalable digital solutions</strong>.  
              From futuristic websites and AI-powered apps to high impact marketing campaigns, 
              we empower brands to grow, engage audiences, and lead in their industries.  
              <em>Every success story is proof of our commitment to innovation and excellence.</em>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-4xl font-extrabold text-pink-500 font-[var(--font-cossette-titre)]">
                  {projects}+
                </h3>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-purple-400 font-[var(--font-cossette-titre)]">
                  {webapps}+
                </h3>
                <p className="text-gray-400">Web Apps Built</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-pink-400 font-[var(--font-cossette-titre)]">
                  {campaigns}+
                </h3>
                <p className="text-gray-400">Creative Campaigns</p>
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-purple-500 font-[var(--font-cossette-titre)]">
                  {ideas}+
                </h3>
                <p className="text-gray-400">Ideas Ignited</p>
              </div>
            </div>

            {/* Rounded Button linked to About Us */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="px-6 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-600/20 transition font-semibold shadow-lg font-[var(--font-cossette-titre)]"
                title="Learn more about Techivance"
              >
                Know More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
