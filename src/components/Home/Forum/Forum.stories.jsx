import React from 'react';
import FoundersCard from "./FoundersCard";
import founder1 from "../../../../public/founder1.png";
import founder2 from "../../../../public/founder1.png";
import founder3 from "../../../../public/founder1.png";

const Founders = () => {
  return (
    <div className='mt-[64px]'>
        <h5 className='font-montserrat text-h5 text-text-gray text-center'>THE PEOPLE BEHIND</h5>
        <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Founders</h2>

        <div className='bg-green'>
            <div className='flex align-center justify-evenly p-[80px]'>
              <FoundersCard img={founder1}/>
              <FoundersCard img={founder2}/>
              <FoundersCard img={founder3}/>
            </div>
        </div>
    </div>
  )
}

export default Founders;