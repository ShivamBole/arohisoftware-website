"use client";
import "./OurPartners.css";
import images from "./../../../public/assets/partners/images.jpeg";

const colleges = [
  {
    id: 1,
    name: 'Sandip Foundation',
    logo: 'https://pbs.twimg.com/profile_images/1075714092394938368/1iRHtxbT_400x400.jpg',
  },
  {
    id: 2,
    name: 'SIEM',
    logo: 'https://media.licdn.com/dms/image/C560BAQG26UmHfgJ8cw/company-logo_200_200/0/1630667200871?e=2147483647&v=beta&t=c7msvfYbBpg-9H2G2IjuF8WSnlaInGUleimiAPIy_mk',
  },
  {
    id: 3,
    name: 'Parikrama',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyty6QgE7bVQgYJDuftpMoqV5I55iF9P1FNg&s',
  },
  {
    id: 4,
    name: 'SITRC',
    logo: images.src,
  },
];

function CollegesPartners() {
  return (
    <div className="py-12 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
          Colleges Associated with us
        </h1>
        <div className="overflow-hidden">
          <div className="flex gap-8 sm:gap-12 md:gap-24 lg:gap-36 animate-scroll">
            {colleges.concat(colleges).map((college, index) => (
              <div key={index} className="flex flex-col items-center w-40 sm:w-48 md:w-64 mt-9 flex-shrink-0">
                <img src={college.logo} alt={college.name} className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-4" />
                <p className="text-white text-lg sm:text-xl md:text-2xl whitespace-nowrap">{college.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegesPartners;
