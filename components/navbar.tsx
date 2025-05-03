import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<div className=' border-b border-state-800 h-14 md:h-16 flex items-center justify-between px-10'>
			<p className=' font-bold text-2xl  md:text-3xl'>
				<span className=' text-white/60'>{`{`}</span>A
				<span className=' text-white/60'>{`}`}</span>
			</p>
			<div className='flex items-center gap-6 text-sm md:text-lg font-medium'>
				<Link href={"/"}>Home</Link>
				<Link href={"/"}>Projects</Link>
				<Link href={"/"}>Blog</Link>
			</div>
		</div>
	);
}
