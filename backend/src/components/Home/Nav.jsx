import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoMdArrowDropdown } from "react-icons/io";
import FeatureDrop from '../Dropdowns/features.jsx';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    
      const nav =useNavigate()
    const [isDisplay, setIsDisplay] = useState(false);
    const handleOnclick = () => setIsDisplay(!isDisplay);
    const handleCloseDropdown = () => setIsDisplay(false);
   
    useEffect(()=>{
        AOS.init()
    })
    return (
        <div >
            <nav className='bg-[#9ACD32] py-4 px-5 flex justify-around   items-center' >
                <div className="logo"><Link to='/'>logo</Link></div>

                <ul data-aos='fade-down' data-aos-duration='2000' className='list-none  flex gap-10  font-semibold  '>
                    <div onClick={handleOnclick} className="listItems relative text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 " > <li className=''><Link className='flex justify-center items-center gap-2 '>Features < IoMdArrowDropdown /></Link> </li>
                    </div>
        

                    <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400 "> <li className=''><Link>About Us</Link> </li></div>

                    <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400"> <li className=''><Link>News</Link> </li></div>

                    <div className="listItems text-zinc-600  px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl trainsition-full duration-400"> <li className=''><Link>Help</Link> </li></div>


                </ul>
                <div data-aos='fade-down' data-aos-duration='2000' className="btn flex gap-10">

                    <button className='border-[1px] border-black px-5 py-3 rounded-md hover:border[5px] hover:scale-105 duration-400 hover:cursor-pointer'>Login</button>

                    <button className='flex justify-center  items-center gap-5  px-5 py-3 text-white font-fine rounded-md bg-black hover:scale-105 duration-400 hover:cursor-pointer' onClick={()=>{nav('/registration')}}>Sign Up <FaArrowRight /></button>

                </div>
            </nav>
            <div className="dropbody w-full flex justify-center items-center">
                {isDisplay && <FeatureDrop isOpen={isDisplay} onClose={handleCloseDropdown} />}
            </div>

        </div>
    )
}

export default Nav
