import React from "react";

const Profail: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-row gap-4 m-4 ">
      <div className="flex flex-col  w-3/4 gap-4 leading-7 pl-4 m-auto">
        <h1 className="flex text-3xl font-semibold w-94 font-serif ">Hi, I'm Ridwaan Hassan Creative Technologiest</h1>
        <p className="w-100">A passionate developer with a knack for crafting elegant solutions to complex problems. With expertise in full-stack development, I thrive on turning ideas into reality through code.</p>
        <button className="bg-pink-500 text-white w-45 p-2 rounded-md hover:bg-pink-600">Download Resume</button>
      </div>
      <div className="flex flex-col rounded-full w-1/3  overflow-hidden shadow-lg  border-4 border-pink-500 drop-shadow-2xl border-opacity-50 shadow-pink-300 shadow-2xl shadow-opacity-100 shadow-xl">
        <img src="../rad.jpg" alt="" />
      </div>
    </div>
  );
}
export default Profail;