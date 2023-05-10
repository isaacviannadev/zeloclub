'use client';
import { useEffect, useState } from 'react';
import Skeleton from '../skeleton';

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
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDate = new Date(date).getTime();
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setIsExpired(true);
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
        setIsLoading(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  if (isExpired) return null;

  if (isLoading) return <Skeleton height={84} width={430} />;

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col md:flex-row bg-gray-200 border-2 border-gray-700 p-2 md:p-4 rounded-lg shadow-xl gap-4 '>
        <span className='text-center text-gray-700 text-7xl font-bold'>
          {timeLeft.days} dias
        </span>
        <span className='text-center text-gray-700 text-7xl font-bold '>
          {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </span>
      </div>
    </div>
  );
}
