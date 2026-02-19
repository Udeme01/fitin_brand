import React from "react";

const CheckoutHeader = ({ children, ...props }) => {
  return (
    <h2 className="text-xs tracking-widest uppercase text-stone-500 font-light mb-6 pb-3 border-b border-stone-200">
      {children}
    </h2>
  );
};

export default CheckoutHeader;
