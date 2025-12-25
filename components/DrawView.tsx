import React from 'react';
import { TerragramCard } from '../types';
import { SymbolIcon } from './SymbolIcon';
import CardBack from './CardBack';

interface DrawViewProps {
  onBack: () => void;
  currentCard: TerragramCard | null;
  isFlipping: boolean;
  onDraw: () => void;
  cardRef: React.RefObject<HTMLDivElement>;
}

const DrawView: React.FC<DrawViewProps> = ({ onBack, currentCard, isFlipping, onDraw, cardRef }) => (
  <div className="flex flex-col items-center animate-in slide-in-from-right duration-500 w-full max-w-md">
    <button 
      onClick={onBack}
      className="mb-8 text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-70 p-2 rounded-lg"
    >
      ← Zpět na úvod
    </button>

    <div className="card-perspective w-72 h-[450px] md:w-80 md:h-[500px] cursor-pointer group mb-12" onClick={onDraw}>
      <div ref={cardRef} className={`card-inner w-full h-full relative ${currentCard ? 'card-flipped' : ''} shadow-2xl`}>
        <div className="card-face card-back absolute inset-0">
          <CardBack />
        </div>
        <div 
          className="card-face card-front absolute inset-0 border-4 rounded-3xl flex flex-col items-center justify-center p-6 text-center"
          style={currentCard ? {
            borderColor: currentCard.symbolColor,
            backgroundColor: currentCard.symbolColor + '1A',
          } : {
            borderColor: '#D4AF37',
            backgroundColor: 'white'
          }}
        >
          {currentCard && (
            <>
              <div className="w-full h-3/4 flex items-center justify-center p-4">
                 <SymbolIcon card={currentCard} />
              </div>
              <h3 className="text-2xl font-cinzel mt-4 font-bold" style={{ color: currentCard.symbolColor }}>{currentCard.title}</h3>
            </>
          )}
        </div>
      </div>
    </div>

    <button 
      onClick={onDraw}
      disabled={isFlipping}
      className="w-full py-4 rounded-xl font-cinzel text-xl tracking-widest bg-[#D4AF37] hover:bg-[#b08d2b] text-white shadow-xl transition-all disabled:opacity-50"
    >
      {isFlipping ? 'MÍCHÁM...' : 'TAHAT ZNOVU'}
    </button>
  </div>
);

export default DrawView;