import React from 'react';
import Lottie from 'lottie-react';
import hello from '../../assets/hello.json';
import { useForm } from 'react-hook-form';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Registeration = () => {
  const [loading , setloading]=useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
const OnSubmit= async (data)=>{
   setloading(true);

  try{
    
    const response = await fetch('http://localhost:3000/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body :JSON.stringify(data)
    });
    if (response.ok){
      const result = await response.json()
      console.log('succesfull submission from frontend',result)
      navigate('/login')
    }
    else{
      const result = await response.json()
      console.log(result)
    }
  }catch(err){
    console.log(err)
  }finally{
      setloading(false)

  }

}
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black text-white">
      {/* Lottie Section */}
      <div className="w-1/2 flex justify-end pr-10">
        <Lottie animationData={hello} loop={true} style={{ width: 400, height: 400 }} />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex justify-start items-center">
        <form onSubmit={handleSubmit(OnSubmit  )} className="grid grid-cols-2 gap-5 w-full max-w-[600px]">
          {/* Name */}
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Enter username..."
              className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
              {...register('username', {
                required: 'Name is required',
                minLength: {
                  value: 4,
                  message: 'Name must be at least 4 characters'
                },
                maxLength: {
                  value: 10,
                  message: 'Name cannot exceed 10 characters'
                }
              })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="col-span-2">
            <input
              type="email"
              placeholder="Enter email..."
              className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Gender */}
          <div className="col-span-2">
            <h2 className="text-md font-medium mb-2">Select Gender</h2>
            <div className="flex gap-10">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="Male"
                  {...register('gender', { required: 'Gender is required' })}
                  className="form-radio text-teal-500 w-5 h-5"
                />
                <span>Male</span>
              </label>

              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  value="Female"
                  {...register('gender', { required: 'Gender is required' })}
                  className="form-radio text-teal-500 w-5 h-5"
                />
                <span>Female</span>
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
          </div>

          {/* Phone */}
          <input
            type="tel"
            placeholder="Enter phone number"
            className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
            {...register('phone', { required: 'Phone is required' })}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1 col-span-2">{errors.phone.message}</p>}

          {/* State */}
          <input
            type="text"
            placeholder="Enter state name"
            className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
            {...register('state', { required: 'State is required' })}
          />
          {errors.state && <p className="text-red-500 text-sm mt-1 col-span-2">{errors.state.message}</p>}

          {/* City */}
          <input
            type="text"
            placeholder="Enter city/village name"
            className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
            {...register('city', { required: 'City is required' })}
          />
          {errors.city && <p className="text-red-500 text-sm mt-1 col-span-2">{errors.city.message}</p>}

          {/* Password */}
          <input
            type="password"
            placeholder="Enter password"
            className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1 col-span-2">{errors.password.message}</p>}

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm password"
            className="bg-zinc-800 px-5 py-3 w-full border border-zinc-600 outline-none rounded-md text-white placeholder:text-zinc-400"
            {...register('confirmpassword', { required: 'Confirm Password is required' })}
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-sm mt-1 col-span-2">{errors.confirmpassword.message}</p>
          )}

          {/* Submit Button (Optional) */}
          <button type="submit" className="col-span-2 mt-4 bg-teal-600 hover:bg-teal-700 px-5 py-3 rounded-md text-white font-semibold " >
          {loading ? 'Registering' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registeration;



