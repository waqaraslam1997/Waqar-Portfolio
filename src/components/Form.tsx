"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { User, MailIcon, ArrowRightIcon, MessagesSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-8" size={20} />
      </div>
      {/* Email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-8" size={20} />
      </div>
      {/* Message */}
      <div className="relative flex items-center">
        <Textarea id="name" placeholder="Your Message Here!" />
        <MessagesSquare className="absolute top-4 right-8" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[160px]">
        {"Let's Talk"}
        <ArrowRightIcon size={20}/>
        </Button>
    </form>
  );
};

export default Form;
