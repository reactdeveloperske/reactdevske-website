import React from 'react';
import Image from 'next/image';

const HeroCard = ({title, body, img}) => {
  return (
    <div className='rounded rounded-xl flex flex-col w-fit h-80 justify-center content-center bg-white my-16 mx-10 p-5'>
        <Image src={img} width={214} height={129}/>
        <h4 className='font-montserrat font-text-gray font-h4 font-bold mt-5 mb-4'>{title}</h4>
        <p className='font-bd-sm font-text-gray'>{body}</p>
    </div>
  )
}

export default HeroCard;