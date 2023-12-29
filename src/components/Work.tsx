"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/oop.jpg",
    category: "TypeScript",
    name: "OOP System",
    description: "Open terminal and type, npx waqar_oop then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/OOP.git",
    github: "https://github.com/waqaraslam1997/OOP.git",
  },
  {
    image: "/work/portfolio.jpg",
    category: "Next js",
    name: "Portfolio Website",
    description: "This is my portfolio Website ;)",
    link: "/",
    github: "https://github.com/waqaraslam1997/Waqar-Portfolio.git",
  },
  {
    image: "/work/timer.jpg",
    category: "TypeScript",
    name: "Countdown Timer",
    description: "Open terminal and type, npx waqar_countdown then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/countdown_timer.git",
    github: "https://github.com/waqaraslam1997/countdown_timer.git",
  },
  {
    image: "/work/student_management.jpg",
    category: "TypeScript",
    name: "Student Management",
    description: "Open terminal and type, npx waqar_student_management then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/student_management_system.git",
    github: "https://github.com/waqaraslam1997/student_management_system.git",
  },
  {
    image: "/work/calculator.jpg",
    category: "TypeScript",
    name: "CLI Calculator",
    description: "Open terminal and type, npx waqar-calc then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/calculator-waqar.git",
    github: "https://github.com/waqaraslam1997/calculator-waqar.git",
  },
  {
    image: "/work/guess_game.jpg",
    category: "TypeScript",
    name: "Guessing Game",
    description: "Open terminal and type, npx waqar-game-guess then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/Waqar-Guess-Game.git",
    github: "https://github.com/waqaraslam1997/Waqar-Guess-Game.git",
  },
  {
    image: "/work/bank.jpg",
    category: "TypeScript",
    name: "ATM Function",
    description: "Open terminal and type, npx waqar_atm then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/ATM_Machine.git",
    github: "https://github.com/waqaraslam1997/ATM_Machine.git",
  },
  {
    image: "/work/todo.jpg",
    category: "TypeScript",
    name: "TODO List",
    description: "Open terminal and type, npx waqar_todo then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/CLI_todo_list.git",
    github: "https://github.com/waqaraslam1997/CLI_todo_list.git",
  },
  {
    image: "/work/currency_converter.jpg",
    category: "TypeScript",
    name: "Currency Converter",
    description: "Open terminal and type, npx waqar_currency_converter then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/currency_converter.git",
    github: "https://github.com/waqaraslam1997/currency_converter.git",
  },
  {
    image: "/work/word_counter.jpg",
    category: "TypeScript",
    name: "Word Counter",
    description: "Open terminal and type, npx waqar_word_counter then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/word_counter.git",
    github: "https://github.com/waqaraslam1997/word_counter.git",
  },
  {
    image: "/work/adventure_game.jpg",
    category: "TypeScript",
    name: "Adventure Game",
    description: "Open terminal and type, npx waqar_adventuregame then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/Adventure_Game.git",
    github: "https://github.com/waqaraslam1997/Adventure_Game.git",
  },
  {
    image: "/work/quiz.jpg",
    category: "TypeScript",
    name: "CLI Quiz",
    description: "Open terminal and type, npx waqar_quiz then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/quiz.git",
    github: "https://github.com/waqaraslam1997/quiz.git",
  },
  {
    image: "/work/oop_bank.jpg",
    category: "TypeScript",
    name: "OOP Bank",
    description: "Open terminal and type, npx waqar_bank then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/OOP_Bank.git",
    github: "https://github.com/waqaraslam1997/OOP_Bank.git",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href={"/projects"}>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 project for the slider. */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
