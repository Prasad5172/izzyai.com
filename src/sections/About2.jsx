import Button from "../components/Button";

function AboutSection2() {

  var width = window.innerWidth;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-center w-full gap-24 md:gap-32 my-24 md:my-32 px-8 md:px-32">
      {/* <div className="">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Revolutionizing Design with AI
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Victor AI is revolutionizing the world of shoe and apparel design by
          blending advanced AI with real-time fashion trends. Our platform
          empowers designers, creatives, and brand strategists to generate
          innovative designs, perfectly aligned with current market demands.
          Experience the synergy of creativity and data-driven insights, where
          every design is a step into the future of fashion.
        </p>
        <Button>Learn More</Button>
      </div>
      <img className="w-full" src="/about-1.png" /> */}

      <img className="w-full rounded md:order-2" src="/about-4.jpg" />
        <div className="md:order-1">
          <h2 className="text-[30px] dark:text-white capitalize leading-[48px] font-bold">
            IzzyAI Rationale
          </h2>
          <p className="my-4 text-center text-[14.3px] tight-letter-spacing tracking-tighter lg:text-center md:text-[14px] lg:text-[15.5px] mt-6 lg:tracking-tighter text-[#111920] dark:text-white">
            IzzyAI is the only human avatar-based model that captures audio-visual
            and emotional features of the user and provides a comprehensive
            assessment. The wide variety of therapy options, especially the
            gamification, provides an easy and captivating intervention method.
            IzzyAI model training is based on data with articulation, stammering,
            voice, language, narration, phonology, and learning disabilities.
          </p>
        </div>
      {/* <img className="w-full" src="/about-3.png" /> */}
    </div>
  );
}

export default AboutSection2;
