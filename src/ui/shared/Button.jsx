function Button({ children, type, onClick, customClass, disabled }) {
  const defaultClass =
    "rounded-xl bg-[#2AD5A5] px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold text-white";
  const buttonClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
