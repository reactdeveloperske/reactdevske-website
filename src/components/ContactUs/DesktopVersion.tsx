import { useState } from 'react';

import { useForm, ValidationError } from '@formspree/react';

import ReCAPTCHA from 'react-google-recaptcha';

export default function DesktopVersion() {
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
      <h1 className="hidden lg:block font-montserrat text-[32px] font-black w-fit mx-auto py-4">
        Have an interesting idea we should discuss?
      </h1>
      <div className="max-w-[800px] mx-auto pt-9 pb-[46px] rounded-[10px]">
        <form className="mx-auto w-3/4" onSubmit={handleSubmit}>
          <label
            htmlFor="name"
            className="block mb-2 text-xs text-black font-dmSans"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder={'Jane Doe'}
            className="border border-[#CEEDF4] w-full rounded-lg px-4 py-3 mb-5 placeholder-[#7E7979] outline-none font-montserrat text-base"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <label
            htmlFor="email"
            className="block mb-2 text-xs text-black font-dmSans"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder={'you@example.com'}
            className="border border-[#CEEDF4] w-full rounded-lg px-4 py-3 mb-5 outline-none placeholder-[#7E7979] font-montserrat text-base"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label
            htmlFor="message"
            className="block mb-2 text-xs text-black font-dmSans"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Hello, I'm getting in touch ..."
            className="border border-[#CEEDF4] w-full rounded-lg px-4 py-[22px] mb-9 h-[178px] resize-none outline-none placeholder-[#7E7979] font-montserrat text-base"
            required
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaResult}
          />

          {/* //TODO: replace this button with the app button component */}
          <button
            type="submit"
            disabled={!captchaComplete || state.submitting}
            className="block rounded-md p-2 my-2 w-full max-w-[250px] h-14 mx-auto bg-[#03045e] hover:bg-green-500 text-white hover:text-[#030309] font-bold font-montserrat mt-5 transition ease-in-out duration-300"
          >
            Send Message
          </button>

          <ValidationError errors={state.errors} />
        </form>
      </div>
    </>
  );
}
