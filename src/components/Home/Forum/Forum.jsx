import React from 'react';
import Image from 'next/image';
import ellipse1 from "../../../../public/conversationPic1.png";
import ellipse2 from "../../../../public/conversationPic2.png";

const Forum = () => {
  return (
    <div>
        <div className='mt-[64px]'>
          <h5 className='font-montserrat text-h5 text-text-gray text-center'>FORUM</h5>
          <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Join the Conversation</h2>
        </div>
        <div className='bg-light-green mx-[181px] rounded py-[53px]'>
            <p className='text-bdy-lg text-text-gray mx-[211px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis laoreet amet. Aliquet elementum ultrices molestie netus donec pellentesque quis.</p>
            
            <div className='mb-[64px]'>
              <div className='flex justify-end'>
                  <div className='rounded mt-[51px] bg-white w-[444px] h-[113px] mr-[111px] ml-[523px]'>
                    <div className='mt-[-26px] ml-[-26px]'>
                      <Image src={ellipse2} width={53} height={53}/>
                    </div>
                    <div>
                      <p className='text-bdy-rg text-text-gray text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis</p>
                    </div>
                  </div>
              </div>
              <div className='flex justify-start'>
                  <div className='rounded mt-[51px] bg-green w-[444px] h-[113px] mr-[400px] ml-[150px]'>
                    <div className='flex justify-end mt-[-26px] mr-[-26px]'>
                      <Image src={ellipse1} width={53} height={53}/>
                    </div>
                    <div>
                      <p className='text-bdy-rg text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vivamus duis</p>
                    </div>
                  </div>
              </div>                
            </div>
            <p className='text-center font-montserrat text-bdy-rg'>
             Join and interact with a community of like minded developers
            </p>
            <div className='flex justify-center mt-[35px]'>
                <button className='bg-red rounded text-white font-montserrat py-[18px] px-[33px]'>Let’s interact - Continue to Forum</button>
            </div>
        </div>
    </div>
  )
}

export default Forum;