import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const Nav = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    return (
        <div >
            <nav className='bg-[#9ACD32] py-4 px-5 flex justify-around   items-center' >
                <div className="logo">logo</div>
             
              <ul className='list-none  flex gap-10  font-semibold  '>
               <div className="listItems text-white px-5 py-3 hover:bg-[#B3DA65]  rounded-xl trainsition-full duration-400"> <li className=''><Link>Features</Link> </li></div>
               <div className="listItems px-5 py-3 hover:bg-[#B3DA65] rounded-xl trainsition-full duration-400 "> <li className=''><Link>About Us</Link> </li></div>
               <div className="listItems px-5 py-3 hover:bg-[#B3DA65] rounded-xl trainsition-full duration-400"> <li className=''><Link>News</Link> </li></div>
               <div className="listItems px-5 py-3 hover:bg-[#B3DA65] rounded-xl trainsition-full duration-400"> <li className=''><Link>Help</Link> </li></div>
               
                
              </ul>

            </nav>

        </div>
    )
}

export default Nav
