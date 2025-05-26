import React from 'react'
import registerfir from '../../assets/registerfir.avif'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const RegisterFir = () => {
  useEffect(()=>{
              AOS.init(
                  {
                      duration:2000,
                      once:false,
                      
                  }
              )
          },[])

  return (
    <div className=' p-20  grid grid-cols-2  gap-20'>

        <img data-aos='fade-right' src={registerfir} alt="" />

        <div data-aos='fade-right' className="content flex flex-col gap-5 ">
            <h1 className='font-bold text-4xl'>Secure your <br /> world with ease</h1>
            <p>Quickly file reports and get support.</p>
              <div className="btn  flex gap-10 ">

            <button className='bg-lime-300 px-5 py-3 rounded-md transition-all duration-400 hover:scale-105 hover:bg-lime-200'> Register FIR</button>
            <button className='border-[1px] border-black  px-5 py-3 rounded-md transition-full duration-400 hover:scale-105'>Call Police</button>
        </div>
        </div>

      
      
    </div>
  )
}

export default RegisterFir
