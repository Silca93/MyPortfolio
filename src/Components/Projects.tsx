import React from 'react'
import { FaHtml5, FaSass, FaPython, FaReact, FaNpm, FaFigma, FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoCss3, IoMdGitMerge } from "react-icons/io5";
import { SiJavascript, SiTypescript, SiNextdotjs, SiDjango, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

export default function Projects() {
  return (
    <div className='w-full'>
      {/* Title section */}
      <div className="flex w-full h-[4rem]  justify-center items-center">
        <div className="left  w-full h-full flex justify-center   items-center">
          <h1 className='font-2xl text-2xl font-bold text-[#6F4E37] min-[1200px]:mr-[35rem] pt-5' id="projects">My Projects</h1>
        </div>
        
      </div>

      {/* Password Generator */}
      <div className='w-full items-center flex justify-center'>
        <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
          <div className="left  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
            <div className='pwd w-full h-[30rem] flex justify-center items-center'></div>
            <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
              <a href="https://silca93.github.io/PasswordGenerator/" className='text-xl'>View Live</a>
            </div>
      </div>
      <div className="right  b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[30rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
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
        <li>Choosing the length of the password</li>
        <li>Including numbers</li>
        <li>Including special characters</li>
        <li>Restricting or allowing the use of capital letters</li>
      </div>
    </div>
    </div>

      {/* Rock Paper Scissors */}
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left  b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[30rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
      <div className="banner flex w-[25rem] h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[21rem] max-[950px]:w-full">
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
    <div className="right  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
      <div className='shifumi w-full h-[30rem] flex justify-center items-center'></div>
      <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
        <a href="https://silca93.github.io/Countries_API/" className='text-xl'>View Live</a>
      </div>
    </div>
  </div>
</div>

      {/* Country API */}
      <div className='w-full items-center flex justify-center'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
      <div className='country w-full h-[30rem] flex justify-center items-center'></div>
      <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
        <a href="https://silca93.github.io/Countries_API/" className='text-xl'>View Live</a>
      </div>
    </div>
    <div className="right  b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[30rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
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

      {/* K3 Pizza */}
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left  b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[30rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
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
    <div className="right  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center max-[950px]:order-1">
      <div className='pizza w-full h-[30rem] flex justify-center items-center'></div>
      <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
        <a href="https://silca93.github.io/K3Pizza/" className='text-xl'>View Live</a>
      </div>
    </div>
  </div>
</div>
      {/* Pokemon Battle */}
      <div className='w-full items-center flex justify-center'>
  <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full bg">
    <div className="left  flex flex-col w-1/2 max-[950px]:w-full h-[30rem] max-[950px]:h-[25rem] justify-center items-center">
      <div className='pokemon w-full h-[30rem] flex justify-center items-center'></div>
      <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
        <a href="https://silca93.github.io/PokemonBattle/" className='text-xl'>View Live</a>
      </div>
    </div>
    <div className="right b flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[30rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center">
      <div className="banner flex w-[25rem]  h-[2.2rem] bg-[#dfdfe0] pl-2">
        <div className="left flex w-[21rem] max-[950px]:w-full">
          <h1 className='text-xl font-bold pt-1'>Pokemon Battle</h1>
          <div data-aos="zoom-in" data-aos-duration="500" className='flex gap-3 pl-4'>
            <FaHtml5 className='text-orange-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <IoLogoCss3 className='text-blue-600 text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
            <SiJavascript className='text-yellow-400 bg-black text-2xl hover:scale-125 duration-200 ease-in-out mt-[5px]' />
          </div>
        </div>
        <div className="diag pkmdiagonal w-[4rem] h-full"></div>
      </div>
      <p className='max-[950px]:text-center px-4'>The Pokémon Battle Game is a classic Pokémon showdown between Venusaur and Lapras, created with vanilla JavaScript. Designed for a 16:9 aspect ratio screen, this game replicates the classic turn-based battle system, the game captures the nostalgic feel of original Pokémon battles.</p>
    </div>
  </div>
</div>

      {/* Booked */}
      <div className='w-full items-center flex justify-center bg-[#eff1f1]'>
    <div className="flex max-[950px]:flex-col w-3/5 h-[35rem] max-[950px]:h-auto items-center justify-center max-[900px]:w-full">
        <div className="left  flex flex-col gap-5 w-1/2 max-[950px]:w-full h-[30rem] items-start max-[950px]:items-center max-[950px]:justify-start pl-3 justify-center max-[950px]:order-2">
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
            <div className='booked w-full h-[30rem] flex justify-center items-center'></div>
            <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
                <a href="https://silca93.github.io/K3Pizza/" className='text-xl'>View Live</a>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}