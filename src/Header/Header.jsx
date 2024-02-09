import { AiOutlineArrowRight } from "react-icons/ai";
import sajek from "../assets/Sajek.png";
import Sreemongol from "../assets/Sreemongol.png";
import sundorbon from "../assets/sundorbon.png";

const Header = () => {
  return (
    <div className=" ">
      <header className="">
        <div className="flex justify-between gap-36">
          <div className=" ">
            <h1 className="text-8xl text-[#FFF]">Cox's bazar</h1>

            <p className="text-[white] ">
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters <br /> in southeastern Bangladesh. It is famous
              mostly for its long natural sandy beach, and it ...
            </p>
            <button className="bg-[#F9A51A] mt-8 text-black px-8 py-3 rounded-lg flex gap-2 items-center">
              Booking <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </div>

          <div className="flex gap-7 ">
            <img
              className="border-4 duration-700 rounded-lg border-[#FBBC04] h-[420px]"
              src={sajek}
            ></img>
            <img className="h-[420px]" src={Sreemongol}></img>
            <img className="h-[420px]" src={sundorbon}></img>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
