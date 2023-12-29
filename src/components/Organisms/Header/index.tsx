'use client'
import Link from 'next/link'
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Sobre', href: '#' },
  { name: 'Termos de uso', href: '/use-terms' },
  { name: 'Política de privacidade', href: '/privacy-policy' },
]

type HeaderProps = {
  showMobileMenu?: boolean
  showAction?: boolean
  variant?: 'default' | 'logo-only'
}
const HeaderVariant = {
  default: 'justify-between',
  'logo-only': 'justify-center',
}

function Header({
  showMobileMenu = false,
  showAction = false,
  variant = 'default',
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [scroll, setScroll] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const headerClasses = 'fixed inset-x-0 top-0 z-10 '
  const navClasses = `mx-auto flex max-w-7xl items-center p-3 lg:px-8 ${HeaderVariant[variant]}`

  const headerClassesOnScroll = scroll
    ? `${headerClasses + 'bg-white shadow-sm'}`
    : `${headerClasses}`

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [scroll])

  return (
    <header className={headerClassesOnScroll}>
      <nav className={navClasses} aria-label="Global">
        <div className="flex lg:flex-1 ">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">zeloclub</span>
            <h1 className="font-alt text-4xl">zeloclub</h1>
          </Link>
        </div>
        {showMobileMenu && (
          <>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=" font-semibold leading-6 text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </>
        )}
        {showAction && (
          <div className=" lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#contact"
              className="font-semibold leading-6 text-gray-900"
            >
              Registrar <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </nav>
      {showMobileMenu && (
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">zeloclub</span>
                <img
                  className="h-10 w-auto"
                  src="https://cdn.glitch.global/366c06b6-90d2-4995-9a79-d42af2d6b7c2/zc-favicon.png?v=1685107525308"
                  alt="zeloclub logo symbol"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                  >
                    Registrar
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </header>
  )
}

export default Header
