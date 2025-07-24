import React from 'react'
import Link from 'next/link'

function ContactMe() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Contact Me</h1>
        <p className='text-base text-gray-700'>
            Want to chat? Just shoot me a dm with a direct question on {" "}
            <Link className = 'text-blue-500' href='https://x.com/Harsawarrior'>Twitter</Link> or email me directly at {" "}
            <Link className = 'text-blue-500' href="mailto:harsh3152002@gmail.com">
                harsh3152002@gmail.com
            </Link>
        </p>
    </div>
  )
}

export default ContactMe