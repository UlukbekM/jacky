"use client"

import { Mail } from "lucide-react";

export default function EmailButton() {
    const handleOpenEmail = () => {
        window.location.href = "mailto:jackychen60@gmail.com";
    };

    return (
        <Mail className="hover:text-primary hover:cursor-pointer md:w-6 md:h-6" onClick={()=>handleOpenEmail()}/>
    )
};