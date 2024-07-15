import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import images from "../../../public/assets/Invester/images1.jpg";
import PerformanceCard from "../components/PerformanceCard/PerformanceCard";
import InfoCard from "../components/investerCard/InfoCard";
import ImageGrid from "../components/investerCard/newupdate";
import Feedform from "../components/Feedform";

import OurPartners from "../components/OurPartners";


const page = () => {
  return (
    <div>
      <div
        className="absolute inset-0 bg-cover opacity-45"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=)`,
        }}
      ></div>
      <div className="relative flex flex-col px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-24 min-h-screen">
        <h1
          className="pb-2 py-20 font-sans font-medium text-lg text-white"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          WHAT WE DO / INVESTOR RELATIONS
        </h1>
        <hr className="bg-white h-[2px]" />
        <div className="mt-10 p-6 sm:p-8 bg-opacity-50 rounded-md">
          <h1 className="sm:text-6xl text-3xl font-mono">Arohi 360° VALUE</h1>
          <p className="sm:pt-14 pt-5 font-normal text-xl w-full sm:w-4/5 lg:w-3/4">
            At Arohi Software, we define 360° value as delivering the financial
            business case and unique value that our clients seek. We strive to
            partner with our clients to achieve greater progress on inclusion
            and diversity, reskill and upskill their employees, help them
            achieve their sustainability goals, and create meaningful
            experiences both with Arohi Software and for their customers and
            employees.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <InfoCard />
      </div>
      <div className="text-black pt-5 bg-white py-10">
        {/* <div className="w-11/12 mx-auto">
          <h1 className="md:text-4xl text-2xl mb-3 font-sans font-bold pt-6 text-center">
            FY2023 PERFORMANCE
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <PerformanceCard
              title="Compound annual total return to shareholders over the last 5 fiscal years"
              text="16%"
            />
            <PerformanceCard
              title="Total FY18 revenues, an increase of 10.3% in local currency"
              text="$64.1B"
            />
            <PerformanceCard
              title="FY19 EPS, a 9% increase on an adjusted basis"
              text="$11.67"
            />
            <PerformanceCard
              title="FY18 investment spend on research and development and training"
              text="$2.4B"
            />
            <PerformanceCard
              title="FY18 cash returned to shareholders"
              text="$7.2B"
            />
          </div>
        </div> */}
      </div>
      <div className="bg-violet-400 text-black w-full p-6 lg:flex lg:px-16 xl:px-24">
        <div className="lg:w-2/3 lg:py-8 mx-auto">
          <h1 className="font-bold text-2xl lg:text-4xl text-center">
            COMPANY OVERVIEW
          </h1>
          <p className="text-black font-normal text-justify mt-6 lg:px-6">
            Arohi Software is a dynamic startup specializing in web development,
            security solutions, app development, and marketing services. We help
            businesses, governments, and organizations build their digital core,
            optimize operations, accelerate growth, and enhance citizen
            services, creating tangible value swiftly and at scale. With a focus
            on innovation and technology, we leverage our industry expertise and
            strong ecosystem relationships to deliver exceptional results. Our
            comprehensive range of services and commitment to 360° value enable
            us to partner with clients to achieve progress in inclusion,
            diversity, sustainability, and employee development, fostering
            trusted, lasting relationships. Learn more about our impact with
            Arohi Software’s 360° Value Integrated Reporting.
          </p>
        </div>
      </div>
      <ImageGrid />
    
      {/* <OurPartners/> */}
      <Feedform title="Business with Arohi Software"/>
      <Footer />
    </div>
  );
};

export default page;
