import React, { useState } from "react";
import Image from "next/image";
import { booleanFilter } from '../../util/booleanFilter';

export default function DislpayRC({
  name,
  src,
  event,
  description,
  venue,
  date,
}) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-white flex flex-col rounded-lg px-6 py-4 gap-y-2 shadow-md">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
        <Image
          alt=" "
          src={!src ? "https://bit.ly/placeholder-img" : src}
          layout="fill"
          objectFit="cover"
          className={booleanFilter(
            "duration-700 ease-in-out group-hover:opacity-75",
            loading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h2 className="text-lg font-bold">{name}</h2>
      {event ? (
        <div className="flex flex-col gap-y-4 md:py-5 lg:py-10">
          <p className="text-md font-medium">Venue: {venue}</p>
          <p className="text-md font-medium">Date: {date}</p>
        </div>
      ) : (
        <p className="flex justify-center text-md ">{description}</p>
      )}
    </div>
  );
}
