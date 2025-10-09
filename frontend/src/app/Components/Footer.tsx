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
    <footer className="mt-auto">
      {/* Top Footer Section */}
      <div className="bg-black text-gray-300 px-6 sm:px-10 md:px-16">
        <div className="max-w-7xl mx-auto pt-10 pb-8">
          {/* Top Row: Logo + Socials */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
            {/* Logo */}
            <div>
              <Image
                src="/logo.png"
                alt="Techivance Logo"
                width={130}
                height={60}
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 text-base sm:text-lg">
              {[
                { icon: <FaEnvelope />, url: "mailto:techivance21@gmail.com", label: "Email" },
                { icon: <FaTwitter />, url: "#", label: "Twitter" },
                { icon: <FaFacebookF />, url: "#", label: "Facebook" },
                { icon: <FaInstagram />, url: "#", label: "Instagram" },
                { icon: <FaLinkedinIn />, url: "#", label: "LinkedIn" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  aria-label={item.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-gray-700 hover:border-pink-500 hover:text-pink-400 transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Grid Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {/* Contact */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 border-l-4 border-pink-500 pl-3">
                Contact Us
              </h3>
              <p className="text-sm">
                5142 N Academy Blvd. Colorado Springs, CO 80918
              </p>
              <p className="mt-2 text-sm">
                <a
                  href="mailto:techivance21@gmail.com"
                  className="hover:text-pink-400 transition"
                >
                  techivance21@gmail.com
                </a>
              </p>
              <p className="mt-2 text-sm">720 235 0567</p>
              {/* <p className="mt-1 text-sm">+971 4 834 6571</p> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 border-l-4 border-pink-500 pl-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "About Us", link: "/about" },
                  { name: "Services", link: "/services" },
                  { name: "Our Work", link: "/work" },
                  { name: "Blog", link: "/blog" },
                  { name: "Contact Us", link: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="hover:text-pink-400 transition"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Solutions */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 border-l-4 border-pink-500 pl-3">
                Tech Solutions
              </h3>
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
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 border-l-4 border-pink-500 pl-3">
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
      </div>

      {/* Bottom Bar - Full Width & Wrapping */}
      <div className="bg-[#0a0a0a] border-t border-gray-800 px-6">
        <div className="max-w-7xl mx-auto py-3 sm:py-5 flex flex-col md:flex-row md:justify-between md:items-center flex-wrap gap-2 px-6 md:px-0 text-xs sm:text-sm text-gray-400">
          {/* Copyright */}
          <p className="text-center md:text-left whitespace-normal break-words">
            © {new Date().getFullYear()} Techivance. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-4 sm:gap-6 justify-center md:justify-end flex-wrap">
            <Link href="/privacy" className="hover:text-pink-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-pink-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
