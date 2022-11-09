/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import Image from 'next/image';
import mailIcon from '../../../public/img/mail-icon.svg';
import messageIcon from '../../../public/img/message-icon.svg';

import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function MobileVersion() {
  const [captchaComplete, setCaptchaComplete] = useState<boolean>(false);

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

  const handleRecaptchaResult = (result: string | null) => {
    if (result) {
      setCaptchaComplete(true);
    }
  };

  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-xl font-medium text-green-800">
          Thank you for your submission. We will get back to you as soon as
          possible
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-black font-robotoMono text-4xl w-fit mx-auto py-4 font-bold">
        Let's talk React
      </h1>
      <form className="w-4/5 mx-auto md:w-2/3" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="border border-black w-full rounded-md p-2 my-2 flex"
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            className=" placeholder-[#7E7979] outline-none flex-grow ml-8 font-robotoMono text-base"
            required
          />
        </label>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
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
            type="email"
            placeholder="Email"
            name="email"
            className="inline-block ml-2 outline-none flex-grow placeholder-[#7E7979] font-robotoMono text-base"
            required
          />
        </label>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
            name="message"
            className=" inline-block ml-2 h-[270px] resize-none outline-none flex-grow placeholder-[#7E7979] font-robotoMono text-base "
            required
          ></textarea>
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/*//TODO: replace this button with the app button component */}

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleRecaptchaResult}
        />

        {captchaComplete ? (
          <button
            type="submit"
            disabled={state.submitting}
            className="border-2 border-[#12A04E] w-full rounded-md p-2 my-2 font-montserrat font-bold text-[#12A04E]"
          >
            Send Message
          </button>
        ) : (
          <button
            type="submit"
            disabled
            className="border-2 border-[#12A04E] w-full rounded-md p-2 my-2 font-montserrat font-bold text-[#12A04E]"
          >
            Send Message
          </button>
        )}
        <ValidationError errors={state.errors} />
      </form>
    </>
  );
}
