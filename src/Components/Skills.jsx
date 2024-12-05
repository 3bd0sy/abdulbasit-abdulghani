/* eslint-disable react/prop-types */
import { SectionTitle } from "./SectionTitle";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  const [divRef, divInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <motion.div
      ref={divRef}
      initial={{ scale: 0 }}
      animate={divInView ? { scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="card_hover w-[100px] h-[125px] sm:w-[200px] sm:h-[225px] flex flex-col gap-2 sm:gap-8 px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]"
    >
      <svg
        aria-hidden="true"
        className="icon w-[64px] sm:w-[100px] h-[64px] sm:h-[100px]"
      >
        <use href={`#${props.name}`}></use>
      </svg>
      <h3 className="text-base capitalize font-black text-white sm:text-[28px]">
        {props.name}
      </h3>
    </motion.div>
  );
};
const Skills = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const data = [
    "python",
    "css",
    "html",
    "react",
    "figma",
    "blender",
    "tailwind",
    "raspberry",
    "c++",
    "typeScript",
  ];
  return (
    <motion.section
      role="region"
      aria-label="Skills Section"
      ref={sectionRef}
      initial={{ y: 100, opacity: 0 }}
      animate={sectionInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <SectionTitle title="SKILLS" iconName="skills" />
      <div className=" mt-20 md:mt-24 px-5 flex flex-wrap gap-7 justify-center lg:max-w-[1000px] mx-auto ">
        {data.map((item, index) => (
          <Card key={index} name={item} />
        ))}
      </div>
      <div className="animation  w-[40%] h-[40%] bg-blue-600 top-[500px]"></div>
    </motion.section>
  );
};

export default Skills;
