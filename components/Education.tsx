import React from 'react'

interface EducationItem {
  startDate: string;
  endDate: string;
  collegeName: string;
  courseName: string;
  address: string;
}

const education: EducationItem[] = [
  {
    startDate: "July 2020",
    endDate: "June 2024",
    collegeName: "Dr. D. Y. Patil Institute of Engineering, Management And Research",
    courseName: "Bachelor of Engineering in Computer Science",
    address: "Pune, Maharashtra"
  },
  {
    startDate: "April 2018",
    endDate: "April 2020",
    collegeName: "Air Force School Pune",
    courseName: "Science",
    address: "Pune, Maharashtra"
  }
]

function Education() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Education</h1>
        <div className='p-1'>
        <ol className ="relative border-s border-gray-200 dark:border-gray-700">
            {education.map((item, index) => (<li key={index} className ="mb-10 ms-4">
            <div className ="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className ="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-300">{item.startDate} - {item.endDate}</time>
            <h3 className ="text-lg font-semibold text-gray-900 dark:text-white">{item.courseName} in {item.collegeName}</h3>
            <p className='mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-300"'>{item.address}</p>
            
            </li>))}
        </ol>
        </div>  
    </div>
  )
}

export default Education