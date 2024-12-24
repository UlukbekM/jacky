"use client"

import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { usePathname } from "next/navigation"
import MobileHeader from './MobileHeader';
import { Button, buttonVariants } from "@/components/ui/button"
import { useEffect, useState } from 'react';


export default function Header() {
    let router = usePathname()
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`z-10 flex items-center justify-between md:mt-4  py-4 px-4 md:px-0 fixed top-0 left-0 right-0 max-w-4xl mx-auto xl:max-w-6xl xl:px-0 
        md:rounded-2xl bg-background shadow-surface-glass backdrop-blur-sm border
        ${scrollPosition === 0 ? 'border-transparent' : "border-muted-foreground dark:border-inherit bg-background/70"}`}>
            <Link href={"/"} className='text-2xl font-semibold px-4'>
                Jacky Chen
            </Link>
            <div className='items-center hidden md:flex px-4'>
                <nav className='items-center space-x-4 flex font-semibold'>
                    <Link href={"/about"} className='m-1 p-2 relative group'>
                        About
                        {/* <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/about" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span> */}
                        <span className={`h-[2px] inline-block bg-primary absolute left-1/2 -translate-x-1/2 -bottom-0.5 rounded-xl
                            transition-[width] duration-300 ease-in-out group-hover:w-full ${
                            router === "/about" ? "w-full" : "w-0"
                        }`}/>
                    </Link>
                    <Link href={"/projects"} className='m-1 p-2 relative group'>
                        Projects
                        {/* <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/projects" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span> */}
                        <span className={`h-[2px] inline-block bg-primary absolute left-1/2 -translate-x-1/2 -bottom-0.5 rounded-xl
                            transition-[width] duration-300 ease-in-out group-hover:w-full ${
                            router === "/projects" ? "w-full" : "w-0"
                        }`}/>
                    </Link>
                    {/* <Link href={"/about"} className='m-1 p-2 relative group'>
                        About
                        <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/third" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span>
                    </Link> */}
                    {/* <Button asChild variant={"ghost"} className='font-semibold'>
                        <Link href="/contact">Login</Link>
                    </Button> */}

                    <Link href={"/contact"} className='m-1 p-2 relative group'>
                        Contact
                        {/* <span className={`h-[2px] inline-block bg-primary absolute left-0 -bottom-0.5 rounded-xl
                        group-hover:w-full transition-[width] ease duration-300
                        ${router === "/contact" ? 'w-full' : 'w-0'}
                        `}>&nbsp;</span> */}
                        <span className={`h-[2px] inline-block bg-primary absolute left-1/2 -translate-x-1/2 -bottom-0.5 rounded-xl
                            transition-[width] duration-300 ease-in-out group-hover:w-full ${
                            router === "/contact" ? "w-full" : "w-0"
                        }`}/>
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