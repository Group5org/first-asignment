import React from "react";

const Cradspage: React.FC = () => {
  return (
    <div className="p-8 bg-pink-50 rounded-lg shadow-md m-4"> 
    <div className="flex justify-between items-center mb-6">
      <p className="text-lg font-semibold">Resent posts</p>
      <button className=" text-pink-500 hover:text-pink-700 font-medium">View All</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300  duration-300 drop-shadow-2xl drop-shadow-pink-300 shadow-pink-300 shadow-opacity-50 Hover:shadow-pink-400 hover:shadow-opacity-70 Hover:transition-shadow Hover:translate-y-1 Hover:duration-300 p-6 hover:scale-105 transform transition-transform duration-300 Hover:ease-in-out">
        <h2 className="text-xl font-semibold mb-2">Understanding React Hooks</h2>
        <p className="py-2">12 Feb 2024 | Design pattern</p>
        <p className="text-gray-600 mb-4">A deep dive into the world of React Hooks and how they can simplify your code.</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Read More</button>
      </div>  
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 drop-shadow-2xl drop-shadow-pink-300 shadow-pink-300 shadow-opacity-50 Hover:shadow-pink-400 hover:shadow-opacity-70 Hover:transition-shadow Hover:translate-y-1 Hover:duration-300 p-6 hover:scale-105 transform transition-transform duration-300 Hover:ease-in-out">
        <h2 className="text-xl font-semibold mb-2">CSS Grid vs. Flexbox</h2>
        <p className="py-2">05 Mar 2024 | CSS</p>
        <p className="text-gray-600 mb-4">An in-depth comparison of CSS Grid and Flexbox for modern web layouts.</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Read More</button>
      </div>  
      <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 drop-shadow-2xl drop-shadow-pink-300 shadow-pink-300 shadow-opacity-50 Hover:shadow-pink-400 hover:shadow-opacity-70 Hover:transition-shadow Hover:translate-y-1 Hover:duration-300 p-6 hover:scale-105 transform transition-transform duration-300 Hover:ease-in-out leading-7 ">
        <h2 className="text-xl font-semibold mb-2">A Guide to TypeScript</h2>
        <p className="py-2">20 Apr 2024  |  TypeScript</p>
        <p className="text-gray-600 mb-4">Learn the basics of TypeScript and how it can improve your JavaScript code quality.</p>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">Read More</button>
      </div>
      
      </div>
    </div>
  );
} 
export default Cradspage;