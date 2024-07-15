import React from "react";
import Image from "next/image";
import "animate.css";
import "./WorkCard.css";

// Define the props interface
interface WorkCardProps {
  images: string;
  altText: string;
  text: string;
  title: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ images, altText, text, title }) => {
  return (
    <div
      className="card md:pt-[1rem] pt-[10rem]"
      style={{
        backgroundImage: `url(${images})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content h-[200%]">
        <h2 className="card-title my-5">{title}</h2>
        <p className="card-body my-5">{text}</p>
      
      </div>
    </div>
  );
};

export default WorkCard;
