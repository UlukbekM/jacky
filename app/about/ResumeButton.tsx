"use client"

import { File } from "lucide-react";

export default function ResumeButton() {
    const handleOpenResume = () => {
        window.open("/Jacky Chen Resume.pdf", '_blank');
    };

    return (
        <File className="hover:text-primary hover:cursor-pointer md:w-6 md:h-6" onClick={()=>handleOpenResume()}/>
    )
};