import React from "react";

import EyeIcon from "@/assets/icons/EyeIcon";
import EyeOffIcon from "@/assets/icons/EyeOffIcon";
import { InputFieldProps } from "@/types/InputFieldTypes";
import style from "./input-field.module.scss";

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
    <section className={style.container}>
      <label htmlFor={id}>
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
        className={`${className}`}
        {...rest}
      />
      {type === "password" && showPassword ? (
        <button onClick={() => setShowPassword(!showPassword)}>
          <EyeOffIcon className={style.icon} />
        </button>
      ) : type === "password" && !showPassword ? (
        <button onClick={() => setShowPassword(!showPassword)}>
          <EyeIcon className={style.icon} />
        </button>
      ) : (
        " "
      )}
    </section>
  );
};

export default InputField;
