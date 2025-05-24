import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#9ACD32] w-full flex flex-col justify-center  items-center p-10'> 
    <p className='font-semibold text-7xl mt-5'> Secure your <br /> 
    world with ease <br />
     and confidence</p>
      <p className='text-zinc-700 p-5'>
        Explore our features: file FIRs, report crimes, and connect with police instantly.
      </p>
      <div className="btn flex gap-10">
        <button className='bg-black px-5 py-3 text-white font-fine rounded-md hover:bg-gray-900 hover:scale-105 duration-400 hover:cursor-pointer'>Get Started</button>
        <button className='border-[1px] border-black px-5 py-3 rounded-md hover:border[5px] hover:scale-105 duration-400 hover:cursor-pointer'>Learn More</button>
      </div>
    </div>
  )
}

export default Hero
