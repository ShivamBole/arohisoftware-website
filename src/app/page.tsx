"use client";
import React from "react";

import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Card from "@/app/components/Card";
import TestimonialCards from "@/app/components/TestimonialCards";
import CollegesPartners from "./components/Colleges";
import WhyChooseUs from "@/app/components/WhyChooseUs";

import Footer from "@/app/components/Footer";
import home from "../../public/home.jpg";
import Servicecard from "./components/ServicesCard";
import { Homelamp } from "./components/Homelamp";
import HomepageCard from "./components/HomepageCard";
import CareersComponent from "./components/CareersComponent";
import Feedform from "./components/Feedform";

import OurPartners from "./components/OurPartners";
import HomePageComponent from "./components/HomePageComponent";
import { auth } from "@/auth";

export default function Home() {

  // const session = await auth();
  // const user = session?.user;

  // console.log("Home -> user", user);


  return (
    <div className=" relative overflow-hidden">
      <HeroSection />
      <HomepageCard />
      <HomePageComponent />
      <WhyChooseUs />
      <Servicecard />
      <OurPartners />
      <CollegesPartners />
      <CareersComponent />
      <Feedform title="Business With Arohi Software " />
      <TestimonialCards />
      <Footer />
    </div>
  );
}
