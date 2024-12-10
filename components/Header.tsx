"use client"

import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { usePathname } from "next/navigation"
import MobileHeader from './MobileHeader';

export default function Header() {
    let router = usePathname()

    return (
        <header className='flex items-center justify-between py-10 w-full px-4 md:px-0'>
            <Link href={"/"} className='text-2xl font-semibold'>
                Jacky Chen
            </Link>
            <div className='items-center hidden md:flex'>
                <nav className='items-center space-x-4 flex font-semibold'>
                    <Link href={"/about"} className='m-1 p-2 relative group'>
                        About
                        <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/about" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span>
                    </Link>
                    <Link href={"/projects"} className='m-1 p-2 relative group'>
                        Projects
                        <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/projects" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span>
                    </Link>
                    {/* <Link href={"/about"} className='m-1 p-2 relative group'>
                        About
                        <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/third" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span>
                    </Link> */}
                    <Link href={"/contact"} className='m-1 p-2 relative group'>
                        Contact
                        <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/contact" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span>
                    </Link>
                    <ModeToggle/>
                </nav>
            </div>
            <div className='flex md:hidden my-auto'>
                <ModeToggle/>
                <MobileHeader/>
            </div>
        </header>
    )
};