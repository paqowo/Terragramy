import React from 'react';
import { TerragramCard } from '../types';

export const SymbolIcon = ({ card, className = "w-full h-full" }: { card: TerragramCard, className?: string }) => {
  const imagePath = `/${card.id}.webp`;

  return (
    <img
      src={imagePath}
      alt={card.title}
      className={`${className} object-contain`}
      style={{ display: 'block', margin: 'auto' }}
      onError={(e) => {
        console.warn(`Could not load image: ${imagePath}`);
        // Optionally, display a fallback or hide the element
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
};
