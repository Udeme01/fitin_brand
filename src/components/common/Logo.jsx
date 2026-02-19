import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ className = "", ...props }) => {
  return (
    <Link
      to={`/`}
      className={`flex items-center gap-2 text-emerald-600 w-fit text-2xl ${className}`}
    >
      <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center transform -rotate-10">
        <span className="w-5 h-5 text-white font-bold text-center flex items-center justify-center">
          F
        </span>
      </div>
      <span className="font-bold tracking-wide">FITIN</span>
    </Link>
  );
};

export default Logo;
