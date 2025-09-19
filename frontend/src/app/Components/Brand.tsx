"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

// Brand logos
const brands = Array.from({ length: 15 }, (_, i) => `/brand${i + 1}.png`);

export default function Brand() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Our Partners & Clients | Techivance Global Brands</title>
        <meta
          name="description"
          content="Techivance is trusted by global innovators and leading companies worldwide. Discover the brands that rely on our AI-driven design, development, and digital transformation services."
        />
        <meta
          name="keywords"
          content="Techivance clients, trusted brands, global partners, AI design companies, digital transformation brands, web development agency clients"
        />
        <meta property="og:title" content="Trusted by Global Innovators — Techivance" />
        <meta
          property="og:description"
          content="Leading companies across industries rely on Techivance for cutting-edge websites, apps, AI solutions, and marketing strategies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/clients" />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <section className="w-full bg-black py-20 overflow-hidden relative">
        {/* Centered Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl text-white tracking-wide font-[var(--font-cossette-titre)]">
            Trusted by <span className="text-purple-400">Global Innovators</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm md:text-base font-[var(--font-inter)]">
            Leading companies that rely on our technology
          </p>
        </div>

        {/* Infinite Scrolling Row */}
        <div className="relative">
          <motion.div
            className="flex w-max gap-12 md:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...brands, ...brands].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-24 h-14 sm:w-28 sm:h-16 md:w-32 md:h-20 relative group"
              >
                <Image
                  src="/brand10.png"
                  alt={`Techivance client brand logo ${i + 1}`}
                  fill
                  className="object-contain group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)] transition-transform duration-300"
                  // sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}


