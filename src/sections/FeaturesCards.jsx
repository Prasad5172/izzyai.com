import React,{useEffect,useRef} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ heading, text , align }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="bg-slate-300 dark:bg-[#222A32] w-full rounded-xl p-4 text-center dark:text-white" data-aos={`fade-${align}`}>
      <h3 className="font-bold text-[17px] md:text-[24px] mb-2">{heading}</h3>
      <p className="text-[15px] text-center tracking-lighter  md:text-[15px]">
        {text}
      </p>
    </div>
  );
};

function FeaturesCardSection() {
  const sectionRef = useRef(null);
  var width = window.innerWidth;
  
  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      // Calculate opacity based on scroll position relative to container
      const opacity = Math.min(1,  1.9*(scrollTop - sectionTop + viewportHeight) / sectionHeight);

      // Apply opacity to content
      if (sectionRef.current) {
        sectionRef.current.style.opacity = opacity;
      }
     
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to handle pre-scrolled content

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={sectionRef}>
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111920] dark:text-white text-center leading-[46px] mb-8">
        IzzyAI Can Assist You With
        <br />
        Many{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
          Disorders
        </span>
      </h2>
      <div className="grid gap-5 px-10 md:px-32 overflow-x-hidden">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 justify-items-center ">
          <Card
            align="left"
            heading="Stammering"
            text="Our AI-driven therapy provides personalized exercises and feedback, helping you to speak more fluently. Break free from stammering with technology that understands and adapts to your pace."
          />
          <Card
          align="left"
            heading="Articulation Disorder"
            text="Whether it's bilabial or glottal, voiced or unvoiced, mastering individual sound or difficult syllables, IzzyAI supports you through tailored articulation exercises. Experience a noticeable improvement in how you  express words and phrases."
          />
          <Card
          align="left"
            heading="Voice Disorder"
            text="IzzyAI provides effective exercises targeting pitch and intonation for voice disorder. Our AI therapist aims at strengthening your voice quality, ensuring power to your voice."
          />
        </div>
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 lg:w-[560px] xl:w-[560px] 2xl:w-[560px] md:w-full  md:grid-cols-2 gap-5"
          >
            <Card
            align="left"
              heading="Receptive Language Disorder"
              text="IzzyAI effectively intervenes the understanding and processing of language. Gamification based exercises target the phonology, morphology, semantics, syntax and pragmatics."
            />
            <Card
            align="left"
              heading="Expressive Language Disorder"
              text="Our AI therapist provides customization as per the need of the user to correctly formulate complete sentences with smooth combination of words."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCardSection;
