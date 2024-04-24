import React from "react";

import PhoneMockup from "../Assets/fir.png";
import AppleBadge from "../Assets/apple.svg";
import GoogleBadge from "../Assets/google.svg";
import MicrosoftBadge from "../Assets/micro.svg";
import IMacBadge from "../Assets/imac.svg";

function HeroSection() {
  const [dark, setDark] = React.useState();

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      let theme = localStorage.theme;
      setDark(theme === "dark" ? true : false);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
  return (
    // <div
    //   className="w-full text-center p-5 bg-hero-image min-h-[500px] bg-cover bg-center flex flex-col justify-center items-center"
    //   style={{
    //     backgroundImage:
    //       "linear-gradient(0deg, rgba(17, 25, 32, 0.64) 0%, rgba(17, 25, 32, 0.64) 100%), url('/hero_background.png')",
    //   }}
    // >
    //   <h2 className="leading-none text-[46px] md:text-[72px] font-bold text-white max-w-6xl">
    //     Embrace the Future of Shoe Design with Victor AI
    //   </h2>
    //   <p className="max-w-xl text-xl text-white mt-2">
    //     Where AI Meets Fashion: Revolutionizing Design and Trend Integration
    //   </p>
    //   <Button className="">Learn More</Button>
    // </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-64 justify-center items-center flex-col md:flex-row text-center md:text-left w-full my-24 md:my-32 px-8 md:px-32">
      <div className="">
        <h2 className="text-[40px] md:text-[56px] dark:text-white capitalize leading-[46px] md:leading-[64px] font-bold">
          Fix your
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
            {" "}
            Speech{" "}
          </span>
          with AI Powered therapists
        </h2>
        <p className="my-4 text-[14px] text-left lg:text-left text-center tracking-tighter lg:tracking-normal lg:text-[16.5px] text-[#111920] dark:text-white">
          Discover the future of speech therapy with IzzyAI. Our cutting-edge AI
          therapists are designed to understand, guide, and enhance your speech
          capabilities, offering a personalized path to clearer communication.
        </p>
        {/* <Button>Learn More</Button> */}
        <div className="flex space-x-2 flex-nowrap md:space-x-1 md:flex-nowrap lg:flex-nowrap  lg:space-x-2 items-center ">
          <a href="#">
            <img src={GoogleBadge} alt="google" />
          </a>
          <a href="#">
            <img src={AppleBadge} alt="apple" />
          </a>
          <a href="#">
            <img
              className="border rounded-md border-black dark:border-none"
              src={IMacBadge}
              alt="iMac"
            />
          </a>
          <a href="#">
            <img
              className="border rounded-md border-black dark:border-none"
              src={MicrosoftBadge}
              alt="Microsoft"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:flex-none lg:justify-normal  p-4 ">
        <img
          className="w-fit h-full md:max-h-[450px] lg:max-h-[450px]"
          src={PhoneMockup}
        />
      </div>
    </div>
  );
}

export default HeroSection;
