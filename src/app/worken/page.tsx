"use client";

import React from 'react';
import WorkCard from "@/app/components/WorkCard/WorkCard";
import CareersPage from "@/app/components/CareersComponent";
import Footer from "@/app/components/Footer";
import StayConnected from "@/app/components/StayConnected";
import "./worken.css";

const page: React.FC = () => {
  return (
    <div className="bg-white h-24">
      <div className=" bg-white ">
        <div className="lg:container flex-col-reverse flex justify-around items-center lg:flex-wrap h-[80vh] ">
          <div className=" lg:w-5/12 m-7">
            <p className="text-black text-3xl lg:text-6xl w-fit text-wrap font-bold">
              Arohi Software <br />Work Environment
            </p>
            <p className="text-black font-light text-2xl mt-5" style={{fontWeight:600}}>
              Be your best every day in a workplace culture that helps drive
              innovation in everything you do.
            </p>
          </div>

          <div
            className="h-[55vh] lg:w-[54%] w-[100vw]"
            style={{
              backgroundImage:
                "url('https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment-marquee?qlt=85&wid=1024&ts=1686340609764&fit=constrain&dpr=off')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className=" lg:h-[80vh] bg-gray-200 p-5 ">
        <div className="lg:container">
          <p className="text-black lg:text-5xl text-3xl text-center pt-6 font-bold ">
            Innovating in a truly human way
          </p>

          <div className="lg:container mt-6 lg:flex justify-around items-center ">
            <div className="lg:w-[35vw] ">
              <p className="text-black font-midium">
              `&quot;`Innovating in a truly human way`&quot;` emphasizes creating technological advancements that prioritize human needs, values, and experiences. It focuses on empathy-driven design, ethical considerations, and user-centric solutions. This approach ensures that innovation enhances human life, fosters inclusivity, and addresses real-world challenges.
                <br />
                <br />
                By integrating technology with a deep understanding of human behavior and societal impacts, we create solutions that are not only groundbreaking but also meaningful and beneficial for people and communities
                
              </p>
            </div>

            <div
              className="h-[55vh] lg:w-4/12 "
              style={{
                backgroundImage:
                  "url('https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment-img1?qlt=85&wid=800&ts=1704397327799&fit=constrain&dpr=off')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="workBalance">
        <div className="workBalance-container text-center">
          <p className="text-3xl block font-bold text-center lg:text-6xl p-5">
            Work your way
          </p>
          <span className='text-center'>
            Balance your work and personal life with a range of workplace
            options and innovative tools that <br /> help you stay connected
            globally.
          </span>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-32 pb-32">
            <WorkCard
              images="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment1-768x432?qlt=85&wid=480&ts=1704397328444&fit=constrain&dpr=off"
              altText="this is img"
              text="We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules."
              title="Flexible Schedules"
            />
            <WorkCard
              images="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment2-768x432?qlt=85&wid=480&ts=1686340609442&fit=constrain&dpr=off"
              altText="this is img"
              text="Work from a location other than a designated Accenture office or project site."
              title="Telecommute"
            />
            <WorkCard
              images="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment3-768x432?qlt=85&wid=480&ts=1692306911474&fit=constrain&dpr=off"
              altText="this is img"
              text="Manage your time away from home with fly-back flights, compressed workweeks, extended weekends and time at client."
              title="Client-Site Flexibility"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-5 text-black container">
        <span className="lg:text-5xl text-2xl font-bold">Our Culture</span>
        <div>
          <div className="mt-5 flex lg:flex-row flex-col-reverse justify-center items-center">
         
            <div className='lg:w-1/2'>
              <img
                src="/assets/worken/inovation.jpg"
                alt="innovation"
                className="w-[80vh] mx-auto lg:h-[40vh] h-[30vh] rounded-lg shadow-lg"
              />
            </div>
            <div className='lg:w-1/2 p-3 m-4'>
              <h2 className="text-xl font-bold my-5">Innovation and Creativity</h2>
              <p>
                At Arohi Software, we embrace a culture of innovation. Our team is
                encouraged to think outside the box and bring fresh ideas to the
                table. We believe that the best solutions come from diverse
                perspectives and creative problem-solving.
              </p>
            </div>
          </div>
          <div className="mt-5 flex lg:flex-row flex-col-reverse justify-center items-center">
         
         <div className='lg:w-1/2'>
           <img
             src="/assets/worken/teamwork.jpg"
             alt="innovation"
             className="w-[80vh] aspect-video lg:h-[40vh] h-[30vh] mx-auto  rounded-lg shadow-lg"
           />
         </div>
         <div className='lg:w-1/2 p-3 m-4'>
           <h2 className="text-xl font-bold my-5">Collaboration and Teamwork
           </h2>
           <p>
           We value collaboration and believe that great things happen when we work together. Our open and inclusive work environment ensures that everyone’s voice is heard, and we support each other to achieve our common goals.
           </p>
         </div>
       </div>
       <div className="mt-5 flex lg:flex-row flex-col-reverse justify-center items-center">
         
         <div className='lg:w-1/2'>
           <img
             src="/assets/worken/Learning.png"
             alt="innovation"
             className="w-[80vh] lg:h-[40vh] h-[30vh] mx-auto rounded-lg shadow-lg"
           />
         </div>
         <div className='lg:w-1/2 p-3 m-4'>
           <h2 className="text-xl font-bold my-5">Continuous Learning</h2>
           <p>
           Technology is ever-evolving, and so are we. We invest in our employees’ professional development through ongoing training, workshops, and access to the latest industry resources. We are committed to helping our team stay ahead of the curve.
           </p>
         </div>
       </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <CareersPage />
        <StayConnected />
      </div>

      <Footer />
    </div>
  );
};

export default page;
