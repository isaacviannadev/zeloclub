'use client';

import { useEffect, useState } from 'react';
import { getTime } from './helper';

type CountdownProps = {
  date: string;
};

interface TimeLeft {
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
}

export default function Countdown({ date }: CountdownProps) {
  const { days, hours, minutes, seconds } = getTime(date);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days,
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { days, hours, minutes, seconds } = getTime(date);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className='flex justify-center items-center w-full select-none '>
      <div className='flex flex-col justify-between  md:flex-row bg-gray-200 border-2 border-gray-700 p-2 md:p-4 rounded-lg shadow-xl   w-full max-w-xs md:max-w-[550px]'>
        <span className='text-center text-gray-700 text-7xl font-bold'>
          {timeLeft.days} dias
        </span>
        <div className='flex justify-center'>
          <span className='flex text-center text-gray-700 text-7xl font-bold w-24 justify-center'>
            {timeLeft.hours}:
          </span>
          <span className=' flex text-center text-gray-700 text-7xl font-bold  w-24 justify-center'>
            {timeLeft.minutes}:
          </span>
          <span className='flex text-center text-gray-700 text-7xl font-bold  w-20 '>
            {timeLeft.seconds}
          </span>
        </div>
      </div>
    </div>
  );
}
