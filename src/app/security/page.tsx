"use client";
import React from "react";
import SecurityCard from "@/app/components/SecurityCard";
import Footer from "@/app/components/Footer";
import CyberSecurityCard from "../components/CyberSecurityCard";
import Image from "next/image";
import Feedform from "../components/Feedform";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-black h-24"></div>

      <div
        className="sm:h-[85vh] h-52 w-full pt-7 relative"
        style={{
          backgroundImage: "url('/sbg1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto relative h-[85%] z-10 px-4">
          <div className="lg:mx-10 mr-10 font-bold text-white border-b-2 border-b-slate-300 py-3">
            <p>WHAT WE DO</p>
          </div>
          <div className="mt-6 h-[100%] ">
            <p className="font-normal text-lg sm:text-6xl text-white">
              Cyber Security Services
              <br />
              through technology.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="bg-white sm:h-[70vh] w-full py-10">
        <div className="container mx-auto sm:flex justify-around items-center mt-5 px-4">
          <CyberSecurityCard />
        </div>
      </div>

      <div className="sm:h-[70vh] w-full bg-white lg:pt-56 text-black">
        <div className="container text-center mx-auto px-4">
          <p className="font-bold text-xl sm:text-5xl py-4">
            Differentiators of Advanced Cybersecurity
          </p>
          <div className="mt-3 sm:flex justify-around space-y-6 sm:space-y-0">
            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
              <div
                className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/1-2a7dHkqwKpuu1b7Ar5go9mBq3LuUShw1JwUqpnums/1713168911/public/styles/webp/public/2023-08/01-Leverage-alliances.png.webp?itok=EjwDOShc')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="mt-5 text-left mx-3">
                Leverage alliances and partners to meet compliance, utilizing
                global security standards for comprehensive solutions.
              </div>
            </div>

            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
              <div
                className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/c90A1IazLkijzEVc6adgd2SsFUdQr3zNIfZubez2TV4/1713168911/public/styles/webp/public/2023-08/02-Achieve-over.png.webp?itok=-M65aItf')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="mt-5 text-left mx-3">
                Fortify security with Zero Trust cloud services, ensuring
                comprehensive and resilient protection strategies.
              </div>
            </div>

            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
              <div
                className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/6lzM9IdiEZfT5k2nVKWgpX6N3gzf5GYfOJEQqOCk1XI/1713168911/public/styles/webp/public/2023-08/03-Fortify-security.png.webp?itok=NrQAs7Bg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="mt-5 text-left mx-3">
                Leverage alliances and partners to meet compliance, utilizing
                global security standards for comprehensive solutions.
              </div>
            </div>

            <div className="sm:w-[15vw] bg-gray-200 rounded-lg cursor-pointer p-4 hover:shadow-lg transform transition-transform duration-300">
              <div
                className="h-[10vh] w-24 mx-auto hover:translate-x-2 transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/ZaNfY_tr0rSf5Dciv57w6BkrCB6OCoP6rl-tuYqeHDs/1713168911/public/styles/webp/public/2023-08/04-Evaluate-security.png.webp?itok=B3CieO5h')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="mt-5 text-left mx-3">
                Leverage alliances and partners to meet compliance, utilizing
                global security standards for comprehensive solutions.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full lg:pt-48 py-10">
        <div className="container w-[90vw] text-black mx-auto text-center px-4 mt-10">
          <p className="font-bold text-lg">All That We Do</p>
          <p className="font-bold text-xl sm:text-4xl mt-3">
            Milestones to Cement Enterprise Cyber Security
          </p>
          <div className="mt-20 px-7 lg:flex justify-between lg:space-x-10 flex-wrap ">
            <SecurityCard
              images="/s1.png"
              altText="this is img"
              text="Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development."
              title="Enterprise Security Strategy"
              width={80}
              height={80}
            />

            <SecurityCard
              images="/s2.png"
              altText="this is img"
              text="Leverage our vast experience in threat modelling, dynamic code assessments, VAPT, DLP, and CASB solutions for protection of your applications and data."
              title="Data and Application Security"
              width={80}
              height={80}
            />

            <SecurityCard
              images="/s3.png"
              altText="this is img"
              text="Deploy enhanced security mechanisms and expert teams for early threat detection, effective incident management, endpoint protection, patch management, and security awareness training."
              title="Managed Security Services"
              width={80}
              height={80}
            />
            <SecurityCard
              images="/s4.png"
              altText="this is img"
              text="Deliver end-to-end IAM from assessment to strategic roadmaps and execution. Arohi Software provides comprehensive solutions in multi-factor authentication, authorization, identity protection, SOC2, and privilege access management"
              title="Identity and Access Management"
              width={80}
              height={80}
            />
            <SecurityCard
              images="/s5.png"
              altText="this is img"
              text="Automate implementation of security policies to eliminate manual interventions and enforce robust security through predefined configurations."
              title="Zero Triust Security Implementation "
              width={80}
              height={80}
            />
            <SecurityCard
              images="/s6.png"
              altText="this is img"
              text="Expertly Conduct risk assessment, implement security controls, ensure audit readiness, automate CIS benchmark assessment for compliance with ISO 27001, HIPAA and other compliance standards."
              title="Risk And Compliance"
              width={80}
              height={80}
            />
            <SecurityCard
              images="/s7.png"
              altText="this is img"
              text="Enhance threat detection and response with Arohi Software unified Security Operations Center, bolstering cybersecurity across technologies and compliance"
              title="Security Operation Center"
              width={80}
              height={80}
            />
          </div>
          <div className="text-left mt-28 container">
            <h4 className="text-green-600 text-l">Accelators In The House</h4>
            <h2 className="text-black-600 text-3xl">
              Frameworks for Robust Managed IT Security Services
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="card bg-pink-700 p-6 rounded-lg shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Security as Code
                </h3>
                <p className="text-gray-100">
                  involves embedding security practices within the software
                  development lifecycle using code.{" "}
                </p>
              </div>
              <div className="card bg-green-500 p-6 rounded-lg shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Securing SDLC in Cloud
                </h3>
                <p className="text-gray-100">
                  Securing the Software Development Life Cycle (SDLC) in a cloud
                  environment is crucial to{" "}
                </p>
              </div>
              <div className="card bg-sky-500 p-6 rounded-lg shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Roadmap Zero-Trust Access management
                </h3>
                <p className="text-gray-100">
                  Implementing a Zero Trust Access Management (ZTAM) roadmap
                  involves a strategic{" "}
                </p>
              </div>
              <div className="card bg-blue-900 text-white p-6 rounded-lg shadow-md transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Learning Solutions
                </h3>
                <p className="text-gray-300">
                  When it comes to learning solutions, especially in the context
                  of professional development or organizational training,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Feedform title="" />
      <Footer />

      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0;
          background: rgba(0, 128, 0, 0.9); /* Green overlay */
          z-index: 1;
          transition: height 0.5s;
        }

        .card:hover::before {
          height: 100%;
        }

        .card h3,
        .card p {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default page;
