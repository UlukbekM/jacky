"use client"

import Link from "next/link"

export default function Footer() {

    return (
        <footer className="mt-36 pb-36 z-10 space-y-5 max-w-3xl mx-auto xl:max-w-5xl xl:px-0 font-medium">
            <div className="flex space-x-5 text-muted-foreground ">
                <Link href={"/"} className="hover:underline hover:text-primary">Email</Link>
                <Link href={"/"} className="hover:underline hover:text-primary">Resume</Link>
                <Link href={"/"} className="hover:underline hover:text-primary">Twitter</Link>
                <Link href={"/"} className="hover:underline hover:text-primary">Youtube</Link>
                <Link href={"/"} className="hover:underline hover:text-primary">GitHub</Link>
            </div>

            <div className="text-muted">
                Built with{" "}
                <a href="https://nextjs.org" className="hover:underline hover:text-primary" target="_blank" rel="noopener noreferrer">Next.js</a>,{" "}
                <a href="https://tailwindcss.com" className="hover:underline hover:text-primary" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>,{" "}
                <a href="https://ui.shadcn.com/" className="hover:underline hover:text-primary" target="_blank" rel="noopener noreferrer">shadcn/ui</a>
            </div>
        </footer>
    )
};