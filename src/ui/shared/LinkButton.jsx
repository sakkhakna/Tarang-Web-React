import { Link } from "react-router-dom";

function LinkButton({ children, toPage }) {
  return (
    <Link
      to={toPage}
      className="w-full text-center rounded-xl bg-[#2AD5A5] text-white px-4 py-2 md:h-10 font-semibold"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
