import React from "react";

import EyeIcon from "@/assets/icons/EyeIcon";
import EyeOffIcon from "@/assets/icons/EyeOffIcon";
import { InputFieldProps } from "@/types/InputFieldTypes";

const InputField: React.FC<InputFieldProps> = (
  {
  className = "",
  children,
  value,
  id,
  type = "text",
  placeholder,
  onChange,
  ...rest
}
) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <section className="relative">
      <label htmlFor={id} className="font-medium text-green-600">
        {children}
      </label>
      <br />
      <input
        name={id}
        id={id}
        value={value}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        onChange={onChange}
        className={`mt-1.5 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-full ${className}`}
        {...rest}
      />
      {type === "password" && showPassword ? (
        <button onClick={() => setShowPassword(!showPassword)}>
          <EyeOffIcon className="absolute top-11 right-4" />
        </button>
      ) : type === "password" && !showPassword ? (
        <button onClick={() => setShowPassword(!showPassword)}>
          <EyeIcon className="absolute top-11 right-4" />
        </button>
      ) : (
        " "
      )}
    </section>
  );
};

export default InputField;
