import React from "react";
import ThinkCard from "@/app/components/ThinkCard";
import Footer from "@/app/components/Footer";
import CareerComponent from "../components/CareersComponent";
import Partners from "../components/Partners";
import Feedform from "../components/Feedform";

const sharedClasses = {
  textZinc: "text-zinc-500 dark:text-zinc-400",
  textZincBold: "text-zinc-900 dark:text-zinc-100",
  textBase: "text-base",
  textLg: "text-lg",
  leading6: "leading-6",
  mt2: "mt-2",
  mt4: "mt-4",
  mt10: "mt-10",
  maxW7xl: "max-w-7xl",
  mxAuto: "mx-auto",
  py12: "py-12",
  px4: "px-4",
  smPx6: "sm:px-6",
  lgPx8: "lg:px-8",
  textCenter: "text-center",
  grid: "grid",
  gridCols2: "grid-cols-2",
  gridCols3: "grid-cols-3",
  gapX8: "gap-x-8",
  gapY10: "gap-y-10",
  spaceY10: "space-y-10",
  spaceY0: "space-y-0",
};

const ValueItem = ({ title, description }: any) => (
  <div>
    <dt
      className={`${sharedClasses.textLg} ${sharedClasses.leading6} ${sharedClasses.textZincBold}`}
    >
      {title}
    </dt>
    <dd
      className={`${sharedClasses.mt2} ${sharedClasses.textBase} ${sharedClasses.textZinc} text-justify `}
    >
      {description}
    </dd>
  </div>
);
const Page = () => {
  return (
    <div>
      <div className="bg-black h-24"></div>

      <div
        className="sm:h-[85vh] h-[50vh] w-full pt-7"
        style={{
          backgroundImage: "url('/assets/WhatweThink/mainbackgraound.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container h-full">
          <div className="container mx-10 font-bold text-white-100 border-b-2 border-b-slate-300 py-3">
            <p>Stay ahead of change</p>
          </div>
          <div className="container mt-6 content-center h-[70%]">
            <p className="font-normal text-lg sm:text-3xl">
              Explore our research, insights, and examples of real
              <br />
              client impact, designed to help you embrace the key forces
              <br />
              of change and get to value faster.
            </p>
          </div>
        </div>
      </div>

      {/* Cards display */}
      <div className="container flex justify-around py-10 flex-wrap">
        <ThinkCard
          images="https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg"
          altText="this is img"
          title="Generative AI for customer growth"
          text="Real work today suggests generative AI is poised to help businesses achieve stronger growth across marketing, sales and services."
        />
        <ThinkCard
          images="https://dynamicmedia.accenture.com/is/image/accenture/MandA-TL-image-3840x2160:rad-5x3?ts=1715047724829&fit=constrain&dpr=off"
          altText="this is img"
          title="Customer-Centric Approach"
          text="Invest in improving customer service and engagement,  Implement robust feedback systems to understand and act on customer needs."
        />
        <ThinkCard
          images="https://dynamicmedia.accenture.com/is/image/accenture/Hero_Smart_v1:rad-5x3?ts=1717518201472&fit=constrain&dpr=off"
          altText="this is img"
          title="Automation and AI"
          text="Use automation and AI to improve efficiency and service delivery.Invest in digital tools and platforms to streamline operations and enhance customer interaction."
        />
        <ThinkCard
          images="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Paradox-Choice-CFOs-Hero-1200x400:rad-5x3?ts=1706171340303&fmt=webp-alpha&wid=1200&fit=constrain&op_sharpen=1&dpr=off"
          altText="this is img"
          title="Talent Management"
          text="Regularly upskill employees to keep pace with industry changes.Foster a positive work environment to retain talent."
        />
        <ThinkCard
          images="https://dynamicmedia.accenture.com/is/image/accenture/Hero%20Image_3840x2160__Total%20Enterprise%20Reinvention%202024:rad-5x3?ts=1716508517954&dpr=off&wid=1600"
          altText="this is img"
          title="Performance Metrics and Evaluation"
          text="Conduct regular performance reviews to stay on track with goals and objectives.Define and monitor Key Performance Indicators  to measure success and areas for improvement."
        />
        <ThinkCard
          images="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Commercial-Banking-Trends-2024-3840x2160:rad-5x3?ts=1713910608487&fit=constrain&dpr=off&wid=1600"
          altText="this is img"
          title="Invest in Research and Development"
          text="Develop prototypes and conduct thorough testing to refine the product before launch.Form a dedicated Research and Development team to focus on product innovation and development."
        />
        <ThinkCard
          images="https://dynamicmedia.accenture.com/is/image/accenture/ChatGPT_Hero_2064x1238_black_bg:rad-5x3-hd?ts=1710889004221&dpr=off&wid=1600"
          altText="this is img"
          title="Client Relationship Management"
          text="Focus on building long-term relationships with clients through excellent service and support. Implement loyalty programs or incentives for repeat clients."
        />
        <ThinkCard
          images="https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg"
          altText="this is img"
          title="Feedback and Engagement"
          text=" Encourage an open dialogue with your audience by inviting them to share their thoughts and feedback.Include interactive content such as polls, surveys, or forums to engage visitors."
        />
      </div>
{/* 
      <div>
        <div
          className={`${sharedClasses.maxW7xl} ${sharedClasses.mxAuto} ${sharedClasses.py12} ${sharedClasses.px4} ${sharedClasses.smPx6} ${sharedClasses.lgPx8}`}
        >
          <div className={sharedClasses.textCenter}>
            <h2 className={`text-3xl  ${sharedClasses.textZincBold}`}>
              Our Vision
            </h2>
            <p
              className={`w-[60vw] mx-auto ${sharedClasses.mt4} ${sharedClasses.textLg} ${sharedClasses.leading6} ${sharedClasses.textZinc} text-justify`}
            >
              At Arohi Software, we are driven by a vision to transform
              businesses through innovative technology solutions. Our insights
              and philosophies shape the way we approach challenges and create
              impactful solutions for our clients. Here, we share our thoughts
              on the evolving digital landscape, the future of business, and our
              commitment to excellence.
            </p>
          </div>
          <div className={sharedClasses.mt10}>
            <dl className={` grid grid-cols-6 gap-12 lg:w-[80vw] mx-auto`}>
              <div className="grid bg-gradient-to-br from-violet-300 to to-red-400 p-[1px] col-span-3 border border-whte rounded-lg ">
                <div className="bg-black p-4 rounded-[6px]">
                  <ValueItem
                    title="Empowering Digital Transformation"
                    description="We believe that digital transformation is not just about adopting new technologies but about fundamentally changing the way businesses operate and deliver value to their customers. Our goal is to empower businesses to navigate this transformation seamlessly and effectively. "
                  />
                </div>
              </div>
              <div className="grid col-span-3">
                <div className="border bg-gradient-to-br from-violet-300 to to-red-400 bg-black border-whte rounded-lg p-[1px]">
                  <div className="bg-black p-4 rounded-[6px]">
                    <ValueItem
                      title="Innovation at the Core"
                      description="Innovation is at the heart of everything we do. We continuously explore emerging technologies and develop innovative solutions that drive business growth and efficiency. From AI and machine learning to cloud computing and IoT, we are committed to staying at the forefront of technological advancements."
                    />
                  </div>
                </div>
                <div className="border bg-gradient-to-br from-violet-300 to to-red-400 bg-black border-whte rounded-lg p-[1px] mt-4">
                  <div className="bg-black p-4 rounded-[6px]">
                    <ValueItem
                      title="Customer-Centric Approach"
                      description="Our customers are at the center of our universe. We are dedicated to understanding their unique needs and challenges, and we tailor our solutions to deliver maximum impact. We believe that building strong, long-term relationships with our clients is key to mutual success."
                    />
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div> */}
      <Partners />
      <CareerComponent />
      <Feedform title=" with Arohi Software Development" />
      <Footer />
    </div>
  );
};

export default Page;
