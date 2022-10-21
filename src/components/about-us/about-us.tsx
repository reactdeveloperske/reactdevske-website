import React from 'react';


export default function AboutUs (){
    return(
        <section id="about-us" className='flex flex-col max-w-2xl justify-center items-center self-center space-y-4 px-4'>
            <p className='text-3xl md:text-6xl tracking-wide md:font-light '>ABOUT US</p>
            <p className='hidden md:inline-block text-4xl font-bold mb-6'>Empowering great talent</p>
            <p className='sm:text-xs md:text-xl tracking-wide text-center'>We bring together people who are passionate about React JS and <br className='hidden md:display'/>it&apos;s ecosystem. We are a community of full-stack developers, frontend developers and so much more</p>
        </section>
    )
}