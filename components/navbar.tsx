import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className=' z-50 border-b border-state-800 h-14 md:h-16 flex items-center justify-center px-10'>
			{/* <p className=' font-bold text-2xl  md:text-3xl'>
				<span className=' text-white/60'>{`{`}</span>A
				<span className=' text-white/60'>{`}`}</span>
			</p> */}
			<Image src={logo} alt='logo' width={50} height={50} />
		</div>
	);
}
