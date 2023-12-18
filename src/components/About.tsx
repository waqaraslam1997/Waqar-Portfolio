import DevImage from "./DevImage";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Waqar Aslam",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 311 0255089",
  },
  {
    icon: <MailIcon size={20} />,
    text: "waqar.king10@outlook.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 14 February, 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors of Arts",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Malir-15 Karachi, Pakistan.",
  },
];

const educationData = [
  {
    title: "education",
    data: [
      {
        institute: "Federal Urdu University",
        qualification: "Bachelors of Arts",
        year: "2019 - 2022",
      },
      {
        institute: "Govt. Science Superior College",
        qualification: "Computer Science",
        year: "2015 - 2017",
      },
      {
        institute: "Jinnah's Dream Sec. School",
        qualification: "Computer Science",
        year: "2012 - 2014",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "UpWork",
        role: "Full Stack Web-Developer",
        year: "2021 to Till Date",
      },
      {
        company: "Xtreme Computer",
        role: "Senior Developer",
        year: "2020 - 2021",
      },
      {
        company: "Fast Computers",
        role: "Software Engineer",
        year: "2018 - 2019",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Full-Stack Developer",
      },
      {
        name: "NextJs, Tailwind CSS",
      },
      {
        name: "Front-End Developer",
      },
      {
        name: "HTML, CSS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: "/about/vscode.svg",
      },
      {
        imagePath: "/about/notion.svg",
      },
      {
        imagePath: "/about/figma.svg",
      },
      {
        imagePath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImage
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgsrc={"/about/developer.png"}
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-40 xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-40 xl:w-auto" value="qualifications">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-40 xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-start">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Urdu</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-4 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience & Education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(educationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(educationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[80px] w-[1px] bg-border relative ml-2">
                                    <div className="h-3 w-3 rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration:500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-muted-foreground text-lg leading-none mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4 text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(educationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(educationData, "education").data.map(
                            (item, index) => {
                              const { institute, qualification, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[80px] w-[1px] bg-border relative ml-2">
                                    <div className="h-3 w-3 rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration:500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {institute}
                                    </div>
                                    <div className=" text-muted-foreground text-lg leading-none mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills tab */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skill */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (items, index) => {
                            const { name } = items;
                            return (
                              <div
                                className=" w-2/4 mx-auto xl:mx-0 text-center xl:text-left "
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map(
                          (items, index) => {
                            const { imagePath } = items;
                            return (
                              <div className="" key={index}>
                                <Image
                                  src={imagePath}
                                  alt=""
                                  width={48}
                                  height={48}
                                  priority
                                />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
