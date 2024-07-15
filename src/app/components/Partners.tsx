import React from 'react';
import "./OurPartners.css";

const companies = [
  {
    id: 1,
    name: 'VS Tech Horizon',
    logo: 'https://yt3.googleusercontent.com/DhdYxWD2LwcnzHdPBIBtrKq8M2AHL39yekLoalqR09vX18rKX29GYfJaIW2FUaGjUbZ70sLxSg=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    name: 'GrowAro TNP',
    logo: 'https://media.licdn.com/dms/image/D560BAQHGYF5tCSi_uQ/company-logo_200_200/0/1695197584351?e=2147483647&v=beta&t=s2DN3cuT_ej1GYgKNRvHj4ttOXgHv3uAsLQ6hObjQm4',
  },
  {
    id: 1,
    name: 'VS Tech Horizon',
    logo: 'https://yt3.googleusercontent.com/DhdYxWD2LwcnzHdPBIBtrKq8M2AHL39yekLoalqR09vX18rKX29GYfJaIW2FUaGjUbZ70sLxSg=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    name: 'GrowAro TNP',
    logo: 'https://media.licdn.com/dms/image/D560BAQHGYF5tCSi_uQ/company-logo_200_200/0/1695197584351?e=2147483647&v=beta&t=s2DN3cuT_ej1GYgKNRvHj4ttOXgHv3uAsLQ6hObjQm4',
  },
  {
    id: 1,
    name: 'VS Tech Horizon',
    logo: 'https://yt3.googleusercontent.com/DhdYxWD2LwcnzHdPBIBtrKq8M2AHL39yekLoalqR09vX18rKX29GYfJaIW2FUaGjUbZ70sLxSg=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    name: 'GrowAro TNP',
    logo: 'https://media.licdn.com/dms/image/D560BAQHGYF5tCSi_uQ/company-logo_200_200/0/1695197584351?e=2147483647&v=beta&t=s2DN3cuT_ej1GYgKNRvHj4ttOXgHv3uAsLQ6hObjQm4',
  },
  {
    id: 1,
    name: 'VS Tech Horizon',
    logo: 'https://yt3.googleusercontent.com/DhdYxWD2LwcnzHdPBIBtrKq8M2AHL39yekLoalqR09vX18rKX29GYfJaIW2FUaGjUbZ70sLxSg=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    name: 'GrowAro TNP',
    logo: 'https://media.licdn.com/dms/image/D560BAQHGYF5tCSi_uQ/company-logo_200_200/0/1695197584351?e=2147483647&v=beta&t=s2DN3cuT_ej1GYgKNRvHj4ttOXgHv3uAsLQ6hObjQm4',
  },
];

function Partners() {
  return (
    <div className="py-12 mt-12 bg-white">
      <div className="container mx-auto">
        <h1 className="text-black ml-20 text-6xl font-bold mb-12">Our Partners</h1>
        <div className="overflow-hidden">
          <div className="animate-scroll flex gap-36">
            {companies.concat(companies).map((company, index) => (
              <div key={index} className="flex flex-col items-center w-64 mt-9">
                <img src={company.logo} alt={company.name} className="h-20 w-20 object-contain mb-4" />
                <p className="text-black text-2xl whitespace-nowrap">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
