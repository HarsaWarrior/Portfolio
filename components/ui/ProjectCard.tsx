'use client';
import { ReactElement } from "react";
import ShinyText from "@/ShinyText/ShinyText/ShinyText";

export interface ProjectCardProps{
    icon? : ReactElement;
    title : string;
    desc : string;
    link : string;
}

export function ProjectCard({ icon, title, desc, link } : ProjectCardProps){
    return(
        <div className="flex flex-col w-full h-50 border-dashed border-2 border-gray-500 rounded-xl p-5 my-2 relative">
            <div className="pb-2 flex gap-2 items-center">
                {icon}
                <h1 className="font-semibold text-xl">{title}</h1>
            </div>
            <p>{desc}</p>
            <a href={link} className="absolute bottom-4 right-4 cursor-pointer">
                <ShinyText text="live 🔗" disabled={false} speed={3} className="custom-class text-gray-400" />
            </a>
        </div>
    )
}