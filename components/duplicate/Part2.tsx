"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface DescriptionData {
  large_text: string;
  summary: string;
  percent: { percent_in_number: string; percent_text: string };
  sold: { sold_number: string; sold_text: string };
}

export default function PremierDestination2() {
  const data = useSelector(
    (state: RootState) => state?.homepage?.data?.description
  );

  console.log("asdsad", data);

  return (
    <div className="bg-linear-to-br from-green-50 to-yellow-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80"
                alt="Beautiful potted plants"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {data.large_text}
            </h2>

            <p className="text-gray-700 text-base lg:text-lg mb-12 leading-relaxed">
              {data.summary}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {/* Customer Satisfaction */}
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {data.percent.percent_in_number}%
                </div>
                <div className="text-gray-600 text-base lg:text-lg">
                  {data.percent.percent_text}
                </div>
              </div>

              {/* Plants Sold */}
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {data.sold.sold_number}
                </div>
                <div className="text-gray-600 text-base lg:text-lg">
                  {data.sold.sold_text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
