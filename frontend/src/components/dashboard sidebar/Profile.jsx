import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loading from '../../assets/loading.json';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAvatar, setIsAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const getInfo = await fetch('http://localhost:3000/profile', {
          method: 'GET',
          credentials: 'include'
        });

        if (getInfo.ok) {
          const result = await getInfo.json();
          setValue('name', result.username || "");
          setValue('email', result.email || "");
          setValue('phone', result.phone || "N/A");
          setValue('state', result.state || "N/A");
          setValue('city', result.city || "N/A");
          setValue('gender', result.gender || "N/A");
          setAvatarUrl(result.avtar || "");
          setIsAvatar(!!result.avtar);
        } else {
          console.log('User info not found');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserInfo();
  }, [setValue]);

  const inputClass =
    "border-b border-gray-300 bg-transparent text-gray-700 placeholder-gray-400 p-2 focus:outline-none focus:border-blue-400 transition-all duration-200 w-full";

  const onSubmit = (data) => {
    // handle form submission here (e.g., send to backend)
    console.log(data);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-blue-100">
          <Lottie
            animationData={loading}
            loop={true}
            className="w-40 h-40 md:w-96 md:h-[28rem]"
          />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 py-10">
          <div className="w-full max-w-2xl bg-white/90 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-lg flex flex-col items-center border border-blue-100">
            {/* Avatar */}
            <div className="flex justify-center items-center mb-10">
              {isAvatar && avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="User Avatar"
                  width={144}
                  height={144}
                  className="h-36 w-36 rounded-full border-4 border-blue-300 object-cover shadow-lg"
                />
              ) : (
                <FaRegUserCircle className="text-9xl text-blue-200" />
              )}
            </div>

            {/* React Hook Form */}
            <form
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <label className="mb-2 text-gray-500 font-semibold">Your Name</label>
                <input
                  type="text"
                  {...register('name')}
                  className={inputClass}
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-500 font-semibold">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  className={inputClass}
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-500 font-semibold">Phone</label>
                <input
                  type="text"
                  {...register('phone')}
                  className={inputClass}
                  placeholder="Enter your phone"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-500 font-semibold">State</label>
                <input
                  type="text"
                  {...register('state')}
                  className={inputClass}
                  placeholder="Enter your state"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-500 font-semibold">City</label>
                <input
                  type="text"
                  {...register('city')}
                  className={inputClass}
                  placeholder="Enter your city"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-gray-500 font-semibold">Gender</label>
                <input
                  type="text"
                  {...register('gender')}
                  className={inputClass}
                  placeholder="Enter your gender"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-center gap-6 col-span-1 md:col-span-2 mt-6">
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors duration-200"
                >
                  Back to Dashboard
                </button>
                <button
                  type="submit"
                  className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md cursor-pointer transition-colors duration-200"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
