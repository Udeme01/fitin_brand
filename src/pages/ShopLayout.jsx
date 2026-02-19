import React from "react";
import { Outlet, useLocation, useNavigate, Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import ScrollToTop from "../components/common/ScrollToTop";

const steps = [
  { label: "Cart", path: "/cart" },
  { label: "Checkout", path: "/checkout" },
  { label: "Confirmation", path: "/confirmation" },
];

const ShopLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStepIndex = steps.findIndex((s) => s.path === location.pathname);

  const canGoBack = currentStepIndex > 0;

  const handleBack = () => {
    if (canGoBack) {
      navigate(steps[currentStepIndex - 1].path);
    } else {
      navigate("/"); // back to home if on cart
    }
  };

  return (
    <div
      className="min-h-screen bg-stone-100"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      <ScrollToTop />
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-stone-100 border-b border-stone-300">
        <div className="flex items-center justify-between px-8 md:px-16 py-6">
          <Logo />

          {/* Stepper */}
          <div className="hidden md:flex items-center gap-3">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isUpcoming = index > currentStepIndex;

              return (
                <React.Fragment key={step.path}>
                  {/* Step label */}
                  <button
                    onClick={() => isCompleted && navigate(step.path)}
                    disabled={!isCompleted}
                    className={`text-xs tracking-widest uppercase font-light transition-colors ${
                      isCurrent
                        ? "text-stone-900 font-medium"
                        : isCompleted
                          ? "text-stone-500 hover:text-stone-900 cursor-pointer"
                          : "text-stone-300 cursor-default"
                    }`}
                  >
                    {step.label}
                  </button>

                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <span
                      className={`text-xs ${isCompleted ? "text-stone-400" : "text-stone-300"}`}
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Right — Back + Secure */}
          <div className="flex items-center gap-6">
            {/* Back button */}
            <button
              onClick={handleBack}
              className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-colors font-light group"
            >
              <span className="group-hover:-translate-x-1 transition-transform inline-block">
                ←
              </span>
              {currentStepIndex === 0
                ? "Shop"
                : steps[currentStepIndex - 1].label}
            </button>

            {/* Secure badge */}
            <span className="text-xs tracking-widest uppercase text-stone-400 font-light flex items-center gap-2">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              Secure Checkout
            </span>
          </div>
        </div>

        {/* Mobile stepper */}
        <div className="md:hidden flex items-center justify-center gap-3 pb-4 px-8">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            return (
              <React.Fragment key={step.path}>
                <span
                  className={`text-xs tracking-widest uppercase font-light ${
                    isCurrent
                      ? "text-stone-900 font-medium"
                      : isCompleted
                        ? "text-stone-500"
                        : "text-stone-300"
                  }`}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <span
                    className={`text-xs ${isCompleted ? "text-stone-400" : "text-stone-300"}`}
                  >
                    →
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="h-px bg-stone-200 relative">
          <div
            className="absolute top-0 left-0 h-px bg-stone-900 transition-all duration-500"
            style={{
              width: `${(currentStepIndex / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>
      </nav>

      {/* Page content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
