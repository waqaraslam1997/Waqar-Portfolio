
import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImage from "./DevImage";
import Badge from "./badge";
import Social from "./Social";



const Hero = () => {
  return (
    <section>
        <div className="container mx-auto">
            {/* Text */}
            <div>text</div>
            {/* Image */}
            <div>Image</div>
        </div>
        {/* Icon */}
        <div className="hidden absolute bottom-44 xl:bottom-12 left-1/2 md:flex animate-bounce">
            <RiArrowDownSLine className="text-2xl text-primary"/>
        </div>
    </section>
  )
}

export default Hero