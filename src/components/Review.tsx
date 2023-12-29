"use client";
import Image from "next/image";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// review data
const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "John Smith",
    job: "Data Scientist",
    review:
      "Exemplary coding skills, delivered a seamless and stunning site",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Emili Jackson",
    job: "Designer",
    review:
      "Innovative solutions, transformed our online presence entirely.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mark Henry",
    job: "Game Dev",
    review:
      "Impressive expertise in latest web technologies, highly recommend.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Juliet Reo",
    job: "AI Developer",
    review:
      "A true professional, elevated our site's performance remarkably",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Michael Clark",
    job: "Web Developer",
    review:
      "Exceptional design, navigability, and functionality—impressed.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Anderson",
    job: "App Developer",
    review:
      "Exceeded expectations, a reliable expert in cutting-edge tech.",
  },
];

const Review = () => {
  return (
    <section className="mb-12 xl:mb-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Review</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="min-h-[300px] bg-primary/10 dark:bg-secondary/40 p-8">
                  <CardHeader className="p-0 mb-12">
                    {/* Image */}
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        alt=""
                        priority
                        width={70}
                        height={70}
                      />
                    {/* name */}
                    <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p className="text-muted-foreground">{person.job}</p>
                    </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
