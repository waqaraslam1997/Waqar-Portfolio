import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Social from "./Social";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full p-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              underlineStyles=""
            />
          </div>
          <div>
            <Social
              containerStyles={"flex gap-x-4"}
              iconStyles={"text-2xl"}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
