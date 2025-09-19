"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

const blogs = [
  {
    title: "AI Design Trends to Watch",
    date: "August 15, 2025",
    category: "Creative",
    img: "/blog1.png",
    description:
      "Discover the AI-driven design innovations reshaping digital products in 2025.",
  },
  {
    title: "Boost Conversions with Smart UX",
    date: "August 22, 2025",
    category: "Strategy",
    img: "/blog2.png",
    description:
      "Learn how intelligent UX strategies maximize conversions and user engagement.",
  },
  {
    title: "Serverless Future of Web Apps",
    date: "August 29, 2025",
    category: "Tech",
    img: "/blog3.png",
    description:
      "Explore how serverless architecture powers faster, scalable, and cost-efficient apps.",
  },
  {
    title: "Marketing That Really Connects",
    date: "September 3, 2025",
    category: "Marketing",
    img: "/blog4.png",
    description:
      "Uncover modern digital marketing strategies that resonate with audiences.",
  },
  {
    title: "Creative Automation Secrets",
    date: "September 10, 2025",
    category: "Insights",
    img: "/blog5.png",
    description:
      "See how creative automation saves time and boosts brand storytelling.",
  },
];

export default function Blog() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % blogs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show two posts
  const visible = [blogs[current], blogs[(current + 1) % blogs.length]];

  // Schema for blog posts
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Techivance Blog",
    description:
      "Latest insights on AI design, scalable development, UX, marketing, and creative automation by Techivance.",
    url: "https://techivance.com/blog",
    blogPost: blogs.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      image: `https://techivance.com${post.img}`,
      description: post.description,
      author: {
        "@type": "Organization",
        name: "Techivance",
      },
    })),
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Techivance Blog | AI, UX, Development & Digital Growth Insights
        </title>
        <meta
          name="description"
          content="Stay updated with Techivance’s blog. Explore AI design trends, UX strategies, serverless web apps, creative automation, and marketing insights for 2025."
        />
        <meta
          name="keywords"
          content="Techivance blog, AI design, smart UX, serverless apps, digital marketing, creative automation, tech trends 2025"
        />
        <meta property="og:title" content="Techivance Blog — Insights & Trends" />
        <meta
          property="og:description"
          content="Techivance shares expert blogs on AI, UX, scalable development, and marketing strategies for digital growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com/blog" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Techivance Blog — AI & Digital Insights"
        />
        <meta
          name="twitter:description"
          content="Explore expert blogs on AI design, UX, marketing, and development with Techivance."
        />
        <meta name="twitter:image" content="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      </Head>

      <section className="relative w-full bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="group inline-block mb-12">
            <h2 className="text-4xl md:text-5xl  font-[var(--font-cossette-titre)]">
              What’s <span className="text-purple-400">New</span> in Blog
            </h2>
            <div className="h-[2px] w-0 bg-purple-500 transition-all duration-500 group-hover:w-full" />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {visible.map((post, i) => (
              <motion.article
                key={post.title + i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="shadow-md hover:shadow-purple-600/30 transition-shadow rounded-lg overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-64 md:h-80 group">
                  <Image
                    src={post.img}
                    alt={`${post.title} - ${post.category} blog by Techivance`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Text Card */}
                <div className="bg-black p-6">
                  <h3 className="text-xl mb-3 font-[var(--font-cossette-titre)]">
                    {post.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="px-3 py-1 border border-purple-500 rounded-full text-purple-400 font-[var(--font-inter)]">
                      {post.category}
                    </span>
                    <span className="font-[var(--font-story-script)]">
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
