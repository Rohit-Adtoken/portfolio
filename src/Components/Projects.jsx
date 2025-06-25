import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projectData = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and customer insights.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1674&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
    live: '#',
    source: '#',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Track workouts, nutrition, and fitness goals with personalized plans using this mobile app.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1740&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile App',
    live: '#',
    source: '#',
  },
  {
    title: 'Task Management System',
    description: 'Kanban-style system with drag-and-drop, collaboration, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1740&q=80',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
    category: 'Web App',
    live: '#',
    source: '#',
  },
];

const categories = ['All', 'Web App', 'Mobile App', 'UI/UX'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectData
    : projectData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-[5%] bg-white dark:bg-gray-900 transition-all">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Explore some of my latest work.</p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:underline"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
