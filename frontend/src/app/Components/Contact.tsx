"use client";

import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl text-center mb-4 font-[var(--font-cossette-titre)]">
          Contact Us
        </h1>
        <p className="text-center text-gray-400 mb-12">
          We’d love to hear from you. Please fill out the form below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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

        </form>

        {success && (
          <p className="text-center text-green-400 font-medium mt-6">
            ✅ Your message has been sent!
          </p>
        )}
      </div>
    </section>
  );
}

