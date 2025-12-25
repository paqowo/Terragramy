import React from 'react';
import { TerragramCard, AppMode } from '../types';
import { SymbolIcon } from './SymbolIcon';

interface GalleryViewProps {
  onBack: () => void;
  onSelectCard: (card: TerragramCard) => void;
  cards: TerragramCard[];
}

const GalleryView: React.FC<GalleryViewProps> = ({ onBack, onSelectCard, cards }) => (
  <div className="w-full max-w-6xl animate-in slide-in-from-left duration-500 px-4 pb-12">
    <div className="flex justify-between items-center mb-12 border-b border-[#D4AF37]/30 pb-6">
      <button 
        onClick={onBack}
        className="text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-70 p-2 rounded-lg"
      >
        ← Zpět
      </button>
      <h2 className="text-2xl font-cinzel text-[#D4AF37] tracking-[0.2em] uppercase font-bold">Galerie Terragramů</h2>
      <div className="w-16"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((card) => (
        <div 
          key={card.id}
          onClick={() => onSelectCard(card)}
          className="group cursor-pointer flex flex-col items-center transition-all duration-300 hover:scale-105"
        >
          <div 
            className="w-full aspect-square border-4 rounded-[2rem] mb-3 flex items-center justify-center p-4 shadow-xl overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            style={{
              borderColor: card.symbolColor,
              backgroundColor: card.symbolColor + '1A',
            }}
          >
            <SymbolIcon card={card} />
          </div>
          <span 
            className="font-cinzel text-lg tracking-widest uppercase text-center font-bold"
            style={{ color: card.symbolColor }}
          >
            {card.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default GalleryView;