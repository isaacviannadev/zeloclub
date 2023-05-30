import './globals.css';

export const metadata = {
  title: 'Zeloclub | Conectando corações',
  description:
    'O zeloclub é o aplicativo perfeito para conectar cuidadores de idosos com famílias que procuram assistência confiável. Nossa plataforma intuitiva e segura facilita o encontro de cuidadores qualificados, proporcionando um envelhecimento saudável e feliz para seus entes queridos. Experimente o zeloclub hoje e descubra a tranquilidade que vem com o cuidado especializado.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
