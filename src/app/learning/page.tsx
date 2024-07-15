"use client";

import React from "react";
import Header from "../components/Learnings";
import Footer from "../components/Footer";
import LearningHero from "../components/LearningHero";
import Services from "../components/ServiceList";
import ReinventLearning from "../components/ReinventLearning";
import LearningNavbar from "../components/LearningNavbar";
import OurPartners from "./../components/OurPartners";
import Leaders from "../components/Leaders";
import Feedform from "../components/Feedform";
import CareersComponent from "../components/CareersComponent";
import Traning from "../components/Traning";

const App: React.FC = () => {
  return (
    <div className="App bg-black ">
      {/* <Header /> */}
      <main className="pt-20">
        {/* <LearningNavbar /> */}
        <div className="">
          <LearningNavbar />
          {/* <Services /> */}
          <ReinventLearning />
          <Traning />

          <Leaders />
          <OurPartners />
          <CareersComponent />
          <Feedform title="Contact Us" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
