import { useState } from "react";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const iconColor = showList ? "#fff" : "#A4A4A5";
  const NavData = [
    "EDUCATION",
    "EXPERIENCE",
    "SKILLS",
    "PROJECTS",
    "CERTIFICATION",
  ];
  return (
    <>
        <header className="flex justify-between flex-wrap items-center max-w-[1440px] mx-auto my-3 w-full md:my-5 px-3">
          <h2 className="bg-primary text-[#194A6B] font-inter font-semibold tracking-[4px] border-2 px-3 text-base leading-[16px] py-1 border-[#2B5F83] rounded-md rounded-br-[25px] sm:rounded-br-[48px] sm:pr-5 sm:text-[32px] sm:leading-[40px]">
            ABDULBASIT
          </h2>
          <nav
            className={`order-1 w-full lg:w-auto mt-3
          ${showList ? "block" : "hidden"} lg:block`}
          >
            <ul className="lg:flex lg:gap-[15px]">
              {NavData.map((item) => (
                <li key={item} className="text-[#4886AD] text-xs sm:text-xl">
                  <a
                    href={`#${item}`}
                    className="text-base leading-[25px] text-[#A4A4A5] hover:text-[#4886AD] sm:text-xl"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className={`lg:hidden text-white `}
            aria-label="Toggle navigation menu"
            onClick={() => setShowList((prev) => !prev)}
          >
            <svg
              aria-hidden="true"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33333 27.0834C9.48393 27.0834 10.4167 26.1507 10.4167 25.0001C10.4167 23.8495 9.48393 22.9167 8.33333 22.9167C7.18274 22.9167 6.25 23.8495 6.25 25.0001C6.25 26.1507 7.18274 27.0834 8.33333 27.0834Z"
                fill={iconColor}
              />
              <path
                d="M41.7917 22.9167H16.5417C15.4601 22.9167 14.5834 23.7935 14.5834 24.8751V25.1251C14.5834 26.2066 15.4601 27.0834 16.5417 27.0834H41.7917C42.8733 27.0834 43.75 26.2066 43.75 25.1251V24.8751C43.75 23.7935 42.8733 22.9167 41.7917 22.9167Z"
                fill={iconColor}
              />
              <path
                d="M41.7917 33.3333H8.20833C7.12678 33.3333 6.25 34.21 6.25 35.2916V35.5416C6.25 36.6231 7.12678 37.4999 8.20833 37.4999H41.7917C42.8732 37.4999 43.75 36.6231 43.75 35.5416V35.2916C43.75 34.21 42.8732 33.3333 41.7917 33.3333Z"
                fill={iconColor}
              />
              <path
                d="M41.7917 12.5H8.20833C7.12678 12.5 6.25 13.3768 6.25 14.4583V14.7083C6.25 15.7899 7.12678 16.6667 8.20833 16.6667H41.7917C42.8732 16.6667 43.75 15.7899 43.75 14.7083V14.4583C43.75 13.3768 42.8732 12.5 41.7917 12.5Z"
                fill={iconColor}
              />
            </svg>
          </button>
        </header>
    </>
  );
};

export default Header;
