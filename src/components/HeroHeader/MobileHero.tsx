import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../Logo';
import githubIcon from '../../../public/img/github-logo.svg';
import menuIcon from '../../../public/img/menu-icon.svg';
import closeIcon from '../../../public/img/close-icon.svg';
import Button from '../Button/Button';
import DropdownMenu from './DropdownMenu';

export default function MobileHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative">
      <div className="mx-6 pt-2 pb-5 flex justify-between">
        <Logo size={60} />
        <a
          target="_blank"
          href="https://github.com/reactdeveloperske/reactdevske-website"
          rel="noopener noreferrer"
          className="pt-[13px]"
        >
          <Image src={githubIcon} alt="" width={35} height={35} />
        </a>
        {menuOpen ? (
          <div className="inline-flex justify-center items-center w-[30px] ">
            <Image
              src={closeIcon}
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
              onClick={closeMenu}
            />
          </div>
        ) : (
          <Image
            src={menuIcon}
            alt=""
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={openMenu}
          />
        )}
      </div>
      {menuOpen && <DropdownMenu onCloseMenu={closeMenu} />}
      <div>
        <h1 className="font-robotoMono font-medium text-4xl text-center mb-2">
          ReactDevsKe
        </h1>
        <div className="flex justify-center items-center mb-[34px]">
          <a
            target="_blank"
            href="https://bit.ly/joinreactdevske"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#12A04E] text-white w-44 rounded-md">
              Join React.JS Kenya
            </Button>
          </a>
        </div>
        <p className="font-montserrat text-[#535353] text-xs text-center px-4">
          We are a tech community in Kenya focused on the React JS library and
          its ecosystem.
        </p>
      </div>
    </div>
  );
}
