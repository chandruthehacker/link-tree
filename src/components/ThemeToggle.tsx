
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsDark(!isDark)}
        className={`
          w-14 h-14 rounded-full flex items-center justify-center
          ${isDark 
            ? 'bg-gray-800/80 hover:bg-gray-700/80 text-yellow-400' 
            : 'bg-white/80 hover:bg-white/90 text-gray-700'
          }
          backdrop-blur-lg shadow-lg hover:shadow-xl
          border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}
          transition-all duration-300 ease-out
        `}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isDark ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ThemeToggle;
