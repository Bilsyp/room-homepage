import { useWindowSize } from "@uidotdev/usehooks";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import { useRef } from "react";

import { dataArr } from "../data/data";
const Hero = () => {
  const size = useWindowSize();
  const blank = useRef(null);

  return (
    <div className=' relative'>
      <div
        ref={blank}
        className={`hidden blank h-full absolute w-full z-10  p-2  bg-Shadows`}
      ></div>
      <SectionOne blank={blank} size={size} dataArr={dataArr} />
      <SectionTwo />
    </div>
  );
};

export default Hero;
