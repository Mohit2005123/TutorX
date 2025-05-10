"use client";

import Carousel from "@/components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/images/teach.jpg", // Correct path, remove "/public"
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/images/student.jpg", // Correct path, remove "/public"
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "/images/prof.jpg", // Correct path, remove "/public"
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}

