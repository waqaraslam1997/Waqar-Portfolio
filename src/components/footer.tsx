import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Social */}
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-xl hover:text-white/70 dark:hover:text-primary text-primary dark:text-white transition-all"
          />
          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Waqar Aslam. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
