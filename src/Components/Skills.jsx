import React from 'react';
import { FaLaptopCode, FaServer, FaPaintBrush } from 'react-icons/fa';

const skillData = [
  {
    category: 'Frontend Development',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'HTML5 & CSS3', value: 95 },
      { name: 'JavaScript', value: 90 },
      { name: 'React.js', value: 85 },
      { name: 'Vue.js', value: 80 },
    ],
  },
  {
    category: 'Backend Development',
    icon: <FaServer />,
    skills: [
      { name: 'Node.js', value: 90 },
      { name: 'Express.js', value: 85 },
      { name: 'MongoDB', value: 80 },
      { name: 'RESTful APIs', value: 85 },
    ],
  },
  {
    category: 'Design & Tools',
    icon: <FaPaintBrush />,
    skills: [
      { name: 'UI/UX Design', value: 75 },
      { name: 'Figma', value: 85 },
      { name: 'Git & GitHub', value: 90 },
      { name: 'Docker', value: 70 },
    ],
  },
    {
    category: 'DevOps',
    icon: <FaPaintBrush />,
    skills: [
      { name: 'AWS', value: 75 },
      { name: 'Docker', value: 85 },
      { name: 'Jenkins', value: 90 },
      { name: 'Kubernetes', value: 70 },
    ],
  },
  
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-[5%]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">What I bring to the table.</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillData.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-6">
                <span className="text-2xl">{category.icon}</span>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded">
                      <div
                        className="h-2 rounded bg-indigo-500 dark:bg-indigo-400 transition-all duration-500"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
