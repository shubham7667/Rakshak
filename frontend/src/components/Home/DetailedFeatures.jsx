import React from 'react'
import reportcrime from '../../assets/reportcrime.jpg'
import incident from '../../assets/incident.webp'
import contact from '../../assets/contact.webp'
import safety from '../../assets/safety.webp'
import informed from '../../assets/informed.avif'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const DetailedFeatures = () => {
        useEffect(()=>{
            AOS.init(
                {
                    duration:2000,
                    once:false,
                    
                }
            )
        },[])
    return (
        <div className='flex w-full'>
            {/* create three div row wise  div 1. 4 images div2. one big centered image div 3. important link sections */}

            <div data-aos='zoom-in' className="featuresSection grid grid-cols-2 lg:h-[700px] w-2/3 bg-white p-5 ">

                <div >
                    <img src={incident} alt="" className=' h-50 w-50 rounded-lg transition-all duration-300 hover:opacity-60 ' />
                    <h3 className='font-semibold  text-2xl'>Record an Incident</h3>
                    <p>Capture details of any suspicious <br /> activity quickly and securely.</p>

                </div>


                <div>
                    <img src={reportcrime} alt="" className=' h-50 w-50 rounded-lg transition-all duration-300 hover:opacity-70' />
                    <h3 className='font-semibold  text-2xl'>Report a Crime</h3>
                    <p>Easily file a report online and help us keep the community safe.</p>
                </div>


                <div>
                    <img src={contact} alt="" className=' h-50 w-50 rounded-lg transition-all duration-300 hover:opacity-70' />
                    <h3 className='font-semibold  text-2xl'>Contact Authorities</h3>
                    <p>Reach out to local law enforcement <br /> with just a click</p>
                </div>


                <div>
                    <img src={safety} alt="" className=' h-50 w-50 rounded-lg transition-all duration-300 hover:opacity-70  ' />
                    <h3 className='font-semibold  text-2xl'>Safety Tips</h3>
                    <p> Learn how to protect yourself and your loved ones.</p>
                </div>


            </div>


            <div  data-aos='zoom-in' className="informed flex flex-wrap lg:h-[700px] w-2/3  bg-white ">

                <img src={informed} alt="" className='h-100 w-full p-5 rounded-lg trainsition-full duration-300 hover:opacity-70 ' />

            <div className='flex flex-col  items-start p-5'>
                    <h2 className='text-4xl font-bold '>Stay Informed</h2>
                <p>Get the latest updates and alerts on community safety.</p>
            </div>

            </div>


            <div  data-aos='zoom-in' className="importantBlog flex flex-wrap lg:h-auto w-1/3 bg-white">
            
            <div className='p-5 flex flex-col gap-5'>
                 <Link to='/emergency'  className='font-bold text-xl  hover:text-blue-500'>  Emergency Contacts
                <p className='font-normal '>Access important numbers for immediate assistance.</p> </Link> 
                <div className='h-[2px] w-full bg-black'></div>
            </div>
            

             <div className='p-5 flex flex-col gap-5'>
              <Link to='/statistics'  className='font-bold text-xl hover:text-blue-500'> Crime statistics
                <p className='font-normal '>View the latest data on crime trends in your area.</p> </Link> 
                <div className='h-[2px] w-full bg-black'></div>
            </div>


             <div className='p-5 flex flex-col gap-5'>
               <Link to='/communityPrograms'  className='font-bold text-xl hover:text-blue-500'>  Community Programs
                <p className='font-normal '>Join initiatives aimed at enhancing neighborhood security.</p> </Link> 
                <div className='h-[2px] w-full bg-black'></div>
            </div>


             <div className='p-5 flex flex-col gap-5'>
                <Link to='/feedback'  className='font-bold text-xl hover:text-blue-500'> Feedback
                <p className='font-normal '>Share your thoughts and help us improve our services.</p> </Link> 
                <div className='h-[2px] w-full bg-black'></div>
            </div>


             <div className='p-5 flex flex-col gap-5'>
                <Link to='/volunteer'  className='font-bold text-xl hover:text-blue-500 '> Volunteer
                <p className='font-normal '>Get involved and make a difference in your community.</p> </Link>
                <div className='h-[2px] w-full bg-black'></div>
            </div>
            
            </div>
        </div>
    )
}

export default DetailedFeatures
