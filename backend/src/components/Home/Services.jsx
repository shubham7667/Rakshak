import React from 'react'
import security from '../../assets/security.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Services = () => {
     useEffect(()=>{
                AOS.init(
                    {
                        duration:2000,
                        once:false,
                        
                    }
                )
            },[])
    return (
        <div  className="relative w-full h-auto">
            {/* Blurred Background Layer */}
            <div
                className="absolute inset-0 top-0 left-0 w-full h-full bg-cover bg-center blur-lg"
                style={{ backgroundImage: `url(${security})` }}
            ></div>

            {/* Card Content Layer */}
            <div data-aos='slide-up' className="cardContainer flex flex-col items-center gap-10  z-10 relative h-full  overflow-y-auto  w-full p-20">

                <div data-aos='flip-up' className=" bg-black h-[500px] w-[600px] flex flex-col gap-5 rounded-lg text-white p-5 z-10">
                     <span className="text-zinc-400 p-2">
                        Security Features
                    </span>
                    <p className="font-bold text-3xl">
                       Stay Safe with Our <br /> Online Services

                    </p>
                    <span className="text-zinc-400 p-2">
                       Easily report incidents, file FIRs, and contact authorities with just a few clicks. Your safety is our priority.
                    </span>
                    <button className="flex justify-center w-[150px] items-center gap-5 bg-white text-black p-2 rounded-lg hover:bg-gray-200 hover:scale-105 duration-400 mt-20">
                        Learn More
                    </button>
                </div>

                <div data-aos='flip-up' className=" bg-black h-[500px] w-[600px] flex flex-col gap-5 rounded-lg text-white p-5 z-10">
                     <span className="text-zinc-400 p-2">
                       Crime Reporting
                    </span>
                    <p className="font-bold text-3xl">
                     Report Crimes <br /> Anonymously

                    </p>
                    <span className="text-zinc-400 p-2">
                       Use our platform to record and report crimes securely and anonymously. Help us make the community safer.
                    </span>
                    <button className="flex justify-center w-[150px] items-center gap-5 bg-white text-black p-2 rounded-lg hover:bg-gray-200 hover:scale-105 duration-400 mt-20">
                        Report Now
                    </button>
                </div>

                <div data-aos='flip-up' className=" bg-black h-[500px] w-[600px] flex flex-col gap-5 rounded-lg text-white p-5 z-10">
                     <span className="text-zinc-400 p-2">
                      Emergency Assistance
                    </span>
                    <p className="font-bold text-3xl">
                    Quick Access to Help

                    </p>
                    <span className="text-zinc-400 p-2">
                    In case of emergencies, contact the police instantly through our platform. We're here to assist you.
                    </span>
                    <button className="flex justify-center w-[150px] items-center gap-5 bg-white text-black p-2 rounded-lg hover:bg-gray-200 hover:scale-105 duration-400 mt-20">
                        Get Help
                    </button>
                </div>


                
                <div data-aos='flip-up' className=" bg-black h-[500px] w-[600px] flex flex-col gap-5 rounded-lg text-white p-5 z-10">
                     <span className="text-zinc-400 p-2">
                     Community Support
                    </span>
                    <p className="font-bold text-3xl">
                    Join Our Safety <br /> Network

                    </p>
                    <span className="text-zinc-400 p-2">
      Connect with others and share safety tips. Together, we can create a safer environment for everyone.

                    </span>
                    <button className="flex justify-center w-[150px] items-center gap-5 bg-white text-black p-2 rounded-lg hover:bg-gray-200 hover:scale-105 duration-400 mt-20">
                        Join Us
                    </button>
                </div>
            </div>





        </div>
    )
}

export default Services
