"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

// --- Types ---
interface Service {
  title: string;
  desc: string;
  skills: string[];
  img: string;
}

// --- Development Services Data ---
const devServices: Service[] = [
  {
    title: "Mobile App Development",
    desc: `We build native and cross-platform apps engineered for performance, scalability,
           and future-proof functionality. From MVPs to enterprise-grade solutions, we ensure
           apps deliver smooth user experiences and robust backend integrations.`,
    skills: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "GraphQL",
      "REST APIs",
      "App Store Optimization",
    ],
    img: "/development1.png",
  },
  {
    title: "E-Commerce Development",
    desc: `We build robust, scalable online stores that prioritize smooth customer journeys,
           secure payments, and high performance. From product catalogs to checkout flows,
           we design e-commerce platforms that boost sales, reduce cart abandonment, and
           adapt to your brand’s vision.`,
    skills: [
      "Shopify",
      "Magento",
      "WooCommerce",
      "Next.js",
      "Stripe / PayPal",
      "Headless Commerce",
      "SEO Optimization",
      "Analytics Integration",
    ],
    img: "/development2.png",
  },
  {
    title: "UI / UX Design",
    desc: `We craft human-centered designs that fuse aesthetics with functionality. From
           wireframes to polished interfaces, we design experiences that resonate with users
           and achieve business goals.`,
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "User Flows",
      "Wireframing",
      "Interactive Prototyping",
      "Design Systems",
      "Accessibility Standards",
    ],
    img: "/development3.png",
  },
  {
    title: "Web Development",
    desc: `We build fast, modern websites using the latest frameworks and technologies.
           From landing pages to enterprise platforms, our websites are designed for speed,
           SEO, and scalability.`,
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "TypeScript",
      "SSR / SSG",
      "Cloud Hosting",
    ],
    img: "/development4.png",
  },
];

// --- AI & ML Services Data ---
const aiServices: Service[] = [
  {
    title: "AI-Powered Chatbots",
    desc: `We create intelligent chatbots that transform customer interactions with
           personalized, real-time responses.`,
    skills: ["Dialogflow", "LangChain", "OpenAI GPT", "Rasa", "NLU", "Custom APIs", "Analytics Dashboards"],
    img: "/ai1.png",
  },
  {
    title: "Generative AI Solutions",
    desc: `We harness Generative AI to create text, visuals, and media tailored to business needs.`,
    skills: ["Stable Diffusion", "GPT-4", "MidJourney", "Hugging Face", "Prompt Engineering", "AI Safety & Ethics"],
    img: "/ai2.png",
  },
  {
    title: "Machine Learning Models",
    desc: `We design and deploy machine learning models that power recommendations,
           predictions, and data-driven decisions.`,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "AWS SageMaker", "Data Preprocessing", "Model Deployment"],
    img: "/ai3.png",
  },
  {
    title: "AI Integration & Automation",
    desc: `We integrate AI directly into existing systems to supercharge efficiency.`,
    skills: ["FastAPI", "Python", "MLOps", "API Development", "Kubernetes", "CI/CD", "Edge Deployment"],
    img: "/ai4.png",
  },
];

// --- Digital Marketing Services Data ---
const marketingServices: Service[] = [
  {
    title: "Digital Branding",
    desc: `We shape brands with storytelling, identity design, and multi-channel
           campaigns that build recognition and trust.`,
    skills: ["Brand Strategy", "Logo Design", "Visual Identity", "Creative Guidelines", "Campaign Planning"],
    img: "/marketing1.png",
  },
  {
    title: "Social Media Marketing",
    desc: `We grow communities and build online presence with targeted content,
           data-driven campaigns, and social strategies.`,
    skills: ["Instagram Ads", "Facebook Marketing", "TikTok Strategy", "LinkedIn Outreach", "Content Calendars", "Engagement Analytics"],
    img: "/marketing2.png",
  },
  {
    title: "Performance Marketing",
    desc: `We deliver ROI-focused campaigns with precision targeting.`,
    skills: ["Google Ads", "Meta Ads", "SEO/SEM", "Analytics", "A/B Testing", "Conversion Optimization"],
    img: "/marketing3.png",
  },
  {
    title: "Content & Creative Strategy",
    desc: `We design compelling narratives with text, video, and visuals that align with brand goals.`,
    skills: ["Copywriting", "Video Production", "Motion Design", "Storyboarding", "Campaign Strategy", "Content Distribution"],
    img: "/marketing4.png",
  },
];

export default function ServicePage() {
  const [currentDev, setCurrentDev] = useState<number>(0);
  const [currentAI, setCurrentAI] = useState<number>(0);
  const [currentMarketing, setCurrentMarketing] = useState<number>(0);

  // Auto sliders
  useEffect(() => {
    const t1 = setInterval(() => setCurrentDev((p) => (p + 1) % devServices.length), 7000);
    const t2 = setInterval(() => setCurrentAI((p) => (p + 1) % aiServices.length), 7000);
    const t3 = setInterval(() => setCurrentMarketing((p) => (p + 1) % marketingServices.length), 7000);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, []);

  const renderServiceBlock = (data: Service[], current: number, accent: "pink" | "purple") => (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 1 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-6 text-left">
          <h3 className="text-3xl font-semibold text-white">{data[current].title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{data[current].desc}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {data[current].skills.map((skill, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-sm rounded-full border border-${accent}-500/50 text-${accent}-300 bg-${accent}-500/10 hover:bg-${accent}-500/20 transition`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={data[current].img}
            alt={`${data[current].title} Service — Techivance`}
            width={550}
            height={450}
            className="rounded-xl object-contain shadow-[0_0_40px_rgba(236,72,153,0.4)]"
            priority
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance Services | Web, Mobile, AI & Digital Marketing</title>
        <meta
          name="description"
          content="Techivance offers web development, mobile apps, AI chatbots, machine learning, e-commerce, branding, and digital marketing solutions."
        />
        <meta name="keywords" content="Techivance services, web development, mobile app, AI chatbots, ML, e-commerce, SEO, digital marketing Dubai" />
        <link rel="canonical" href="https://techivance.com/services" />
      </Head>

      <main className="relative bg-gradient-to-b from-black via-[#0a0a1a] to-black text-white overflow-hidden mt-10">
        {/* Development Section */}
        <section
          className="relative py-24"
          style={{ backgroundImage: "url('/bg2.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-purple-900/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <h1 className="text-left text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
              Helping Brands to Grow with <span className="text-pink-400">Digital Products</span> and{" "}
              <span className="text-pink-400">Solutions</span>
            </h1>
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
              Development <span className="text-pink-400">Services</span>
            </h2>
            {renderServiceBlock(devServices, currentDev, "pink")}
          </div>
        </section>

        {/* AI Section */}
        <section
          className="relative py-24"
          style={{ backgroundImage: "url('/bg3.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-pink-900/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
              <span className="text-purple-400">Gen AI & ML</span> Development
            </h2>
            {renderServiceBlock(aiServices, currentAI, "purple")}
          </div>
        </section>

        {/* Marketing Section */}
        <section
          className="relative py-24"
          style={{ backgroundImage: "url('/bg4.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-purple-900/10 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
              Digital Growth & <span className="text-pink-400">Marketing</span>
            </h2>
            {renderServiceBlock(marketingServices, currentMarketing, "pink")}
          </div>
        </section>
      </main>
    </>
  );
}
