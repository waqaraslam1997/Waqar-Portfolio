import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    Icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "We craft visually captivating websites that leave a lasting impression. Our designs are responsive, user-friendly, and optimized for conversions. Let us bring your brand to life with a captivating online presence.",
  },
  {
    Icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Mastering Next.js for dynamic, high-performance web applications. Leveraging React framework with server-side rendering for lightning-fast, SEO-friendly sites and efficient data fetching, delivering immersive user experiences.",
  },
  {
    Icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Website Optimizing",
    description:
      "Revolutionize your website with cutting-edge technology for unparalleled speed, performance, and user experience. we elevate your online presence to thrive in the digital landscape. Stay ahead with our optimized solutions.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-16">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.Icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
