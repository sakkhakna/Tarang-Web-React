function InputGroup({
  type,
  placeholder,
  id,
  onChange,
  value,
  isRequired,
  disabled,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      value={value}
      required={isRequired}
      className="rounded-xl w-full py-2 px-4 border-2 focus:outline-none focus:ring focus:border-[#227F4B]"
      disabled={disabled}
    />
  );
}

export default InputGroup;
