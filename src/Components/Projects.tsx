import { FaHtml5,  FaReact} from "react-icons/fa";
import { IoLogoCss3} from "react-icons/io5";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiSqlite } from "react-icons/si";
import { SiVuedotjs } from "react-icons/si";


export default function Projects() {
  return (
    <div className='w-full'>
      {/* Title section */}
      <div className="flex w-full h-[6rem]  justify-center items-center">
        <div className="left  w-full h-full flex justify-center   items-center">
          <h1 className='font-2xl text-2xl font-bold text-[#6F4E37] min-[1200px]:mr-[35rem] mt-[2rem] mb-[2rem]' id="projects">My Projects</h1>
        </div>
        
      </div>

    {/* //Benchmark// */}
      <div className='w-full items-center flex justify-center bg-[#F2F3F4]'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left pt-[2rem] b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
      <div className="banner flex w-[24rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[20rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Benchmark</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
            <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]'/>
            <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]'/>
          </div>
        </div>
        <div className="diag rpsdiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>This reflex test app is a fun, interactive web game made with ReactJS and styled using Tailwind CSS. Players have to react quickly as the lights change from red to green, testing their reflexes against the clock!</p>
    </div>
    <div className="right py-[1rem] flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
    
      <div className='benchmark w-full h-[28rem] flex justify-center items-center group min-[900px]:rounded-xl min-[900px]:bg-cover'>
        <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a  href="https://silca93.github.io/Reflexes/"  target="_blank" 
                  rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
            </div>
        </div>
      </div>

    </div>
  </div>
</div>
<div className="layer ah"></div>



      {/* Password Generator */}
      
      <div className='w-full items-center flex justify-center'>
        <div className="flex max-[950px]:flex-col w-3/5 h-[35rem]  max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
          <div className="left py-[1rem]   flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
            <div className='pwd  w-full h-[25rem] flex justify-center items-center group  min-[900px]:rounded-xl min-[900px]:bg-cover'>
              <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a  href="https://silca93.github.io/PasswordGenerator/"  target="_blank" 
                      rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
                  </div>
              </div>
            </div>
      </div>
      <div className="right  pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full  h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
        <div className="banner flex w-[24rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
          <div className="left flex  w-[20rem] z-50">
            <h1 className='text-lg font-bold pt-1'>Password Generator</h1>
            <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
              <FaHtml5 className='text-orange-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
              <IoLogoCss3 className='text-blue-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
              <SiJavascript className='text-yellow-400  bg-black text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            </div>
          </div>
          <div className="diag pwddiagonal  w-[4rem] h-full" ></div>
        </div>
          <p className='max-[950px]:text-center px-4'>A versatile password generator built with vanilla JavaScript that lets users create secure passwords. Users can customize their password by:</p>
          <li className="ml-4">Choosing the length of the password</li>
          <li className="ml-4">Including numbers</li>
          <li className="ml-4">Including special characters</li>
          <li className="ml-4">Restricting or allowing the use of capital letters</li>
        </div>
        </div>
      </div>
      <div className="reverseLayer ah3"></div>


      {/* Rock Paper Scissors */}
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left pt-[2rem] b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
      <div className="banner flex w-[24rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[20rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Rock Paper Scissors</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
            <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
          </div>
        </div>
        <div className="diag rpsdiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>This Rock Paper Scissors game is a sleek, responsive web application built with ReactJS and styled using Tailwind CSS. The game offers an interactive and visually appealing experience, where users can challenge the computer in a classic game of Rock, Paper, Scissors.</p>
    </div>
    <div className="right py-[1rem] flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
    
      <div className='shifumi w-full h-[25rem] flex justify-center items-center group min-[900px]:rounded-xl min-[900px]:bg-cover'>
        <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a  href="https://silca93.github.io/ShiFuMi/"  target="_blank" 
                  rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
            </div>
        </div>
      </div>

    </div>
  </div>
</div>
<div className="layer ah"></div>

      {/* Country API */}
      <div className='w-full items-center flex justify-center'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left py-[1rem]  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
     
      <div className='jobBoard w-full h-[22rem] flex justify-center items-center group min-[900px]:rounded-xl min-[900px]:bg-cover'>
        <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            
            <div className="view-live flex w-[7rem] h-[2rem] border-[1px] border-black  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> 
              <a  href="https://jobboard-frontend-h57b.onrender.com/"  target="_blank" 
                  rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live
              </a>
            </div>
        </div>
      </div>
     
    </div>
    <div className="right pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem]  items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
      <div className="banner flex w-[23rem]  h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[19rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Job Board</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4 items-center'>
            <SiVuedotjs className='text-green-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <SiSqlite className='text-blue-500 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]'/>
            <SiExpress className='bg-white rounded-full p-1 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
            <FaNode className=' bg-white rounded-full p-1 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
          </div>
        </div>
        <div className="diag countrydiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>Your Vue.js app is a job board tailored for Vue developers and employers. Developers can browse a variety of Vue-related job offers, while employers can post, edit, and delete job listings. Developed with VueJS and Vue RouterLink, the backend is powered by Node.js and Express, utilizing REST APIs, and the app stores data in an SQLite database.</p>
    </div>
  </div>
