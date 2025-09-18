"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance | AI-Driven Web Design, Development & Digital Marketing</title>
        <meta
          name="description"
          content="Techivance is an AI-native web studio delivering scalable Next.js websites, mobile apps, and SEO-driven digital marketing. We build future-ready digital products that transform businesses."
        />
        <meta
          name="keywords"
          content="Techivance, AI web design, Next.js agency, React development, scalable websites, SEO optimization, chatbot development, AI integration, digital marketing"
        />
        <meta property="og:title" content="Techivance — AI-Native Web & Brand Studio" />
        <meta
          property="og:description"
          content="Premium websites, mobile apps, and AI solutions for growth. Partner with Techivance for design, scalable development, and digital transformation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techivance — AI-Driven Web Studio" />
        <meta
          name="twitter:description"
          content="Explore Techivance: AI-powered design, scalable apps, SEO marketing, and future-ready digital experiences."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Techivance",
              url: "https://techivance.com",
              description:
                "AI-driven web design, scalable development, SEO, and digital marketing solutions.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://techivance.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>

      <section
        className="relative w-full min-h-screen flex items-center justify-center text-white pt-24 md:pt-32 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <Image
          src="/bg.png"
          alt="Techivance Futuristic Digital Background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Black overlay for readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left font-[var(--font-manrope)]"
          >
            <h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-extrabold leading-tight font-[var(--font-cossette-titre)]"
            >
              Welcome to{" "}
              <span className="text-purple-400">Techivance</span>
            </h1>
            <h2 className="sr-only">
              AI-Powered Web Design, Development & Digital Growth
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              At{" "}
              <span className="text-pink-400 font-semibold">Techivance</span>, we craft{" "}
              <strong>AI-powered designs</strong>,{" "}
              <strong>scalable development</strong>, and{" "}
              <strong>SEO-driven marketing</strong> strategies. Our future-ready
              websites, apps, and digital solutions ignite growth, fuel innovation,
              and transform businesses into industry leaders.
            </p>

            <div className="mt-8 flex gap-4">
              <motion.a
                href="projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-pink-500 text-pink-400
                           hover:bg-pink-600/20 font-semibold transition"
                aria-label="Start a project with Techivance"
              >
                Explore Work
              </motion.a>
              <motion.a
                href="contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-purple-500 text-purple-400
                           hover:bg-purple-600/20 font-semibold transition"
                aria-label="Speak to a Techivance expert"
              >
                Speak to an expert
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end relative"
          >
            <Image
              src="/globe.png"
              alt="Techivance Global Innovation AI Globe"
              width={550}
              height={550}
              className="object-contain opacity-90 drop-shadow-[0_0_60px_rgba(255,0,128,0.6)]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
