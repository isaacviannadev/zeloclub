'use client';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Sobre', href: '#' },
  { name: 'Termos de uso', href: '/use-terms' },
  { name: 'Política de privacidade', href: '/privacy-policy' },
];

type HeaderProps = {
  showMobileMenu?: boolean;
  showAction?: boolean;
  variant?: 'default' | 'logo-only';
};
const HeaderVariant = {
  default: 'justify-between',
  'logo-only': 'justify-center',
};

function Header({
  showMobileMenu = false,
  showAction = false,
  variant = 'default',
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const headerClasses = 'fixed inset-x-0 top-0 z-10 ';
  const navClasses = `mx-auto flex max-w-7xl items-center p-3 lg:px-8 ${HeaderVariant[variant]}`;

  const headerClassesOnScroll = scroll
    ? `${headerClasses + 'bg-white shadow-sm'}`
    : `${headerClasses}`;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <header className={headerClassesOnScroll}>
      <nav className={navClasses} aria-label='Global'>
        <div className='flex lg:flex-1 '>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>zeloclub</span>
            <h1 className='font-alt text-4xl'>zeloclub</h1>
          </Link>
        </div>
        {showMobileMenu && (
          <>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>

            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=' font-semibold leading-6 text-gray-900'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </>
        )}
        {showAction && (
          <div className=' lg:flex lg:flex-1 lg:justify-end'>
            <Link
              href='#contact'
              className='font-semibold leading-6 text-gray-900'
            >
              Registrar <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
