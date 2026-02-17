import React from "react";

const Button = ({ variant, children, type, className = "", ...props }) => {
  const baseClasses = `border-0 outline-0 py-4 px-8 uppercase text-sm tracking-widest cursor-pointer transition-all duration-300 hover:scale-[0.95] active:scale-[0.9] rounded-full font-semibold`;

  const variantClasses = {
    solidWhite: "bg-white text-black",
    solidBlack: "bg-black text-white",
    outlineWhite: "bg-transparent border-2 border-white",
    outlineBlack: "bg-transparent border-2 border-black",
  };
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
