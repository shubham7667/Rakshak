import {React,useState} from 'react'
import logo from '../../assets/logo.png'
import { CiBellOn } from "react-icons/ci";
   import { CiUser } from "react-icons/ci";
import Murder from '../../components/chart/Murder.jsx'
import News from './news.jsx';
// import users from '../../../../backend/model/user.js'
// const users = require('../../../../backend/model/user.js') 


 
const UserDash = () => {
const user = JSON.parse(localStorage.getItem('user'))
console.log(user.avtar)
  return (
    <div className='bg-white w-screen h-screen '>
      <nav className='flex justify-between  items-center'>
        <div className="logo w-1/2">
            <img src={logo} alt="" className="w-20 h-auto" />
        </div>
        <div className="notification w-1/2 flex justify-end p-5 gap-10 items-center">
            <CiBellOn  size={30}/>
         <img src={user.avtar} alt="User Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </nav>
      <div className="content flex justify-center items-center gap-20">
       
          <Murder />
          <News />

      </div>
    </div>
  )
}

export default UserDash
