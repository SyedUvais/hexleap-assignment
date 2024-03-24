"use client"
import React, { createContext, useContext, useState } from "react";

interface ScreenModeContextType {
  screenMode: string;
  setScreenMode: React.Dispatch<React.SetStateAction<string>>;
}

const screenModeContext = createContext<ScreenModeContextType | undefined>(undefined);

export const ScreenModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [screenMode, setScreenMode] = useState('Dark');

  return (
    <screenModeContext.Provider value={{ screenMode, setScreenMode }}>
      {children}
    </screenModeContext.Provider>
  );
};

export const useModeState = () => {
  const context = useContext(screenModeContext);
  if (context === undefined) {
    throw new Error("useModeState must be used within a ScreenModeProvider");
  }
  return context;
};
