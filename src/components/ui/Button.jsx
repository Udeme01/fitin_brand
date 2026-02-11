import React from "react";

const Button = ({ variant }) => {
  const baseClasses = `border-0 outline-0 py-3 px-8 uppercase text-sm tracking-widest cursor-pointer`;

  const variantClasses = {
    solid: "bg-white text-black",
    outlineWhite: "bg-transparent border-2 border-white",
    outlineBlack: "bg-transparent border-2 border-black",
  };
  return (
    <button variants className={`${baseClasses} ${variantClasses[variant]}`}>
      shop
    </button>
  );
};

export default Button;
