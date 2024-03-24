"use client";
import React, {useRef} from 'react';
<style>
@import url({`https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`})
</style>
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import SpotlightCard from './spotlightCard';
import { collectionData } from './collectionData';
import { useModeState } from '../Context/screenModeContext';
const SpotlightComp: React.FC = () => {

    const {screenMode} = useModeState();
    const scrollContainerRef = useRef(null);

    const scrollLeft = (): void => {
        if (scrollContainerRef.current) {
            const container: HTMLElement = scrollContainerRef.current;
            const scrollAmount: number = container.clientWidth;
            console.log("syed client width", scrollAmount);
            container.scrollTo({
                left: container.scrollLeft - scrollAmount,
                behavior: "smooth",
            });
        }
    };


  const scrollRight = (): void => {
    if (scrollContainerRef.current) {
      const container: HTMLElement = scrollContainerRef.current;
      const scrollAmount: number = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

    return (
        <section className={`w-full px-2 sm:px-4 xl:px-16 pt-8 pb-6 mt-10 ${screenMode === 'Light' ? 'bg-[#F9F8FF]' : 'bg-[#18282A]'} `}>
            <section className='w-full'>
                <div className='px-2 sm:px-4 md:px-20 space-y-4'>
                    <h1 className={`font-bold text-4xl md:text-[44px] xl:text-[50px] text-center ${screenMode === 'Light' ? 'text-black' : 'text-white'}`} style={{fontFamily: "Poppins"}}>Collection Spotlight</h1>
                    <p className={`text-sm 2xl:text-base font-normal text-center ${screenMode === 'Light' ? 'text-black' : 'text-white'}`}>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                </div>
                <section className='flex items-center'>
                    <span onClick={scrollLeft} className='px-2 py-3 text-[#2C9CF0] hover:bg-slate-600 hover:text-white duration-300 border border-solid border-[#2C9CF0]'>
                        <FaChevronLeft className="text-lg" />
                    </span>
                    <section ref={scrollContainerRef} className='space-x-6 sm:space-x-8 xl:space-x-32 mt-16 w-full px-2 sm:px-4 xl:px-24 whitespace-nowrap overflow-x-auto no-scrollbar'
                    style={{ overflowX: 'scroll' }}
                    >
                        {collectionData?.map((curItem, index, array) => (
                            <SpotlightCard
                            key={index}
                            image={curItem.image}
                            heading={curItem.heading}
                            event_time={curItem.event_time}
                            event_venue={curItem.event_venue}
                            button_text={curItem.button_text}
                            />
                        ))}
                    </section>
                    <span onClick={scrollRight} className='px-2 py-3 text-[#2C9CF0] hover:bg-slate-600 hover:text-white duration-300 border border-solid border-[#2C9CF0]'>
                        <FaChevronRight className="text-lg" />
                    </span>
                </section>
            </section>
        </section>
    )
};
export default SpotlightComp;
