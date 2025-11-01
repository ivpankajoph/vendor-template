"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar2 from "@/components/navbar2";


export default function ContactPage2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "123 Green Street, Plant City, PC 12345",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+1 (234) 567-890",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "hello@urbanjungle.com",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl">We'd Love to Hear From You</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-green-600 shadow-md">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-700">{info.details}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have a question or need assistance? Fill out the form below and
                we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>

            {/* Map/Image Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Find Us Here
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Visit our store to explore our collection in person. Our team is
                ready to help you find the perfect plants for your space.
              </p>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                <img
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80"
                  alt="Store location"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Visit Our Store?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>
                      Expert plant care advice from our knowledgeable staff
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Hands-on experience with our plant collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Complimentary plant health checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Free workshops and events for plant enthusiasts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg text-center mb-12">
              Quick answers to common questions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What are your shipping options?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer free shipping on orders over $50. Standard shipping
                  takes 3-5 business days, and express shipping is available for
                  faster delivery.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer plant care guidance?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Each plant comes with detailed care instructions, and our
                  team is always available to answer your questions via email or
                  phone.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is your return policy?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer a 30-day satisfaction guarantee. If you're not happy
                  with your plant, contact us for a replacement or refund.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Can I schedule a consultation?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! We offer free consultations to help you choose the
                  perfect plants for your space. Contact us to schedule an
                  appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-md shadow-lg flex items-center justify-center transition-all transform hover:scale-105 z-50"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}
