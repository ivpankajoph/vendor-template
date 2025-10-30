"use client";
import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Navbar from "./navbar";

export default function UrbanJungleLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1920&q=80')`,
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
  <Navbar/>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-90 absolute top-20 left-0 right-0 z-50">
            <div className="flex flex-col items-center gap-6 py-8">
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors text-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors text-lg"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors text-lg"
              >
                About
              </a>
              <a
                href="#"
                className="text-white hover:text-green-400 transition-colors text-lg"
              >
                Contact
              </a>
              <div className="flex items-center gap-5 mt-4">
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="relative text-white hover:text-green-400 transition-colors"
                >
                  <ShoppingBag size={24} />
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                    0
                  </span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
          <p className="text-white text-sm lg:text-base tracking-widest mb-6 uppercase">
            Welcome to Urban Jungle Co.
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 max-w-6xl">
            Discover the Beauty of Nature at Your Fingertips
          </h1>
          <Link href="/all-products">
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 cursor-pointer py-4 rounded-full text-lg lg:text-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
              Shop all Products
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Feature 1 - Secure Payment */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                Secure Payment
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                Elementum feugiat diam
              </p>
            </div>

            {/* Feature 2 - Free Shipping */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M1 6h15v9H1z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M16 8h2.5L21 11v4h-5V8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="6"
                    cy="18"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                Free Shipping
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                For $50 order
              </p>
            </div>

            {/* Feature 3 - Delivered with Care */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                Delivered with Care
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                Lacinia pellentesque leo
              </p>
            </div>

            {/* Feature 4 - Excellent Service */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 lg:w-12 lg:h-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                Excellent Service
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                Blandit gravida viverra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
