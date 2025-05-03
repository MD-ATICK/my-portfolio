import React from "react";
import { AtSign, Github, Linkedin } from "lucide-react";
import { Cover } from "./cover";

export default function Header() {
	return (
		<div className=' py-10 md:py-32'>
			<div className=' relative space-y-10 md:space-y-14 px-4'>
				<div className=''>
					<span className=' font-semibold text-lg md:text-4xl text-[#3CCF91]'>
						Hey there!, I&apos;m -
					</span>
					<h1 className='  font-bold text-7xl md:text-[10rem]'>
						MD <Cover>ATICk.</Cover>
					</h1>
				</div>
				<p className=' text-muted-foreground md:w-2/3 text-lg md:text-4xl font-semibold'>
					{" "}
					<span className=' text-white'>Full Stack Developer.</span> A
					self-taught developer with an interest in Computer Science.
				</p>
				<div className=' space-y-2'>
					<p className=' text-muted-foreground text-sm md:text-2xl'>
						🧠 Backend expert with a focus on serverless architecture and modern
						tech stacks.
					</p>
					<p className=' text-muted-foreground text-sm md:text-2xl'>
						🚀 Currently specializing in Frontend (React / Next.js)
					</p>
					<p className=' text-muted-foreground text-sm md:text-2xl'>
						⚡ Learning Backend (Node.js / Express.js)
					</p>
				</div>
				<div className=' flex items-center gap-3'>
					<div className=' bg-neutral-900 w-fit p-2 px-4 rounded-[5px] flex items-center gap-2 '>
						<Github fill='black' color='#3CCF91' size={20} />
						<p className=' font-semibold text-sm md:text-lg'>Github</p>
					</div>
					<div className=' bg-neutral-900 w-fit p-2 px-4 rounded-[5px] flex items-center gap-2 '>
						<Linkedin fill='#3CCF91' color='#3CCF91' size={20} />
						<p className=' font-semibold text-sm md:text-lg'>LinkedIn</p>
					</div>
					<div className=' bg-neutral-900 w-fit p-2 px-4 rounded-[5px] flex items-center gap-2 '>
						<AtSign color='#3CCF91' size={20} />
						<p className=' font-semibold text-sm md:text-lg'>Gmail</p>
					</div>
				</div>
			</div>
		</div>
	);
}
