import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function InputGroup({
  title,
  type,
  placeholder,
  id,
  onChange,
  value,
  isRequired,
  disabled,
  customClass,
}) {
  const defaultClass =
    "rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]";
  const inputClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;

  const isPasswordInput = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="text-sm md:text-base">
        {title}
      </label>
      <div className="relative flex">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={
            isPasswordInput && showPassword ? "password" : placeholder
          }
          id={id}
          onChange={onChange}
          value={value}
          required={isRequired}
          className={inputClass}
          disabled={disabled}
        />
        {isPasswordInput && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="svg-size absolute top-[12px] right-3"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputGroup;
