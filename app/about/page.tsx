"use client";
import React from "react";
import { Leaf, Users, Award, Heart } from "lucide-react";
import Navbar from "../../components/navbar";
import Navbar2 from "../../components/navbar2";

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf size={40} />,
      title: "Sustainability",
      description:
        "We prioritize eco-friendly practices and sustainable sourcing to protect our planet.",
    },
    {
      icon: <Users size={40} />,
      title: "Community",
      description:
        "Building a community of plant lovers who share knowledge and passion for greenery.",
    },
    {
      icon: <Award size={40} />,
      title: "Quality",
      description:
        "Only the finest, healthiest plants make it to our collection for your home.",
    },
    {
      icon: <Heart size={40} />,
      title: "Passion",
      description:
        "Our love for plants drives everything we do, from selection to customer care.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Botanist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
              <p className="text-xl lg:text-2xl">
                Bringing Nature Closer to You
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Founded in 2020, Urban Jungle Co. began with a simple mission:
                to make plant ownership accessible and enjoyable for everyone.
                What started as a small local nursery has grown into a thriving
                online destination for plant enthusiasts across the country.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We believe that plants have the power to transform spaces and
                improve lives. Whether you're a seasoned gardener or just
                starting your green journey, we're here to help you cultivate
                your own urban jungle.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every plant in our collection is carefully selected, nurtured,
                and prepared to thrive in your home. We're not just selling
                plants—we're sharing our passion and expertise to help you
                succeed.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80"
                alt="Our greenhouse"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg text-center mb-12">
              The passionate people behind Urban Jungle Co.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover mb-4 shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  10K+
                </div>
                <div className="text-gray-600 text-lg">Happy Customers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  500+
                </div>
                <div className="text-gray-600 text-lg">Plant Varieties</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600 text-lg">Satisfaction Rate</div>
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
