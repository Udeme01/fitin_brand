import React from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  as = "input",
  label,
  id,
  type = "text",
  name,
  placeholder,
  formik,
  disabled = false,
  showError = true,
  showPassword = false,
  showPasswordToggle,
  onTogglePassword,
  options,
}) => {
  const inputId = id || name;

  const { handleBlur, handleChange, values, errors, touched } = formik;

  // const hasError = errors[name] && touched[name];
  const hasError = Boolean(touched[name] && errors[name]);

  const inputStyles = `border bg-transparent w-full transition-colors py-4 px-8 text-sm placeholder:text-stone-400 outline-none font-light mt-1 ${hasError ? "border-red-500" : "border-stone-300"} focus:border-stone-600`;

  const labelStyles = `text-xs tracking-widest uppercase text-stone-400 font-light`;

  const Component = as;

  return (
    <div className="relative">
      {label && (
        <label htmlFor={inputId} className={labelStyles}>
          {label}
        </label>
      )}

      {as === "select" ? (
        <select
          id={inputId}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name] || ""}
          className={inputStyles}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <>
          <Component
            id={inputId}
            name={name}
            type={as === "input" ? type : type}
            placeholder={placeholder}
            className={type === "checkbox" ? "sr-only" : inputStyles}
            onChange={handleChange}
            onBlur={handleBlur}
            value={type === "checkbox" ? undefined : values[name] || ""}
            checked={type === "checkbox" ? values[name] : undefined}
            disabled={disabled}
          />

          {showPasswordToggle && onTogglePassword && (
            <button
              type="button"
              onClick={onTogglePassword}
              className={`absolute right-6 text-gray-400 hover:text-gray-600 transition-colors ${hasError ? "top-1/3 -translate-y-1/3" : "top-1/2 -translate-y-1/2"}`}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}

          {showError && hasError ? (
            <div className="text-red-500 tracking-wider text-xs mb-6 mt-1">
              {errors[name]}
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Input;
