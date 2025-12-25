import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Routes,
  Route,
  matchPath,
  useLocation,
  useNavigate,
  type Location,
} from 'react-router-dom';
import { CARDS } from './constants';
import { TerragramCard } from './types';
import HomeView from './components/HomeView';
import DrawView from './components/DrawView';
import GalleryView from './components/GalleryView';
import TerragramCardView from './components/TerragramCardView';
import FooterNote from './components/FooterNote';

type LocationState = {
  backgroundLocation?: Location;
};

const App: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<TerragramCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const flipBackTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const flipForwardTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LocationState | undefined;

  const detailMatch = matchPath('/card/:id', location.pathname);
  const detailCardId = detailMatch?.params?.id ?? null;
  const detailCard = detailCardId ? CARDS.find((card) => card.id === detailCardId) ?? null : null;
  const detailBackgroundLocation = locationState?.backgroundLocation;

  const fallbackHomeLocation: Location = {
    ...location,
    pathname: '/',
    state: undefined,
  };

  const routesLocation: Location = detailMatch && !detailBackgroundLocation
    ? fallbackHomeLocation
    : detailBackgroundLocation || location;

  const drawCard = useCallback(() => {
    if (isFlipping) return;

    setIsFlipping(true);
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
        navigate(`/card/${newCard.id}`, { state: { backgroundLocation: location } });
        setIsFlipping(false);
      }, 2000);
    }, 800);
  }, [currentCard, isFlipping, location, navigate]);

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

  const selectCard = useCallback(
    (card: TerragramCard) => {
      setCurrentCard(card);
      navigate(`/card/${card.id}`, { state: { backgroundLocation: location } });
    },
    [location, navigate],
  );

  const handleDrawBack = () => {
    setCurrentCard(null);
    navigate('/');
  };

  const handleGalleryBack = () => {
    navigate('/');
  };

  const handleCloseDetail = useCallback(() => {
    if (detailBackgroundLocation) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  }, [detailBackgroundLocation, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <Routes location={routesLocation}>
        <Route path="/" element={<HomeView />} />
        <Route
          path="/draw"
          element={
            <DrawView
              onBack={handleDrawBack}
              currentCard={currentCard}
              isFlipping={isFlipping}
              onDraw={drawCard}
              cardRef={cardRef}
            />
          }
        />
        <Route
          path="/gallery"
          element={
            <GalleryView
              onBack={handleGalleryBack}
              onSelectCard={selectCard}
              cards={CARDS}
            />
          }
        />
        <Route path="*" element={<HomeView />} />
      </Routes>

      {detailCard && (
        <TerragramCardView card={detailCard} onClose={handleCloseDetail} />
      )}

      <FooterNote />
    </div>
  );
};

export default App;
