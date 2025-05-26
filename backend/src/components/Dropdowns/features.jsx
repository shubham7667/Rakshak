import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion'


const dropVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const FeatureDrop = ({ isOpen, onClose }) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='absolute z-10 top-20 w-full bg-white h-[350px] flex items-center justify-evenly'
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropVariants}
          transition={{ duration: 0.3 }}
        >
          <div className='content list-none flex justify-start items-center space-x-10'>

            <div className="securityTools flex flex-col justify-center items-center">
              <h3>Security Tools</h3>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li>
                  <Link className='flex justify-center items-center gap-2' to='/onlinefir' onClick={onClose}>
                    Online Fir
                  </Link>
                </li>
              </div>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li>
                  <Link to="/crimerecord" onClick={onClose}>Crime Record</Link>
                </li>
              </div>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li>
                  <Link to="/emergencycall" onClick={onClose}>Emergency Call</Link>
                </li>
              </div>
            </div>

            <div className="services flex flex-col justify-center items-center">
              <h3>Services</h3>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li><Link>Safety tips</Link></li>
              </div>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li><Link>Community Support</Link></li>
              </div>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li><Link>Feedback</Link></li>
              </div>
            </div>

            <div className="resources flex flex-col justify-center items-center">
              <h3>Resources</h3>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li><Link>Guides</Link></li>
              </div>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li><Link>FAQ's</Link></li>
              </div>

              <div className="listItems text-zinc-600 px-5 py-3 hover:bg-[#B3DA65] hover:text-white rounded-xl transition duration-400">
                <li><Link>Contact Us</Link></li>
              </div>
            </div>
          </div>

          <div className="card bg-black h-[300px] w-[350px] flex flex-col gap-5 rounded-lg text-white p-5 ">
            <p className='font-bold text-3xl'>Stay Protected <br /> With Our <br /> Services</p>
            <span className='text-zinc-400 p-2'>Explore our features that is designed to keep you safe.</span>

            <button className='flex justify-center w-[150px] items-center gap-5 bg-white text-black p-2 rounded-lg hover:bg-gray-200 hover:scale-105 duration-400'>
              Join Now <FaArrowRight />
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FeatureDrop
