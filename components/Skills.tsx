import React from 'react'
import { div } from 'motion/react-client'
import { Card, HoverEffect } from './ui/card-hover-effect';


const skills = [
  {
    title: "Languages",
    description: [
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "C++",
    ],
    link: "#languages"
  },
  {
    title: "Frontend",
    description: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS"
    ],
    link: "#frontend"
  },
  {
    title: "Backend",
    description: [
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Next.js",
    ],
    link: "#backend"
  },
  {
    title: "Database & ORMs",
    description: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Hibernate",
      "Prisma"
    ],
    link: "#database"
  }
];


function Skills() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Skills</h1>
      <HoverEffect items = {skills} />
    </div>
  );
}

export default Skills