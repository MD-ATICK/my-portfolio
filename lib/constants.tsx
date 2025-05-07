import { Metadata } from "next";

export const metadataObj: Metadata = {
	applicationName: "MD Atick",
	title: {
		default: "MD Atick",
		template: `%s | MD Atick`,
	},
	description:
		"Hello, my name is Md Atick and I am a backend expert. I focus on developing secure and high-performing systems. My specialization covers contemporary implementations of serverless databasses, API-centric programming, and advanced technologies to guarantee optimal and dependable project execution.",
	keywords: [
		"MD Atick",
		"md atick",
		"mdatick portfolio",
		"full stack developer chittagong",
		"backend expert chittagong",
		"backend developer chittagong",
		"full stack developer bangladesh",
		"backend expert rungunia",
		"web developer rungunia",
		"next js developer rungunia",
	],
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	creator: "MD Atick",
	publisher: "MD Atick",
	icons: {
		icon: "/logo.png",
		shortcut: "/favicon.ico",
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
	alternates: {
		canonical: "https://md-atick.vercel.app",
	},
};
