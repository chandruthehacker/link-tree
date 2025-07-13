
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface LinkCardProps {
  title: string;
  url: string;
  icon: LucideIcon;
  color: string;
  description: string;
  download?: boolean;
  isDark: boolean;
}

const LinkCard: React.FC<LinkCardProps> = ({ 
  title, 
  url, 
  icon: Icon, 
  color, 
  description, 
  download = false,
  isDark 
}) => {
  const handleClick = () => {
    if (download) {
      // Handle download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'resume.pdf';
      link.click();
    } else if (url.startsWith('#')) {
      // Handle internal navigation
      console.log(`Navigate to ${url}`);
    } else {
      // Handle external links
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -5,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className={`
        relative overflow-hidden rounded-xl p-4 min-h-[60px] md:min-h-[68px]
        ${isDark 
          ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/50' 
          : 'bg-white/60 hover:bg-white/80 border border-white/50'
        }
        backdrop-blur-lg shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-out
        group-hover:border-transparent
        touch-manipulation
      `}>
        {/* Gradient overlay that appears on hover */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-10 
          transition-opacity duration-300 bg-gradient-to-r ${color}
        `} />
        
        {/* Glowing border effect */}
        <div className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
          transition-opacity duration-300 bg-gradient-to-r ${color} p-[1px]
        `}>
          <div className={`
            w-full h-full rounded-xl
            ${isDark ? 'bg-gray-800' : 'bg-white'}
          `} />
        </div>

        <div className="relative z-10 flex items-center space-x-3">
          {/* Icon with animated background */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`
              flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center
              bg-gradient-to-r ${color} shadow-lg
              group-hover:shadow-xl transition-shadow duration-300
            `}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className={`
              font-semibold text-lg md:text-xl mb-0.5 
              ${isDark ? 'text-white group-hover:text-white' : 'text-gray-900 group-hover:text-gray-900'}
              transition-colors duration-300
            `}>
              {title}
            </h3>
            <p className={`
              text-xs md:text-sm
              ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-500'}
              transition-colors duration-300
            `}>
              {description}
            </p>
          </div>

          {/* Arrow indicator */}
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`
              flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
              ${isDark ? 'bg-gray-700/50 group-hover:bg-gray-600/50' : 'bg-gray-100 group-hover:bg-gray-200'}
              transition-colors duration-300
            `}
          >
            <svg 
              className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>

        {/* Enhanced floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-60`}
              style={{
                left: `${20 + i * 25}%`,
                top: `${30 + i * 20}%`,
              } as React.CSSProperties}
              animate={{
                y: [-8, -20, -8],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LinkCard;
