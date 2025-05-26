import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import {useState} from 'react';
import Que1 from '../../components/Dropdowns/Que1'
import Que2 from '../../components/Dropdowns/Que2'
import Que3 from '../../components/Dropdowns/Que3'
import Que4 from '../../components/Dropdowns/Que4'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Faq = () => {
    const [openIndex , setopenIndex] = useState(null)
    const handleToogle =(index)=>{
        setopenIndex(openIndex === index ? null :index)
    }

     useEffect(()=>{
                AOS.init(
                    {
                        duration:2000,
                        once:false,
                        
                    }
                )
            },[])
  return (
    <div className='w-full h-[600px] bg-gray-100 flex justify-center items-center flex-col p-5'>
        <h1 data-aos="fade-left" className='font-semibold text-4xl '>Stay secure with our trusted features</h1>
        <p data-aos="fade-left" className='p-5 text-zinc-500'>Discover how we keep you protected and informed.</p>


<div data-aos="fade-left" className="queContainer flex flex-col justify-center items-center w-full mt-20 gap-5">


        <div className="que1 flex flex-col w-full ml-5 justify-between gap-5 cursor-pointer" onClick={()=>{handleToogle(1)}}>
            <div className='flex w-full justify-between'> 
 <h2 className=' text-xl text-zinc-700 hover:text-lime-500 '>How do I file and FIR ?  </h2>
            <RiArrowDropDownLine size="30px"/>
            </div>
           
            {openIndex ===1 && <Que1 />}

        <div className='w-full bg-black h-[1px]'></div>
        </div>


   <div className="que2 flex flex-col w-full ml-5 justify-between gap-5   cursor-pointer" onClick={()=>{handleToogle(2)}}>
            <div className='flex w-full justify-between'> 
 <h2 className=' text-xl text-zinc-700 hover:text-lime-500 '>How can I report a crime ?  </h2>
            <RiArrowDropDownLine size="30px"/>
            </div>
           
            {openIndex ===2 && <Que2 />}

        <div className='w-full bg-black  h-[1px]'></div>
        </div>


   <div className="que3 flex flex-col w-full ml-5 justify-between gap-5   cursor-pointer" onClick={()=>{handleToogle(3)}}>
            <div className='flex w-full justify-between'> 
 <h2 className=' text-xl text-zinc-700 hover:text-lime-500 '>Is it possible to contact the police here ?  </h2>
            <RiArrowDropDownLine size="30px"/>
            </div>
           
            {openIndex ===3 && <Que3 />}

        <div className='w-full bg-black h-[1px]'></div>
        </div>

           <div className="que4 flex flex-col w-full ml-5 justify-between gap-5   cursor-pointer " onClick={()=>{handleToogle(4)}}>
            <div className='flex w-full justify-between'> 
 <h2 className=' text-xl text-zinc-700 hover:text-lime-500 '>What other services do you offer ?  </h2>
            <RiArrowDropDownLine size="30px"/>
            </div>
           
            {openIndex ===4 && <Que4 />}

        <div className='w-full bg-black h-[1px]'></div>
        </div>
</div>
      
    </div>
  )
}

export default Faq
