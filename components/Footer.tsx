"use client"
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
              <span className="text-xl lg:text-2xl font-serif tracking-wide">
                URBAN JUNGLE CO.
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your premier destination for all things green. Bringing nature into your home, one plant at a time.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-green-500 flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-green-500 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-green-500 flex items-center justify-center transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full  hover:bg-green-500 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Houseplants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Outdoor Plants
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Succulents
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Desert Bloom
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  Plant Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Green Street, Plant City, PC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-green-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-500 flex-shrink-0" />
                <a href="mailto:hello@urbanjungle.com" className="text-gray-400 hover:text-green-500 transition-colors">
                  hello@urbanjungle.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest updates on new plants and exclusive offers.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg   border border-gray-700 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© 2024 Urban Jungle Co. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>


      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
    </footer>
  );
}