import Link from "next/link";
import Image from "next/image";
import { Vortex } from "./ui/vortex";
import logo from "../../public/logo.png";
import { Spotlight } from "./ui/Spotlight";
import { Meteors } from "./ui/meteors";
import { FlipWords } from "./ui/flip-words";
import { BackgroundBeams } from "./ui/background-beams";
import ContentSlider from "./ContentSlider";

const words = ["INNOVATE", "INTEGRATE", "INSPIRE"];

function HeroSection() {
  return (
    <div className="bg-black relative text-purple-600 flex items-center justify-center lg:min-h-[600px] min-h-[800px] w-screen">
      <Vortex className="absolute inset-0 z-0" backgroundColor="black" />
      <div className="absolute inset-0 flex items-center justify-center z-10 text-center text-white px-4">
        <div className="w-full max-w-screen-xl">
          <div className="relative flex flex-col lg:flex-row items-center justify-center lg:space-x-[120px] h-full w-full bg-transparent">
            <div className="flex flex-col justify-center items-center lg:w-1/2 w-full p-4 lg:p-8 ">

              <div className="text-5xl lg:text-7xl font-bold text-neutral-600 dark:text-neutral-400 text-nowrap">
                Let&apos;s
                <FlipWords words={words} />
              </div>
              <code className="font-semibold text-green-600 text-sm lg:text-2xl mt-4">
                Welcome to AROHI SOFTWARE AND SOLUTIONS
              </code>
            </div>
            <div className="flex justify-center items-center lg:w-1/2 w-full p-4 lg:p-8">
              <ContentSlider />
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
