"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-md"
      role="navigation"
      aria-label="Main Navigation for Techivance — AI, Web & Digital Solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" title="Go to Techivance Home">
          <Image
            src="/logo.png"
            alt="Techivance Logo — AI Native Design, Web Development & Digital Marketing Studio"
            className="h-14 sm:h-20 md:h-24 w-auto object-contain"
            width={100}
            height={100}
            loading="lazy"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex space-x-8 text-sm lg:text-base font-[var(--font-inter-tight)]"
          aria-label="Primary navigation links"
        >
          <Link href="/" title="Techivance Home" className="text-gray-200 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/projects"
            title="Explore Techivance Projects Portfolio"
            className="text-gray-200 hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            href="/services"
            title="Discover Techivance Services"
            className="text-gray-200 hover:text-white transition"
          >
            Services
          </Link>
          <Link
            href="/about"
            title="Learn About Techivance — Our Vision & Team"
            className="text-gray-200 hover:text-white transition"
          >
            About Us
          </Link>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            title="Contact Techivance — Speak with an Expert"
            className="px-4 py-2 lg:px-6 lg:py-3 border border-pink-500 text-pink-400 hover:text-white rounded-full shadow-lg transition font-[var(--font-cossette-titre)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden backdrop-blur-md px-6 py-6 space-y-4 font-[var(--font-inter-tight)]"
            aria-label="Mobile navigation menu"
          >
            <Link href="/" title="Techivance Home" className="block text-gray-200 hover:text-white">
              Home
            </Link>
            <Link
              href="/projects"
              title="Explore Techivance Projects Portfolio"
              className="block text-gray-200 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="/services"
              title="Discover Techivance Services"
              className="block text-gray-200 hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/about"
              title="Learn About Techivance — Our Vision & Team"
              className="block text-gray-200 hover:text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              title="Contact Techivance — Speak with an Expert"
              className="block text-center border border-pink-500 text-pink-400 px-4 py-2 rounded-lg shadow-lg hover:bg-pink-600/20 font-[var(--font-cossette-titre)]"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
