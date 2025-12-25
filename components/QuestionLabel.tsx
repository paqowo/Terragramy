import React from 'react';

type QuestionLabelProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const baseClasses = 'font-cinzel uppercase text-[0.75rem] md:text-[0.85rem] font-semibold';
const baseStyle: React.CSSProperties = {
  fontSize: 'clamp(0.75rem, 1.35vw + 0.35rem, 0.95rem)',
  lineHeight: 1.35,
  letterSpacing: '0.45em',
  color: '#3f3f3f',
};

const QuestionLabel: React.FC<QuestionLabelProps> = ({ children, className = '', style }) => (
  <h3
    className={`${baseClasses} ${className}`.trim()}
    style={{ ...baseStyle, ...style }}
  >
    {children}
  </h3>
);

export default QuestionLabel;
