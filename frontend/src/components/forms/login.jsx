import {React,useState,createContext} from 'react';
import loginbanner from '../../assets/loginbanner.svg';
import { useForm } from 'react-hook-form';
import { auth, provider } from '../firebase/GoogleSignin';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


// import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate =useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
//  for traditional Login 
    const onSubmit = (data) => {
        console.log('Form submitted with data:', data);
        // Add your login logic here if needed
    };

// for google login
    const handleClick = async () => {

        // getting the name ,email,photoUrl , from the google via firebase and sending this data to backend
        try {
            const response = await signInWithPopup(auth, provider);
            // console.log('Google sign-in response:', response.user);
            const data = response.user;
             console.log("google user",data)

             //storing data in my localstorage 
             localStorage.setItem('user', JSON.stringify({
                    email:data.email,
                    name:data.displayName,
                    avtar:data.photoURL
                }))


            const userData = await fetch('http://localhost:3000/loginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:'include',
                body: JSON.stringify({
                    email:data.email,
                    name:data.displayName,
                    avtar:data.photoURL
                })
            });

            if(userData.ok){
                const result = await userData.json()
                console.log('data from google submitted succesfully to the backend',result)
        
               
              
               navigate('/dashboard')
            } 
            else{
                const result = await userData.json()
                console.error('data from google not submitted succesfully to the backend',result)
            }
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };


    return (
        <div className='flex justify-center items-center w-screen h-screen bg-[#92ddd1]'>

            {/* Passing the value of isLoggedIn to other components */}
           
            <div className="container h-120 w-180 bg-[#c4e2de] flex justify-center items-center rounded-lg">
                <div>
                    <img src={loginbanner} alt="Unable to load image" className='w-90 h-80' />
                </div>

                <div className='h-100 w-80 flex justify-center items-center flex-col gap-5'>
                    {/* Heading */}
                    <h1 className='font-bold text-3xl text-black text-center'>
                        Login into <br /> your <span className='text-[#26615d]'>account</span>
                    </h1>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center w-full">
                        {/* Email */}
                        <input
                            type="email"
                            placeholder='Enter your email...'
                            {...register('email', {
                                required: { value: true, message: "Email is required" }
                            })}
                            className='bg-white px-5 py-3 w-full placeholder:text-zinc-700 text-zinc-700 rounded-md border-[2px] border-green-100 outline-none'
                        />
                        {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}

                        {/* Password */}
                        <input
                            type="password"
                            placeholder='Enter your password...'
                            {...register('password', {
                                required: { value: true, message: "Password is required" }
                            })}
                            className='bg-white px-5 py-3 w-full placeholder:text-zinc-700 text-zinc-700 rounded-md border-[2px] border-green-100 outline-none'
                        />
                        {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}

                        {/* Submit */}
                        <input
                            type="submit"
                            value='Submit'
                            className='px-5 py-2 w-1/3 bg-[#26615d] text-white rounded-lg hover:bg-[#4f7c79] transition-all duration-400 cursor-pointer'
                        />
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-2 w-full max-w-md">
                        <hr className="ml-10 w-30 border-t-1 text-zinc-700" />
                        <span className="mx-2 text-zinc-700 font-medium">or</span>
                        <hr className="mr-10 w-30 border-t-1 text-zinc-700" />
                    </div>

                    {/* Google Sign-In */}
                    <button
                        onClick={handleClick}
                        className='w-full bg-[#0d5449] px-5 py-3 rounded-full text-white hover:bg-[#6ebbae] transition-all duration-400 flex justify-start items-center gap-10'
                    >
                       <FaGoogle /> Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
