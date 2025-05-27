import React from 'react'
import loginbanner from '../../assets/loginbanner.svg'
import { useForm } from 'react-hook-form'
const login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {

    }
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-[#92ddd1]'>


            <div className="container h-120 w-180 bg-[#c4e2de] flex justify-center items-center rounded-lg ">

                <div>
                    <img src={loginbanner} alt="unbale to load  image at this moment" className='w-90 h-80' />

                </div>

                <div className=' h-100 w-80 flex justify-center items-center flex-col gap-5'>

                    {/* heading */}

                    <h1 className='font-bold text-3xl text-black'>Login into <br /> your <span className='text-[#26615d]'>account</span> </h1>


                    {/* form  */}

                    <form onSubmit={handleSubmit(onSubmit)}></form>


                    {/* email */}

                    <input type="email"
                        placeholder='enter your email...'
                        {...register('email', { required: true, message: "email is required" })}
                        className='bg-white px-5 py-3 placeholder:text-zic-700 text-zinc-700 rounded-md border-[2px] border-green-100 outline-none'
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}


                    {/* password */}

                    <input type="password"
                        placeholder='enter your password...'
                        {...register('password', { required: true, message: "fill the password" })}
                        className='bg-white px-5 py-3 placeholder:text-zic-700 text-zinc-700 rounded-md  border-[2px] border-green-100 outline-none'
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}


                    <div className="flex items-center my-6 w-full max-w-md">
                        <hr className="ml-10 w-30 border-t-1 text-zinc-700" />
                        <span className="mx-2 text-zinc-700 font-medium">or</span>
                        <hr className="mr-10 w-30  border-t-1 text-zinc-700" />
                    </div>



                </div>



            </div>
        </div>
    )
}

export default login
