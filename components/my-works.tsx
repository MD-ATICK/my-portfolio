import { ExternalLink } from "lucide-react";
import React from "react";
import Image from "next/image";
import movieShebaBd from "@/assets/movieshebabd.png";
import financeManagement from "@/assets/finance-management.png";
import { FaPython, FaReact } from "react-icons/fa";
import { TracingBeam } from "./tracing-beam";
import Link from "next/link";

export default function MyWorks() {
	return (
		<div id='projects' className=' pl-4'>
			<TracingBeam>
				<div className=' pl-10 pr-2 md:px-0 py-20 space-y-3'>
					<h1 className=' font-bold text-3xl'>⚡All Creative Works.</h1>
					<p className=' text-xl text-muted-foreground'>
						Here&apos;s some of my projects that I have worked on.
					</p>
					{/* <p className=' text-xl flex items-center gap-2 text-[#3CCF91] '>
						Explore more{" "}
						<span>
							<MoveRight />
						</span>{" "}
					</p> */}
					<div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
						<Link
							href={"https://finance-management-codewithantonio.vercel.app/"}
							passHref
							id='work-item'
							className=' '
						>
							<div className='  p-2 border rounded-2xl overflow-hidden'>
								<Image
									src={financeManagement}
									alt='moviesheba'
									className=' w-full rounded-2xl aspect-video object-cover  object-top duration-[2000ms] hover:object-bottom'
								/>
								<div className=' p-3 space-y-3'>
									<div className=' flex items-center justify-between'>
										<h1 className=' font-bold text-3xl'>Finance Management</h1>
										<ExternalLink color='#3CCF91' />
									</div>
									<div className='flex items-center gap-2'>
										<div className=' bg-sky-600/20 flex items-center gap-1 p-1 text-sm text-sky-600 w-fit px-3 rounded-[5px]'>
											<FaReact /> <p className=' font-bold'>React</p>
										</div>
										<div className=' bg-yellow-600/20 flex items-center gap-1 p-1 text-sm text-yellow-600 w-fit px-3 rounded-[5px]'>
											<FaPython /> <p className=' font-bold'>Python</p>
										</div>
									</div>
								</div>
							</div>
							<p className=' font-medium text-muted-foreground p-2'>
								A web app to analyze whether an opinion on specific topic is
								positive or negative based on recent tweets using Natural
								Language Processing concept called Sentiment Analysis.
							</p>
						</Link>
						<Link
							href={"https://movieshebabd.vercel.app/"}
							id='work-item'
							className=' '
						>
							<div className='  p-2 border rounded-2xl overflow-hidden'>
								<Image
									src={movieShebaBd}
									alt='moviesheba'
									className=' w-full rounded-2xl aspect-video object-cover  object-top duration-[2000ms] hover:object-bottom'
								/>
								<div className=' p-3 space-y-3'>
									<div className=' flex items-center justify-between'>
										<h1 className=' font-bold text-3xl'>Opiniometer</h1>
										<ExternalLink color='#3CCF91' />
									</div>
									<div className='flex items-center gap-2'>
										<div className=' bg-sky-600/20 flex items-center gap-1 p-1 text-sm text-sky-600 w-fit px-3 rounded-[5px]'>
											<FaReact /> <p className=' font-bold'>React</p>
										</div>
										<div className=' bg-yellow-600/20 flex items-center gap-1 p-1 text-sm text-yellow-600 w-fit px-3 rounded-[5px]'>
											<FaPython /> <p className=' font-bold'>Python</p>
										</div>
									</div>
								</div>
							</div>
							<p className=' font-medium text-muted-foreground p-2'>
								A web app to analyze whether an opinion on specific topic is
								positive or negative based on recent tweets using Natural
								Language Processing concept called Sentiment Analysis.
							</p>
						</Link>
					</div>
				</div>
			</TracingBeam>
		</div>
	);
}
