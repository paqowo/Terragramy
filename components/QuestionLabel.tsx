import React from 'react';

type QuestionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

const baseClasses =
  'font-cinzel uppercase tracking-[0.4em] leading-tight text-gray-600 text-sm md:text-base opacity-80';

const QuestionLabel: React.FC<QuestionLabelProps> = ({ children, className = '' }) => (
  <h3 className={`${baseClasses} ${className}`.trim()}>{children}</h3>
);

export default QuestionLabel;
