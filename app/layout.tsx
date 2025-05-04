import type { Metadata } from "next";
import { Figtree, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadataObj } from "@/lib/constants";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const inter = Figtree({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = metadataObj;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='google-site-verification'
					content='6GmT2Do1lN7VtwEFDc82A70PsvPJHHw07NtB75FFIew'
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${inter.className}  antialiased max-w-6xl mx-auto`}
			>
				{children}
			</body>
		</html>
	);
}
