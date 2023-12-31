import { MailIcon, PhoneCall, HomeIcon } from "lucide-react";

// component form
import Form from "@/components/Form";

const contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className=" w-8 h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">{"Let's Work Together"}</h1>
            <p className="subtitle max-w-[400px]">
              {"If you're looking for a passionate web developer who can bring your vision to life, I'd love to connect and discuss your project."}
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex bg-contact_image_light dark:bg-contact_image_dark bg-no-repeat bg-top w-full"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-12 xl:mb-24 text-base xl:text-lg">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24">
            {/* mail */}
            <div className="flex items-center gap-x-8 ">
              <MailIcon size={18} className="text-primary" />
              <div>waqar.king10@outlook.com</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8 ">
              <PhoneCall size={18} className="text-primary" />
              <div>+92 311 0255089</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8 ">
              <HomeIcon size={18} className="text-primary" />
              <div>Aswan Town, Malir-15, Karachi.</div>
            </div>
          </div>
          {/* form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default contact;
