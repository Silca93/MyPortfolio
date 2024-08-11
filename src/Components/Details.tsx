import React from 'react'

export default function Details() {
  return (
    <div className='w-full h-[40rem] bg-[#F8F8FF] flex max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:items-center'>
        <div className="flex w-1/2 h-full  justify-end items-center pr-5">
           <div className="image w-[30rem] h-[20rem] rounded-xl ">
           </div>
        </div>

        <div className="flex flex-col w-1/2 h-full  justify-center items-start pl-5">
        <div className="w-[30rem] h-[25rem] rounded-xl flex flex-col gap-7 justify-center items-start">
            <h1 className='text-2xl font-bold text-[#6F4E37]'>About me</h1>
            <p>After working in real estate for years, I realized I wanted a career change. I was drawn to web development by friends, but also due to its creativity, the opportunity for continuous learning, and the potential to build and bring your ideas to life. This field offers a dynamic and growing job market, allowing me to apply my problem-solving skills and passion for technology in an impactful way.
            </p>
            <p>Currently my frameworks of choice for frontend are React/Nextjs with Tailwind CSS </p>
        </div>
        </div>

    </div>
  )
}
