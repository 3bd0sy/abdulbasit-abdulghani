/* eslint-disable react/prop-types */
import { SectionTitle } from "./SectionTitle";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const Card = ({ value }) => {
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
      className=" card_hover2 hover:bg-[#444] w-[250px] h-[100px] sm:w-[300px] sm:h-[150px] flex flex-col gap-2 sm:gap-8 px-2 py-3 justify-center items-center bg-white bg-opacity-30 rounded-[25px]"
    >
      <h3 className="text-base text-center text-white sm:text-2xl ">
        {value.Certification}
      </h3>
      <a
        href={value.url}
        target="_blank"
        className="text-sm  font-regular text-[#A4A4A5] sm:text-xl"
      >
        {value.Company}
      </a>
    </motion.div>
  );
};

const Certification = () => {
const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: isLargeScreen? 0.2: 0,
  });

  const data = [
    {
      Certification: "Front-End Developer Capstone",
      Company: "Coursera",
      url: "https://coursera.org/verify/3TDQ8KBSVDGF",
    },
    {
      Certification: "Principles of UX/UI Design",
      Company: "Coursera",
      url: "https://coursera.org/verify/3TY8UVBE6M4L",
    },
    {
      Certification: "Computer Vision with Python",
      Company: "Coursera",
      url: "https://coursera.org/verify/84SMSRD39MQW",
    },
    {
      Certification: "Version Control",
      Company: "Coursera",
      url: "https://coursera.org/verify/A65BYV4UB79W",
    },
    {
      Certification: "Programming with JavaScript",
      Company: "Coursera",
      url: "https://coursera.org/verify/EAVRWRSUZ8HZ",
    },
    {
      Certification: "HTML and CSS in depth",
      Company: "Coursera",
      url: "https://coursera.org/verify/G2N26LH6J6XC",
    },

    {
      Certification: "Typescript in React",
      Company: "Coursera",
      url: "https://coursera.org/verify/U5WYGTRWVQ4J",
    },

    {
      Certification: "Introduction to Front-End Development",
      Company: "Coursera",
      url: "https://coursera.org/verify/UJLM6GXS3MB2",
    },
    {
      Certification: "Advanced React",
      Company: "Coursera",
      url: "https://coursera.org/verify/VUEPNKFPVW4F",
    },

    {
      Certification: "TensorFlow for AI",
      Company: "DeepLearning.AI",
      url: "https://coursera.org/verify/E2QH8WCUYQCT",
    },
    {
      Certification: "OpenCV Basics",
      Company: " Coursera",
      url: "https://coursera.org/verify/84SMSRD39MQW",
    },
    {
      Certification: "Command Line in Linux",
      Company: "Coursera ",
      url: "https://coursera.org/verify/VZ2AMTFF9WCF",
    },
    {
      Certification: "Classification Transfer Learning in Keras: ",
      Company: "Coursera ",
      url: "https://coursera.org/verify/PFUDLPMBQKRD",
    },
    {
      Certification: "Raspberry Pi Platform",
      Company: "Coursera ",
      url: "https://coursera.org/verify/P4BXKRBNBZEG",
    },
    {
      Certification: "Chatbot with Rasa and Python",
      Company: "Coursera ",
      url: "https://coursera.org/verify/4MVUW8WHUV8E",
    },
    {
      Certification: "Python course",
      Company: "Udemy",
      url: "https://www.udemy.com/certificate/UC-304f8d42-ae8e-4186-b3d1-0ae54a65d7cb/",
    },
    {
      Certification: "Project Management ",
      Company: "Orange Organization",
      url: "#",
    },
    {
      Certification: "Digital Marketing Fundamentals",
      Company: "Niuversity Organization",
      url: "#",
    },
    {
      Certification: "Advanced Digital Marketing",
      Company: "Niuversity Organization",
      url: "#",
    },
    {
      Certification: "Entrepreneurial & Business Skills",
      Company: "Niuversity Organization",
      url: "#",
    },
  ];
  return (
    <motion.section
      ref={sectionRef}
      initial={{ y: 100, opacity: 0 }}
      animate={sectionInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <SectionTitle title="CERTIFICATION" iconName="certification" />
      <div className="mx-8 mt-20 md:mt-24 sm:mx-20 md:mx-28">
        <div className="flex flex-wrap gap-7 justify-center lg:max-w-[1000px] mx-auto ">
          {data.map((value, index) => (
            <Card key={index} value={value} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certification;
