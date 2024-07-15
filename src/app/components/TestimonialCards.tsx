"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonial = [
  {
    quote:
      "Arohi Software has entered a dynamic partnership with VS Tech to accelerate business growth. Sanket Ghodake, CEO and Chairman of Arohi Software, remarked, Joining forces with VS Tech allows us to navigate challenges and set new industry standards.",
    name: "Sanket Ghodake",
    title: "Arohi Software Partners with VS Tech for Strategic Growth",
  },
  {
    quote:
      "Arohi Software and VS Tech Horizon have partnered to innovate and set new standards. CEO Sanket Ghodake announced, This partnership empowers us to excel. They've also launched a scholarship program from grade 10 to graduate level, providing scholarships, prizes, gifts, and accolades, emphasizing their commitment to nurturing talent and community development.",
    name: "Arohi Software",
    title:
      " Arohi Software and VS Tech Horizon Launch Scholarship Program for Students",
  },
  {
    quote:
      "Arohi Software has entered a dynamic partnership with VS Tech to accelerate business growth. Sanket Ghodake, CEO and Chairman of Arohi Software, remarked, Joining forces with VS Tech allows us to navigate challenges and set new industry standards.",
    name: "Sanket Ghodake",
    title: "Arohi Software Partners with VS Tech for Strategic Growth",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  pt-20 relative overflow-hidden">
      <h2 className="text-3xl font-bold  mb-20 ml-20 z-10">
        Arohi Software News
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-9xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonial}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
