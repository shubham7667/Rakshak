import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Footer = () => {
     useEffect(()=>{
                AOS.init(
                    {
                        duration:2000,
                        once:false,
                        
                    }
                )
            },[])

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div data-aos='fade-up' className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm text-zinc-400">
            We aim to make reporting crimes easier, faster, and safer. Your protection is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/fir" className="hover:text-lime-400">Register FIR</a></li>
            <li><a href="/report" className="hover:text-lime-400">Report a Crime</a></li>
            <li><a href="/contact" className="hover:text-lime-400">Contact Authorities</a></li>
            <li><a href="/tips" className="hover:text-lime-400">Safety Advice</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-sm text-zinc-400">📞 Emergency: 100</p>
          <p className="text-sm text-zinc-400">📧 help@safeguard.org</p>
          <p className="text-sm text-zinc-400">📍 New Delhi, India</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Informed</h3>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 rounded text-black focus:outline-none"
          />
          <button className="bg-lime-500 mt-3 px-4 py-2 rounded w-full hover:bg-lime-600 transition">
            Subscribe
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-zinc-400">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-zinc-500 text-sm">
        © 2025 SafeGuard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
