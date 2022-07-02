import React from 'react';
import Image from "next/image";
import community1 from "../../../../public/community1.png";
import community2 from "../../../../public/community2.png";
import community3 from "../../../../public/community3.png";
import community4 from "../../../../public/community4.png";
import community5 from "../../../../public/community5.png";
import community6 from "../../../../public/community6.png";
import community7 from "../../../../public/community7.png";
import community8 from "../../../../public/community8.png";
import community9 from "../../../../public/community9.png";
import community10 from "../../../../public/community10.png";
import community11 from "../../../../public/community11.png";
import community12 from "../../../../public/community12.png";
import community13 from "../../../../public/community13.png";
import community14 from "../../../../public/community14.png";
import community15 from "../../../../public/community15.png";
import community16 from "../../../../public/community16.png";

const CommunityTeam = () => {
  return (
    <div className='relative mt-[120px] mx-[150px] h-[450px]'>
      <div className='absolute '>
        <Image src={community1} width={139} height={139}/>          
      </div>
      <div className='absolute left-[198px] top-[54px]'>
        <Image src={community2} width={103} height={103}/>          
      </div>
      <div className='absolute left-[29px] top-[208px]'>
        <Image src={community3} width={96} height={96}/>          
      </div>
      <div className='absolute left-[49px] top-[340px]'>
        <Image src={community4} width={70} height={70}/>          
      </div>
      <div className='absolute left-[157px] top-[190px]'>
        <Image src={community5} width={188} height={188}/>          
      </div>
      <div className='absolute left-[362px] top-[10px]'>
        <Image src={community6} width={140} height={140}/>          
      </div>
      <div className='absolute left-[410px] top-[197px]'>
        <Image src={community7} width={113} height={113}/>          
      </div>
      <div className='absolute left-[563px] top-[5px]'>
        <Image src={community8} width={66} height={66}/>          
      </div>
      <div className='absolute left-[550px] top-[100px]'>
        <Image src={community9} width={144} height={144}/>          
      </div>
      <div className='absolute left-[569px] top-[269px]'>
        <Image src={community10} width={144} height={144}/>          
      </div>
      <div className='absolute left-[761px] top-[320px]'>
        <Image src={community11} width={73} height={73}/>          
      </div>
      <div className='absolute left-[741px] top-[191px]'>
        <Image src={community12} width={98} height={98}/>          
      </div>
      <div className='absolute left-[777px] top-[54px]'>
        <Image src={community13} width={70} height={70}/>          
      </div>
      <div className='absolute left-[900px] top-[80px]'>
        <Image src={community14} width={118} height={118}/>          
      </div>
      <div className='absolute left-[850px] top-[250px]'>
        <Image src={community15} width={144} height={144}/>          
      </div>
      <div className='absolute left-[850px] top-[-60px]'>
        <Image src={community16} width={103} height={103}/>          
      </div>
    </div>
  )
}

export default CommunityTeam;