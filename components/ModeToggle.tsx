"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./ui/button";

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
        return <div className="p-2 flex items-center justify-center relative" aria-hidden="true" />;
    }

    return (
        // <Button
        //     onClick={toggleTheme}
        //     className="p-2 flex items-center justify-center relative transition-all aspect-square"
        //     aria-label="Toggle theme"
        //     variant={"ghost"}
        // >
        //     {theme === 'dark' ? (
        //         <Moon className="md:w-5 md:h-5" />
        //     ) : (
        //         <Sun className="md:w-5 md:h-5" />
        //     )}
        // </Button>
        <button
            onClick={toggleTheme}
            className="p-2 flex items-center justify-center hover:text-primary relative transition-all aspect-square"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Moon className="md:w-5 md:h-5" />
            ) : (
                <Sun className="md:w-5 md:h-5" />
            )}
        </button>
    );
}
