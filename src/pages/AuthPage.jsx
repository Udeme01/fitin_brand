import { Formik, Form } from "formik";
import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { registerSchema, loginSchema } from "../utils/validationSchemas";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login";

  const formKey = isLogin ? "login" : "register";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center relative">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols- gap-0 lg:gap-8 items-center">
          {/* Form */}
          <div className="bg-white w-[90%] mx-auto max-w-xl my-8 p-8 sm:p-10 lg:p-12 xl:p-16 shadow-2xl transform transition-all duration-500 hover:shadow-black">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight leading-tight">
                {isLogin ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                {isLogin ? "Login to continue shopping" : "Let's get started"}
              </p>
            </div>

            {/* Google Sign In/Up */}
            <button
              type="button"
              className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded-2xl py-4 px-8 mb-6 flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-md group cursor-pointer"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium text-gray-700">
                {isLogin ? "Login with Google" : "Register with Google"}
              </span>
            </button>

            {/* OR text */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-gray-400 text-sm font-medium">OR</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            {/* Form */}
            <Formik
              key={formKey}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                agreedToTerms: false,
              }}
              validationSchema={isLogin ? loginSchema : registerSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                setTimeout(() => {
                  alert("form submitted...");
                  console.log("form details", values);
                  setSubmitting(false);
                  resetForm();
                }, 1000);
              }}
            >
              {(formik) => (
                <Form className="space-y-5">
                  {/* First Name - Only for Register */}
                  {!isLogin && (
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name<span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Enter your firstName"
                        formik={formik}
                      />
                    </div>
                  )}

                  {/* Last Name - Only for Register */}
                  {!isLogin && (
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name<span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Enter your lastName"
                        formik={formik}
                      />
                    </div>
                  )}

                  {/* Email - Both */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      formik={formik}
                    />
                  </div>

                  {/* Password - Both */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password<span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      formik={formik}
                      placeholder="Enter your password"
                      showPassword={showPassword}
                      showPasswordToggle={true}
                      onTogglePassword={() => setShowPassword(!showPassword)}
                    />
                  </div>

                  {/* Confirm Password - only for register */}
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password<span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        formik={formik}
                        placeholder="Confirm your password"
                        showPassword={showConfirmPassword}
                        showPasswordToggle={true}
                        onTogglePassword={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    </div>
                  )}

                  {/* Forgot Password - Only for Login */}
                  {isLogin && (
                    <div className="flex justify-end">
                      <Link
                        // to="#"
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  )}

                  {/* Terms Agreement - Only for Register */}
                  {!isLogin && (
                    <div className="space-y-2 w-fit px-2 py-2">
                      <div className="flex justify-center items-center gap-2">
                        <Input
                          type="checkbox"
                          name="agreedToTerms"
                          formik={formik}
                          showError={false}
                        />

                        <label
                          htmlFor="agreedToTerms"
                          className="cursor-pointer flex-1"
                        >
                          <span className="text-sm text-gray-600 leading-relaxed">
                            I agree to all{" "}
                            <a
                              href="#"
                              className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
                            >
                              Term
                            </a>
                            ,{" "}
                            <a
                              href="#"
                              className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              href="#"
                              className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
                            >
                              Fees
                            </a>
                          </span>
                        </label>
                      </div>
                      {formik.touched.agreedToTerms &&
                        formik.errors.agreedToTerms && (
                          <div className="text-red-500 text-xs">
                            {formik.errors.agreedToTerms}
                          </div>
                        )}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    variant="solidBlack"
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={`w-full`}
                  >
                    {formik.isSubmitting
                      ? "Loading..."
                      : isLogin
                        ? "Login"
                        : "Sign Up"}
                  </Button>
                </Form>
              )}
            </Formik>

            {/* Toggle Link */}
            <p className="text-center mt-8 text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <Link
                to={`/auth?mode=${isLogin ? "register" : "login"}`}
                className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline ml-1"
              >
                {isLogin ? "Register" : "Log In"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
