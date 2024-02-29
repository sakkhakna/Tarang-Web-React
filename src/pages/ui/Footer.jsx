import Link from "next/link";
import Logo from "../../assets/img/tarang_logo.png";

function Footer() {
	return (
		<footer className="w-full bg-[#d9d9d9]">
			<div className="max-w-7xl mx-auto p-10 xl:px-0">
				<Link href="/">
					{/* <Image src="/tarang_logo.png" alt="logo" width={150} height={50} /> */}
					<img src={Logo} alt="Logo" width={150} height={50} />
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
