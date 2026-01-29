
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Blue Pill/Orbit Shape */}
      <path 
        d="M75 50C75 63.8071 63.8071 75 50 75C36.1929 75 25 63.8071 25 50M75 50C75 36.1929 63.8071 25 50 25M75 50C88.8071 50 100 61.1929 100 75C100 88.8071 88.8071 100 75 100C61.1929 100 50 88.8071 50 75" 
        fill="#0EA5E9" 
        className="opacity-90"
      />
      {/* Green Heart Shape - Simplified representation based on image */}
      <path 
        d="M50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50M50 25C63.8071 25 75 36.1929 75 50C75 63.8071 63.8071 75 50 75M50 25C36.1929 25 25 36.1929 25 50" 
        fill="#22C55E" 
      />
      {/* Overlay/Interlock highlight */}
      <path 
        d="M35 30C35 25 40 20 45 20" 
        stroke="white" 
        strokeWidth="4" 
        strokeLinecap="round" 
        className="opacity-40"
      />
    </svg>
  );
};

export default Logo;
