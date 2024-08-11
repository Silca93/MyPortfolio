import React from 'react'


export default function Projects() {
  return (
    <div className='w-full'>
       
            <div className="flex w-full h-[4rem] justify-center items-center ">
                <div className="left w-1/2 h-full flex justify-end items-center">
                    <h1 className='font-2xl text-2xl font-bold text-[#6F4E37] mr-[5rem]'>My Projects</h1>
                </div>
                <div className="right w-1/2 h-full">

                </div>
            </div>

        <div className='w-full  items-center flex justify-center '>
            <div className="flex w-3/5 h-[35rem] items-center justify-center ">
                <div className=" left flex flex-col w-1/2 h-[30rem]  justify-center items-center">
                   <div className='pwd w-full h-[30rem] flex justify-center items-center'>

                   </div>
                   <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
                    <a href="https://silca93.github.io/PasswordGenerator/" className='text-xl'>
                        View Live
                    </a>
                   </div>
                </div>
                
                <div className="right flex flex-col gap-5 w-1/2 h-[30rem]  items-start pl-3 justify-center">
                <h1 className='text-xl font-bold'>Password Generator</h1>
                <p>A versatile password generator built with vanilla JavaScript that lets users create secure passwords. Users can customize their password by:</p>
                
                <li>
                    Including symbols (e.g., !@#$%^&*())
                </li>
                <li>
                    Using only letters (both uppercase and lowercase)
                </li>
                <li>
                    Adding numerical digits (0-9)
                </li>
                <li>
                    Specifying the desired password length
                </li>
                <li>
                    The intuitive interface allows for easy selection of options and generates a strong password with a single click, ensuring enhanced security and personalization.
                </li>

                </div>
            </div>
        </div>


        <div className='w-full  items-center flex justify-center '>
            <div className="flex w-3/5  h-[35rem]    items-center justify-center">

            <div className="left flex flex-col gap-5 w-1/2  h-[30rem]  pl-3 justify-center">
                <h1 className='text-xl font-bold'>Rock Paper Scissors</h1>
                <p className=''>This Rock Paper Scissors game is a sleek, responsive web application built with ReactJS and styled using Tailwind CSS. The game offers an interactive and visually appealing experience, where users can challenge the computer in a classic game of Rock, Paper, Scissors.</p>
                

                </div>
                <div className="right flex flex-col w-1/2 h-[30rem]  justify-center items-center">
                   <div className='shifumi w-full h-[30rem] flex justify-center items-center'>

                   </div>
                   <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
                        <a href="https://silca93.github.io/Countries_API/" className='text-xl'>
                            View Live
                        </a>
                   </div>
                </div>
                
                
            </div>
        </div>


        <div className='w-full  items-center flex justify-center '>
            <div className="flex w-3/5 h-[35rem] items-center justify-center ">
                <div className=" left flex flex-col w-1/2 h-[30rem]  justify-center items-center">
                   <div className='country w-full h-[30rem] flex justify-center items-center'>
                   </div>
                   <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
                    <a href="https://silca93.github.io/Countries_API/" className='text-xl'>
                        View Live
                    </a>
                   </div>
                </div>
                
                <div className="right flex flex-col gap-5 w-1/2 h-[30rem]  items-start pl-3 justify-center">
                <h1 className='text-xl font-bold'>Country API</h1>
                <p>The Country Explorer App is a ReactJS application that fetches real-time data for all the countries in the world using a free online API. Users can explore detailed information about each country, including population, capital, and languages. With React Router, the app allows smooth navigation between different pages, such as country details and search.</p>
                

                </div>
            </div>
        </div>


        <div className='w-full  items-center flex justify-center '>
            <div className="flex w-3/5  h-[35rem]    items-center justify-center">

            <div className="left flex flex-col gap-5 w-1/2  h-[30rem]  pl-3 justify-center">
                <h1 className='text-xl font-bold'>K3 Pizza</h1>
                <p className=''>The Pizza Shop App is a ReactJS application that allows users to order pizzas effortlessly. It features a list of pizzas, a filter bar to search by toppings, detailed pages for each pizza, and a fully functional shopping cart for easy checkout. The app provides a smooth, user-friendly experience for ordering pizza.</p>
                

                </div>
                <div className="right flex flex-col w-1/2 h-[30rem]  justify-center items-center">
                   <div className='pizza w-full h-[30rem] flex justify-center items-center'>

                   </div>
                   <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
                        <a href="https://silca93.github.io/K3Pizza/" className='text-xl'>
                            View Live
                        </a>
                   </div>
                </div>
                
                
            </div>
        </div>


        <div className='w-full  items-center flex justify-center '>
            <div className="flex w-3/5 h-[35rem] items-center justify-center ">
                <div className=" left flex flex-col w-1/2 h-[30rem]  justify-center items-center">
                   <div className='pokemon w-full h-[30rem] flex justify-center items-center'>
                   </div>
                   <div className="w-[10rem] h-[3rem] rounded-lg flex justify-center items-center border-[2px] border-[#6F4E37]">
                    <a href="https://silca93.github.io/PokemonBattle/" className='text-xl'>
                        View Live
                    </a>
                   </div>
                </div>
                
                <div className="right flex flex-col gap-5 w-1/2 h-[30rem]  items-start pl-3 justify-center">
                <h1 className='text-xl font-bold ml-4'>Pokemon Battle</h1>
                <p className='ml-4'>The Pokémon Battle Game is a classic Pokémon showdown between Venusaur and Lapras, created with vanilla JavaScript. Designed for a 16:9 aspect ratio screen, this game replicates the iconic turn-based battle system, the game captures the nostalgic feel of original Pokémon battles.</p>
                

                </div>
            </div>
        </div>
    </div>
  )
}
