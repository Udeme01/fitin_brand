import React from "react";

const Logo = ({ className = "", ...props }) => {
  return (
    <div
      className={`flex items-center w-full gap-2 text-emerald-600  ${className}`}
    >
      <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center transform -rotate-10">
        <span className="w-5 h-5 text-white font-bold text-center flex items-center justify-center">
          F
        </span>
      </div>
      <span className="text-2xl font-bold tracking-wide">FITIN</span>
    </div>
  );
};

export default Logo;
