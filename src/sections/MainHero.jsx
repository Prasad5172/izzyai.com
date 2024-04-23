import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function MainHeroSection() {
  const [showText, setShowText] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const text = "Your Speech Companion!";
  const characters = text.split("");
  const [image1,setImage1] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
      setTextIndex(textIndex + 1);
    }, 20 * textIndex);

    return () => clearTimeout(timeout);
  }, [textIndex]);

  useEffect(() => {
    if (showText && textIndex === text.length) {
      setTimeout(() => {
        setShowText(false);
        setTextIndex(0);
      }, 1000);
    }
  }, [showText, textIndex, text.length]);

  const fadeIn = useSpring({
    opacity: showText ? 1 : 0,
    config: { duration: 100 },
  });
  
  const width = window.innerWidth;


  return (
    <div className="relative hero" style={{
      height: `${width > 900 ? width>1400 ? "90vh" :"80vh" : "100%"}`,
      display:"flex",
      alignItems:"center",
    }}>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-hero-image bg-cover ${width>1024 ? "bg-top":""}bg-center d-flex`}
          style={{
            backgroundImage:`linear-gradient(0deg, rgba(17, 25, 32, 0.64) 0%, rgba(17, 25, 32, 0.64) 100%), url('/hero_background${width > 1400 ? "5":"4"}.jpg')`,
            backgroundPosition:`${width>1024 ? "bottom center":""}`

          }}
        ></div>

        <div className="relative z-10 py-20 md:py-32 md:px-10 text-white text-center justify-center items-center">
              <span className=" w-full justify-center mb-0 tracking-tighter  md:text-6xl font-bold leading-snug">
                <h2 className="text-4xl  md:text-6xl font-bold leading-snug">
                  Welcome to IzzyAI
                </h2>
                <animated.span style={fadeIn}>
                  {characters.slice(0, textIndex).map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </animated.span>
              </span>
              <p className="text-xl mt-2 px-5">
                Embark on a journey to clear and confident speech with IzzyAI. Our
                avatar-led exercises, powered by AI, target Articulation, Stammering,
                Voice and Language Disorders. Let's unlock your communication
                potential together.
              </p>
        </div>
    </div>
  );

  // return (
  // <a
  //     className="w-full text-center p-5 bg-hero-image min-h-[100vh] bg-cover bg-center flex flex-col justify-center items-center"
  //     style={{
  //         backgroundImage:
  //             "linear-gradient(0deg, rgba(17, 25, 32, 0.64) 0%, rgba(17, 25, 32, 0.64) 100%), url('/hero_background.png')",
  //     }}
  // >
  //     <h2 className="leading-none text-[46px] md:text-[72px] font-bold text-white max-w-6xl">
  //         Welcome to IzzyAI <br />{' '}
  //         <animated.span style={fadeIn}>
  //             {characters.slice(0, textIndex).map((char, index) => (
  //                 <span key={index}>{char}</span>
  //             ))}
  //         </animated.span>
  //     </h2>
  //     <p className="max-w-3xl text-xl text-white mt-2">
  //         Embark on a journey to clear and condifent speech with IzzyAi. Our avatart-led exercises, powered by AI, target Articulation, Stammering, Voice and Language Disorder. Let's unlock your communication potential together
  //     </p>
  // </a>
  // );
}

export default MainHeroSection;
