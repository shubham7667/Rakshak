import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import FeatureDrop from '../Dropdowns/features.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/logo.png';

const Nav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const res = await fetch('http://localhost:3000/verify', { credentials: 'include' });
                setIsLoggedIn(res.ok);
            } catch (err) {
                console.error(err);
                setIsLoggedIn(false);
            }
        };
        checkLogin();
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    const toggleDropdown = () => setIsDisplay(!isDisplay);
    const closeDropdown = () => setIsDisplay(false);

    return (
        <div className="w-full shadow-md">
            <nav className="bg-[#9ACD32] py-4 px-5 flex flex-wrap justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </Link>
                </div>

                {/* Nav Links */}
                <ul 
                    data-aos="fade-down" 
                    data-aos-duration="2000" 
                    className="hidden md:flex list-none gap-6 font-semibold text-zinc-600"
                >
                    <li 
                        className="relative px-4 py-2 hover:bg-[#B3DA65] hover:text-white rounded-xl cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <div className="flex items-center gap-1">
                            Features <IoMdArrowDropdown />
                        </div>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#B3DA65] hover:text-white rounded-xl">
                        <Link to="#">About Us</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#B3DA65] hover:text-white rounded-xl">
                        <Link to="#">News</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#B3DA65] hover:text-white rounded-xl">
                        <Link to="#">Help</Link>
                    </li>
                </ul>

                {/* Buttons */}
                <div 
                    data-aos="fade-down" 
                    data-aos-duration="2000" 
                    className="flex gap-3 mt-4 md:mt-0"
                >
                    {isLoggedIn ? (
                        <button 
                            onClick={() => navigate('/logout')} 
                            className="bg-black text-white px-5 py-2 rounded-md hover:scale-105 transition duration-300"
                        >
                            Log Out
                        </button>
                    ) : (
                        <>
                            <button 
                                onClick={() => navigate('/login')} 
                                className="border border-black px-5 py-2 rounded-md hover:scale-105 transition duration-300"
                            >
                                Login
                            </button>
                            <button 
                                onClick={() => navigate('/registration')} 
                                className="bg-black text-white flex items-center gap-2 px-5 py-2 rounded-md hover:scale-105 transition duration-300"
                            >
                                Sign Up <FaArrowRight />
                            </button>
                        </>
                    )}
                </div>
            </nav>

            {/* Dropdown */}
            {isDisplay && (
                <div className="flex justify-center">
                    <FeatureDrop isOpen={isDisplay} onClose={closeDropdown} />
                </div>
            )}
        </div>
    );
};

export default Nav;
