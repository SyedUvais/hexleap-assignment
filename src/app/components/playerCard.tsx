import React from 'react';
import Image from 'next/image';
import { useModeState } from '../Context/screenModeContext';

interface PlayerCardProps {
    srNum: number;
    image: string;
    heading: string;
    total_events: string;
    sport_name: string;
    description?: string;
  }

const PlayerCard: React.FC<PlayerCardProps> = ( {srNum, image, heading, total_events, sport_name, description} ) => {
    console.log("key on player card", srNum);
    const {screenMode} = useModeState();

    return (
          <>
          {srNum != 5 ? <section className={`w-full sm:w-auto xl:w-[18%] p-2 space-y-2 shadow-md ${screenMode === 'Light' ? 'bg-white' : 'bg-[#3B3E47]'}`}>
            <Image src={image} width={300} height={500} alt='img1' className="w-full" />
            <h6 className={`text-[17px] 2xl:text-[19px] font-medium ${screenMode === 'Light' ? 'text-black' : 'text-white'}`}>{heading}</h6>
            <div className={`${screenMode === 'Light' ? 'bg-[#F7F7F8]' : 'bg-[#292B32]'} flex gap-x-8 py-2 px-2`}>
              <div>
                <p className={`text-xs 2xl:text-sm font-normal ${screenMode === 'Light' ? 'text-[#525965]' : 'text-[#dfdfdf]'}`}>Total Events</p>
                <p className={`font-medium text-sm 2xl:text-base ${screenMode === 'Light' ? 'text-black' : 'text-white'} `}>{total_events}</p>
              </div>
              <div>
                <p className={`text-xs 2xl:text-sm font-normal ${screenMode === 'Light' ? 'text-[#525965]' : 'text-[#dfdfdf]'}`}>Sport</p>
                <p className={`font-medium text-sm 2xl:text-base ${screenMode === 'Light' ? 'text-black' : 'text-white'}`}>{sport_name}</p>
              </div>
            </div>
          </section>
          :
          <aside className={`w-full sm:w-[38%] md:w-[30%] lg:w-[25%] xl:w-[20%] p-2 relative origin-top-right shadow-md ${screenMode === 'Light' ? 'bg-white' : 'bg-[#3B3E47]'}`}>
            <span className='text-[12.8px] 2xl:text-[14.8px] font-bold bg-black px-3 py-1 text-white absolute right-2 top-2'>AD</span>
            <Image src={image} width={300} height={500} alt='img1' className="w-full" />
                <div className='border-[0.2px] border-solid border-[#006555] p-2 pb-10 2xl:pb-16' >
                    <h6 className={`text-[17px] 2xl:text-[19px] font-medium ${screenMode === 'Light' ? 'text-black' : 'text-white'}`}>{heading}</h6>
                    <div>
                        <p className={`text-[12.8px] 2xl:text-[14.8px] font-normal ${screenMode === 'Light' ? 'text-[#525965]' : 'text-[#dfdfdf]'}`}>{description}</p>
                    </div>
                </div>
          </aside>
        }
          </>
    )
};
export default PlayerCard;