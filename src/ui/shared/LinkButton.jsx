import { Link } from "react-router-dom";

function LinkButton({ children, toPage, customClass }) {
  const defaultClass =
    "rounded-xl bg-[#2AD5A5] text-white px-4 py-2 md:h-10 font-semibold";
  const buttonClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;
  return (
    <Link to={toPage} className={buttonClass}>
      {children}
    </Link>
  );
}

export default LinkButton;
