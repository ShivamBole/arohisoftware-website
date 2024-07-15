// components/StayConnected.tsx
"use client";

import React, { useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { MdTipsAndUpdates } from "react-icons/md";
import { TbFileAlert } from "react-icons/tb";
import Link from 'next/link';
import ContentSlider from "../components/ContentSlider";
import CareersComponent from "../components/CareersComponent";
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SharedButtonProps {
  className?: string;
  children: React.ReactNode;
}

const sharedButtonClasses = 'py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300';

const SharedButton: React.FC<SharedButtonProps> = ({ className, children }) => (
  <button className={`${sharedButtonClasses} ${className}`}>{children}</button>
);

const event = [
  {
    title: "FutureFest 2024: Unleashing Tomorrow's Innovations",
    date: "February 3, 2024",
    time: "10:00 AM - 8:00 PM",
    address: "Pune, Maharashtra",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellat obcaecati commodi! Aperiam itaque ad, facere quaerat eum, provident rerum beatae obcaecati laudantium incidunt ipsum ipsa neque.",
    imageUrl: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "FutureFest 2024: Unleashing Tomorrow's Innovations",
    date: "February 3, 2024",
    time: "10:00 AM - 8:00 PM",
    address: "Pune, Maharashtra",
    description: "Quaerat beatae excepturi rem amet placeat dolor perferendis, id aut error voluptatem ratione?. Perspiciatis dicta. Maxime dolores, atque accusantium molestias assumenda, explicabo, consequatur nemo distinctio dolore ex fugiat quis quidem natus iusto!",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]
function EventPage() {
  const images = [
    "https://assets.lummi.ai/assets/Qmdkwg1U8TttG7EBZ8PVeYSQBSjCw53vgC9XKUMaAS4z7T?auto=format&w=1500",
    "https://assets.lummi.ai/assets/Qmf3ESd5FAiVufEuKfCeZCtuxVSPcxkynogjMvHjEtHNpb?auto=format&w=1500",
    "https://assets.lummi.ai/assets/QmfASNx9gWu4AZTrAvogsGeZa72YUKLbkopbcHdrzgAqy6?auto=format&w=1500",
    "https://assets.lummi.ai/assets/QmRujGEci3URiLwknwUJyr1fFzfBTT2L4KDuhBau5JVSFG?auto=format&w=1500 ",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  return (
    <div className='min-h-screen  bg-white overflow-hidden'>
      <div className='pt-24 scale-100  '>
        <Carousel
          plugins={[plugin.current]}
          className="w-screen "
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="">
                <div className=" ">
                  <Card className='w-screen'>
                    <CardContent className="flex items-center justify-center p-0">
                      <img height={1000} className='w-full max-h-[80vh]  object-cover ' src={images[index]} />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>


        </Carousel>
      </div>

      <h1 className='text-black mt-12 lg:mt-56 text-center text-5xl font-thin'>UPCOMING EVENTS 🎉</h1>

      <div className='w-[90vw] mx-auto mt-12 lg:mt-44'>
        {event.map((event, i) => (
          <Event key={i} {...event} />
        ))}
      </div>

      <div className='flex gap-5 flex-col items-center justify-center my-24'>
        <h2 className='text-5xl text-black font-thin mb-12'>Gleams of Events 🌟</h2>
        <div className='mx-12 lg:mx-0 lg:translate-x-12'>
          <Carousels images={images} />
        </div>
        <div className='lg:block hidden lg:-translate-x-12'>
          <Carousels images={images} />
        </div>
        <div className='lg:block hidden lg:translate-x-12'>
          <Carousels images={images} />
        </div>
      </div>

      <CareersComponent />
      <Footer />
    </div>
  );
};

interface EventProps {
  title: string;
  date: string;
  time: string;
  address: string;
  description: string;
  imageUrl: string;
}

const Event: React.FC<EventProps> = ({ title, date, time, address, description, imageUrl }) => (
  <div className="mt-12 relative   transition-all bg-gradient-to-br w-fit from-violet-400 to-orange-300  p-0">
    <div className="lg:w-[80vw] mx-auto transition-all backdrop-blur-xl flex flex-col text-black md:flex-row bg-[#39393a] opacity-35 p-6">
      <div className="md:w-1/2">
        <img src={imageUrl} className="object-cover w-full h-full" alt={title} />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center mb-4">
          <span className="mr-2">📅</span>
          <p className="text-lg">{date}</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">⏰</span>
          <p className="text-lg">{time}</p>
        </div>
        <div className="flex items-center mb-4">
          <span className="mr-2">📍</span>
          <p className="text-lg">{address}</p>
        </div>
        <p className="mb-4">{description}</p>
        <div className=" w-fit from-violet-400 rounded-lg to-orange-300 p-2">
          <button className="self-start bg-black text-white px-6 py-2 rounded-md">GET A TICKET</button>
        </div>
      </div>
      
    </div>
    <div className="bg-gradient-to-br absolute top-56 lg:left-96 left-20 w-fit from-violet-400 rounded-lg to-orange-300 p-2">
          <button className="self-start bg-black text-white lg:px-8 py-6   rounded-md text-4xl">Upcomming</button>
        </div>
    
  </div>
);

interface CarouselsProps {
  images: string[];
}

const Carousels: React.FC<CarouselsProps> = ({ images }) => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full max-w-5xl" onMouseLeave={plugin.current.reset}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img width={1000} height={1000} className='object-cover' src={image} alt={`Carousel ${index + 1}`} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default EventPage;
