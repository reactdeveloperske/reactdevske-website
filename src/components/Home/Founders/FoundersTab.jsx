import FoundersCard from "../FoundersCard";
import founder1 from "../../../../public/founder1.png";
import founder2 from "../../../../public/founder2.png";
import founder3 from "../../../../public/founder3.png";

export const FoundersTab = () => {
  return (
    <div className='flex align-center justify-evenly p-[80px]'>
        <FoundersCard img={founder1}/>
        <FoundersCard img={founder2}/>
        <FoundersCard img={founder3}/>
    </div>
  )
}
export const CommunityTeamTab = () => {
  return (
    <div className='flex align-center justify-evenly p-[80px]'>
      Community Team
    </div>
  )
}

