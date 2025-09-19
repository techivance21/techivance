"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Head from "next/head";

export default function HeroSection() {
  // Stars animation
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.8)";
      stars.forEach((s) => {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > w) s.dx *= -1;
        if (s.y < 0 || s.y > h) s.dy *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Techivance | Futuristic Digital Experiences</title>
        <meta
          name="description"
          content="Techivance brings together 200+ creative minds to design websites, apps, and AI-driven solutions that are immersive, scalable, and future-ready."
        />
        <meta
          name="keywords"
          content="Techivance, digital agency, AI-powered design, scalable apps, web development, creative technology, UI/UX design, business transformation"
        />
        <meta property="og:title" content="Techivance — Build Your Vision with 200+ Creative Minds" />
        <meta
          property="og:description"
          content="Partner with Techivance to launch immersive digital experiences: websites, apps, AI integrations, and strategies engineered for tomorrow."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://techivance.com" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Techivance — Digital Experiences" />
        <meta
          name="twitter:description"
          content="200+ creative minds building future-ready websites, apps, and AI-powered solutions with Techivance."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Head>

      <section
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#0a0a1a] to-black flex flex-col items-center justify-center px-6 md:px-12"
        aria-label="Techivance Hero Section"
      >
        {/* Moving stars */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Glow frame */}
        <div
          className="absolute inset-0 border border-pink-500/20 rounded-3xl pointer-events-none
                     shadow-[0_0_60px_rgba(255,0,255,0.15)] z-0"
        />

        <div className="relative z-10 grid md:grid-cols-2 items-center gap-10 w-full max-w-6xl">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight font-[var(--font-cossette-titre)]"
            >
              200+ Creative{" "}
              <span className="text-pink-400">Tech Minds</span>
              <br />
              Ready to Build Your Vision
            </h1>
            <p className="mt-6 text-gray-300 text-lg max-w-md font-[var(--font-inter)]">
              We craft immersive digital experiences—websites, apps, and
              strategies—engineered for tomorrow. Let’s launch something out
              of this world.
            </p>
            <div className="mt-8 flex gap-4">
              <motion.a
                href="services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-pink-500 text-pink-400
                           hover:bg-pink-600/20 font-semibold transition"
                aria-label="Start a project with Techivance"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-gray-500 text-gray-200
                           hover:bg-gray-700/30 font-semibold transition"
                aria-label="Speak to a Techivance expert"
              >
                Speak to an Expert
              </motion.a>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 rounded-full shadow-[0_0_80px_rgba(255,0,255,0.25)] pointer-events-none" />
            <Image
              src="/image4.png"
              alt="Techivance AI-driven digital solutions"
              width={700}
              height={700}
              className="relative z-10"
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}