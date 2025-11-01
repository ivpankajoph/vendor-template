"use client";

import { JSX, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchAboutpageTemplate } from "@/store/slices/aboutpageslice";
import { Leaf, Users, Award, Heart } from "lucide-react";
import Navbar2 from "../../components/navbar2";
import AboutPage2 from "@/components/duplicate/about/Part1";

// map icon names from API to actual icons
const iconMap: Record<string, JSX.Element> = {
  leaf: <Leaf size={40} />,
  users: <Users size={40} />,
  award: <Award size={40} />,
  heart: <Heart size={40} />,
};

export default function AboutPage() {
  const dispatch = useDispatch<AppDispatch>();
  const fetched = useRef(false);

  // Select data from Redux
  const { data, loading } = useSelector((state: RootState) => state.aboutpage);

  // Fetch data once from vendor_id (stored in session)
  useEffect(() => {
    const vendorId = sessionStorage.getItem("vendor_id");
    if (vendorId && !fetched.current) {
      fetched.current = true;
      dispatch(fetchAboutpageTemplate(vendorId));
    }
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
    <AboutPage2/>
    );
  }

  const { hero, story, values, team, stats } = data;

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${hero?.backgroundImage}')`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">{hero?.title}</h1>
              <p className="text-xl lg:text-2xl">{hero?.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {story?.heading}
              </h2>
              {story?.paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
            {story?.image && (
              <div>
                <img
                  src={story.image}
                  alt="Our story"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>

          {/* Our Values */}
          {values?.length > 0 && (
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value: any, index: number) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      {iconMap[value.icon] || <Leaf size={40} />}
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
          )}

          {/* Our Team */}
          {team?.length > 0 && (
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 text-lg text-center mb-12">
                The passionate people behind our journey.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member: any, index: number) => (
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
          )}

          {/* Stats Section */}
          {stats?.length > 0 && (
            <div className="mt-20 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {stats.map((item: any, i: number) => (
                  <div key={i}>
                    <div className="text-5xl font-bold text-gray-900 mb-2">
                      {item.value}
                    </div>
                    <div className="text-gray-600 text-lg">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
