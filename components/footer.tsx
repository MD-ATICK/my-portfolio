import { FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<div className=' w-full flex flex-col justify-center items-center text-center py-20 space-y-5 md:space-y-10'>
			<h1 className=' font-bold text-4xl md:text-5xl'>Keep In Touch.</h1>
			<div>
				{/* <p className=' text-muted-foreground text-sm md:text-lg'>
					I&apos;m currently specializing in{" "}
					<span className='text-[#3CCF91]'>Frontend (React / Next.js)</span>
				</p> */}
				<p className=' text-sm md:text-lg text-muted-foreground'>
					Feel free to get in touch and talk more about your projects.
				</p>
			</div>
			<div className=' flex items-center gap-4'>
				<Link
					href={"https://github.com/MD-ATICK"}
					className=' bg-neutral-900 w-fit p-2 px-4 rounded-[5px] flex items-center gap-2 '
				>
					<Github fill='black' color='#3CCF91' size={20} />
					<p className=' font-semibold text-sm md:text-lg'>Github</p>
				</Link>
				<Link
					href={"https://www.linkedin.com/in/md-atick-47553927b/"}
					className=' bg-neutral-900 w-fit p-2 px-4 rounded-[5px] flex items-center gap-2 '
				>
					<Linkedin fill='#3CCF91' color='#3CCF91' size={20} />
					<p className=' font-semibold text-sm md:text-lg'>LinkedIn</p>
				</Link>
				<Link
					href={"mailto:atick.business.info@gmail.com"}
					className=' bg-neutral-900 w-fit p-2 px-4 rounded-[5px] flex items-center gap-2 '
				>
					<FileText color='#3CCF91' size={20} />
					<Link
						href={
							"https://drive.google.com/file/d/1fqFqRrVkL8NhLQYcL6MnH6TdYs6eBqPF/view?usp=drive_link"
						}
						className=' font-semibold text-sm md:text-lg'
					>
						Resume
					</Link>
				</Link>
			</div>
			<div className=' pt-20 md:pt-32'>
				<p className=' text-sm md:text-lg'>
					Designed and Developed by{" "}
					<span className='text-[#3CCF91]'> My self.</span>
				</p>
				<p className=' text-sm md:text-lg'>
					Built with <span className='text-[#3CCF91]'>Next js</span> &{" "}
					<span className='text-[#3CCF91]'> Shancn UI</span>. Hosted on{" "}
					<span className='text-[#3CCF91]'>Vercel</span>.
				</p>
			</div>
		</div>
	);
}
