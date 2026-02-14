import React from "react";

const Input = ({
  as = "input",
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

  // const hasError = errors[name] && touched[name];
  const hasError = Boolean(touched[name] && errors[name]);

  const inputStyles = `border bg-transparent w-full py-3 px-4 text-sm placeholder:text-gray-400 focus:outline-none ${hasError ? "border-red-500" : "border-gray-600"} focus:border-white`;

  const Component = as;

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <Component
        id={inputId}
        name={name}
        type={as === "input" ? type : undefined}
        placeholder={placeholder}
        className={`${inputStyles}`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name] || ""}
        disabled={disabled}
      />

      {hasError ? (
        <div className="text-red-500 tracking-wider text-xs mb-6 mt-1">{errors[name]}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
