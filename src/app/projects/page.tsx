"use client";

import React, { useState } from "react";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/portfolio.jpg",
    category: "Next js",
    name: "Portfolio Website",
    description: "This is my portfolio Website ;)",
    link: "/",
    github: "https://github.com/waqaraslam1997/Waqar-Portfolio.git",
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
    image: "/work/student_management.jpg",
    category: "TypeScript",
    name: "Student Management",
    description: "Open terminal and type, npx waqar_student_management then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/student_management_system.git",
    github: "https://github.com/waqaraslam1997/student_management_system.git",
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
    image: "/work/timer.jpg",
    category: "TypeScript",
    name: "Countdown Timer",
    description: "Open terminal and type, npx waqar_countdown then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/countdown_timer.git",
    github: "https://github.com/waqaraslam1997/countdown_timer.git",
  },
  {
    image: "/work/oop.jpg",
    category: "TypeScript",
    name: "OOP System",
    description: "Open terminal and type, npx waqar_oop then hit enter to execute it.",
    link: "https://github.com/waqaraslam1997/OOP.git",
    github: "https://github.com/waqaraslam1997/OOP.git",
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

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filder by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto min-h-screen">
        {/* heading */}
        <h2 className="section-title mb-8 xl:mb-12 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full h-full grid md:grid-cols-3 lg:max-w-2xl mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => {
                    setCategory(category);
                  }}
                  key={index}
                  value={category}
                  className=" w-40 capitalize md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tab content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {filterProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
