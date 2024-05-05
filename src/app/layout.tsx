import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';

export const metadata = {
  title: 'Zeloclub | Conectando corações',
  description:
    'O zeloclub é o aplicativo perfeito para conectar cuidadores de idosos com famílias que procuram assistência confiável. Nossa plataforma intuitiva e segura facilita o encontro de cuidadores qualificados, proporcionando um envelhecimento saudável e feliz para seus entes queridos. Experimente o zeloclub hoje e descubra a tranquilidade que vem com o cuidado especializado.',
};

const alice = localFont({
  src: '../assets/fonts/Alice-Regular.ttf',
  variable: '--font-alice',
});
const roxborough = localFont({
  src: '../assets/fonts/roxborough-cf-bold.ttf',
  weight: 'bold',
  variable: '--font-roxborough',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.zeloclub.com.br/' />
        <meta property='og:title' content='Zeloclub | Conectando corações' />
        <meta
          property='og:description'
          content='O zeloclub é o aplicativo perfeito para conectar cuidadores de idosos com famílias que procuram assistência confiável. Nossa plataforma intuitiva e segura facilita o encontro de cuidadores qualificados, proporcionando um envelhecimento saudável e feliz para seus entes queridos. Experimente o zeloclub hoje e descubra a tranquilidade que vem com o cuidado especializado.'
        />
        <meta
          property='og:image'
          content='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zeloclub%20Registr.png?v=1685524426272'
        />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.zeloclub.com.br/' />
        <meta
          property='twitter:title'
          content='Zeloclub | Conectando corações'
        />
        <meta
          property='twitter:description'
          content='O zeloclub é o aplicativo perfeito para conectar cuidadores de idosos com famílias que procuram assistência confiável. Nossa plataforma intuitiva e segura facilita o encontro de cuidadores qualificados, proporcionando um envelhecimento saudável e feliz para seus entes queridos. Experimente o zeloclub hoje e descubra a tranquilidade que vem com o cuidado especializado.'
        />
        <meta
          property='twitter:image'
          content='https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zeloclub%20Registr.png?v=1685524426272'
        ></meta>
      </head>
      <body
        className={`${alice.variable} ${roxborough.variable} font-sans `}
        suppressHydrationWarning={true}
      >
        <Toaster position='top-right' richColors />
        {children}
      </body>
    </html>
  );
}
