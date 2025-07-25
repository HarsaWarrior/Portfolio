'use client';

import { ProjectCard } from "./ui/ProjectCard";
import ProjectData from "./ProjectData";

export function Projects(){
    console.log(ProjectData[1].desc)
    return(
        <div className="my-4">
            <div className="flex flex-wrap justify-center items-center">
                {Object.keys(ProjectData).map((key) => {
                    const project = ProjectData[Number(key)];
                    const IconComponent = project.icon;
                    return(
                        <ProjectCard
                            key={key}
                            icon={<IconComponent />}
                            title={project.title}
                            desc={project.desc}
                            link={project.link}
                        />
                    )
                })}
            </div>
        </div>
    )
}