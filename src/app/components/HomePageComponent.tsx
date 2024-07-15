import React from 'react';
import Image from "next/image";
import home11 from "../../../public/assets/Homepage/image.png";

const HomePageComponent: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-6 lg:w-[66vw] m-auto">
        Every single day, we transform and add value for our stakeholders everywhere.
      </h1>
      <div className="flex flex-wrap lg:justify-evenly lg:my-20 mx-auto">
        <div>
          <Image 
            src={home11} 
            alt="Accenture Image" 
            className="lg:h-[60vh] lg:w-[80vh]"
            width={800}  // Add appropriate width
            height={600} // Add appropriate height
          />
        </div>
        <div className="lg:w-[33%] w-96 my-10 lg:mt-36 lg:ml-40">
          <h2 className="text-xl font-semibold">Arohi Software Elevating Businesses with Expert IT Solutions</h2>
          <p className="mt-2">
            Arohi Software specializes in transformative IT solutions, offering bespoke web development, mobile app creation, and enterprise software services. Our innovative approach and commitment to excellence ensure tailored solutions that enhance efficiency and drive growth for businesses of all sizes. Partner with us for unparalleled digital success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
