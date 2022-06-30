import React from 'react';
import Image from 'next/image';

const FoundersCard = ({img}) => {
  return (
    <div className='flex flex-col bg-white p-[24px] w-[254px] h-[303px] rounded'>
        <Image src={img} width={214} height={180}/>
        <h4 className='font-montserrat text-h4 font-bold text-center mt-[14px] mb-[14px]'>Lorem Ipsum</h4>
        <p className='font-montserrat text-center text-bdy-sm'>Lorem ipsum dolor sit amet, consectetur adipiscin</p>
    </div>
  )
}

export default FoundersCard;