import React from 'react'
import { LuFileText } from "react-icons/lu";
import { BsCamera2 } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbShieldCheck } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Quicklinks = () => {
     useEffect(()=>{
              AOS.init(
                  {
                      duration:2000,
                      once:false,
                      
                  }
              )
          },[])

  return (
    <div  className='flex gap-10 p-30 justify-center items-center  bg-white'>
        
        <div data-aos='slide-up' className="fileReport h-[250px] w-[300px] bg-gray-100 p-10 flex flex-col  gap-3 justify-center  items-center group hover:bg-gray-200  shadow-2xl rounded-md duration-300">
         
        <p ><LuFileText size={50} className="text-black group-hover:scale-105 group-hover:text-lime-700 transition-colors  duration-300" /></p>
            <h3 className='text-black font-bold text-lg group-hover:text-lime-700 group-hover:scale-105 duration-300'>   File a Report</h3>
           <p className='text-center text-zinc-500'>Submit your FIR online quickly and easily. Stay protected.</p>
         
          <button className="opacity-0 group-hover:opacity-100  justify-center w-[150px] items-center  bg-white text-lime-700 p-2 rounded-lg hover:bg-lime-200 hover:scale-105 duration-400 ">
                        Submit
                    </button>

        </div>


          <div  data-aos='slide-up' className="fileReport h-[250px] w-[300px] bg-gray-100 p-10 flex flex-col  gap-3 justify-center  items-center group hover:bg-gray-200 shadow-2xl  rounded-md duration-300 ">
         
         <p>< BsCamera2  size="50px"   className=' text-black group-hover:scale-105 group-hover:text-lime-700 transition-colors duration-300'/> </p>
            <h3 className='text-black font-bold text-lg group-hover:scale-105 group-hover:text-lime-700 duration-300 '>  Document a Crime</h3>
           <p className='text-center text-zinc-500'>Securely upload evidence. Your safety matters.</p>

  <button className="opacity-0 group-hover:opacity-100  justify-center w-[150px] items-center  bg-white text-lime-700 p-2 rounded-lg hover:bg-lime-200 hover:scale-105 duration-400 ">
                        Upload
                    </button>
        </div>

              <div  data-aos='slide-up' className="fileReport h-[250px] w-[300px] bg-gray-100 p-10 flex flex-col  gap-3 justify-center  items-center group hover:bg-gray-200 shadow-2xl  rounded-md duration-300">
         
         <p>< LiaClipboardListSolid  size="50px"   className=' text-black group-hover:scale-105 group-hover:text-lime-700 transition-colors duration-300'/> </p>
            <h3 className='text-black font-bold text-lg group-hover:scale-105 group-hover:text-lime-700 duration-300'> Contact Authorities</h3>
           <p className='text-center text-zinc-500'>Get in touch with the police instantly. We're here for you.</p>

  <button className="opacity-0 group-hover:opacity-100  justify-center w-[150px] items-center  bg-white text-lime-700 p-2 rounded-lg hover:bg-lime-200 hover:scale-105 duration-400
">
                      Contact
                    </button>

        </div>
      

            <div  data-aos='slide-up' className="fileReport h-[250px] w-[300px] bg-gray-100 p-10 flex flex-col  gap-3 justify-center  items-center group hover:bg-gray-200  shadow-2xl  rounded-md duration-300 transition-all">
         
         <p>< TbShieldCheck  size="50px"   className=' text-black group-hover:scale-105 group-hover:text-lime-700 transition-colors duration-300'/> </p>
            <h3 className='text-black font-bold text-lg group-hover:scale-105 group-hover:text-lime-700 duration-300'>Safety Advice</h3>
           <p className='text-center text-zinc-500'>Discover tips to keep you and your community safe.</p>

  <button className="opacity-0 group-hover:opacity-100  justify-center w-[150px] items-center  bg-white text-lime-700 p-2 rounded-lg hover:bg-lime-200 hover:scale-105 duration-400 transition-all ">
                       Discover
                    </button>

        </div>
    </div>
  )
}

export default Quicklinks
