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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-6 relative z-20">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
        <span className="text-white text-xl lg:text-2xl font-serif tracking-wide">
          URBAN JUNGLE CO.
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className="text-white hover:text-green-400 transition-colors text-lg">
          Home
        </Link>
       
        <Link href="/about" className="text-white hover:text-green-400 transition-colors text-lg">
          About
        </Link>
        <Link href="/contact" className="text-white hover:text-green-400 transition-colors text-lg">
          Contact
        </Link>
        <Link href="/category" className="text-white hover:text-green-400 transition-colors text-lg">
          Category
        </Link>
      </div>

      {/* Desktop Icons */}
      <div className="hidden lg:flex items-center gap-5">
        {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
          <a key={i} href="#" className="text-white hover:text-green-400 transition-colors">
            <Icon size={24} />
          </a>
        ))}
        <a href="#" className="relative text-white hover:text-green-400 transition-colors">
          <ShoppingBag size={24} />
          <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
            0
          </span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 absolute top-full left-0 right-0 z-50">
          <div className="flex flex-col items-center gap-6 py-8">
            {["Home", "Shop", "About", "Contact", "Category"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-white hover:text-green-400 transition-colors text-lg"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-5 mt-4">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-white hover:text-green-400 transition-colors">
                  <Icon size={24} />
                </a>
              ))}
              <a href="#" className="relative text-white hover:text-green-400 transition-colors">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
