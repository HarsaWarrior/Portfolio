"use client"

import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Particles } from "@/components/magicui/particles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { CustomDock } from "@/components/ui/CustomDock";
import WorkExperience from "@/components/WorkExperience";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();

  const particleColor = theme === "dark" ? "#ffffff" : "#000000";
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Particles className="absolute inset-0 z-10" color={particleColor} quantity={200}/>
      <div className="w-8/12 mx-auto font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
          <Intro />
          <WorkExperience />
          <Education />
          <Skills />
          <Projects />
          <ContactMe />
          <CustomDock orientation = "vertical"/>
        </main>
      </div>
    </div>
  );
}
