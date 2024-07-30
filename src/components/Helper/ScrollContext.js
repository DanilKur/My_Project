import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const cardsRef = useRef(null);

  const scrollToCards = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ cardsRef, scrollToCards }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
