"use client";

import React, { useState } from "react";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Xtreme Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next js",
    name: "Solsiva Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Neon Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Next js",
    name: "Evolve Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "Xtreme Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Next js",
    name: "Revolution Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Photon Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Smart Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const projects = () => {
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
          <TabsList className="w-full h-full grid md:grid-cols-4 lg:max-w-2xl mb-12 mx-auto md:border dark:border-none">
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

export default projects;
