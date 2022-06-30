import HeroCard from "../HeroCard";
import { community, learningPlatform, mentorship } from "../../../util/heroCardsBodyContent";
import learningPlatformImg from "../../../../public/heroImg1.png"
import mentorshipImg from "../../../../public/heroImg2.png";
import communityImg from "../../../../public/heroImg3.png";

const Hero = () => {
  return (
    <div className="relative">
        <div className="bg-[url('/hero.png')] bg-cover flex flex-col">
            <div className="mt-52">
                <h1 className="text-white text-center text-h1 font-black"> Join Kenya's React.JS</h1>
                <br/>
                <h1 className="text-white text-center text-h1 font-black"> Developers community</h1>
            </div>
            <button className="w-80 h-16 self-center rounded mt-10 bg-red border-0 font-inter text-white text-bdy-rg mb-44 shadow-2xl">
                Click here to join
            </button>
        </div>

        <div className="rounded rounded-xl shadow-2xl flex justify-center mx-44 mt-[-72px] bg-green ">
            <HeroCard title={"Community Platform"} body={community} img={communityImg}/>
            <HeroCard title={"Mentorship"} body={mentorship} img={mentorshipImg}/>
            <HeroCard title={"Learning Platform"} body={learningPlatform} img={learningPlatformImg}/>
        </div>
    </div>
  )
}

export default Hero;