import React from "react";

const Input = ({
  label,
  id,
  type = "text",
  name,
  placeholder,
  formik,
  disabled = false,
}) => {
  const inputId = id || name;
  const { handleBlur, handleChange, values, errors, touched } = formik;
  const hasError = errors[name] && touched[name];
  const inputStyles = `border bg-transparent w-full md:w-56 lg:w-full py-3 px-4 text-sm placeholder:text-gray-400 focus:outline-none ${hasError ? "border-red-500" : "border-gray-600"} focus:border-white`;

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${inputStyles}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name] || ""}
        disabled={disabled}
      />

      {hasError ? (
        <div className="text-red-500 tracking-wider">{errors[name]}</div>
      ) : ""}
    </div>
  );
};

export default Input;
