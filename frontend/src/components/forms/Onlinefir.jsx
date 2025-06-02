import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Onlinefir = () => {
  const navigate= useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async(data)=>{
 try {
     const response =await fetch('http://localhost:3000/onlinefir/fir',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data),
      credentials:'include'
    })
    if(response.ok){
      const result = await response.json()
      console.log('form submitted succesfully to the server from frontend',result)
      navigate('/dashboard')
    }
    else{
      console.log('there is some error message from frontend')
    }
 } catch (error) {
  console.error('error message catch block',error)
 }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Rotated background */}
      <div
        className="absolute inset-0 bg-lime-300 -z-10 blur-md"
        style={{ transform: 'rotate(55deg)' }}
      ></div>

      {/* Your content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
<form
  method='post'
  onReset={() => reset()}
  onSubmit={handleSubmit(onSubmit)}
  className='relative w-full max-w-4xl p-8 rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl border border-white/30'
>
  {/* Blur Background Layer */}
  <div className='absolute inset-0 backdrop-blur-2xl bg-white/10 rounded-2xl z-0'></div>

  {/* Content */}
  <div className='relative z-10 flex flex-col gap-8'>

    <h2 className='text-3xl font-bold text-center text-white drop-shadow'>FIR Registration Form</h2>

    {/* First Row: Name + Contact */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <input
        type="text"
        {...register('name', { required: 'Name is required' })}
        placeholder='Full Name'
        className='input-style'
      />
      <input
        type="tel"
        {...register('contact', {
          required: 'Contact is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'Enter a valid 10-digit number',
          },
        })}
        placeholder='Contact Number'
        className='input-style'
      />
    </div>

    {/* Error Row */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {errors.name && <p className="error-text">{errors.name.message}</p>}
      {errors.contact && <p className="error-text">{errors.contact.message}</p>}
    </div>

    {/* Second Row: Gender + Email */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <select {...register('gender', { required: 'Gender is required' })} className='input-style'>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="email"
        {...register('email')}
        placeholder='Email Address (optional)'
        className='input-style'
      />
    </div>

    {/* Third Row: Pincode + Location */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <input
        type="text"
        {...register('pincode', { required: 'Pincode is required' })}
        placeholder='Enter Pincode'
        className='input-style'
      />
      <input
        type="text"
        {...register('location')}
        placeholder='Exact Location of Incident'
        className='input-style'
      />
    </div>

    {/* Fourth Row: Date + Time */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <input
        type="date"
        {...register('date', { required: 'Date is required' })}
        className='input-style'
      />
      <input
        type="time"
        {...register('time')}
        className='input-style'
      />
    </div>

    {/* Incident Details */}
    <div>
      <textarea
        {...register('incidentDetails', { required: 'Details cannot be empty.' })}
        placeholder='Describe the incident...'
        className='input-style h-32 resize-none w-full'
      ></textarea>
      {errors.incidentDetails && <p className="error-text">{errors.incidentDetails.message}</p>}
    </div>

    {/* File Upload */}
    <div>
      <label className='text-zinc-700'>Upload Evidence (images/videos):</label>
      <input
        type="file"
        {...register('evidence')}
        className='text-white mt-2'
        accept="image/*,video/*"
      />
    </div>

    {/* Submit + Reset Buttons */}
    <div className='flex gap-4 justify-center mt-4'>
      <button
        type="submit"
        className='px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/80 transition'
      >
        Submit
      </button>
      <button
        type="reset"
        className='px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white/10 transition'
      >
        Reset
      </button>
    </div>

  </div>
</form>

        {/* Add more content here */}
      </div>
    </div>
  )
}

export default Onlinefir
