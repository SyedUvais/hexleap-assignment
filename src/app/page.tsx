"use client";
import React, {useState} from 'react';
import SpotlightComp from './components/spotlightComp';
import SportsComp from './components/sportsComp';
import { useModeState } from './Context/screenModeContext';
export default function Home() {

  const {screenMode} = useModeState();

  return (
    <section className={`py-6 px-[5vw] ${screenMode === 'Light' ? 'bg-[#F7F7F8]' : 'bg-[#292B32]'}`}    >
      <SportsComp />
      <SpotlightComp />
    </section>
  );
};
