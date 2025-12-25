import React from 'react';
import { PROVIDER_LOGO } from '../constants';
import { AppMode } from '../types';

interface HomeViewProps {
  onSetMode: (mode: AppMode) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onSetMode }) => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in zoom-in duration-700 px-4">
    <div className="bg-white p-6 rounded-[3rem] shadow-2xl mb-12 max-w-[16rem] md:max-w-sm flex items-center justify-center">
      {PROVIDER_LOGO}
    </div>
    
    <h1 className="text-4xl md:text-6xl font-cinzel text-[#D4AF37] mb-12 text-center uppercase tracking-[0.2em] px-4">
      Terragramy
    </h1>

    <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl px-6">
      <button 
        onClick={() => onSetMode('draw')}
        className="group relative overflow-hidden w-full text-center bg-gradient-to-b from-[#d4af37] to-[#aa8913] px-8 py-10 rounded-2xl text-[#1a1a1a] font-cinzel transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
      >
        <span className="relative z-10 font-black tracking-tight uppercase text-2xl md:text-3xl">KARTA DNE</span>
        <p className="relative z-10 text-sm mt-2 font-semibold text-black/70 font-lora lowercase italic">náhodný výběr symbolu</p>
      </button>

      <button 
        onClick={() => onSetMode('gallery')}
        className="group relative overflow-hidden w-full text-center bg-white/5 border border-[#D4AF37]/30 px-8 py-10 rounded-2xl text-[#D4AF37] font-cinzel transition-all hover:-translate-y-1 hover:bg-white/10"
      >
        <span className="relative z-10 font-black tracking-tight uppercase text-2xl md:text-3xl">GALERIE</span>
        <p className="relative z-10 text-sm mt-2 font-semibold opacity-80 font-lora lowercase italic">všechny Terragramy</p>
      </button>
    </div>
  </div>
);

export default HomeView;
