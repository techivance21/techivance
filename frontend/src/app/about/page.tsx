"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

// Tech icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaStripe,
  FaPaypal,
  FaAws,
  FaPython,
  FaPhp,
  FaJava,
  FaAndroid,
  FaSwift,
  FaLaravel,
  FaPinterest,
  FaMailchimp,
  FaChartLine,
  FaSearch,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiKotlin,
  SiJquery,
  SiCanva,
  SiInvision,
  SiAdobephotoshop,
  SiGoogleanalytics,
  SiGooglecloud,
  SiSemrush,
  SiMeta,
  SiFigma,
  SiAdobe,
  SiDotnet,
  SiOpenai,
  SiGoogleads,
} from "react-icons/si";
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb";

export default function AboutPage() {
  return (
    <main className="text-white">
      {/* ---------------- Meta SEO ---------------- */}
      <Head>
        <title>About Techivance | AI Web Design, Development & Digital Marketing Agency</title>
        <meta
          name="description"
          content="Learn about Techivance — an AI-native digital agency in Dubai delivering web design, Next.js development, SEO, branding, and AI-powered digital transformation solutions."
        />
        <meta
          name="keywords"
          content="Techivance, AI web design agency, Next.js development, React experts, SEO services Dubai, digital marketing UAE, branding, AI integration, mobile app development, web development"
        />
        <meta property="og:title" content="About Techivance | AI Web Studio & Digital Agency" />
        <meta
          property="og:description"
          content="Discover Techivance — AI-powered design, scalable development, SEO-driven marketing, and future-ready digital experiences."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Techivance | AI Web Design & SEO Agency" />
        <meta
          name="twitter:description"
          content="Premium websites, mobile apps, SEO services, and AI solutions built by Techivance — a Dubai-based AI-native studio."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Techivance",
              url: "https://techivance.com",
              logo: "https://techivance.com/logo.png",
              sameAs: [
                "https://www.facebook.com/techivance",
                "https://www.linkedin.com/company/techivance",
                "https://twitter.com/techivance",
                "https://www.instagram.com/techivance",
              ],
              description:
                "Techivance is a Dubai-based AI web design and development agency specializing in Next.js websites, mobile apps, SEO, branding, and AI-powered solutions.",
            }),
          }}
        />
      </Head>

      {/* ---------------- Hero Section ---------------- */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/bg3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-purple-900/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Techivance
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Techivance is a premium{" "}
              <strong>AI web design and development agency</strong> in Dubai,
              specializing in building{" "}
              <strong>Next.js websites, mobile apps, SEO-driven marketing, and AI integrations</strong>.
              Our team combines creativity, strategy, and innovation to deliver
              scalable solutions that transform businesses globally.
            </p>
          </motion.div>

          {/* Right Image with Soft Radial Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-gradient-radial from-pink-500/40 via-purple-600/30 to-transparent blur-3xl animate-pulse" />
              <Image
                src="/about1.png"
                alt="Techivance team working on AI web development and design"
                width={600}
                height={500}
                className="relative object-contain z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Mission / Vision / Values ---------------- */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/bg4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {/* Left Heading + Image */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Moves{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                & Defines Us
              </span>
            </h2>
            <Image
              src="/about2.png"
              alt="Techivance core mission, vision and values"
              width={400}
              height={400}
              className="object-contain mx-auto md:mx-0"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-10">
            {[
              {
                title: "Our Mission",
                desc: "To empower businesses with AI-driven digital solutions that drive growth, efficiency, and user engagement across web, mobile, and marketing platforms.",
              },
              {
                title: "Our Vision",
                desc: "To become a global leader in digital transformation by pioneering advancements in AI, scalable web design, and future-ready technology.",
              },
              {
                title: "Our Values",
                desc: "Innovation, transparency, collaboration, and client success. We deliver impactful solutions that shape the future of technology.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="group"
              >
                <h3 className="text-2xl font-semibold mb-2 relative w-fit">
                  {item.title}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Tech Stack Section ---------------- */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: "url('/bg5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Tech Stack for{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Performance
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Scalability
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            At Techivance, we leverage modern tools like{" "}
            <strong>Next.js, React, Tailwind CSS, Node.js, AI integrations, SEO, and cloud platforms</strong> 
            to build future-ready websites and applications.
          </p>

          {/* Logos Row with Slide Animation */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-12 text-6xl flex-nowrap relative z-20"
          >
            <FaHtml5 className="text-orange-500" />
            <FaCss3Alt className="text-blue-500" />
            <SiJavascript className="text-yellow-400" />
            <SiTypescript className="text-blue-400" />
            <FaReact className="text-cyan-400" />
            <SiNextdotjs className="text-white" />
            <SiTailwindcss className="text-sky-400" />
            <FaNodeJs className="text-green-500" />
            <SiMongodb className="text-green-400" />
            <SiMysql className="text-blue-600" />
            <SiPostgresql className="text-sky-700" />
            <SiKotlin className="text-purple-500" />
            <FaSwift className="text-orange-500" />
            <FaAndroid className="text-green-600" />
            <TbBrandCSharp className="text-green-700" />
            <TbBrandCpp className="text-blue-500" />
            <FaPhp className="text-indigo-500" />
            <FaJava className="text-red-500" />
            <SiDotnet className="text-blue-500" />
            <FaStripe className="text-purple-500" />
            <FaPaypal className="text-blue-500" />
            <FaAws className="text-orange-400" />
            <SiGooglecloud className="text-blue-500" />
            <SiOpenai className="text-emerald-400" />
            <SiGoogleanalytics className="text-orange-500" />
            <SiGoogleads className="text-blue-500" />
            <SiSemrush className="text-orange-400" />
            <FaChartLine className="text-white" />
            <FaSearch className="text-white" />
            <SiMeta className="text-blue-500" />
            <FaMailchimp className="text-yellow-500" />
            <FaPinterest className="text-red-600" />
            <SiFigma className="text-pink-500" />
            <SiAdobe className="text-red-600" />
            <SiAdobephotoshop className="text-blue-500" />
            <SiInvision className="text-pink-500" />
            <SiCanva className="text-sky-400" />
            <SiJquery className="text-sky-500" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
