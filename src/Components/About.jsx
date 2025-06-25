import React from 'react';
import {
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaMedal
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-[5%] ">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
            Let me introduce myself.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300"
          >
            <p>
              Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Rohit</span>, a passionate Full Stack Developer based in India with 3+ years of experience building robust web apps and delivering delightful user experiences.
            </p>
            <p>
              I specialize in <span className="font-semibold text-indigo-600 dark:text-indigo-400">JavaScript, React, Node.js</span>, and modern technologies. My journey began during college, and I've been creating ever since.
            </p>
            <p>
              When I’m not coding, I explore new tech, contribute to open-source, and share knowledge via blogs and tutorials. I believe in lifelong learning and evolving with the tech industry.
            </p>
            <p>
              My goal is to build solutions that not only meet business needs but deliver <span className="font-semibold text-indigo-600 dark:text-indigo-400">real value</span> to users.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Stat Card */}
            {[
              {
                icon: <FaCode />,
                label: 'Years Experience',
                value: '3+'
              },
              {
                icon: <FaProjectDiagram />,
                label: 'Projects Completed',
                value: '50+'
              },
              {
                icon: <FaUsers />,
                label: 'Happy Clients',
                value: '30+'
              },
              {
                icon: <FaMedal />,
                label: 'Awards Received',
                value: '15+'
              }
            ].map(({ icon, label, value }, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-2">{icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
                  {value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
