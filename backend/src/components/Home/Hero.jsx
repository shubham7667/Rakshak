import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false // Set to true if you want animations to run only once per scroll
    });
  }, []);

  return (
    // Added min-h-screen for better visual appeal, but not directly related to scroll fix
    <div className='bg-[#9ACD32] w-full min-h-screen flex flex-col justify-center items-center p-5 sm:p-10 text-center'>
      {/* Responsive font sizing */}
      <p
        data-aos='fade-up'
        className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-5 leading-tight'
      >
        Secure your world with ease and confidence
      </p>
      <p data-aos='fade-up' className='text-zinc-700 p-5 max-w-2xl'> {/* Added max-w for narrower text */}
        Explore our features: file FIRs, report crimes, and connect with police instantly.
      </p>
      <div data-aos='zoom-in' className="btn flex flex-col sm:flex-row gap-5 sm:gap-10 mt-5"> {/* Made buttons responsive */}
        <button className='bg-black px-6 py-3 text-white font-medium rounded-md hover:bg-gray-900 hover:scale-105 duration-300'>Get Started</button>
        <button className='border-[1px] border-black px-6 py-3 rounded-md hover:border-black hover:scale-105 duration-300'>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;