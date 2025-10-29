import React from 'react';
import { FaInfoCircle, FaCalendarAlt, FaPhone, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import { ABOUT, CONTACT, EVENTS } from '../../util/routeConstants';
import { Menu } from '@headlessui/react';

export default function DropdownMenu() {
  return (
    <Menu >
      <Menu.Button>
        {({ open }) =>
          open ? (
            <div className="inline-flex justify-center items-center w-[30px] ">
              <FaTimes size={20} /> 
            </div>
          ) : (
            <FaBars size={30} />
          )
        }
      </Menu.Button>
      <div className="bg-[#023e8a] rounded-[10px] overflow-hidden w-[60vw] h-fit absolute top-14 right-5 shadow-[0_0_50px_-12px_rgb(0,0,0,0.25)] ">
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                href={ABOUT}
                className={`w-full p-[10px] flex justify-start items-center ${
                  active && 'bg-green-400 text-black'
                }`}
              >
                <FaInfoCircle size={22} /> {/* About us icon from react-icons */}
                <p className="inline-block ml-[10px]">About us</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={EVENTS}
                className={`w-full p-[10px] flex justify-start items-center ${
                  active && 'bg-green-400 text-black'
                }`}
              >
                <FaCalendarAlt size={22} /> {/* Events icon from react-icons */}
                <p className="inline-block ml-[10px]">Events</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={CONTACT}
                className={`w-full p-[10px] flex justify-start items-center ${
                  active && 'bg-green-400 text-black'
                }`}
              >
                <FaPhone size={22} /> {/* Contact icon from react-icons */}
                <p className="inline-block ml-[10px]">Contact</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`flex justify-center items-center bg-[#12A04E] text-white w-full font-montserrat text-xs py-[10px] ${
                  active && 'bg-green-500'
                }`}
                href="https://bit.ly/joinreactdevske"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join React.JS Kenya
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}
