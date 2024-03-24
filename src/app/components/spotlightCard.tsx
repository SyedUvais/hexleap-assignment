import React from 'react';
import Image from 'next/image';
import { useModeState } from '../Context/screenModeContext';

interface SpotlightCardProps {
    key: number;
    image: string;
    heading: string;
    event_time: string;
    event_venue: string;
    button_text: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({image, heading, event_time, event_venue, button_text}) =>
{
    const {screenMode} = useModeState();

    return (
        <>
        <section className={`w-full sm:w-[40%] md:w-[32%] xl:w-[25%] inline-block p-1 sm:p-2 shadow-lg border border-solid ${screenMode === 'Light' ? 'bg-white' : 'bg-[#3B3E47]'} ${screenMode === 'Light' ? 'border-[#dfe1e4]' : 'border-[#818A97]'}`}>
            <section className="">
                <Image src={image} width={300} height={400} alt='img1' className="w-full" />
            </section>
            <div className='px-1 xl:px-4 space-y-2 relative'>
                <div className={`w-5 h-5 rounded-full absolute -top-2 -left-[18px] ${screenMode === 'Light' ? 'bg-[#F9F8FF]' : 'bg-[#18282A]'}`}/>
                <div className='w-full justify-center'>
                    <span className={`border border-dashed ${screenMode === 'Light' ? 'border-[#A9ACB2]' : 'border-[#818A97]'} w-[86%] absolute top-0`}></span>
                </div>
                <div className={`w-5 h-5 rounded-full absolute -top-4 -right-[18px] ${screenMode === 'Light' ? 'bg-[#F9F8FF]' : 'bg-[#18282A]'}`}/>
                <div className='w-full h-[2px]' style={{visibility: 'hidden'}}>{`" "`}</div>
                <h6 className={`text-[17px] 2xl:text-[19px] font-medium text-center ${screenMode === 'Light' ? 'text-black' : 'text-white'}`}>{heading}</h6>
                <p className={`font-normal text-sm 2xl:text-base text-center ${screenMode === 'Light' ? 'text-black' : 'text-white'}`} style={{fontFamily: "Poppins"}}>{event_time}</p>
                <p className={`font-normal text-sm 2xl:text-base text-center ${screenMode === 'Light' ? 'text-[#525965]' : 'text-[#dfdfdf]'}`}><span className='text-wrap'>{event_venue}</span></p>
                <button className='bg-[#1d1d1f] text-white text-[12.73px] 2xl:text-[14.73px] font-medium w-full h-9'>{button_text}</button>
            </div>
        </section>
        </>
    )
};
export default SpotlightCard;