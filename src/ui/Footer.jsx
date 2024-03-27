import { Link } from "react-router-dom";
import Logo from "../assets/img/tarang_logo.png";

function Footer() {
  return (
    <footer className="w-full bg-[#d9d9d9]">
      <div className="max-w-7xl mx-auto p-4 md:p-10">
        <Link href="/">
          <img src={Logo} alt="Logo" width={150} height={50} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
