"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Head from "next/head";

const services = [
  { title: "Website Design & Development", img: "/service1.png", desc: "Custom websites built with Next.js, React, and scalable backend solutions optimized for SEO and performance." },
  { title: "Mobile Applications", img: "/service2.png", desc: "Cross-platform apps using Swift, Kotlin, and React Native to deliver seamless mobile experiences." },
  { title: "Social Media Marketing", img: "/service3.png", desc: "Growth-driven strategies across Meta, Instagram, and LinkedIn to boost engagement and brand authority." },
  { title: "Logo Design", img: "/service4.png", desc: "Creative logos that capture your brand’s vision and leave a lasting impression." },
  { title: "SEO", img: "/service5.png", desc: "Advanced SEO with technical optimization, GEO, and AI-powered insights for long-term rankings." },
  { title: "Branding", img: "/service6.png", desc: "End-to-end branding solutions from identity creation to digital presence." },
  { title: "Gen-AI Development", img: "/service7.png", desc: "Next-gen AI-powered systems for automation, NLP, and business transformation." },
  { title: "E-commerce Solutions", img: "/service8.png", desc: "Scalable online stores with Stripe, PayPal, and optimized checkout experiences." },
  { title: "UX & UI Design", img: "/service9.png", desc: "Intuitive and beautiful designs blending aesthetics with usability." },
  { title: "Digital Transformation", img: "/service10.png", desc: "Future-proof strategies and systems for modernizing businesses with AI and cloud." },
  { title: "AI / ML Development", img: "/service11.png", desc: "Machine learning, predictive analytics, and GPT integrations for smarter workflows." },
];

export default function Services() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance Services — Web Development, AI, Branding & Marketing</title>
        <meta
          name="description"
          content="Explore Techivance services: web design, app development, AI & ML solutions, SEO, branding, digital transformation, and more. Premium, scalable, SEO-optimized digital products."
        />
        <meta
          name="keywords"
          content="Techivance services, web development Dubai, AI integration, mobile apps, branding solutions, SEO agency, digital transformation, ecommerce solutions"
        />
        <meta property="og:title" content="Techivance — Core Services" />
        <meta
          property="og:description"
          content="Discover Techivance core services: AI-powered development, digital marketing, branding, and scalable web solutions for future growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/services" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techivance Services" />
        <meta
          name="twitter:description"
          content="Premium websites, AI, mobile apps, branding & SEO by Techivance."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <section className="relative w-full py-24">
        {/* Background + overlay */}
        <div className="absolute inset-0">
          <Image
            src="/bg1.png"
            alt="Techivance Services Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 group"
          >
            <h2
              className="relative inline-block text-4xl md:text-5xl text-white font-[var(--font-cossette-titre)]"
            >
              Our Core Services
              {/* Sleek animated underline */}
              <span className="block h-[2px] bg-purple-500 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg font-[var(--font-inter)]">
              At <span className="text-pink-400 font-semibold">Techivance</span>, we deliver 
              AI-driven solutions, premium websites, mobile apps, branding, and scalable systems 
              designed to grow your business.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-black/60 backdrop-blur-md border border-purple-800/40"
              >
                {/* Image with hover zoom */}
                <div className="overflow-hidden relative">
                  <Image
                    src={srv.img}
                    alt={`${srv.title} - Techivance`}
                    width={500}
                    height={320}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition duration-500" />
                </div>

                {/* Text + icon */}
                <div className="p-5">
                  <motion.h3
                    whileHover={{ y: -6 }}
                    className="text-xl text-white mb-2 font-[var(--font-cossette-titre)]"
                  >
                    {srv.title}
                  </motion.h3>

                  {/* Sleek line */}
                  <div
                    className="h-[2px] bg-purple-500 mb-2 inline-block"
                    style={{ width: "fit-content", minWidth: "40%" }}
                  />

                  <p className="text-sm text-gray-400 mb-4 font-[var(--font-inter)]">
                    {srv.desc}
                  </p>

                  <div className="flex justify-end">
                    <div className="border border-purple-500 p-2 rounded-full
                                    text-purple-400 group-hover:bg-purple-600/30
                                    transition-colors duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* View All Card */}
            <Link href="/services">
              <div
                className="group flex flex-col justify-between bg-black/60 backdrop-blur-md 
                           border-2 border-dashed border-purple-700 cursor-pointer
                           transition-colors duration-300 hover:bg-pink-500/10"
              >
                <div className="flex items-center justify-center h-87 w-full">
                  <span className="relative inline-block text-white uppercase tracking-wide text-center font-[var(--font-cossette-titre)]">
                    View All Services
                    <span className="block h-[2px] bg-purple-500 mt-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  </span>
                </div>

                <div className="p-5 flex justify-end">
                  <div className="border border-purple-500 p-2 rounded-full
                                  text-purple-400 transition-colors duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
