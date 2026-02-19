import React from "react";
import { Link } from "react-router-dom";
import products from "../data/dummy-products";

const ConfirmationPage = () => {
  const subtotal = products.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
        {/* Check icon */}
        <div className="flex justify-center mb-10">
          <div className="w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-stone-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-stone-400 font-light mb-3">
            Order Confirmed
          </p>
          <h1 className="font-light text-stone-900 leading-tight mb-4 text-6xl">
            Thank you, Udeme.
          </h1>
          <p className="text-sm font-light text-stone-500 leading-relaxed">
            Your order{" "}
            <span className="text-stone-800 font-medium">#MSN-20489</span> has
            been placed successfully.
          </p>
          <p className="text-sm font-light text-stone-500 mt-1">
            A confirmation has been sent to{" "}
            <span className="text-stone-800">emma@example.com</span>
          </p>
        </div>

        {/* Order details card */}
        <div className="bg-stone-900 text-stone-100 p-8 mb-6">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="font-light text-stone-100"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 24,
              }}
            >
              Order Details
            </h2>
            <span className="text-xs tracking-widest uppercase text-stone-500 font-light">
              #MSN-20489
            </span>
          </div>

          {/* Items */}
          <div className="space-y-5 mb-8">
            {products.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <div className="relative flex-shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-14 object-cover"
                    style={{ height: 70 }}
                  />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-stone-600 text-stone-100 text-xs flex items-center justify-center font-light">
                    {item.qty}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-light text-stone-200 leading-snug"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 17,
                    }}
                  >
                    {item.name}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-stone-500 font-light mt-0.5">
                    {item.category} / {item.subcategory}
                  </p>
                </div>
                <span className="font-light text-stone-300 shrink-0 text-xl">
                  ${(item.price * item.qty).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          {/* Summary rows */}
          <div className="border-t border-stone-800 pt-5 space-y-3">
            <div className="flex justify-between">
              <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                Subtotal
              </span>
              <span className="font-light text-stone-300 text-lg">
                ${subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                Shipping
              </span>
              <span className="text-xs tracking-widest uppercase text-green-400 font-light">
                Free
              </span>
            </div>
            <div className="flex justify-between items-baseline border-t border-stone-800 pt-4 mt-2">
              <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                Total
              </span>
              <span className="font-light text-stone-100 text-5xl">
                ${subtotal.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery info */}
        <div className="border border-stone-300 p-6 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Delivery To", value: "123 KOL Ave\nLagos, 102001" },
            {
              label: "Delivery Method",
              value: "Standard Delivery\n5–7 business days",
            },
            { label: "Estimated Arrival", value: "Feb 24 – Feb 26\n2026" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs tracking-widest uppercase text-stone-400 font-light mb-2">
                {label}
              </p>
              <p className="text-sm font-light text-stone-700 leading-relaxed whitespace-pre-line">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="block w-full sm:w-auto text-center bg-stone-900 text-stone-100 px-12 py-4 text-xs tracking-widest uppercase font-medium hover:bg-stone-700 transition-colors duration-300"
          >
            Continue Shopping
          </Link>
          <button className="w-full sm:w-auto text-center border border-stone-300 text-stone-600 px-12 py-4 text-xs tracking-widest uppercase font-light hover:border-stone-600 hover:text-stone-900 transition-colors duration-300">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
