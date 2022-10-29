import Image from 'next/image';
import React from 'react';
import Button from '../Button/Button';
import infoIcon from '../../../public/img/info-icon.svg';
import calendarIcon from '../../../public/img/calendar-icon.svg';
import contactIcon from '../../../public/img/contact-icon.svg';
import { ABOUT, CONTACT, EVENTS } from '../../util/routeConstants';

interface DropdownMenuProps {
  onCloseMenu: () => void;
}

export default function DropdownMenu({ onCloseMenu }: DropdownMenuProps) {
  return (
    <div className="bg-white rounded-[10px] overflow-hidden w-[158px] h-fit absolute top-14 right-5 shadow-[0_0_50px_-12px_rgb(0,0,0,0.25)]">
      <ul>
        <li className="">
          <a
            href={ABOUT}
            className="w-full p-[10px] flex justify-start items-center"
            onClick={() => onCloseMenu()}
          >
            <Image src={infoIcon} alt="" width={25} height={22} />
            <p className="inline-block ml-[10px]">About us</p>
          </a>
        </li>
        <li className="">
          <a
            href={EVENTS}
            className="w-full p-[10px] flex justify-start items-center"
            onClick={() => onCloseMenu()}
          >
            <Image src={calendarIcon} alt="" width={25} height={22} />
            <p className="inline-block ml-[10px]">Events</p>
          </a>
        </li>
        <li className="">
          <a
            href={CONTACT}
            className="w-full p-[10px] flex justify-start items-center"
            onClick={() => onCloseMenu()}
          >
            <Image src={contactIcon} alt="" width={25} height={25} />
            <p className="inline-block ml-[10px]">Contact</p>
          </a>
        </li>
      </ul>
      <div className="">
        <a
          target="_blank"
          href="https://bit.ly/joinreactdevske"
          rel="noopener noreferrer"
          className="w-full"
          onClick={() => onCloseMenu()}
        >
          <Button className="bg-[#12A04E] text-white w-full font-montserrat text-xs py-[10px]">
            Join React.JS Kenya
          </Button>
        </a>
      </div>
    </div>
  );
}
