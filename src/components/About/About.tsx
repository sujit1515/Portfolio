'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillsPage() {
  const skills = {
    frontend: [
      { name: 'React.js', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'TypeScript', level: 88, icon: '📘' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'HTML/CSS', level: 95, icon: '🌐' },
      { name: 'JavaScript', level: 93, icon: '✨' },
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express.js', level: 82, icon: '🚂' },
      { name: 'MongoDB', level: 80, icon: '🍃' },
      { name: 'PostgreSQL', level: 78, icon: '🐘' },
      { name: 'REST API', level: 88, icon: '🔌' },
      { name: 'GraphQL', level: 75, icon: '◆' },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90, icon: '📦' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 85, icon: '🎯' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS', level: 72, icon: '☁️' },
      { name: 'Vercel', level: 88, icon: '▲' },
    ],
  };

  return (
    <div id="skills" className="min-h-screen bg-[#0d0d1f] py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              My Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise in modern web development
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {/* Frontend Skills */}
          <SkillCategory
            title="Frontend Development"
            description="Building beautiful and responsive user interfaces"
            skills={skills.frontend}
            delay={0}
          />

          {/* Backend Skills */}
          <SkillCategory
            title="Backend Development"
            description="Creating robust server-side applications"
            skills={skills.backend}
            delay={0.2}
          />

          {/* Tools & Technologies */}
          <SkillCategory
            title="Tools & Technologies"
            description="Development tools and deployment platforms"
            skills={skills.tools}
            delay={0.4}
          />
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies', value: '20+' },
            { label: 'Happy Clients', value: '30+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SkillCategory({ title, description, skills, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-6"
    >
      {/* Category Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
    >
      {/* Icon and Name */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <motion.span
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl"
          >
            {skill.icon}
          </motion.span>
          <h4 className="text-white font-semibold">{skill.name}</h4>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-sm font-bold text-purple-400"
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        >
          {/* Animated Glow */}
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>

      {/* Skill Level Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        className="mt-2 text-xs text-gray-500 text-right"
      >
        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Proficient'}
      </motion.div>
    </motion.div>
  );
}