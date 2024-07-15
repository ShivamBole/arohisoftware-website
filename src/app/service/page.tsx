"use client";
import Image from "next/image";
import ServiceCard from "../components/ServicesCard";
import IndustrySelection from "../components/IndustrySelectionCard";
import Footer from "../components/Footer";
import Feedform from "../components/Feedform";
import Partners from "../components/Partners";


function Service() {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611095567219-8fa7d4d8bf48?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for darkening the background image */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full p-4 sm:p-8 space-y-4">
          <div>
            <h2 className="text-white text-sm font-semibold uppercase tracking-wider relative inline-block">
              What We Do
              <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>{" "}
              {/* Underline */}
            </h2>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Transforming businesses through technology.
          </h1>
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium text-black bg-white rounded-md hover:bg-gray-200"
          >
            Let’s talk
            <svg
              className="w-4 h-4 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 14H3a1 1 0 110-2h10.586l-1.293-1.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* New Section */}
      <div className="bg-white py-8 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
              Belief Power Business
            </h2>
            <p className="text-base sm:text-lg text-gray-700">
              At Arohi Software, we believe in the transformative power of
              technology to drive businesses forward. Beyond mere
              transformation, we empower companies to create a lasting impact on
              their customers and communities. Our mission is to not only
              enhance operational efficiencies but also to foster genuine
              connections that contribute to a better world. Through innovative
              software solutions and a commitment to social responsibility, we
              partner with businesses to achieve sustainable growth and
              meaningful change.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1681995453325-455f7084888d?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="People high-fiving"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div>
          <IndustrySelection />
        </div>
      </div>

      <ServiceCard />
      <Partners/>
      <Feedform title="business with Arohi Software" />
      <Footer />
    </div>
  );
}

export default Service;
