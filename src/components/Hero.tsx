import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImage from "./DevImage";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
        
          {/* Text */}
        
          <div className="flex flex-col max-w-[600px] justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, My name is Waqar Aslam</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim esse
              minus magni placeat amet deleniti molestiae libero aliquid
              molestias numquam ad natus sapiente tenetur dicta autem porro,
              alias iure veritatis.
            </p>
          
            {/* Button */}
          
            <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download <Download size={18} />
              </Button>
            </div>
          
            {/* Socials */}
          
            <Social
              containerStyles="flex gap-x-6 mx-auto lg:mx-0"
              iconStyles="text-foreground hover:text-primary text-xl transition-all"
            />
          </div>

          {/* Image */}
          
          <div className="hidden xl:flex relative">
          
            {/* Badge */}
          
            <Badge 
            containerStyles='absolute top-[24%] -left-20'
            icon={<RiBriefcase4Fill />}
            endCountNum={3}
            badgeText={`Years Of Experience`}
            endCountText={``} />
          
            {/* Badge 2*/}
          
            <Badge 
            containerStyles='absolute top-[80%] -left-2'
            icon={<RiTodoFill />}
            endCountNum={2}
            endCountText={`K`}
            badgeText={`Finished Projects`} />
          
            {/* Badge 3*/}
          
            <Badge 
            containerStyles='absolute top-[55%] -right-8'
            icon={<RiTeamFill />}
            endCountNum={4}
            endCountText={`K`}
            badgeText={`Happy Clients`} />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
          
            {/* Developer Image */}

            <DevImage
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgsrc={"/hero/developer.png"}
            />
          </div>
        
        </div>
       
        {/* Icon */}
       
        <div className="hidden absolute bottom-44 xl:bottom-12 left-1/2 md:flex animate-bounce">
          <RiArrowDownSLine className="text-2xl text-primary" />
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
