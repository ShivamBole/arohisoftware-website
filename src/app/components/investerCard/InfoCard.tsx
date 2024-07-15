import React from 'react';

// Shared Tailwind CSS classes
const textWhite = 'text-white font-san';
const padding = 'p-6';
const marginTop = 'mt-2';
const largeText = 'text-lg';
const underline = 'underline';
const inlineBlock = 'inline-block';

interface GridItemProps {
  title: string;
  date?: string;
  image: string;
  description?: string;
  buttonText: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, date, image, description, buttonText }) => {
  return (
    <div className={`relative ${textWhite} ${padding} h-[40vh] bg-cover bg-no-repeat`} style={{backgroundImage: `url(${image})`}}>
      <h2 className="text-xl font-bold">{title}</h2>
      {date && <h3 className="text-2xl font-bold mt-2">{date}</h3>}
      {description && <p className={marginTop}>{description}</p>}
      <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>{buttonText}</a>
    </div>
  );
};

const InfoCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mt-4 mx-auto w-[80vw]">
      <div className={` ${textWhite} ${padding}`} style={{
        backgroundImage: `url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiZB2B1EK5J90fvYHTe9dw2wwU5050fI3EeALYuHOWCAWuikn3")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h2 className="text-2xl font-bold">AROHISOFTWARE UPDATE</h2>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>LEARN MORE →</a>
      </div>
      <div className={` ${textWhite} ${padding}`} style={{
        backgroundImage:"url('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6cR_yRocEbBd-h399BiwDj78GeHFTcIRSYUPyaXoFW9UwrU0Z')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h2 className="text-2xl font-bold">LATEST INVESTOR BRIEFING</h2>
        <p className={marginTop}>December 2023</p>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>LEARN MORE →</a>
      </div>
      <GridItem
        title="Innovation at Arohi Software"
        description="Pioneering solutions in web development, security, and app development"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCenyhH9eLu_CBAq4NqselG-cLcmkHd1OU4DT0kq-5dXZFx80X"
        buttonText="LEARN MORE →"
      />
      <GridItem
        title="OUR STARTUP JOURNEY"
        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7BMtG1wIUk1Uy4Kz6JDmWcZ1u2gfrsxP_r1-XWmNw-miOBzFC"
        buttonText="VIEW OUR STORY →"
      />
      <div className={` ${textWhite} ${padding} col-span-1 lg:col-span-2`} style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlsHGQQDxV8fAlhRQUPYCyyLOOsyI8j-X6CJUZIKGiRg&s')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <h2 className="text-2xl font-bold">UPCOMING PRODUCT LAUNCH</h2>
        <p className={marginTop}>Stay tuned for our new product launch coming soon!</p>
        <a href="#" className={`${marginTop} ${inlineBlock} ${largeText} ${underline}`}>LEARN MORE →</a>
      </div>
      <div className="bg-white text-black p-6 col-span-1 lg:col-span-2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">About Arohi Software</h2>
        <p className="mb-4">
          Arohi Software is a leading provider of innovative software solutions. Our services include web development, app development, and software security. We are dedicated to delivering high-quality products that meet the needs of our clients and help them achieve their business goals.
        </p>
        <p className="mb-4">
          As a startup company, we are committed to pushing the boundaries of technology and innovation. Our team of experts works tirelessly to create cutting-edge solutions that drive success for our clients.
        </p>
        <p>
          We are excited to announce that we will be launching a new product in the coming days. Stay tuned for more updates and information about our latest offerings!
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
