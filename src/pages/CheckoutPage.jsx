import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import products from "../data/dummy-products";
import { deliveryOptions } from "../data/deliveryOptions";
import { countryOptions } from "../data/countryOptions";
import { Form, Formik } from "formik";
import CheckoutHeader from "../components/common/CheckoutHeader";

const orderItems = products;

// ── Main Component ─────────────────────────────────────────
const CheckoutPage = () => {
  const [delivery, setDelivery] = useState("standard");
  // const [sameAsBilling, setSameAsBilling] = useState(true);
  const [placing, setPlacing] = useState(false);

  const selectedDelivery = deliveryOptions.find((d) => d.id === delivery);
  const subtotal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingCost = selectedDelivery?.price ?? 0;
  const total = subtotal + shippingCost;

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    setPlacing(true);
    setTimeout(() => {
      setPlacing(false);
      navigate("/confirmation");
    }, 1800);
  };

  // const formatCard = (val) => {
  //   const digits = val.replace(/\D/g, "").slice(0, 16);
  //   return digits.replace(/(.{4})/g, "$1 ").trim();
  // };

  // const formatExpiry = (val) => {
  //   const digits = val.replace(/\D/g, "").slice(0, 4);
  //   if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
  //   return digits;
  // };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-start">
        {/* ── LEFT COLUMN ── */}
        <div className="space-y-12">
          {/* Page Title */}
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-400 font-light mb-2">
              Step 1 of 2
            </p>
            <h1 className="font-light text-stone-900 leading-none text-6xl">
              Checkout
            </h1>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              Address: "",
              City: "",
              State: "",
              Zip: "",
              Country: "",
            }}
          >
            {(formik) => (
              <Form>
                {/* ── CONTACT ── */}
                <section>
                  <CheckoutHeader>Contact Information</CheckoutHeader>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="FirstName"
                      formik={formik}
                    />
                    <Input
                      id="LastName"
                      type="text"
                      name="LastName"
                      placeholder="LastName"
                      formik={formik}
                    />
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      formik={formik}
                    />
                    <Input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="+234 239 858 5856"
                      formik={formik}
                    />
                  </div>
                </section>

                {/* ── SHIPPING ADDRESS ── */}
                <section>
                  <div className="pt-12">
                    <CheckoutHeader>Shipping Address</CheckoutHeader>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      id="Address"
                      name="Address"
                      placeholder="123, Kol Ave"
                      formik={formik}
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <Input
                        type="text"
                        id="City"
                        name="City"
                        placeholder="Lagos"
                        formik={formik}
                      />
                      <Input
                        type="text"
                        id="State"
                        name="State"
                        placeholder="Lagos"
                        formik={formik}
                      />

                      <Input
                        type="text"
                        id="Zip"
                        name="Zip"
                        placeholder="ZIP / Postal"
                        formik={formik}
                      />
                    </div>
                    <Input
                      as="select"
                      id="Country"
                      name="Country"
                      placeholder="Select Country"
                      formik={formik}
                      options={countryOptions}
                    />
                  </div>
                </section>
              </Form>
            )}
          </Formik>

          {/* ── DELIVERY ── */}
          <section>
            <CheckoutHeader>Delivery Method</CheckoutHeader>
            <div className="space-y-3">
              {deliveryOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setDelivery(opt.id)}
                  className={`w-full flex items-center justify-between px-5 py-4 border transition-all text-left ${
                    delivery === opt.id
                      ? "border-stone-900 bg-stone-900 text-stone-100"
                      : "border-stone-300 bg-transparent text-stone-900 hover:border-stone-500"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        delivery === opt.id
                          ? "border-stone-100"
                          : "border-stone-400"
                      }`}
                    >
                      {delivery === opt.id && (
                        <div className="w-2 h-2 rounded-full bg-stone-100" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-light tracking-wide">
                        {opt.label}
                      </p>
                      <p
                        className={`text-xs tracking-widest font-light ${
                          delivery === opt.id
                            ? "text-stone-400"
                            : "text-stone-400"
                        }`}
                      >
                        {opt.eta}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-light">
                    {opt.price === 0 ? "Free" : `$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* ── PAYMENT ── */}
          <section>
            <CheckoutHeader>Payment Details</CheckoutHeader>

            <Formik
              initialValues={{
                cardName: "",
                cardNumber: "",
                expiry: "",
                cvv: "",
              }}
            >
              {(formik) => (
                <>
                  {/* Card visual */}
                  <div className="relative w-full max-w-sm h-44 bg-stone-900 mb-8 overflow-hidden select-none">
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 80% 20%, #c9b99a 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute top-6 left-6">
                      <p className="text-sm tracking-widest uppercase text-stone-500 font-light mb-1">
                        Fitin
                      </p>
                      <div className="w-8 h-5 border border-stone-600 rounded-sm" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      {/* card number */}
                      <p
                        className="text-stone-300 tracking-widest text-sm font-light mb-3"
                        style={{
                          fontFamily: "'Courier New', monospace",
                          letterSpacing: "0.2em",
                        }}
                      >
                        {formik.cardNumber || "•••• •••• •••• ••••"}
                      </p>
                      {/* card name */}
                      <div className="flex justify-between items-end">
                        {/* card name */}
                        <div>
                          <p className="text-xs tracking-widest uppercase text-stone-600 font-light">
                            Name
                          </p>
                          <p className="text-stone-300 text-xs tracking-wider font-light">
                            {formik.cardName || "FULL NAME"}
                          </p>
                        </div>
                        {/* expire */}
                        <div className="text-right">
                          <p className="text-xs tracking-widest uppercase text-stone-600 font-light">
                            Expires
                          </p>
                          <p className="text-stone-300 text-xs tracking-wider font-light">
                            {formik.expiry || "MM/YY"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Form className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      id="cardName"
                      name="cardName"
                      label="Name on Card"
                      placeholder="EMMANUEL UDEME EDET"
                      formik={formik}
                    />
                    <Input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      label="Card Number"
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      formik={formik}
                    />
                    <Input
                      type="text"
                      id="expiry"
                      name="expiry"
                      label="Expiry Date"
                      placeholder="MM/YY"
                      maxLength={5}
                      formik={formik}
                    />
                    <Input
                      type="text"
                      id="cvv"
                      name="cvv"
                      label="CVV"
                      placeholder="•••"
                      maxLength={4}
                      formik={formik}
                    />
                  </Form>
                </>
              )}
            </Formik>

            {/* Billing same as shipping */}
            <Formik initialValues={{ agreedToTerms: false }}>
              {(formik) => (
                <Form className="mt-4">
                  <label
                    htmlFor="agreedToTerms"
                    className="flex items-center mt-2"
                  >
                    <Input
                      type="checkbox"
                      formik={formik}
                      id="agreedToTerms"
                      name="agreedToTerms"
                    />

                    <div className="flex gap-3 items-center">
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          formik.values.agreedToTerms
                            ? "bg-stone-900 border-stone-900"
                            : "border-stone-400"
                        }`}
                      >
                        {formik.values.agreedToTerms && (
                          <svg
                            className="w-2.5 h-2.5 text-stone-100"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        )}
                      </div>

                      <span className="text-xs tracking-widest uppercase text-stone-500 font-light group-hover:text-stone-900 transition-colors">
                        Billing address same as shipping
                      </span>
                    </div>
                  </label>
                </Form>
              )}
            </Formik>
          </section>
        </div>

        {/* ── RIGHT COLUMN — ORDER SUMMARY ── */}
        <aside className="lg:sticky lg:top-28 space-y-0">
          <div className="bg-stone-900 text-stone-100 p-8">
            <h2 className="font-light tracking-wide mb-8 text-stone-100 text-3xl">
              Order Summary
            </h2>

            {/* Items */}
            <div className="space-y-5 mb-8">
              {orderItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-start">
                  <div className="relative shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-14 h-18 object-cover"
                      style={{ height: 70 }}
                    />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-stone-600 text-stone-100 text-xs flex items-center justify-center font-light">
                      {item.qty}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xl font-light text-stone-200 leading-snug truncate">
                      {item.name}
                    </p>
                    <p className="text-xs tracking-widest uppercase text-stone-500 font-light mt-0.5">
                      {item.category} / {item.subcategory}
                    </p>
                  </div>
                  <span className="text-lg font-light text-stone-300 shrink-0">
                    ${(item.price * item.qty).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-stone-800 pt-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                  Subtotal
                </span>
                <span
                  className="font-light text-stone-300"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 16,
                  }}
                >
                  ${subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                  Shipping
                </span>
                <span
                  className={`font-light text-xs text-green-400 tracking-widest uppercase`}
                >
                  {shippingCost === 0 ? "Free" : `$${shippingCost}`}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-stone-800 mt-5 pt-5 flex justify-between items-baseline">
              <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                Total
              </span>
              <span className="font-light text-stone-100 text-5xl">
                ${total.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Place Order CTA */}
          <button
            onClick={handlePlaceOrder}
            disabled={placing}
            className={`w-full py-5 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
              placing
                ? "bg-stone-300 text-stone-500 cursor-not-allowed"
                : "bg-stone-800 text-stone-100 hover:bg-amber-900"
            }`}
          >
            {placing ? (
              <span className="flex items-center justify-center gap-3">
                <svg
                  className="w-3.5 h-3.5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              `Place Order · $${total.toLocaleString()}`
            )}
          </button>

          {/* Trust badges */}
          <div className="bg-stone-50 border border-stone-200 px-6 py-4 flex items-center justify-between">
            {[
              { icon: "🔒", label: "SSL Secured" },
              { icon: "↩", label: "Free Returns" },
              { icon: "✦", label: "Authenticity" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-base">{icon}</span>
                <span className="text-xs tracking-widest uppercase text-stone-400 font-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
