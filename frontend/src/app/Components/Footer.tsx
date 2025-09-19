"use client";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 pb-10 px-6 md:px-16 overflow-hidden">
      {/* Large faded background text */}
      <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[90px] sm:text-[120px] md:text-[200px] font-extrabold text-white/5 tracking-widest select-none pointer-events-none">
        Techivance
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="Techivance Logo - AI Web & Digital Agency"
            width={130}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE
            </p>
            <p className="mt-2 text-sm">
              <a
                href="mailto:techivance21@gmail.com"
                className="hover:text-pink-400 transition"
              >
                techivance21@gmail.com
              </a>
            </p>
            <p className="mt-2 text-sm">+971 4 242 1375</p>
            <p className="mt-1 text-sm">+971 4 834 6571</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="mailto:techivance21@gmail.com"
                className="hover:text-pink-400 transition"
                aria-label="Email Techivance"
              >
                <FaEnvelope />
              </a>
              <a href="#" className="hover:text-pink-400 transition" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-400 transition" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-400 transition" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-pink-400 transition" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-pink-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-pink-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-pink-400 transition">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-pink-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Solutions */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Tech Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Ecommerce Web Development</li>
              <li>Mobile App Development</li>
              <li>Artificial Intelligence</li>
              <li>Chatbot Development</li>
              <li>Virtual Reality Development</li>
              <li>Augmented Reality Development</li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Digital Marketing
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Digital Marketing</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Generative Engine Optimization (GEO)</li>
              <li>Pay-Per-Click Advertising (PPC)</li>
              <li>Social Media Marketing</li>
              <li>Influencer Marketing</li>
              <li>Branding & Creative Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 max-w-7xl mx-auto border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Techivance. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-pink-400 transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-pink-400 transition">
            Terms & Conditions
          </Link>
        </div>
      </div>

      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-600/20 via-purple-600/10 to-transparent blur-2xl"></div>
    </footer>
  );
}


