import Image from 'next/image';
import React from 'react';
import mailIcon from '../../../public/img/mail-icon.svg';
import messageIcon from '../../../public/img/message-icon.svg';

export default function MobileVersion() {
  return (
    <>
      <h1 className="text-black font-robotoMono text-4xl w-fit mx-auto py-4 font-bold">
        Let's talk React
      </h1>
      <form className="w-4/5 mx-auto md:w-2/3">
        <label
          htmlFor="name"
          className="border border-black w-full rounded-md p-2 my-2 flex"
        >
          <input
            id="name"
            type={'text'}
            placeholder={'Name'}
            className=" placeholder-[#7E7979] outline-none flex-grow ml-8 font-robotoMono text-base"
            required
          />
        </label>
        <label
          htmlFor="email"
          className="border border-black w-full rounded-md p-2 my-2 flex"
        >
          <Image
            src={mailIcon}
            alt=""
            width={25}
            height={25}
            color="#7E7979"
            className="inline-block"
          />
          <input
            id="email"
            type={'email'}
            placeholder={'Email'}
            className="inline-block ml-2 outline-none flex-grow placeholder-[#7E7979] font-robotoMono text-base"
            required
          />
        </label>
        <label className="border border-black w-full rounded-md p-2 my-2 flex items-start">
          <Image
            src={messageIcon}
            width={25}
            height={25}
            className="inline-block "
            alt=""
          />
          <textarea
            placeholder="Message"
            className=" inline-block ml-2 h-[270px] resize-none outline-none flex-grow placeholder-[#7E7979] font-robotoMono text-base "
            required
          ></textarea>
        </label>
        {/*//TODO: replace this button with the app button component */}
        <button
          type="submit"
          className="border-2 border-[#12A04E] w-full rounded-md p-2 my-2 font-montserrat font-bold text-[#12A04E]"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
