"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "../navbar";
import { AppDispatch, RootState } from "@/store/store";
import { fetchHomepageTemplate } from "@/store/slices/homepageslice";

interface HomepageData {
  header_text: string;
  header_text_small: string;
  button_header: string;
  description: {
    large_text: string;
    summary: string;
    percent: { percent_in_number: string; percent_text: string };
    sold: { sold_number: string; sold_text: string };
    features?: {
      title: string;
      description: string;
      icon?: string; // you can store icon name or URL
    }[];
  };
}

export default function UrbanJungleLanding2() {
  const searchParams = useSearchParams();
  const vendorId = searchParams.get("vendor_id") || "";

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state?.homepage
  );

  useEffect(() => {
    if (vendorId) {
      dispatch(fetchHomepageTemplate(vendorId));
    }
  }, [vendorId, dispatch]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  const homepage: HomepageData | null = data || null;
  console.log("aksdsakjdhsak", homepage);

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1463320726281-696a485928c7?w=1920&q=80')`,
        }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
          <p className="text-white text-sm lg:text-base tracking-widest mb-6 uppercase">
            {homepage?.header_text_small || "Welcome to APi Urban Jungle Co."}
          </p>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 max-w-6xl">
            {homepage?.header_text ||
              "Discover the Beauty of Nature at Your Fingertips"}
          </h1>

          <Link href="/all-products">
            <button className="bg-green-500 hover:bg-green-600 text-white px-10 cursor-pointer py-4 rounded-full text-lg lg:text-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
              {homepage?.button_header || "Shop all Products"}
            </button>
          </Link>
        </div>

        {homepage?.description?.features &&
          homepage.description.features.length > 0 && (
            <div className="relative z-10 bg-gray-50 py-16 lg:py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  {homepage.description.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
                        {feature.icon ? (
                          <img
                            src={feature.icon}
                            alt={feature.title}
                            className="w-10 h-10 lg:w-12 lg:h-12"
                          />
                        ) : (
                          <svg
                            className="w-10 h-10 lg:w-12 lg:h-12"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                            />
                          </svg>
                        )}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-base lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
