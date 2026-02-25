'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '../Logo/Logo';

const menuItems = [
  { name: 'Home', to: '/' },
  { name: 'Community', to: '/community' },
  { name: 'Workshops & Events', to: '/events' },
  { name: 'Resources', to: '/resources' },
  { name: 'Contribute', to: '/contribute' },
  { name: 'About Us', to: '/about' },
];

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false);

  return (
    <header>
      <nav
        data-state={menuState ? 'active' : undefined}
        className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
      >
        <div className="m-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="/" aria-label="Go home" className="block">
                <Logo size={60} />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={`m-auto size-6 duration-200 ${
                    menuState ? 'rotate-180 scale-0 opacity-0' : ''
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 duration-200 ${
                    menuState
                      ? 'rotate-0 scale-100 opacity-100'
                      : '-rotate-180 scale-0 opacity-0'
                  }`}
                />
              </button>
            </div>

            <div
              className={`bg-background ${
                menuState ? 'block' : 'hidden'
              } lg:flex mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent`}
            >
              <div className="lg:pr-4">
                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.to}
                        className="text-black hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md inline-flex justify-center"
                >
                  <a
                    href="https://bit.ly/joinreactdevske"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Community
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
