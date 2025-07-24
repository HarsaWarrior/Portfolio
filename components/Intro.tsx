import React from 'react'
import Image from 'next/image'
import { TypingAnimation } from "@/components/magicui/typing-animation";

function Intro() {
  return (
    <div className='flex gap-4'>
        <div className='flex flex-col gap-4 w-9/12'>
            <h1 className='text-4xl font-bold'>
                <TypingAnimation>
                    Hi! I am Harsh Patil
                </TypingAnimation>
            </h1>
            <p className='text-base text-gray-600'>I'm a Backend heavy full stack developer with a passion for elegant systems design and thoughtful architecture.
                Currently crafting scalable solutions with Next.js & Spring Boot from scratch to production-ready.
                My expertise spans across frontend, backend and full-stack development, with a knack for system design and scalability.
            </p>
        </div>
        <div className='w-3/12 flex-1'>
            <Image
            src = "/images/Harsh.jpg"
            alt = "Harsh"
            width = {100}
            height = {100}
            className='rounded-full border border-gray-100 h-40 w-40'/>
        </div>
    </div>
  )
}

export default Intro