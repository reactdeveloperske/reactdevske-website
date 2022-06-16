import Link from "next/link";
import React from "react";
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
            <Link href={HOME}>
              <a>
                <div className="bg-gray-400 w-[137px] h-[61px]"></div>
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
            <button className="flex mx-auto bg-gray-300 border-0 py-[10px] px-[33px] focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              Join Community
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
