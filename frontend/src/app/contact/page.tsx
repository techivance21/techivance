"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactCards = [
    { icon: Mail, title: "Email Us", value: "techivance21@gmail.com", desc: "Expect reply within 24 hours" },
    { icon: Phone, title: "Call Us", value: "+971 4 242 1375", desc: "Mon–Fri, 9AM–6PM PKT" },
    { icon: MapPin, title: "Visit Us", value: "Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE", desc: "Book a meeting anytime" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const target = e.currentTarget;
    const formData: FormData = {
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      phone: (target.elements.namedItem("phone") as HTMLInputElement).value,
      service: (target.elements.namedItem("service") as HTMLInputElement).value,
      message: (target.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Network error");

      setSuccess(true);
      target.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-white px-4 py-16 mt-30">
      {/* Hero */}
      <section className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-cossette-titre)] mb-4">
          Get in <span className="text-purple-400">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl leading-relaxed">
          Whether you’re launching a startup or scaling an enterprise, we’re here to help.
          Reach out for collaborations, project inquiries, or just to say hi!
        </p>
      </section>

      {/* Contact Info + Form Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12 max-w-6xl mx-auto">
        {/* Contact Info Cards */}
        <div className="flex flex-col gap-6">
          {contactCards.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-purple-500 transition shadow-xl"
            >
              <item.icon className="w-12 h-12 text-purple-400 mb-3" />
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-lg font-medium text-gray-200 mb-1">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl w-full">
          <h2 className="text-3xl sm:text-4xl font-[var(--font-cossette-titre)] mb-4 text-center">
            Send us a <span className="text-pink-400">Message</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            Fill out the form below and one of our experts will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            {[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
              { name: "service", type: "text", placeholder: "Service Interested In" },
            ].map((field, idx) => (
              <input
                key={idx}
                {...field}
                className="w-full px-5 py-3 rounded-lg bg-neutral-900 text-white placeholder-gray-400
                           border border-neutral-800 focus:border-purple-500 focus:ring-1 
                           focus:ring-purple-500 outline-none transition"
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-5 py-3 rounded-lg bg-neutral-900 text-white placeholder-gray-400
                         border border-neutral-800 focus:border-purple-500 focus:ring-1 
                         focus:ring-purple-500 outline-none transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="mx-auto block w-full sm:w-auto px-8 py-3 border border-purple-500 
                         rounded-full text-purple-400 font-[var(--font-inter)] text-lg
                         hover:bg-purple-500 hover:text-white transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-center text-green-400 font-medium mt-4 animate-fade-in">
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
