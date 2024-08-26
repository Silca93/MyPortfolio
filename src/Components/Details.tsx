export default function Details() {
  return (
    <div className='w-full h-[40rem] pb-[3rem] bg-[#F8F8FF] flex max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:items-center max-[1100px]:h-[50rem]'>
        <div className="flex w-1/2 max-[1100px]:w-full h-full  justify-end max-[1100px]:justify-center items-center pr-5 max-[1100px]:pr-0">
           <div className="image w-1/2 h-[20rem] max-[768px]:h-[15rem] rounded-xl ">
           </div>
        </div>

        <div className="flex flex-col flex-wrap w-1/2 h-full  justify-center items-start pl-5 max-[1100px]:pl-0">
          <div className="w-[80%] max-[1100px]:w-full   h-[25rem] rounded-xl flex flex-col gap-7 justify-center items-start max-[1100px]:items-center ">
              <h1 className='text-2xl font-bold text-[#6F4E37]'>About me</h1>
              <p className='max-[650px]:text-[15px] max-[500px]:text-[13px] max-[1100px]:text-center '>After working in real estate for years, I realized I wanted a career change. I was drawn to web development by friends, but also due to its creativity, the opportunity for continuous learning, and the potential to build and bring your ideas to life. This field offers a dynamic and growing job market, allowing me to apply my problem-solving skills and passion for technology in an impactful way.
              </p>
              <p className='max-[650px]:text-[15px] max-[500px]:text-[13px] max-[1100px]:text-center'>Currently my frameworks of choice for frontend are React/Nextjs with Tailwind CSS and Django for fullstack apps.</p>
          </div>
        </div>

    </div>
  )
}