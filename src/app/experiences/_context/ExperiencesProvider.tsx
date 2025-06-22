"use client";

import React, { createContext, useContext, useRef } from "react";

type ContextType = {
  nextView: React.RefObject<HTMLDivElement | null>;
};

const ExperiencesContext = createContext<ContextType | undefined>(undefined);

export const ExperiencesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const nextView = useRef<HTMLDivElement | null>(null);

  return (
    <ExperiencesContext.Provider value={{ nextView }}>
      {children}
    </ExperiencesContext.Provider>
  );
};

export const useExperiencesContext = () => {
  const context = useContext(ExperiencesContext);
  if (!context)
    throw new Error(
      "useExperienceScroll must be used within ExperienceScrollProvider"
    );
  return context;
};
