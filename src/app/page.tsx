import Countdown from './components/countdown';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-8 gap-14  md:p-24'>
      <h1 className='text-7xl font-bold md:text-9xl '>zeloclub</h1>
      <Countdown date='2023-06-01T15:00:00' />
    </main>
  );
}
