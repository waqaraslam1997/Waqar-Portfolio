import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[300px] flex justify-center items-center dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl rounded-t-lg"
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          {/* btn links */}
          <div className="flex gap-x-4">
            <Link href={project.link} className="bg-gray-800 w-14 h-14 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-200">
              <Link2Icon className="text-white"/>
            </Link>
            <Link href={project.github} className="bg-gray-800 w-14 h-14 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-200">
              <Github className="text-white"/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className=" uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
