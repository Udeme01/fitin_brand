import React from "react";

const Button = ({ variant, children, type, ...props }) => {
  const baseClasses = `border-0 outline-0 py-3 px-8 uppercase text-sm tracking-widest cursor-pointer`;

  const variantClasses = {
    solidWhite: "bg-white text-black",
    solidBlack: "bg-black text-white",
    outlineWhite: "bg-transparent border-2 border-white",
    outlineBlack: "bg-transparent border-2 border-black",
  };
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
