"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

// Project Data
const projects = [
  {
    title: "Websites",
    color: "text-pink-400",
    items: [
      {
        img: "/project1.png",
        heading: "Corporate Website",
        desc: "Enterprise-grade responsive website tailored for growth.",
      },
      {
        img: "/project2.png",
        heading: "Portfolio Showcase",
        desc: "Creative portfolio site with animations and SEO power.",
      },
    ],
  },
  {
    title: "Chatbots & Automation",
    color: "text-purple-400",
    items: [
      {
        img: "/project3.png",
        heading: "AI Chatbot",
        desc: "Customer support chatbot integrated with CRM.",
      },
      {
        img: "/project4.png",
        heading: "Workflow Bot",
        desc: "AI-powered workflow automation for efficiency.",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "text-pink-400",
    items: [
      {
        img: "/project5.png",
        heading: "Predictive Analytics",
        desc: "AI platform for real-time data-driven insights.",
      },
      {
        img: "/project6.png",
        heading: "GPT Solutions",
        desc: "Conversational AI with advanced NLP.",
      },
    ],
  },
  {
    title: "E-Commerce",
    color: "text-purple-400",
    items: [
      {
        img: "/project7.png",
        heading: "Retail Store",
        desc: "Online retail store with Stripe & PayPal integration.",
      },
      {
        img: "/project8.png",
        heading: "Multi-Vendor Marketplace",
        desc: "Custom marketplace with smooth checkout flow.",
      },
    ],
  },
  {
    title: "Mobile Apps",
    color: "text-pink-400",
    items: [
      {
        img: "/project9.png",
        heading: "Fitness App",
        desc: "Cross-platform fitness tracker with AI recommendations.",
      },
      {
        img: "/project10.png",
        heading: "Fintech App",
        desc: "Secure fintech mobile app with biometric login.",
      },
    ],
  },
  {
    title: "SEO & Marketing",
    color: "text-purple-400",
    items: [
      {
        img: "/project11.png",
        heading: "SEO Growth",
        desc: "Achieved top SERP results with advanced SEO.",
      },
      {
        img: "/project12.png",
        heading: "Social Media Campaign",
        desc: "Creative campaigns boosting engagement.",
      },
    ],
  },
];

// FAQs
const faqs = [
  {
    q: "What makes Techivance different from other agencies?",
    a: "We blend AI-driven innovation with human creativity, ensuring every project is scalable, future-proof, and SEO-optimized for maximum visibility.",
  },
  {
    q: "How long does it take to deliver a project?",
    a: "Timelines depend on scope, but most websites are completed within 6–10 weeks, while AI integrations and mobile apps may take 10–14 weeks.",
  },
  {
    q: "Do you provide SEO and digital marketing with development?",
    a: "Yes, SEO, performance optimization, and growth marketing are integrated in our workflows so your brand launches with visibility from day one.",
  },
  {
    q: "Can you handle enterprise-level solutions?",
    a: "Absolutely. We specialize in enterprise-grade websites, AI, chatbots, and custom apps built with performance, scalability, and security in mind.",
  },
  {
    q: "Which industries do you serve?",
    a: "Our clients span across e-commerce, fintech, healthcare, SaaS, retail, and global brands needing high-tech transformation.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, we provide continuous optimization, maintenance, and scaling solutions to keep your business ahead in the digital race.",
  },
];

export default function ProjectsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance Portfolio | AI, Websites, E-Commerce & Mobile Apps</title>
        <meta
          name="description"
          content="Explore Techivance’s portfolio: AI, websites, chatbots, e-commerce, SEO & mobile apps. Premium digital transformation for brands that want to grow."
        />
        <meta
          name="keywords"
          content="Techivance projects, AI development, chatbot agency, e-commerce solutions, web design Dubai, digital marketing campaigns, SEO agency UAE"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Techivance Projects — Web, AI & Mobile" />
        <meta
          property="og:description"
          content="Browse our work: websites, AI chatbots, machine learning apps, e-commerce platforms, and SEO-driven campaigns."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techivance — Projects Portfolio" />
        <meta
          name="twitter:description"
          content="Check out Techivance’s portfolio of AI, Next.js websites, mobile apps, SEO & creative campaigns."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
      </Head>

      <main
        className="relative min-h-screen text-white"
        style={{
          backgroundImage: "url('/bg4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-left text-4xl md:text-6xl font-bold mb-20 relative w-fit group"
          >
            Our <span className="text-pink-400">Portfolio</span> &{" "}
            <span className="text-purple-400">Gallery</span>
            <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
          </motion.h1>

          {/* Sections */}
          <div className="space-y-24">
            {projects.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Section Heading */}
                <h2
                  className={`text-center text-3xl md:text-4xl font-semibold mb-10 relative w-fit mx-auto group ${section.color}`}
                >
                  {section.title}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
                </h2>

                {/* Project Images */}
                <div className="grid md:grid-cols-2 gap-8">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.2 }}
                      viewport={{ once: true }}
                      className="relative group overflow-hidden rounded-xl"
                    >
                      <Image
                        src={item.img}
                        alt={`Techivance Project - ${item.heading}`}
                        width={600}
                        height={400}
                        className="object-cover w-full h-80 transform group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold">{item.heading}</h3>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* --------- FAQ Section --------- */}
          <section className="relative py-24">
            <div className="absolute inset-0 bg-black/85" />

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Transformation with{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Smart UX & Scalable Tech
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  At <span className="text-pink-400 font-semibold">Techivance</span>, we don’t just design we engineer the future. We combine cutting-edge AI, data-driven insights, and modern UX design principles to create digital products that adapt and grow with your business.
                </p>
              </motion.div>

              {/* Right FAQ Accordion */}
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border border-gray-700 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg hover:text-purple-400 transition"
                    >
                      {faq.q}
                      <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="px-6 pb-4 text-gray-300"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
