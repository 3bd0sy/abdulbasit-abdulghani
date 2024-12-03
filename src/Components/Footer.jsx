import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [spanRef, spanInView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [spanRef2, spanInView2] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <footer className=" py-16">
      <div className="text-[30px] max-w-[350px] px-7 sm:px0 sm:max-w-max mx-auto text-outline lg:text-[70px] md:text-[50px] xl:text-[80px] flex flex-col sm:flex-row justify-center items-center">
        <motion.span
          ref={spanRef}
          initial={{ x: -200, opacity:  0}}
          animate={spanInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ alignSelf: "start" }}
        >
          ABDULBASIT&nbsp;
        </motion.span>
        <motion.span
          ref={spanRef2}
          initial={{ x: 200, opacity: 0 }}
          animate={spanInView2 ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ alignSelf: "end" }}
        >
          ABDULGHANI
        </motion.span>
      </div>
      <p className="text-center font-regular text-[#A4A4A5] text-xs sm:text-xl lg:text-[32px] mt-6 sm:mt-10">
        Copyright © 2025 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
