import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import React from 'react'

const Nav = () => {
    const [isDropOpen , setDroppedOpen]= useState(false)

    const handleMouseEnter =()=>{
        setDroppedOpen(true)
    }
    const handleMouseLeave =()=>{
        setDroppedOpen (false)
    }
  return (
    <div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=''>
           




      </div>
    </div>
  )
}

export default Nav

