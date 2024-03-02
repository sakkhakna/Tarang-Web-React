// import Image from "next/image";
// import Link from "next/link";
import Logo from "../assets/img/tarang_logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="w-full bg-[#d9d9d9] fixed top-0 left-0 z-40">
			<div className="max-w-7xl mx-auto p-6 xl:px-0 flex justify-between">
				<Link href="/">
					{/* <Image src="/tarang_logo.png" alt="logo" width={150} height={50} /> */}
					<img src={Logo} alt="Logo" width={150} height={50} />
				</Link>
				<div className="w-[50px] h-[50px] bg-white rounded-xl"></div>
			</div>
		</header>
	);
}

export default Header;
