import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const FeatureDrop = () => {
  return (
    <div className='absolute  top-20 w-full bg-white  h-[350px] flex items-center justify-evenly '>

    
            <div className='content list-none  flex justify-start items-center space-x-10'>


  <div className="securityTools flex flex-col  justify-center items-center">
                <h3>Security Tools</h3>

        <div   className="listItems  text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 " > <li className=''><Link  className='flex justify-center items-center gap-2 '>Online Fir </Link> </li>
                      </div>

                      <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Crime Record</Link> </li></div>


                      <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Emergency Call</Link> </li></div>

              </div>
                      
                     <div className="services flex flex-col justify-center items-center">

                        <h3>Services</h3>

 <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Safety tips</Link> </li></div>

                      <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Community Support</Link> </li></div>

                      <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Feedback</Link> </li></div>

                     </div>

                     <div className="resources flex flex-col justifycenter items-center">
                        <h3>Resources</h3>

                        <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Gudies</Link> </li></div>

                        <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>FAQ's</Link> </li></div>

                        <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>Contact Us</Link> </li></div>

                     </div>

            </div>

            <div className="card bg-black h-[300px] w-[350px] flex flex-col gap-5 rounded-lg text-white  p-5 ">

                <p className='font-bold text-3xl '>Stay Protected <br /> With Our <br /> Services
                </p>
                <span className='text-zinc-400  p-2'>Explore our features that is designed to keep you safe .</span>

                <button className='flex justify-center w-[150px] items-center gap-5 bg-white text-black p-2 rounded-lg hover:bg-gray-200 hover:scale-105 duration-400'>Join Now <FaArrowRight /> </button>
            

            </div>
  
    </div>
  )
}

export default FeatureDrop
