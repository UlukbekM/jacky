import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Jacky Chen Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className="relative">
                <svg className="pointer-events-none fixed inset-0 z-40 opacity-70 mix-blend-soft-light"
                xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
                    <filter id="grainy-noise">
                        <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#grainy-noise)" />
                </svg>

                <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
                >
                <Header />
                <div className="mt-28 max-w-3xl mx-auto xl:max-w-5xl xl:px-0">
                    {children}
                </div>
                <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
