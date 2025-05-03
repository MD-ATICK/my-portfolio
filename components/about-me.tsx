import React from "react";
import profile from "@/assets/profile.jpeg";
import Image from "next/image";

export default function AboutMe() {
	return (
		<div className=' py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-2'>
			<div className=' order-2 space-y-10'>
				<h1 className=' font-bold text-3xl'>⚡ About Me</h1>
				<p className=' text-muted-foreground text-sm md:text-lg font-medium'>
					Hey! I&apos;m Abdul Rahman, I&apos;ve been close to a computer since
					an early age, and been passionate about it ever since.
				</p>
				<p className=' text-muted-foreground text-sm md:text-lg font-medium'>
					I really liked to build stuff using no-code tools back in 2010, and
					from that, I explored how to code myself, fast-forward to today, I do
					programming{" "}
					<span className=' text-[#3CCF91]'>
						{" "}
						in various languages and technologies,
					</span>{" "}
					and had the privilege to worked in a Recruitment Company and a SaaS
					Company I&apos;m interested in building something awesome with code
					and automate tasks with code, currently focused on Web & Mobile
					Development, Open Source and Competitive Programming
				</p>
				<p className=' text-muted-foreground text-sm md:text-lg font-medium'>
					When I&apos;m not coding I play games with my friends, watch some show
					on Netflix, or if the weather is good, play basketball! 🏀
				</p>
			</div>
			<div className=' order-1 md:order-2 flex items-center justify-center'>
				<Image
					src={profile}
					alt='profile'
					height={300}
					width={300}
					className=' rounded-full w-[300px] md:ml-auto  aspect-square object-cover'
				/>
			</div>
		</div>
	);
}
