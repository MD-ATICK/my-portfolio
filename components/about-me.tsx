import React from "react";
import me from "@/assets/me.png";
import Image from "next/image";

export default function AboutMe() {
	return (
		<div className=' py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-2'>
			<div className=' order-2 space-y-10'>
				<h1 className=' font-bold text-3xl'>⚡ About Me</h1>
				<p className=' text-muted-foreground text-sm md:text-lg font-medium'>
					Hello! I&apos;m MD Atick, an 18-year-old passionate Full Stack Web
					Developer with over <span className='text-[#3CCF91]'>3 years</span> of
					hands-on experience. I discovered my love for coding at the{" "}
					<span className='text-[#3CCF91]'>age of 15</span>, and since then,
					it&apos;s been more than just a skill—it&apos;s my passion.
				</p>
				<p className=' text-muted-foreground text-sm md:text-lg font-medium'>
					I specialize in
					<span className='text-[#3CCF91]'> Full Stack Web Development</span>,
					creating scalable APIs and serverless architectures, while also
					building responsive and intuitive frontend interfaces using React and
					Next.js. Whether it&apos;s designing elegant user experiences or
					engineering powerful server-side solutions, I thrive in both worlds.
				</p>
				<p className=' text-muted-foreground text-sm md:text-lg font-medium'>
					My mission is to solve real-world problems through clean code,{" "}
					<span className='text-[#3CCF91]'>modern technologies</span>, and{" "}
					<span className='text-[#3CCF91]'>creative solutions</span>.
				</p>
			</div>
			<div className=' order-1 md:order-2 flex items-center justify-center'>
				<Image
					src={me}
					alt='profile'
					height={300}
					width={300}
					className=' rounded-full w-[300px] md:ml-auto  aspect-square object-cover'
				/>
			</div>
		</div>
	);
}
