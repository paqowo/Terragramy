import React, { useState, useCallback } from 'react';
import { CARDS, PROVIDER_LOGO } from './constants';
import { SymbolIcon } from './components/SymbolIcon';
import { TerragramCard, AppMode } from './types';
import TerragramCardView from './components/TerragramCardView';
import CardBack from './components/CardBack';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('home');
  const [currentCard, setCurrentCard] = useState<TerragramCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const drawCard = useCallback(() => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    // Immediately hide details and set card to null to trigger flip-back animation.
    setShowDetail(false);
    setCurrentCard(null);

    // Wait for the flip-back animation to complete (0.8s) before proceeding.
    setTimeout(() => {
      let newCard: TerragramCard;

      // Select a new card, ensuring it's not the same as the one that was just visible.
      // The `currentCard` in the closure is the card from the previous state.
      if (CARDS.length > 1) {
        do {
          const randomIndex = Math.floor(Math.random() * CARDS.length);
          newCard = CARDS[randomIndex];
        } while (currentCard && newCard.id === currentCard.id);
      } else {
        newCard = CARDS[0];
      }

      // Set the new card, which triggers the flip-forward animation.
      setCurrentCard(newCard);
      
      // After the flip-forward animation (0.8s), wait a moment before
      // showing the detail view and re-enabling the draw button.
      setTimeout(() => {
        setShowDetail(true);
        setIsFlipping(false);
      }, 2000); // 800ms for flip + 1200ms for contemplation.
    }, 800); // This must match the CSS transition duration.
  }, [isFlipping, currentCard]);

  const selectCard = (card: TerragramCard) => {
    setCurrentCard(card);
    setShowDetail(true);
  };

  const renderHome = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] animate-in fade-in zoom-in duration-700 px-4">
      <div className="bg-white p-6 rounded-[3rem] shadow-2xl mb-12 max-w-[16rem] md:max-w-sm flex items-center justify-center">
        {PROVIDER_LOGO}
      </div>
      
      <h1 className="text-4xl md:text-6xl font-cinzel text-[#D4AF37] mb-12 text-center uppercase tracking-[0.2em] px-4">
        Terragramy
      </h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl px-6">
        <button 
          onClick={() => setMode('draw')}
          className="group relative overflow-hidden w-full text-center bg-gradient-to-b from-[#d4af37] to-[#aa8913] px-8 py-10 rounded-2xl text-[#1a1a1a] font-cinzel transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        >
          <span className="relative z-10 font-black tracking-tight uppercase text-2xl md:text-3xl">KARTA DNE</span>
          <p className="relative z-10 text-sm mt-2 font-semibold text-black/70 font-lora lowercase italic">náhodný výběr symbolu</p>
        </button>

        <button 
          onClick={() => setMode('gallery')}
          className="group relative overflow-hidden w-full text-center bg-white/5 border border-[#D4AF37]/30 px-8 py-10 rounded-2xl text-[#D4AF37] font-cinzel transition-all hover:-translate-y-1 hover:bg-white/10"
        >
          <span className="relative z-10 font-black tracking-tight uppercase text-2xl md:text-3xl">GALERIE</span>
          <p className="relative z-10 text-sm mt-2 font-semibold opacity-80 font-lora lowercase italic">všechny Terragramy</p>
        </button>
      </div>
    </div>
  );

  const renderDraw = () => (
    <div className="flex flex-col items-center animate-in slide-in-from-right duration-500 w-full max-w-md">
      <button 
        onClick={() => { setMode('home'); setCurrentCard(null); }}
        className="mb-8 text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-70 p-2 rounded-lg"
      >
        ← Zpět na úvod
      </button>

      <div className="card-perspective w-72 h-[450px] md:w-80 md:h-[500px] cursor-pointer group mb-12" onClick={drawCard}>
        <div className={`card-inner w-full h-full relative ${currentCard ? 'card-flipped' : ''} shadow-2xl`}>
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
        onClick={drawCard}
        disabled={isFlipping}
        className="w-full py-4 rounded-xl font-cinzel text-xl tracking-widest bg-[#D4AF37] hover:bg-[#b08d2b] text-white shadow-xl transition-all disabled:opacity-50"
      >
        {isFlipping ? 'MÍCHÁM...' : 'TAHAT ZNOVU'}
      </button>
    </div>
  );

  const renderGallery = () => (
    <div className="w-full max-w-6xl animate-in slide-in-from-left duration-500 px-4 pb-12">
      <div className="flex justify-between items-center mb-12 border-b border-[#D4AF37]/30 pb-6">
        <button 
          onClick={() => setMode('home')}
          className="text-[#D4AF37] font-cinzel text-sm uppercase tracking-widest flex items-center gap-2 hover:opacity-70 p-2 rounded-lg"
        >
          ← Zpět
        </button>
        <h2 className="text-2xl font-cinzel text-[#D4AF37] tracking-[0.2em] uppercase font-bold">Galerie Terragramů</h2>
        <div className="w-16"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {CARDS.map((card) => (
          <div 
            key={card.id}
            onClick={() => selectCard(card)}
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

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      {mode === 'home' && renderHome()}
      {mode === 'draw' && renderDraw()}
      {mode === 'gallery' && renderGallery()}

      {showDetail && currentCard && (
        <TerragramCardView card={currentCard} onClose={() => setShowDetail(false)} />
      )}

      <footer className="mt-auto pt-12 text-[#D4AF37] text-[10px] font-cinzel uppercase tracking-[0.3em] opacity-20">
        © SVOBODNÁ SPOLUPRÁCE | Evoluční informační portál
      </footer>
    </div>
  );
};

export default App;