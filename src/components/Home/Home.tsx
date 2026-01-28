'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Creative Thinker',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-[#0d0d1f] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div
          className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <span className="text-gray-400 text-lg">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              John Doe
              <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                {roles[currentRole]}
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg sm:text-xl max-w-lg leading-relaxed">
              I craft stunning digital experiences that blend creativity with functionality. 
              Passionate about building innovative solutions that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-purple-500/50 text-white font-semibold rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <span className="text-gray-400">Follow me:</span>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'twitter'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-purple-500/30 text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                    aria-label={social}
                  >
                    <span className="capitalize text-xs font-medium">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Animated Card */}
          <div className="relative lg:flex justify-center hidden">
            <div className="relative w-full max-w-md">
              {/* Floating Card */}
              <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 animate-float">
                {/* Profile Image Placeholder */}
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                    JD
                  </div>
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-border animate-gradient-rotate"></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { label: 'Projects', value: '50+' },
                    { label: 'Clients', value: '30+' },
                    { label: 'Awards', value: '10+' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-gray-400 text-sm">Scroll Down</span>
            <svg
              className="w-6 h-6 text-purple-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .animate-gradient-rotate {
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}