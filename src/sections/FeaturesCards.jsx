const Card = ({ heading, text }) => {
  return (
    <div className="bg-slate-300 dark:bg-[#222A32] w-full rounded-xl p-4 text-center dark:text-white">
      <h3 className="font-bold text-[17px] md:text-[24px] mb-2">{heading}</h3>
      <p className="text-[11.5px] text-left tracking-lighter  md:text-[13px]">
        {text}
      </p>
    </div>
  );
};

function FeaturesCardSection() {
  return (
    <div>
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111920] dark:text-white text-center leading-[46px] mb-8">
        IzzyAI Can Assist You With
        <br />
        Many{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
          Disorders
        </span>
      </h2>
      <div className="grid gap-5 px-10 md:px-32">
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          <Card
            heading="Stammering"
            text="Our AI-driven therapy provides personalized exercises and feedback, helping you to speak more fluently. Break free from stammering with technology that understands and adapts to your pace."
          />
          <Card
            heading="Articulation"
            text="Whether it's bilabial or glottal, voiced or unvoiced, mastering individual sound or difficult syllables, IzzyAI supports you through tailored articulation exercises. Experience a noticeable improvement in how you  express words and phrases."
          />
          <Card
            heading="Voice Disorder"
            text="IzzyAI provides effective exercises targeting pitch and intonation for voice disorder. Our AI therapist aims at strengthening your voice quality, ensuring power to your voice."
          />
        </div>
        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            style={{ width: "calc(100%)", maxWidth: "560px" }}
          >
            <Card
              heading="Receptive Language Disorder"
              text="IzzyAI effectively intervenes the understanding and processing of language. Gamification based exercises target the phonology, morphology, semantics, syntax and pragmatics."
            />
            <Card
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
