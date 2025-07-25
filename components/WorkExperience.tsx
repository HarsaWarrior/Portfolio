import { li } from 'motion/react-client';
import React from 'react'

interface WorkExperienceItem {
  startDate: string,
  endDate: string,
  companyName: string,
  jobTitle: string,
  description: string[]
}

const workExperience: WorkExperienceItem[] = [
  {
    startDate: "July 2024",
    endDate: "July 2025",
    companyName: "Sify Technologies",
    jobTitle: "Software Engineer",
    description: [
      "Developed RESTful APIs enabling seamless communication between the Frontend and Backend services, improving data processing speed by 25%.",
      "Implemented dynamic and responsive Frontend features using React.js, Next.js, Tailwind CSS & Typescript, enhancing user engagement and satisfaction by 30%.",
      "Implemented authentication and authorization using Spring Security enhancing application security.",
      "Diagnosed and resolved complex bugs, enhancing application stability by 20% and reducing downtime.",
      "Maintained client websites and implemented requested changes, increasing client satisfaction scores by 10%.",
      //"Authored documentation for client website functionalities and backend processes, ensuring better understanding and future maintainability.",
      //"Collaborated with cross-functional teams to deliver features 15% faster, aligning with client needs and business objectives.",
      //"Utilized version control tools like Git and GitHub to maintain code integrity and streamline collaborative workflows."
    ]
  },
  {
    startDate: "January 2024",
    endDate: "July 2024",
    companyName: "Sify Technologies",
    jobTitle: "Engineer Trainee",
    description: [
      "Acquired foundational expertise in web development, mastering core technologies including JavaScript, Java, React.js, Spring, Spring Boot and version control with Git.",
      "Worked on internal mini-projects and small tasks to apply RESTful API development and responsive UI design."
    ]
  }
];

function WorkExperience() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Work Experience</h1>
      <div className='p-1'>
        <ol className ="relative border-s border-gray-200 dark:border-gray-700">
          {workExperience.map((item, index) => (<li key={index} className ="mb-10 ms-4">
            <div className ="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className ="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-300">{item.startDate} - {item.endDate}</time>
            <h3 className ="text-lg font-semibold text-gray-900 dark:text-white">{item.jobTitle} at {item.companyName}</h3>
            <ol className ="text-base font-normal text-gray-700 dark:text-gray-300">
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ol>
            
          </li>))}
        </ol>
      </div>  
    </div>
  )
}

export default WorkExperience