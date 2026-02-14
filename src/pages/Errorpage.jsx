import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const ErrorPage = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Error Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
            {/* Animated 404 */}
            <div className="relative">
              <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-linear-to-r from-black to-white animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>

            {/* Error Message */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-3">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into
              the digital void.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGoHome}
                className="w-full sm:w-auto px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Go Home
              </button>
              <button
                onClick={handleGoBack}
                className="w-full sm:w-auto px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Go Back
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 flex justify-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>

          {/* Helper Text */}
          <p className="text-black text-center mt-6 text-sm">
            Error Code: 404 • Page Not Found
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
