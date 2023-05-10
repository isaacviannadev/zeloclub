'use client';
import { useEffect, useState } from 'react';

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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDate = new Date(date).getTime();
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ).toLocaleString('en-US', { minimumIntegerDigits: 2 });

        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        ).toLocaleString('en-US', { minimumIntegerDigits: 2 });

        const seconds = Math.floor(
          (timeDifference % (1000 * 60)) / 1000
        ).toLocaleString('en-US', { minimumIntegerDigits: 2 });

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col md:flex-row bg-transparent border-2 border-gray-700 p-4 rounded-lg shadow-xl gap-4 backdrop-filter backdrop-blur-sm'>
        <span className='text-center text-gray-700 text-5xl font-bold'>
          {timeLeft.days} dias
        </span>
        <span className='text-center text-gray-700 text-5xl font-bold '>
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </div>
    </div>
  );
}
