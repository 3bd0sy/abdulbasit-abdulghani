import img1 from "../assets/ProjectsImages/img-1.webp";
import img2 from "../assets/ProjectsImages/img-2.webp";
import img3 from "../assets/ProjectsImages/img-3.webp";
import img4 from "../assets/ProjectsImages/img-4.webp";
import img5 from "../assets/ProjectsImages/img-5.webp";
import img6 from "../assets/ProjectsImages/img-6.webp";
import img7 from "../assets/ProjectsImages/img-7.webp";
import img8 from "../assets/ProjectsImages/img-8.webp";
import img9 from "../assets/ProjectsImages/img-9.webp";
import img10 from "../assets/ProjectsImages/img-10.webp";
import img11 from "../assets/ProjectsImages/img-11.webp";
import img12 from "../assets/ProjectsImages/img-12.webp";
import img13 from "../assets/ProjectsImages/img-13.webp";
import img14 from "../assets/ProjectsImages/img-14.webp";
const CardSlider = () => {
  const projectsData = [
    {
      id: 1,
      name: "contact form",
      description:
        "Responsive page with React,and Tailwind, handling form data.",
      image: img1,
      url: "https://github.com/3bd0sy/contact-form-react-tailwind",
    },
    {
      id: 2,
      name: "animated form",
      description: "Animated React form using Tailwind and Framer Motion.",
      image: img2,
      url: "https://github.com/3bd0sy/animated-form",
    },
    {
      id: 3,
      name: "front end app",
      description: "Next.js app created for a company exam with CSS.",
      image: img3,
      url: "https://github.com/3bd0sy/frent-end-app",
    },
    {
      id: 4,
      name: "self driving car",
      description: "AI-powered car with Raspberry Pi, OpenCV, and TensorFlow.",
      image: img4,
      url: "https://github.com/3bd0sy/self_driving_car_raspberryPI",
    },
    {
      id: 5,
      name: "post app",
      description: "React app with API integration for company application.",
      image: img5,
      url: "https://github.com/3bd0sy/React-Posts-App",
    },
    {
      id: 6,
      name: "Gym app",
      description: "Responsive React site for gym services and schedules.",
      image: img6,
      url: "https://github.com/3bd0sy/GYM_APP",
    },
    {
      id: 7,
      name: "Social Media App",
      description: "Full-stack social media app with React and Express.",
      image: img7,
      url: "https://github.com/3bd0sy/Social-Media-App",
    },
    {
      id: 8,
      name: "fitclub",
      description:
        "Fitness club landing page with animations and mobile version.",
      image: img8,
      url: "https://github.com/3bd0sy/FitClub",
    },
    {
      id: 9,
      name: "Meta project",
      description: "Project for earning Meta Web Developer certification.",
      image: img9,
      url: "https://github.com/3bd0sy/Meta-Front-End-Developer-project",
    },
    {
      id: 10,
      name: "protoflio",
      description: "React and CSS portfolio with motion effects and swiper.",
      image: img10,
      url: "https://github.com/3bd0sy/protoflio",
    },
    {
      id: 11,
      name: "e_store",
      description: "Laravel and React store with API integration.",
      image: img11,
      url: "https://github.com/3bd0sy/e_store",
    },
    {
      id: 12,
      name: "tic tac toe",
      description: "Classic Tic-Tac-Toe game built with React.",
      image: img12,
      url: "https://github.com/3bd0sy/tic-tac-toe",
    },
    {
      id: 13,
      name: "youtube api",
      description: "Python script for YouTube API search functionality.",
      image: img13,
      url: "https://github.com/3bd0sy/youtube_api_with_python",
    },
    {
      id: 14,
      name: "Solar Designer",
      description: "C# app for solar energy system calculations.",
      image: img14,
      url: "",
    },
  ];

  return (
    <div className="flex flex-col items-center  bg-[#2B2B2B]  h-[390px]  sm:h-[450px] justify-center ">
      <div className=" relative w-full max-w-[1440px] overflow-x-auto snap-x snap-mandatory flex gap-10  hide-scrollbar">
        {projectsData.map((card) => (
          <div
            key={card.id}
            className="shrink-0 w-[250px] h-[300px] sm:w-[300px] sm:h-[390px]  flex6 flex-col items-center bg-[#414852] rounded-[25px] overflow-hidden shadow-lg backdrop-blur-md  snap-center"
          >
            <img
              src={card.image}
              alt={card.description}
              loading="lazy"
              width={300}
              height={200}
              className="w-full object-cover h-[150px] sm:h-[200px] mb-5"
            />
            <div className="text-center h-[150px] sm:h-[190px] flex px-2 pb-5 flex-col justify-around">
              <h2
                className="font-inter text-white capitalize text-base sm:text-2xl font-bold"
              >
                {card.name}
              </h2>
              <p className="text-[#B4B6C1] leading-[24px]  text-xs sm:text-base font-medium">
                {card.description}
              </p>
              <div
                className="font-inter text-xl sm:text-[30px] text-[#44A9F8]   hover:bg-opacity-10 hover:text-white hover:border-white transition"
              >
                <a href={card.url}>Link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
