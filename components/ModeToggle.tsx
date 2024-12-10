"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    
    if (!mounted) {
        return null;
    }
    return (
        <button onClick={toggleTheme} className="p-2 flex items-center justify-center relative" aria-label="Toggle theme" >
            {theme === 'dark' ? (
                <Moon className="hover:text-primary transition-all md:w-5 md:h-5"/>
            ) : (
                <Sun className="hover:text-primary transition-all md:w-5 md:h-5"/>
            )}
        </button>
    )
}