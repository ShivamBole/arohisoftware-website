"use client";
// pages/index.tsx
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import DreamRealizedSection from "../components/DreamRealizedSection";
import CareersComponent from "../components/CareersComponent";
import Feedform from "../components/Feedform";
import Footer from "../components/Footer";
import teamwithlaptopimage from "./../../../public/assets/careers/teamwithlaptopimage.avif";
import jobs from "../components/Job";
import Job from "../components/Job";
import StayConnected from "../components/StayConnected";

export default function Page() {
  return (
    <div className="h-[70vh] bg-gray-100">
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="h-[70vh]"
          >
            <div
              className="relative h-[70vh]"
              style={{ backgroundImage: "url('./line.png')" }}
            >
              <img
                src="/t.avif"
                alt="Background 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative h-[70vh]">
              <img
                src="/t2.avif"
                alt="Background 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative h-[70vh]">
              <img
                src="/t3.avif"
                alt="Background 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </Carousel>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Shape Your Career with Arohi Software
              </h1>
              <p className="text-xl md:text-2xl mb-8">Explore opportunities</p>
              <a
                href="#jobs"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
              >
                Search Jobs
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="py-16 bg-white"
          style={{ backgroundImage: "url('./Bottom Wave Desktop.png.webp')" }}
        >
          <div
            className="container mx-auto text-center px-4"
            style={{ maxWidth: "70vw" }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-black">
              About Arohi Software
            </h2>
            <h2 className="text-black font-bold text-3xl">
            Work at the Heart of Transformation            </h2>
            <h4 className="text-2xl font-semibold mb-6 text-black">
           

              At the core of every significant transformation is a dedicated individual. At Arohi Software, our team of Change Makers collaborate daily to achieve our common goal: to harness the power of technology and human creativity to drive progress. Together, we are turning innovative ideas into reality and making a meaningful impact.
                          </h4>
            <p className="text-gray-600 mb-8">
              Join us and help our clients become the next and best versions of
              themselves.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group bg-gray-900 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Mission
                </h3>
                <img
                  src="/xbg1.png"
                  alt="Our Mission"
                  className="w-full h-40 object-cover  rounded-md group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex  flex-col justify-center items-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-400">
                    To provide state-of-the-art technology solutions that add
                    real value to businesses.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gray-900 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Vision
                </h3>
                <img
                  src="/x.bg2.png"
                  alt="Our Vision"
                  className="w-full h-40 object-cover mb-4 rounded-md group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-400">
                  Empowering innovation and transforming industries through the seamless integration of cutting-edge technology and human ingenuity.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gray-900 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Values
                </h3>
                <img
                  src="/xbg3.png"
                  alt="Our Values"
                  className="w-full h-40 object-cover mb-4 rounded-md group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-400">
                    Innovation, Integrity, and Excellence in all we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        {/* <section style={{ backgroundImage: "url('./line.png')" }}>
          <div
            className="container mx-auto text-center px-4"
            style={{ maxWidth: "70vw", backgroundImage: "url('./line.png')" }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-white py-4">
              Watch Our Story
            </h2>
            <div
              className="relative w-full overflow-hidden pb-56 mb-8"
              style={{ height: "70vh" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tUP5S4YdEJo?si=VAnJPD_5CQmHCL9I"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section> */}

        {/* Services Section */}

        <Job />
        {/* <DreamRealizedSection /> */}

        <StayConnected />
        {/* <Feedform title="with Arohi Software"/> */}

        <Footer />
      </main>
    </div>
  );
}
