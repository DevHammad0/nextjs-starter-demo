import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {

    
  return (
    <div className=''>
        <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl lg:text-8xl'>About Page</h1>
        <p><Link href="/" className='underline text-blue-600 hover:text-blue-800'>Go Back to Home Page</Link></p>
        {/* <Image src="/ai-image.jpg" alt='Image' height={500} width={600} /> */}

    </div>
  )
}

export default About