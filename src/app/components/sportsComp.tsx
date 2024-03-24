"use client";
import React, {useState} from 'react';
<style>
@import url({`https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`})
</style>
import { playersData } from './playersData';
import PlayerCard from './playerCard';
import { useModeState } from '../Context/screenModeContext';

const SportsComp: React.FC = () =>
{
    const [dataArray, setDataArray] = useState(playersData);
    const {screenMode, setScreenMode} = useModeState();

    const loadmoredata = () =>
    {
        setDataArray([...dataArray, ...playersData]);
    }

    const handleModeChange = () =>
    {
      screenMode === 'Light' ? setScreenMode('Dark') : setScreenMode('Light');
    }

    return (
        <>
        <section className="space-y-6 w-full">
        <div className='flex justify-between'>
          <h3 className={`text-2xl 2xl:text-[26px] font-bold border-b-2 border-solid border-[#738FFF] inline pb-1 ${screenMode === 'Light' ? 'text-black' : 'text-white'}`} style={{fontFamily: "Poppins"}}>Sports</h3>
          <button onClick={handleModeChange} className={`px-4 py-2 rounded-md text-sm 2xl:text-base font-semibold ${screenMode === 'Light' ? 'bg-[#292B32]' : 'bg-white'}  ${screenMode === 'Light' ? 'text-white' : 'text-[#292B32]'}`}> {screenMode === 'Dark' ? 'Light' : 'Dark'} </button>
        </div>
        <section className="flex w-full lg:gap-x-20 xl:gap-x-4 flex-wrap gap-6 xl:justify-between">
          {dataArray?.map((curItem, index, array) => (
          <PlayerCard
          key={index}
          srNum={curItem.key}
          image={curItem.image}
          heading={curItem.heading}
          total_events={curItem.total_events}
          sport_name={curItem.sport_name}
          description={curItem.description}
          />
          ))}
        </section>
        <div className='flex justify-center pt-12'>
          <button onClick={loadmoredata} className='font-semibold text-sm 2xl:text-base bg-[#2C9CF0] px-[30px] py-[10px] text-white'>See More</button>
        </div>
      </section>
        </>
    )
};
export default SportsComp;