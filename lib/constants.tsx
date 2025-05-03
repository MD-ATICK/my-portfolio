import { Metadata } from "next";

export const metadataObj: Metadata = {
	applicationName: "Freelancer Atick",
	title: {
		default: "Freelancer Atick",
		template: `%s | Freelancer Atick`,
	},
	description:
		"Hello, my name is Md Atick and I am a backend expert. I focus on developing secure and high-performing systems. My specialization covers contemporary implementations of serverless databasses, API-centric programming, and advanced technologies to guarantee optimal and dependable project execution.",
	keywords: [
		"freelancer atick",
		"freelanceratick",
		"freelancer atick portfolio",
		"mdatick",
		"mohammadatick",
		"mohammad atick",
		"mohammad atick portfolio",
	],
	viewport: {
		width: "device-width",
		initialScale: 1,
	},
	creator: "Freelancer Atick",
	publisher: "Freelancer Atick",
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
		canonical: "https://freelanceratick.vercel.app",
	},
};
