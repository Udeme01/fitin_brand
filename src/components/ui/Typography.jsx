import React from "react";

const Typography = ({
  variant = "h2",
  children,
  className,
  color,
  as,
  ...props
}) => {
  const Component =
    as || (variant === "h1" || variant === "h1Bigger" ? "h1" : "h2");

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
    <Component
      className={`${baseStyles} ${variantStyles[variant] || ""} ${color ? colorStyles[color] : ""} ${className || ""}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
