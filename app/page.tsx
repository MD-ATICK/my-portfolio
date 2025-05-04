import AboutMe from "@/components/about-me";
import { BackgroundBeams } from "@/components/background-beams";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MyWorks from "@/components/my-works";
import Navbar from "@/components/navbar";
import React from "react";

export default function page() {
	return (
		<div className=' scroll-smooth'>
			<BackgroundBeams />
			<Navbar />
			<Header />
			<AboutMe />
			<MyWorks />
			<Footer />
		</div>
	);
}
