"use client";
// pages/index.tsx
import Head from "next/head";
import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import DreamRealizedSection from "../components/DreamRealizedSection";
import CareersComponent from "../components/CareersComponent";
import Feedform from "../components/Feedform";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-screen">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            className="h-full"
          >
            <div
              className="relative h-screen"
              style={{ backgroundImage: "url('./line.png')" }}
            >
              <Image
                src="/xbg1.png"
                alt="Background 1"
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative h-screen">
              <Image
                src="/x.bg2.png"
                alt="Background 2"
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative h-screen">
              <Image
                src="/xbg3.png"
                alt="Background 3"
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </Carousel>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Welcome to Arohi Software
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Delivering Cutting-edge IT Solutions
              </p>
              <a
                href="#"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
              >
               Start Learning 
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
            className="container mx-auto text-center px-4 "
            style={{ maxWidth: "70vw" }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-black">
              About Arohi Software
            </h2>
            <h4 className="text-2xl font-semibold mb-6 text-black">
              We are the intersection where digital engineering and tomorrow`&apos;`s
              technologies meet today`&apos;`s business aspirations`&#39;` accelerating
              enterprise future states.
            </h4>
            <p className="text-gray-600 mb-8">
              We are a leading technology solutions provider, delivering
              innovative services to our clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group bg-gray-900 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Mission
                </h3>
                <Image
                  src="/xbg1.png"
                  alt="Our Mission"
                  width={500}
                  height={160}
                  className="w-full h-40 object-cover mb-4 rounded-md group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <Image
                  src="/x.bg2.png"
                  alt="Our Vision"
                  width={500}
                  height={160}
                  className="w-full h-40 object-cover mb-4 rounded-md group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-gray-400">
                    To be recognized as a global leader in IT services and
                    solutions.
                  </p>
                </div>
              </div>
              <div className="relative group bg-gray-900 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Values
                </h3>
                <Image
                  src="/xbg3.png"
                  alt="Our Values"
                  width={500}
                  height={160}
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
        <section style={{ backgroundImage: "url('./line.png')" }}>
          <div
            className="container mx-auto text-center px-4"
            style={{ maxWidth: "70vw", backgroundImage: "url('./line.png')" }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-black">
              Watch Our Story
            </h2>
            <div
              className="relative w-full overflow-hidden pb-56 mb-8 "
              style={{ height: "70vh" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <DreamRealizedSection />

        <Feedform title="" />
        <Footer/>
      </main>
    </div>
  );
}
