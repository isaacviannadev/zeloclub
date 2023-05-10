interface getTimeReturn {
  days: number;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
}

export function getTime(date: string): getTimeReturn {
  const targetDate = new Date(date).getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  const isExpired = timeDifference <= 0;

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

  return { days, hours, minutes, seconds, isExpired };
}
