
"use client"
import React from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Feedform from '../components/Feedform';
import HomepageCard from "../components/HomepageCard";
import CareersComponent from "../components/CareersComponent";
import OurPartners from "../components/OurPartners";

const research = () => {
  return (
    <div className=' min-h-screen'>
      <div className='absolute inset-0 bg-cover opacity-45' style={{backgroundImage: "url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}></div>
      <div className="relative flex flex-col p-6 lg:p-[150px] min-h-screen">
        <h1 className="pb-2 font-sans font-medium text-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          WHAT WE DO / RESEARCH & INNOVATION
        </h1>
        <hr className="bg-white h-[2px]" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} />
        <div className='flex-grow mt-10 p-4 lg:p-8' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <h1 className='text-3xl lg:text-[2.5rem] font-mono'>Shaping the Future of Technology</h1>
          <p className='pt-6 lg:pt-14 text-lg lg:text-3xl lg:w-[70%] w-full'>Your vision, our innovation: Building a better world together. </p>
          <button className='bg-white font-bold text-black rounded-md p-2 mt-10 lg:mt-[60px] hover:scale-110 transform transition-transform duration-200 w-40'>Let&apos;s Connect</button>
        </div>
      </div>

      <div className='w-full bg-gray-300 flex flex-col lg:flex-row justify-center lg:justify-between'>
        <div className='h-[350px] lg:h-auto lg:w-[500px] m-4 lg:m-[90px] bg-cover hover:scale-110 transform transition-transform duration-200' style={{backgroundImage: "url(https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}></div>
        <div className='h-auto lg:w-[500px] m-4 lg:m-[100px]'>
          <h1 className='font-normal text-2xl lg:text-3xl p-5 text-black'>We believe in the power of inspiration and invention to build greater futures.</h1>
          <p className='font-light text-gray-700 p-5 lg:w-[350px]'>Our researchers apply scientific rigor and a collaborative mindset to solve pressing problems faced by industry and society. We aspire to transform the world we live in by powering innovation.</p>
        </div>
      </div>

      <div className='w-full bg-white flex flex-col lg:flex-row justify-center lg:justify-between p-6 lg:p-[80px]'>
        <div className='h-[400px] lg:h-auto lg:w-[600px] bg-cover shadow-sm mb-6 lg:mb-0 hover:scale-110 transform transition-transform duration-200' style={{backgroundImage: "url(https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}></div>
        <div className='h-auto lg:w-[500px]'>
          <h1 className='p-5 font-mono text-3xl lg:text-4xl text-black'>Purposeful Development</h1>
          <p className='p-5 font-normal text-black lg:w-[500px] '>Today’s AI models can be made purposeful by infusing human ingenuity and contextual knowledge. Our inventions systematically integrate predictive intelligence, contextualized decision-making, and humanized semantic interactions in enterprise AI applications.</p>
          {/* <button className='text-white p-3 m-5 bg-black rounded-lg hover:scale-110 transform transition-transform duration-200 w-40'>Explore</button> */}
        </div>
      </div>

      <div className='w-full bg-white flex flex-col lg:flex-row justify-center lg:justify-between p-6 lg:p-[80px]'>
        <div className='h-auto lg:w-[500px] mb-6 lg:mb-0'>
          <h1 className='p-5 font-mono text-3xl lg:text-4xl text-black'>Computing Futures</h1>
          <p className='p-5 font-normal text-black lg:w-[500px]'>Efficient computing systems will be the backbone for businesses in the future. We invent high performance, fault-tolerant, and energy-efficient computing systems to meet the growing demands of AI and physics-based systems.</p>
          {/* <button className='text-white p-3 m-5 bg-black rounded-lg hover:scale-110 transform transition-transform duration-200 w-40'>Explore</button> */}
        </div>
        <div className='h-[400px] lg:h-auto lg:w-[600px] bg-cover shadow-sm hover:scale-110 transform transition-transform duration-200' style={{backgroundImage: "url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}></div>
      </div>
      <OurPartners/>
      <CareersComponent/>
      <Feedform title="Move to Cloud or Make the most of Existing Cloud Setup for the Next-phase-of-growth." />
      <Footer />
    </div>
  );
};

export default research;
