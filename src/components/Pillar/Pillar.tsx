import React from 'react';

export default function Pillar({
  count,
  label,
  description,
}: {
  count: string;
  label: string;
  description: string;
}) {
  return (
    <>
      <div className="flex lg:max-w-sm min-w-[70%] md:min-w-[50%] space-x-4 p-6 shadow-md rounded-lg items-center bg-[#09AFC6] justify-center">
        <p className="text-4xl font-extrabold text-white tracking-wide">
          {count}
        </p>
        <p className=" truncate text-lg md:text-3xl capitalize text-white tracking-wide">
          {label}
        </p>
      </div>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-[#030f13] font-light">
        {description}
      </p>
    </>
  );
}
