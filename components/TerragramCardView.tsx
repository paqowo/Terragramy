import React from 'react';
import { TerragramCard } from '../types';
import { SymbolIcon } from './SymbolIcon';
import QuestionLabel from './QuestionLabel';

interface Props {
  card: TerragramCard;
  onClose: () => void;
}

const TerragramCardView: React.FC<Props> = ({ card, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-500">
      <div className="relative w-full max-w-2xl bg-[#fdfaf5] rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border-[6px] border-[#D4AF37] max-h-[95vh] flex flex-col">
        
        {/* Decorative Header Bar based on Chakra Color */}
        <div className="h-4 w-full shrink-0" style={{ backgroundColor: card.symbolColor }} />

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-[#D4AF37] hover:text-[#b08d2b] transition-all hover:rotate-90 duration-300 p-2 z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex-grow overflow-y-auto p-8 md:p-14 text-[#2c2c2c] custom-scrollbar">
          
          {/* Affirmation at the VERY TOP as requested */}
          <div className="mb-10 text-center animate-in fade-in slide-in-from-top duration-700">
             <h3 className="font-cinzel font-bold mb-2 uppercase text-sm md:text-base tracking-[0.5em] opacity-80" style={{ color: card.symbolColor }}>Afirmace</h3>
             <p className="text-2xl md:text-3xl font-cinzel text-gray-900 leading-tight px-4 italic font-bold">
               {card.affirmation}
             </p>
          </div>

          <div className="flex flex-col items-center mb-10">
            {/* Symbol Original State - Large Display */}
            <div className="w-56 h-56 md:w-80 md:h-80 mb-8 p-4 rounded-[3rem] bg-white shadow-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
               <SymbolIcon card={card} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-3 uppercase tracking-widest text-center" style={{ color: card.symbolColor }}>
              {card.title}
            </h1>
            <div className="h-0.5 w-24 mb-4" style={{ backgroundColor: card.symbolColor + '66' }}></div>
            <p className="text-xl italic text-gray-500 font-lora text-center">/ {card.subtitle} /</p>
          </div>

          <div className="space-y-8 text-lg leading-relaxed font-lora">
            <div className="first-letter:text-5xl first-letter:font-cinzel first-letter:float-left first-letter:mr-3 text-justify">
              {card.description}
            </div>
            
            <div className="bg-[#f0ece4] p-8 rounded-2xl border-l-8 relative overflow-hidden shadow-inner" style={{ borderLeftColor: card.symbolColor }}>
              <div className="absolute top-0 right-0 p-2 opacity-5 font-cinzel text-6xl pointer-events-none uppercase">Stín</div>
              <h3 className="font-cinzel font-bold mb-3 uppercase text-sm tracking-[0.3em]" style={{ color: card.symbolColor }}>Stínový aspekt</h3>
              <p className="italic text-gray-700 leading-relaxed">{card.shadow}</p>
            </div>

            {card.question && (
              <div className="p-8 text-center border-y border-gray-200 bg-white/40 rounded-xl">
                <QuestionLabel className="mb-4 text-gray-700 opacity-90">
                  Otázka k zamyšlení
                </QuestionLabel>
                <p className="font-semibold text-gray-800 italic text-xl">"{card.question}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Footer Bar based on Chakra Color */}
        <div className="h-4 w-full shrink-0" style={{ backgroundColor: card.symbolColor }} />
      </div>
    </div>
  );
};

export default TerragramCardView;
