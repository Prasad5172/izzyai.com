import React, { useEffect, useRef } from 'react';

function AboutSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const sectionTop = contentRef.current.offsetTop;
        const sectionHeight = contentRef.current.offsetHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;

        // Calculate opacity based on scroll position relative to container
        const opacity = Math.min(1, Math.max(0, (scrollTop + viewportHeight - sectionTop) / (viewportHeight * 0.5)));

        contentRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to handle pre-scrolled content

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-center w-full gap-24 md:gap-32 my-24 md:my-32 px-8 md:px-32">
      <img className="w-full rounded" src="./about-2.png" data-aos = "fade-up" data-aos-dealy="100" />
      <div className="" ref={contentRef} style={{ transition: 'opacity 0.5s ease-out', opacity: 0 }}>
        <h2 className="text-[30px] dark:text-white capitalize leading-[48px] font-bold">
         IzzyAI brings products to help humanity
        </h2>
        <p className="my-4 text-center text-[14.3px] tight-letter-spacing  tracking-tighter lg:text-center md:text-[14px] lg:text-[15.5px] mt-6 lg:tracking-tighter text-[#111920] dark:text-white">
          Empowering Change Through Innovation: At the heart of IzzyAI, we're driven by a mission to create
          technology that makes a real difference. Our products are designed with humanity in mind,
          aiming to bridge gaps, overcome barriers, and offer solutions that enhance lives.
          Join us in our journey to bring positive change, one voice at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
