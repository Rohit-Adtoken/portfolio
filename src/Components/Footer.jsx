import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaDribbble
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-4 text-center flex flex-col items-center justify-center"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide mb-4"
        >
          Rohit<span className="text-gray-800 dark:text-white">.</span>
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 mb-6 text-gray-600 dark:text-gray-400 text-sm font-medium">
          {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="capitalize hover:text-indigo-500 dark:hover:text-indigo-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-gray-600 dark:text-gray-400 mb-6">
          {[FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaDribbble].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Rohit Agrawal. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
