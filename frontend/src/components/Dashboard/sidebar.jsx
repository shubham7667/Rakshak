import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='fixed z-10   bg-white text-white h-screen w-64 border-t-[1px ] border-zinc-700 shadow-2xl rounded-md'>
            <nav className=' text-zinc-600 overflow-hidden'>
                <ul className='flex flex-col gap-0 '>

                    <div className='hover:bg-indigo-500 hover:text-white flex flex-col gap-5  items-center p-5 '>
                        <li><Link to='/profile'>Profile</Link></li>

                    </div>
                        <div className='h-[1px] w-full bg-zinc-700'></div>

                    <div className='hover:bg-indigo-500 hover:text-white flex flex-col gap-5 items-center p-5'>

                        <li><Link to='/myfir'>Your FIR's</Link></li>
                    </div>
                        <div className='h-[1px] w-full bg-zinc-700'></div>



                    <div className='hover:bg-indigo-500 hover:text-white  flex flex-col gap-5  items-center p-5'>

                        <li><Link to='/articles'>Publish articles</Link></li>
                    </div>
                        <div className='h-[1px] w-full bg-zinc-700'></div>



                    <div className='hover:bg-indigo-500 hover:text-white flex flex-col gap-5  items-center p-5'>

                        <li><Link to='/proofvault'>Proofs Vault</Link></li>
                    </div>
                        <div className='h-[1px] w-full bg-zinc-700'></div>



                    <div className='hover:bg-red-500 hover:text-white flex flex-col gap-5  items-center p-5'>

                        <li><Link to='/logout'>Logout</Link></li>
                    </div>
                        <div className='h-[1px] w-full bg-zinc-700'></div>


                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
