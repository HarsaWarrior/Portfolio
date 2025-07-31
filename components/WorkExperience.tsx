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
    jobTitle: "Cloud Engineer",
    description: [
      "Automated and optimized infrastructure across 100+ servers and 5000+ endpoints on Azure, boosting scalability and reducing manual configurations by 40%.",
      "Led the resolution of a 2-month backlog of critical activities, accelerating project timelines by 3x, completing in 1 month instead of 3.",
      "Improved deployment efficiency and reliability by 20% through collaboration with cross-functional teams and strategic planning with clients.",
      "Prevented 100+ hours of downtime by resolving critical production issues and managing identity access via Active Directory, Intune, and Entra.",
      //"Maintained client websites and implemented requested changes, increasing client satisfaction scores by 10%.",
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
      "Acquired foundational expertise in cloud computing, networking, and security with a hands-on understanding of cloud architecture, network protocols, and firewall configurations.",
      "Supported ITIL-based incident workflows for resolving infrastructure issues, assisting in resolving cloud infrastructure issues in a structured workflow"
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