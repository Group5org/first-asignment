import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";

const Cradspage: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 bg-pink-50 rounded-lg shadow-md m-2 sm:m-4">

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-6">
        <p className="text-base sm:text-lg font-semibold text-center sm:text-left">
          Recent posts
        </p>
        <button className="text-pink-500 hover:text-pink-700 font-medium self-center sm:self-auto">
          View All
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 
                        hover:shadow-lg transition-transform duration-300 
                        hover:scale-105">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Understanding React Hooks
          </h2>
          <p className="py-1 text-sm sm:text-base">
            12 Feb 2024 | Design pattern
          </p>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            A deep dive into the world of React Hooks and how they can simplify your code.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Read More
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 
                        hover:shadow-lg transition-transform duration-300 
                        hover:scale-105">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            CSS Grid vs. Flexbox
          </h2>
          <p className="py-1 text-sm sm:text-base">
            05 Mar 2024 | CSS
          </p>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            An in-depth comparison of CSS Grid and Flexbox for modern web layouts.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Read More
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 
                        hover:shadow-lg transition-transform duration-300 
                        hover:scale-105">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            A Guide to TypeScript
          </h2>
          <p className="py-1 text-sm sm:text-base">
            20 Apr 2024 | TypeScript
          </p>
          <p className="text-gray-600 mb-4 text-sm sm:text-base leading-6">
            Learn the basics of TypeScript and how it can improve your JavaScript code quality.
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Read More
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-10 border-t pt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 text-xl sm:text-2xl transition-colors"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 text-xl sm:text-2xl transition-colors"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 text-xl sm:text-2xl transition-colors"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700 text-xl sm:text-2xl transition-colors"
        >
          <FaTwitter />
        </a>
      </div>

    </div>
  );
};

export default Cradspage;
