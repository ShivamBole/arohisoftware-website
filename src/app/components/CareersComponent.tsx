"use client";
import React from "react";
import Link from "next/link";

const CareerComponent: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[600px]  "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 md:p-16 lg:p-24">
        <p className="text-grey font-semibold text-sm md:text-base lg:text-4xl">
          careers
        </p>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold">
          The X-Factor <br />
          <span className="text-purple-600">At Arohi Software</span>
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mt-4">
          Join the team
        </p>
        <div className="flex ">
          {/* <a href='/jobs'> */}
          <Link href="/careers">
            <button className="mt-6 px-6 py-3  bg-purple-600 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
              Apply Now
            </button>
          </Link>
          {/* </a> */}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .h-screen {
            height: 75vh;
          }
        }
      `}</style>
    </div>
  );
};

export default CareerComponent;
