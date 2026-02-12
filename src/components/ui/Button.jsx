import React from "react";

const Button = ({ variant, children }) => {
  const baseClasses = `border-0 outline-0 py-3 px-8 uppercase text-sm tracking-widest cursor-pointer`;

  const variantClasses = {
    solidWhite: "bg-white text-black",
    solidBlack: "bg-black text-white",
    outlineWhite: "bg-transparent border-2 border-white",
    outlineBlack: "bg-transparent border-2 border-black",
  };
  return (
    <button variant className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
