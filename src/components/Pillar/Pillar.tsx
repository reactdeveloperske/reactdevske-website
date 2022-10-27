import React from 'react';

export default function Pillar({
  count,
  label,
}: {
  count: string;
  label: string;
}) {
  return (
    <div className="flex max-w-xs lg:max-w-sm min-w-[70%] md:min-w-[50%] space-x-4 p-2 md:p-4 lg:p-6 shadow-md md:shadow-none rounded-lg items-center bg-white md:bg-[#09AFC6]">
      <p className="text-2xl md:text-4xl font-extrabold md:text-white tracking-wide">
        {count}
      </p>
      <p className=" truncate text-lg md:text-3xl capitalize md:text-white tracking-wide">
        {label}
      </p>
    </div>
  );
}
