
import React from 'react';
import { PROVIDER_LOGO } from '../constants';

const CardBack: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1a1a2e] border-4 border-[#D4AF37] rounded-3xl flex items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute border border-[#D4AF37] rounded-full" 
            style={{
              width: `${(i + 1) * 80}px`,
              height: `${(i + 1) * 80}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <div className="z-10 bg-white p-6 rounded-2xl shadow-2xl border border-[#D4AF37]/30 transform hover:scale-105 transition-transform duration-500 max-w-[80%]">
        {PROVIDER_LOGO}
      </div>
    </div>
  );
};

export default CardBack;
