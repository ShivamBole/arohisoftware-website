import React, { useState } from 'react';
import Image from 'next/image';
import webDevImage from "./../../../public/assets/services/webDevelopment.avif";
import consultingImage from "./../../../public/assets/services/consulting.avif";
import itTrainingImage from "./../../../public/assets/services/automation.avif";
import aiImage from "./../../../public/assets/services/ArtificialIntelligence.avif";
import cloudComputingImage from "./../../../public/assets/services/cloudcomputing.avif";
import cyberSecurityImage from "./../../../public/assets/services/cybersecurity.webp";


const cardClass = "relative group w-full h-64 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105";
const overlayClass = "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg";
const textClass = "text-xl font-semibold";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
}

const Servicecard: React.FC = () => {
  const initialCards = [
    { src: webDevImage.src, alt: "Web Development", title: "Web Development" },
    { src: consultingImage.src, alt: "Consulting", title: "Consulting" },
    { src: '/Digital Marketing.png', alt: "Digital Marketing", title: "Digital Marketing" },
     { src: consultingImage.src, alt: "Data Analytics", title: "Data Analytics" },
   
  ];

  const additionalCards = [
    { src: '/Automation.png', alt: "Automation", title: "Automation" },
    { src: itTrainingImage.src, alt: " IT Training and Education", title: " IT Training and Education" },
    { src:aiImage.src, alt: "Artificial Intelligence", title: "Artificial Intelligence" },
    { src: cloudComputingImage.src, alt: "Cloud Computing", title: "Cloud Computing" },
    { src: cyberSecurityImage.src, alt: "Cyber Security", title: "Cyber Security" },
    { src: '/machine.png', alt: "Machine Learning", title: "Machine Learning" },
    { src: '/Emerging Technologies.png', alt: "Digital Marketing", title: "Emerging Technologies" },
    { src: 'https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg', alt: "App Development", title: "App Development" },

  ];

  const [showAll, setShowAll] = useState(false);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const handleHideAllClick = () => {
    setShowAll(false);
  };

  return (
    <div className="min-h-[600px] bg-zinc-900 text-white flex flex-col items-center justify-center p-8" id='#services'>
      <div className="text-center mb-[90px]">
        <h2 className="text-sm uppercase tracking-widest text-zinc-400 mb-5">Services</h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">Transform your business with advanced technologies</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        {initialCards.map((card, index) => (
          <ServiceCard key={index} src={card.src} alt={card.alt} title={card.title} />
        ))}
        {showAll && additionalCards.map((card, index) => (
          <ServiceCard key={index} src={card.src} alt={card.alt} title={card.title} />
        ))}
      </div>
      {showAll ? (
        <button 
          onClick={handleHideAllClick}
          className="mt-8 px-6 py-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300"
        >
          Hide all topics
        </button>
      ) : (
        <button 
          onClick={handleViewAllClick}
          className="mt-8 px-6 py-3 bg-zinc-700 text-white rounded-full hover:bg-zinc-600 transition-colors duration-300 object-cover"
        >
          View all topics
        </button>
      )}
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ src, alt, title }) => {
  return (
    <div className="relative group w-full h-64 rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" />
      <div className={overlayClass}>
        <span className={textClass}>{title}</span>
      </div>
    </div>
  );
};

export default Servicecard;
