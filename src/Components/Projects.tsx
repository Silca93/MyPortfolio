import { FaHtml5,  FaReact} from "react-icons/fa";
import { IoLogoCss3} from "react-icons/io5";
import { SiJavascript, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

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
    
      <div className='benchmark w-full h-[30rem] flex justify-center items-center group '>
        <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a  href="https://silca93.github.io/Reflexes/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
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
            <div className='pwd  w-full h-[30rem] flex justify-center items-center group'>
              <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a  href="https://silca93.github.io/PasswordGenerator/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
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
    
      <div className='shifumi w-full h-[30rem] flex justify-center items-center group'>
        <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a  href="https://silca93.github.io/ShiFuMi/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
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
     
      <div className='country w-full h-[30rem] flex justify-center items-center group'>
        <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            
            <div className="view-live flex w-[7rem] h-[2rem] border-[1px] border-black  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"> 
              <a  href="https://silca93.github.io/Countries_API/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
            </div>
        </div>
      </div>
     
    </div>
    <div className="right pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[24rem]  items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
      <div className="banner flex w-[20rem]  h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[16rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Country API</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
            <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
          </div>
        </div>
        <div className="diag countrydiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>The Country Explorer App is a ReactJS application that fetches real-time data for all the countries in the world using a free online API. Users can explore detailed information about each country, including population, capital, and languages. With React Router, the app allows smooth navigation between different pages, such as country details and search.</p>
    </div>
  </div>
</div>
<div className="reverseLayer ah3"></div>


      {/* K3 Pizza */}
      
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left pt-[2rem] flex flex-col gap-5 w-1/2 max-[950px]:w-full  h-[24rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
      <div className="banner flex w-[20rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[16rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>K3 Pizza</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
            <FaReact className='text-[#00B9E8] text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <RiTailwindCssFill className='text-cyan-400 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <TbBrandRedux className='text-2xl hover:scale-125 duration-200 ease-in-out text-purple-600 mt-[5px]'/>
          </div>
        </div>
        <div className="diag k3diagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>The Pizza Shop App is a ReactJS application that allows users to order pizzas effortlessly. It features a list of pizzas, a filter bar to search by toppings, detailed pages for each pizza, and a fully functional shopping cart for easy checkout. The app provides a smooth, user-friendly experience for ordering pizza.</p>
    </div>
    <div className="right  py-[1rem] flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
    
      <div className='pizza  w-full h-[30rem] flex justify-center items-center group'>
        <div className="overlay  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <a  href="https://silca93.github.io/K3Pizza/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
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
    
      <div className='pokemon  w-full h-[30rem] relative group'>
        <div className="overlay  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
         <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <a  href="https://silca93.github.io/PokemonBattle/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
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
        <div className="right flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
            <div className='booked my-[1rem]  w-full h-[30rem] flex justify-center items-center group'>
              <div className="overlay flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div  className="view-live flex w-[7rem] h-[2rem]  bg-[#F2F3F4] justify-center items-center rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a  href="https://final-project-eric.vercel.app/" className="view-live text-[#6F4E37]  text-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">View Live</a>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}