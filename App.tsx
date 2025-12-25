import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CARDS } from './constants';
import { TerragramCard, AppMode } from './types';
import HomeView from './components/HomeView';
import DrawView from './components/DrawView';
import GalleryView from './components/GalleryView';
import TerragramCardView from './components/TerragramCardView';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('home');
  const [currentCard, setCurrentCard] = useState<TerragramCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const flipBackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flipForwardTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const drawCard = useCallback(() => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setShowDetail(false);
    setCurrentCard(null);

    if (flipBackTimeoutRef.current) {
      clearTimeout(flipBackTimeoutRef.current);
    }
    if (flipForwardTimeoutRef.current) {
      clearTimeout(flipForwardTimeoutRef.current);
      flipForwardTimeoutRef.current = null;
    }

    flipBackTimeoutRef.current = window.setTimeout(() => {
      let newCard: TerragramCard;

      if (CARDS.length > 1) {
        do {
          const randomIndex = Math.floor(Math.random() * CARDS.length);
          newCard = CARDS[randomIndex];
        } while (currentCard && newCard.id === currentCard.id);
      } else {
        newCard = CARDS[0];
      }

      setCurrentCard(newCard);
      
      flipForwardTimeoutRef.current = window.setTimeout(() => {
        setShowDetail(true);
        setIsFlipping(false);
      }, 2000);
    }, 800);
  }, [isFlipping, currentCard]);

  useEffect(() => {
    return () => {
      if (flipBackTimeoutRef.current) {
        clearTimeout(flipBackTimeoutRef.current);
      }
      if (flipForwardTimeoutRef.current) {
        clearTimeout(flipForwardTimeoutRef.current);
      }
    };
  }, []);

  const selectCard = (card: TerragramCard) => {
    setCurrentCard(card);
    setShowDetail(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      {mode === 'home' && <HomeView onSetMode={setMode} />}

      {mode === 'draw' && (
        <DrawView
          onBack={() => {
            setMode('home');
            setCurrentCard(null);
          }}
          currentCard={currentCard}
          isFlipping={isFlipping}
          onDraw={drawCard}
          cardRef={cardRef}
        />
      )}

      {mode === 'gallery' && (
        <GalleryView
          onBack={() => setMode('home')}
          onSelectCard={selectCard}
          cards={CARDS}
        />
      )}

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
