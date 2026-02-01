import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center"> 
        <h1 className="text-3xl font-bold text-gray-900">My Application Header</h1>

        <div className="flex gap-4 right-0 mt-auto text-lg font-medium">
          <a href="#" className="hover:text-pink-500 hover:bg-pink-100 p-2 rounded-md">work</a>
          <a href="#" className="hover:text-pink-500 hover:bg-pink-100 p-2 rounded-md">Blog</a>
          <a href="#" className="hover:text-pink-500 hover:bg-pink-100 p-2 rounded-md">Contact</a>
        </div>
      </div>
    </header>
  );
}
export default Header;