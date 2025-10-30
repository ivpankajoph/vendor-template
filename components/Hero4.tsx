import React from 'react';

export default function PremierDestination() {
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
              Your Premier Destination for All Green.
            </h2>
            
            <p className="text-gray-700 text-base lg:text-lg mb-12 leading-relaxed">
              At Urban Jungle Co., we believe in the transformative power of plants. Whether you're a seasoned gardener or just starting your green journey, our curated selection of plants will inspire and enrich your living space.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {/* Customer Satisfaction */}
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  98%
                </div>
                <div className="text-gray-600 text-base lg:text-lg">
                  Customer Satisfaction
                </div>
              </div>

              {/* Plants Sold */}
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  103K
                </div>
                <div className="text-gray-600 text-base lg:text-lg">
                  Plants Sold
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}