</div>
<div className="reverseLayer ah3"></div>


      {/* Dashboard*/}
      
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full  h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
      <div className="banner flex w-[23.5rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[19rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-2'>Dashboard</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4 justify-center items-center'>
            <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <SiExpress className='bg-white rounded-full p-1 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
            <FaNode className=' bg-white rounded-full p-1 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
         
          </div>
        </div>
        <div className="diag k3diagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center pl-3 pr-7 text-sm'>This app is a comprehensive multi-functional ReactJS application. It features: Weather App: Provides current temperature, precipitation chances, and other weather details using a sleek, intuitive interface.
      News App: Fetches and displays the latest headlines, filtering for relevant articles with images, titles, and links to full stories.
      Stock Price App: Tracks and displays real-time stock prices and company profiles, providing a useful dashboard for users to monitor financial data.
      NASA Picture of the Day: Displays the daily image provided by NASA, complete with a detailed explanation and a link to view the full-resolution image.
      The backend uses NodeJS and Express</p>
    </div>
    <div className="right  py-[1rem] flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
    
      <div className='pizza  w-full h-[22rem] flex justify-center items-center group min-[900px]:rounded-xl min-[900px]:bg-cover'>
        <div className="overlay  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a  href="https://dashboard-frontend-ebld.onrender.com/"  target="_blank" 
                  rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
            </div>
        </div>
      </div>
      
    </div>
  </div>
</div>
<div className="layer2 ah2"></div>


      {/* Pokemon Battle */}
      <div className='w-full items-center flex justify-center'>
  <div className="flex  max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left  py-[1rem]  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
    
      <div className='pokemon  w-full h-[22rem] relative group min-[900px]:rounded-xl min-[900px]:bg-cover'>
        <div className="overlay  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
         <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a  href="https://silca93.github.io/PokemonBattle/"  target="_blank" 
                rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
         </div>
        </div>
      </div>
      
    </div>
    <div className="right  pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
      <div className="banner flex w-[24rem]  h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[20rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Pokemon Battle</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
            <FaHtml5 className='text-orange-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <IoLogoCss3 className='text-blue-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <SiJavascript className='text-yellow-400 bg-black text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
          </div>
        </div>
        <div className="diag pkmdiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>The Pokémon Battle Game is a classic Pokémon showdown between Venusaur and Lapras, created with vanilla JavaScript. <span className="text-red-600 font-bold">Designed for a Desktop aspect ratio</span>  this game replicates the classic turn-based battle system, the game captures the nostalgic feel of original Pokémon battles.</p>
    </div>
  </div>
</div>
<div className="reverseLayer ah3"></div>

      {/* Booked */}
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
    <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full">
        <div className="left pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
            <div className="banner flex w-[20rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
                <div className="left flex w-[16rem] max-[950px]:w-full">
                    <h1 className='text-xl font-bold pt-1'>Booked</h1>
                    <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
                        <SiNextdotjs className='text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
                        <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
                        <TbBrandRedux className='text-2xl hover:scale-125 duration-200 ease-in-out text-purple-600 mt-[5px]'/>
                    </div>
                </div>
                <div className="diag bookeddiagonal w-[4rem] h-full"></div>
            </div>
            <p className='max-[950px]:text-center px-4'>The Book eShop is a NextJS application that offers a seamless shopping experience for book lovers. Utilizing modern NextJS routing and API features, the app provides dynamic content and fast navigation. It's fully responsive, ensuring a smooth experience across all devices. The app includes a login system, allowing users to create accounts, browse, and purchase books with ease.</p>
        </div>
        <div className="right flex flex-col w-1/2 max-[950px]:w-full h-[25rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
            <div className='booked my-[1rem]  w-full h-[30rem] flex justify-center items-center group min-[900px]:rounded-xl min-[900px]:bg-cover'>
              <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a  href="https://final-project-eric.vercel.app/"  target="_blank" 
                      rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
<div className="layer2 ah2"></div>


{/* Workout Pal */}
<div className='w-full items-center flex justify-center'>
  <div className="flex  max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left  py-[1rem]  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
    
      <div className='workoutPal  w-full h-[22rem] relative group min-[900px]:rounded-xl min-[900px]:bg-cover'>
        <div className="overlay  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
         <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a  href="https://workoutpal-frontend-axz7.onrender.com/"  target="_blank" 
                rel="noopener noreferrer" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
         </div>
        </div>
      </div>
      
    </div>
    <div className="right  -500 pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem] max-[768px]:h-[22rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
      <div className="banner flex w-[24rem]  h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[22rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Workout Pal</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4 items-center'>
              <SiMongodb  className='text-[#39a746]  text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
              <SiExpress className='bg-white rounded-full p-1 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
              <FaNode className=' bg-white rounded-full p-1 text-2xl hover:scale-125 duration-200 ease-in-out max-[800px]:text-xl' />
              <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
          </div>
        </div>
        <div className="diag pkmdiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>Workout Pal is a fullstack fitness app built with the MERN stack (<b>MongoDB, Express, React, and Node.js).</b> It helps users log their workouts, it's user-friendly interface allows you to create and account, login and get going. The app is hosted on render.com using the free tier service. Which might take up to <span className="text-red-500">30 seconds</span> to launch if you try signing up or loging in.</p>
    </div>
  </div>
</div>



    </div>
  )
}