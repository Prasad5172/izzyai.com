const Button = (props) => {
  return (
    <button
      {...props}
      href="#"
      className={`bg-[#1B2731] dark:bg-[#1B2731] mt-2 py-2 px-4 font-semibold text-[16px] ${
        props.normalcase ? "normal-case" : "uppercase"
      } group`}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA] group-hover:text-white flex items-center">
        {props.children}
        {props.arrow && (
          <svg
            className="ml-2 fill-[#0CC8E8] group-hover:fill-white"
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.29288 10.6961C-0.0976371 11.0866 -0.0976251 11.7198 0.292907 12.1103C0.683438 12.5008 1.3166 12.5008 1.70712 12.1103L0.29288 10.6961ZM11.7373 1.66551C11.7373 1.11322 11.2896 0.665517 10.7373 0.665527L1.73729 0.665697C1.185 0.665707 0.737294 1.11343 0.737305 1.66572C0.737315 2.218 1.18504 2.66571 1.73732 2.6657L9.73732 2.66555L9.73747 10.6655C9.73748 11.2178 10.1852 11.6655 10.7375 11.6655C11.2898 11.6655 11.7375 11.2178 11.7375 10.6655L11.7373 1.66551ZM1.70712 12.1103L11.4444 2.37262L10.0302 0.958434L0.29288 10.6961L1.70712 12.1103Z" />
          </svg>
        )}
      </span>
    </button>
  );
};

export default Button;
