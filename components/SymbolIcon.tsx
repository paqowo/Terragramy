import React from 'react';
import { TerragramCard } from '../types';

export const SymbolIcon = ({ card, className = "w-full h-full" }: { card: TerragramCard, className?: string }) => {
  if (card.image) {
    return (
      <img
        src={card.image}
        alt={card.title}
        className={`${className} object-contain`}
        style={{ display: 'block', margin: 'auto' }}
        onError={(e) => {
          console.warn(`Could not load image: ${card.image}`);
        }}
      />
    );
  }

  return (
    <div className="flex items-center justify-center font-cinzel text-5xl font-bold" style={{ color: card.symbolColor }}>
      {card.title.charAt(0)}
    </div>
  );
};
