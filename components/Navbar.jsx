import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/reactdevske.svg";
import {
  ABOUT,
  CONTACT,
  EVENTS,
  FORUM,
  HOME,
  MEMBERS,
  NEWS,
} from "../util/routeConstants";

const Navbar = () => {
  return (
    <>
      <header className="px-[181px] w-full shadow-md bg-white">
        <nav className="nav py-4 flex justify-between items-center">
          <div>
            <Link href={HOME} >
              <a >
              <Image src={logo} className="hover:animate-spin" alt="reactdevske logo" width={137} height={60} />
              </a>
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center space-x-[37px]">
              <Link href={ABOUT}>
                <a>
                  <li>About us</li>
                </a>
              </Link>
              <Link href={MEMBERS}>
                <a>
                  <li>Members</li>
                </a>
              </Link>
              <Link href={EVENTS}>
                <a>
                  <li>Events</li>
                </a>
              </Link>
              <Link href={NEWS}>
                <a>
                  <li>News</li>
                </a>
              </Link>
              <Link href={FORUM}>
                <a>
                  <li>Forum</li>
                </a>
              </Link>
              <Link href={CONTACT}>
                <a>
                  <li>Contact</li>
                </a>
              </Link>
            </ul>
          </div>
          <div>
          <a target="_blank" href="https://bit.ly/joinreactdevske" rel="noopener noreferrer">
            <button className="flex mx-auto bg-gray-300 border-0 py-[10px] px-[33px] focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              Join Community
            </button>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
