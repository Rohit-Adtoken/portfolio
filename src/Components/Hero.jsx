import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    
    <section
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(#d1d5db_1px,transparent_1px)] before:bg-[length:20px_20px] before:animate-scrollGrid dark:before:bg-[radial-gradient(#4b5563_1px,transparent_1px)]" />

      <div className="relative container mx-auto max-w-7xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10">
        
        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Hi, I’m <span className="text-indigo-600 dark:text-indigo-400">Rohit Agrawal</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            I craft responsive websites and web applications that deliver pixel-perfect experiences with cutting-edge technologies.
          </p>

          {/* Call-to-Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition duration-300"
            >
              Contact Me
            </a>
            <a
              href="/Rohit_Agrawal_Resume.pdf"
              download
              className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-800 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
              alt="Rohit Agrawal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

