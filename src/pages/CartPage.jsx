import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/dummy-products";

const CartPage = () => {
  const [items, setItems] = useState(products);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [removingId, setRemovingId] = useState(null);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingId(null);
    }, 400);
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 500 ? 0 : 15;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen text-stone-900">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">
        {/* LEFT */}
        <div>
          {/* Heading */}
          <div className="flex items-baseline gap-4 mb-12">
            <h1 className="font-light tracking-tight text-stone-900 text-6xl">
              Your Cart
            </h1>
            <span className="text-sm tracking-widest uppercase text-stone-600 font-light">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          {/* Empty State */}
          {items.length === 0 && (
            <div className="text-center py-32">
              <p className="font-light text-stone-900 mb-3 text-4xl">
                Your bag is empty
              </p>
              <p className="text-xs tracking-widest uppercase text-stone-400 font-light">
                Discover our new arrivals
              </p>
            </div>
          )}

          {/* Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className={`grid grid-cols-[100px_1fr_auto] md:grid-cols-[120px_1fr_auto] gap-6 md:gap-8 py-8 border-t border-stone-300 last:border-b`}
             
            >
              {/* Image */}
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-36 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div>
                <p className="font-light mb-1 text-stone-900 text-2xl">
                  {item.name}
                </p>
                <p className="text-xs tracking-widest uppercase text-stone-600 font-light mb-6">
                  {item.category} / {item.subcategory}
                </p>

                {/* Qty Controls */}
                <div className="flex items-center border border-stone-300 w-fit">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="w-9 h-9 flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors text-lg font-light"
                  >
                    −
                  </button>
                  <span className="w-10 h-9 flex items-center justify-center text-xs tracking-widest border-x border-stone-300 font-light">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="w-9 h-9 flex items-center justify-center text-stone-700 hover:bg-stone-200 transition-colors text-lg font-light"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price + Remove */}
              <div className="flex flex-col items-end gap-4">
                <span className="font-light text-stone-900 text-3xl">
                  ${(item.price * item.qty).toLocaleString()}
                </span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xs tracking-widest uppercase text-stone-400 hover:text-red-400 transition-colors font-light"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Continue Shopping */}
          <button className="group flex items-center gap-3 mt-10 text-xs tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-all font-light">
            <span className="group-hover:-translate-x-1 transition-transform inline-block">
              ←
            </span>
            Continue Shopping
          </button>
        </div>

        {/* RIGHT — SUMMARY */}
        <aside className="bg-stone-900 text-stone-100 p-10 lg:sticky lg:top-28">
          <h2 className="font-light tracking-wide mb-10 text-stone-100 text-4xl">
            Order Summary
          </h2>

          {/* Free Shipping Banner */}
          {subtotal < 500 && (
            <div className="bg-stone-800 text-center text-xs tracking-widest uppercase text-stone-400 font-light py-3 px-4 mb-8">
              Spend <span className="text-amber-300 text-sm">${500 - subtotal}</span>{" "}
              more for free shipping
            </div>
          )}

          {/* Subtotal */}
          <div className="border-b border-stone-800 py-4 flex justify-between items-center">
            <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
              Subtotal
            </span>
            <span className="font-light text-stone-100 text-3xl">
              ${subtotal.toLocaleString()}
            </span>
          </div>

          {/* Discount */}
          {promoApplied && (
            <div className="border-b border-stone-800 py-4 flex justify-between items-center">
              <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                Promo (10%)
              </span>
              <span className="text-green-400 font-light text-3xl">
                −${discount}
              </span>
            </div>
          )}

          {/* Shipping */}
          <div className="border-b border-stone-800 py-4 flex justify-between items-center">
            <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
              Shipping
            </span>
            {shipping === 0 ? (
              <span className="text-xs tracking-widest uppercase text-green-400 font-light">
                Complimentary
              </span>
            ) : (
              <span className="font-light text-stone-100 text-2xl">
                ${shipping}
              </span>
            )}
          </div>

          {/* Total */}
          <div className="flex justify-between items-baseline pt-7 mb-8">
            <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
              Total
            </span>
            <span className="font-light text-stone-100 text-3xl">
              ${total.toLocaleString()}
            </span>
          </div>

          {/* Promo */}
          <div className="mb-8">
            <span className="text-xs tracking-widest uppercase text-stone-500 font-light block mb-2">
              Promo Code
            </span>
            <div className="flex border border-stone-700">
              <input
                className="flex-1 bg-transparent px-4 py-3 text-xs tracking-widest text-stone-100 placeholder-stone-700 outline-none font-light"
                placeholder="Enter code"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
              <button
                onClick={() => {
                  if (promo.trim()) setPromoApplied(true);
                }}
                className={`border-l border-stone-700 px-4 text-xs tracking-widest uppercase font-light transition-colors hover:bg-stone-800 ${
                  promoApplied
                    ? "text-green-400"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {promoApplied ? "Applied ✓" : "Apply"}
              </button>
            </div>
            {promoApplied && (
              <p className="text-xs text-green-400 mt-2 font-light tracking-wide">
                Code applied — 10% off your order
              </p>
            )}
          </div>

          {/* Checkout CTA */}
          <Link
            to={`/checkout`}
            className="block text-center w-full bg-stone-100 text-stone-900 py-5 text-xs tracking-widest uppercase font-medium hover:bg-amber-200 transition-colors duration-300"
          >
            Proceed to Checkout
          </Link>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs tracking-widest uppercase text-stone-600 font-light">
            <span>🔒</span>
            <span>Secure & encrypted checkout</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CartPage;
