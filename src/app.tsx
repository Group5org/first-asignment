import React from "react";
import Header from "./components/heads/Header";
import Profail from "./components/pages/profail";
import Cradspage from "./components/pages/cadspage";

const App: React.FC = () => {
  return (
    <div className="flex flex-row min-h-screen leading-6 text-gray-900">
      <div className="flex-grow">

      <Header/>
      <Profail/>
      <Cradspage/>
      </div>
      <div className="bg-pink-500 w-12 "> </div>
    </div>
  );
}
export default App;