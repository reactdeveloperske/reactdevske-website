import React, { useState } from 'react';
import Image from 'next/image';
import { booleanFilter } from '../../util/booleanFilter';
import type { EventData } from '../../types';
import Link from 'next/link';

type DisplayRCProps = EventData;

export default function DisplayRC({
  title,
  image_url: src,
  description,
  target,
}: DisplayRCProps) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-lg shadow-md gap-y-2">
      <div className="w-full overflow-hidden rounded-lg cursor-auto aspect-w-1 aspect-h-1">
        <Image
          alt={description}
          src={!src ? 'https://bit.ly/placeholder-img' : src}
          layout="fill"
          objectFit="cover"
          className={booleanFilter(
            'duration-700 ease-in-out group-hover:opacity-75',
            loading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h2 className="text-lg md:text-xl font-bold cursor-pointer hover:text-[#09AFC6]">
        <Link href={target}>
          <a target="_blank">{title}</a>
        </Link>
      </h2>
      <p className="flex justify-center text-md md:pb-1">{description}</p>
    </div>
  );
}
