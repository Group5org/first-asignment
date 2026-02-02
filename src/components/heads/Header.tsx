import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 
                      flex flex-col sm:flex-row 
                      sm:justify-between sm:items-center gap-4">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center sm:text-left">
          My Application Header
        </h1>

        {/* Navigation */}
        <div className="flex justify-center sm:justify-end gap-2 sm:gap-4 text-base sm:text-lg font-medium">
          <a href="#" className="hover:text-pink-500 hover:bg-pink-100 px-3 py-2 rounded-md">
            Work
          </a>
          <a href="#" className="hover:text-pink-500 hover:bg-pink-100 px-3 py-2 rounded-md">
            Blog
          </a>
          <a href="#" className="hover:text-pink-500 hover:bg-pink-100 px-3 py-2 rounded-md">
            Contact
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
