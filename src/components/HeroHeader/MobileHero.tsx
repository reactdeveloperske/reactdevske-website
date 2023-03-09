import Image from 'next/image';
import React from 'react';
import Logo from '../Logo';
import githubIcon from '../../../public/img/github-logo.svg';
import DropdownMenu from './DropdownMenu';
import LinkButton from '../LinkButton/LinkButton';
import Link from 'next/link';
import { HOME } from '../../util/routeConstants';

export default function MobileHero() {
  return (
    <div className="relative">
      <div className="mx-6 pt-2 pb-5 flex justify-between">
        <Link href={HOME}>
          <a>
            <Logo size={60} />
          </a>
        </Link>
        <a
          target="_blank"
          href="https://github.com/reactdeveloperske/reactdevske-website"
          rel="noopener noreferrer"
          className="pt-[13px]"
        >
          <Image src={githubIcon} alt="" width={35} height={35} />
        </a>
        <DropdownMenu />
      </div>
      <div>
        <h1 className="font-robotoMono font-medium text-4xl text-center mb-2">
          ReactDevsKe
        </h1>
        <div className="flex justify-center items-center mb-[34px]">
          <LinkButton
            href="https://bit.ly/joinreactdevske"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-[#12A04E] text-white w-44 rounded-md"
          >
            Join React.JS Kenya
          </LinkButton>
        </div>
        <p className="font-montserrat text-[#535353] text-xs text-center px-4">
          We are a tech community in Kenya focused on the React JS library and
          its ecosystem.
        </p>
      </div>
    </div>
  );
}
