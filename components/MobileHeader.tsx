"use client"

import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileHeader() {
    let [sideNav, setSideNav] = useState(false)

    const onToggleNav = () => {
        setSideNav((status) => {
            if (status) {
                document.body.style.overflow = 'auto'
            } else {
                document.body.style.overflow = 'hidden'
            }
            return !status
        })
    }

    return (
        <div className="my-auto">

            <div>
                <button className="p-2" onClick={onToggleNav}>
                    <AlignJustify />
                </button>
            </div>

            <div className={`fixed top-0 left-0 z-10 h-full w-full transform opacity-95 duration-300 ease-in-out bg-zinc-200 dark:bg-zinc-900 translate-x-0 ${
                sideNav ? 'translate-x-0' : 'translate-x-full'}`} > 
                <div className="flex justify-end">
                    <button className="pt-12 pr-6" onClick={onToggleNav}><AlignJustify /></button>
                </div>
                <nav className="fixed mt-8 h-full">
                <div className="px-12 py-4"><Link href="/" className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" onClick={onToggleNav}>Home</Link></div>
                    <div className="px-12 py-4"><Link href="/about" className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" onClick={onToggleNav}>About</Link></div>
                    <div className="px-12 py-4"><Link href="/projects" className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" onClick={onToggleNav}>Projects</Link></div>
                    <div className="px-12 py-4"><Link href="/contact" className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" onClick={onToggleNav}>Contact</Link></div>
                </nav>
            </div>
        </div>
    )
};