"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Work() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance Work — Success Stories & Digital Growth</title>
        <meta
          name="description"
          content="See how Techivance transforms businesses with AI, web design, mobile apps, SEO, and digital marketing. Explore our success stories and future-ready solutions."
        />
        <meta
          name="keywords"
          content="Techivance work, success stories, business growth, AI-driven solutions, web design portfolio, digital marketing Dubai, mobile app case studies"
        />
        <meta property="og:title" content="Techivance — Next Success Stories" />
        <meta
          property="og:description"
          content="Discover how Techivance delivers AI-powered websites, mobile apps, SEO campaigns, and branding that empower global businesses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/work" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techivance Work — Success Stories" />
        <meta
          name="twitter:description"
          content="Explore Techivance’s portfolio of websites, apps, AI integrations, and marketing campaigns fueling business growth."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <section className="relative w-full py-24 overflow-hidden">
        {/* Background + light black overlay */}
        <Image
          src="/bg2.png"
          alt="Techivance Digital Work Background"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/90 -z-10" />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl mb-6 font-[var(--font-cossette-titre)]">
              Make your Business the{" "}
              <span className="text-pink-400">Next Success Story</span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 font-[var(--font-inter)]">
              At <span className="text-purple-400 font-semibold">Techivance</span>, 
              we engineer growth with{" "}
              <span className="text-pink-400 font-semibold">AI-driven web design, mobile apps, SEO, and branding</span>.  
              Our experts align cutting-edge technology with your goals, building future-ready 
              digital products that deliver measurable success.
            </p>
            <Link
              href="services"
              className="px-6 py-3 border border-pink-500 text-pink-400 hover:bg-pink-600/20
                         rounded-full shadow-lg font-semibold transition"
            >
              View All Work
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/image3.png"
              alt="Techivance Success Project Showcase"
              width={600}
              height={600}
              className="w-full h-auto object-cover drop-shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
