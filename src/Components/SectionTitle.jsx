/* eslint-disable react/prop-types */
export const SectionTitle = ({ title, iconName }) => {
  return (
    <>
      <div
        id={title}
        style={{ alignSelf: "auto" }}
        className="flex mx-auto items-center justify-center gap-3 sm:pb-1 w-[210px] sm:w-[410px] border-b-4 sm:border-b-8 border-primary font-black"
      >
        <svg  aria-hidden="true" className="icon" width={50} height={50}>
          <use href={`#${iconName}`}></use>
        </svg>
        <h2 className="text-white text-2xl sm:text-[48px]">{title}</h2>
      </div>
    </>
  );
};
