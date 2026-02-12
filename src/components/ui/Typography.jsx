import React from "react";

const Typography = ({ variant, children, className, color, ...props }) => {
  const baseStyles = `uppercase tracking-widest`;
  const variantStyles = {
    h2: "font-extralight",
    h1: "text-xl font-medium md:text-3xl text-white",
    h1Bigger: "text-2xl mt-6",
  };

  const colorStyles = {
    white: "text-white",
    black: "text-black",
  };

  return (
    <h2
      variant
      className={`${baseStyles} ${variantStyles[variant]} ${color ? colorStyles[color] : ""}`}
    >
      {children}
    </h2>
  );
};

export default Typography;
