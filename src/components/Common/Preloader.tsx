// components/Preloader.tsx
'use client';

import { useState, useEffect } from 'react';
import { Code2, Sparkles } from 'lucide-react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Simulate loading time with random delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
      
      // Hide welcome message after 1.5 seconds
      setTimeout(() => {
        setShowWelcome(false);
      }, 1500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Don't render anything after loading completes
  if (!isLoading && !showWelcome) return null;

  return (
    <>
      {/* Main Preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-[#0d0d1f] z-50 flex flex-col items-center justify-center">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-ping"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo/Icon Animation */}
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 flex items-center justify-center animate-spin-slow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 border border-white/10 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-white/80" />
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-orbit-1">
                <Sparkles className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-orbit-2">
                <Sparkles className="w-3 h-3 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Loading Text */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                Loading Portfolio
              </h2>
              <p className="text-gray-400">Preparing exceptional experiences</p>
            </div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80 mb-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Loading Dots */}
            <div className="flex space-x-2 mt-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-sm text-gray-500">
              Crafting digital experiences with modern technologies
            </p>
          </div>
        </div>
      )}

      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed inset-0 bg-[#0d0d1f] z-50 flex items-center justify-center animate-fade-out">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
              <span className="block">Welcome to</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-400 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Let&apos;s explore together
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;