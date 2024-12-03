import { motion } from "motion/react";
import logo from "../assets/hero-image.webp";
const Hero = () => {
  return (
    <>
      <section className="relative flex flex-col gap-[50px] lg:gap-0 lg:flex-row-reverse  items-center  lg:justify-between text-white text-center lg:text-left max-w-[1440px] p-2 md:px-16">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            animation:
              "colorChange 3s infinite alternate, borderChange 4s infinite alternate",
          }}
          src={logo}
          className="w-[475px] "
          loading="lazy"
          alt="A picture of Abdlubasit Abdulghani, a Front End Developer"
        />
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="max-w-[750px] flex flex-col sm:gap-[20px] items-center lg:items-start lg:gap-[5px]"
        >
          <h1 className=" text-2xl capitalize text-white sm:text-[48px] md:text-[64px] md:leading-[74px]">
            i am
            <span className="font-black glow-text ">
              <br className="sm:hidden" /> abdulbasit{" "}
              <br className="hidden md:flex" /> abdulghani
            </span>
          </h1>

          <p className="bg-[#38B6FC] px-4 py-1 rounded-md text-black font-black my-4 text-base sm:text-xl">
            Web Developer & Designer{" "}
          </p>
          <p className="text-base text-[#A4A4A5] md:text-xl lg:text-2xl my-3 md:my-6">
            Frontend Developer and IT Engineering have a strong foundation in
            creating user friendly and visually appealing web applications.
            Skilled in modern technologies, like React, and experienced in
            designing responsive interfaces. Committed to delivering clean,
            efficient code and continuously improving through learning and
            innovation.
          </p>
          <button className="rounded-[30px] bg-[#38B6FC] text-black py-3 px-5 text-base leading-[16px] mt-2  md:text-xl md:px-5 md:py-4 md:leading-[20px] ml-5 sm:ml-0">
            <a href="#CallMe">CONTACT ME</a>
          </button>
        </motion.div>
        <div className="animation w-[40%] h-[40%] bg-blue-400 top-[400px] right-0"></div>
      </section>
    </>
  );
};

export default Hero;
