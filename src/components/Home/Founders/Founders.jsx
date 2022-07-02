import React, {useState} from 'react';
import { FoundersTab, CommunityTeamTab } from './FoundersTab';

const Founders = () => {
  const [ToggleState, setToggleState] = useState(1);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };
  
  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className='mt-[64px]'>
        <h5 className='font-montserrat text-h5 text-text-gray text-center'>THE PEOPLE BEHIND</h5>
        <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Founders</h2>

        <div className="flex items-center justify-center">
          <div className={`rounded-t-lg py-[27px] px-[59px] flex items-center cursor-pointer ${getActiveClass(1, "bg-green")}`} 
            onClick={() => toggleTab(1)}>
            <span className='font-montserrat text-center'>Founders</span>
          </div>

          <div className={`rounded-t-lg py-[27px] px-[59px] flex items-center cursor-pointer ${getActiveClass(2, "bg-green")}`}
            onClick={() => toggleTab(2)}>
            <span className='font-montserrat text-center'>Community Team</span>
          </div> 
        </div>

        <div className='bg-green'>      
            <div className={`${ToggleState === 1 ? "visible" : "hidden"} ${getActiveClass(1, "")}`}>
              <FoundersTab/>
            </div>
            <div className={`${ToggleState === 2 ? "visible" : "hidden"} ${getActiveClass(2, "")}`}>
              <CommunityTeamTab/>
            </div>
        </div>
    </div>
  )
}

export default Founders;