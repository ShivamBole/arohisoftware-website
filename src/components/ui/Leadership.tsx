import Feedform from '@/app/components/Feedform';
import React from 'react';
import arohi1 from '../../../public/assets/Leaders/arohi1.jpg';
import arohi2 from '../../../public/assets/Leaders/arohi2.jpg';
import arohi3 from '../../../public/assets/Leaders/arohi3.jpeg';
import arohi4 from '../../../public/assets/Leaders/arohi4.jpeg';
import arohi5 from '../../../public/assets/Leaders/arohi5.jpeg';
import arohi6 from '../../../public/assets/Leaders/arohi6.jpeg';
import arohi8 from '../../../public/assets/Leaders/arohi8.jpeg';




const Leadership = () => {
  const leaders = [
    { name: 'Muqsit Ashraf', title: 'Lead - Strategy', image: arohi2.src },
    { name: 'Julie Sweet', title: 'Chair & CEO', image: arohi1.src },
    { name: 'Jack Azagury', title: 'Group Chief Executive – Strategy & Consulting', image: arohi3.src },
    { name: 'Ankit Rai', title: 'Group Chief Executive – Strategy & Consulting', image: arohi8.src },
    { name: 'Komal Bedi', title: 'Lead - Diamond Client Leadership Council', image: arohi4.src },
    { name: 'Venkata Murthy Renduchintala', title: 'Leader', image: arohi5.src },
    { name: 'Arun Sarin', title: 'Leader', image: arohi6.src },

  ];

  const firstLeader = leaders[0];

  return (
    <div>
      <div className='relative flex justify-center items-center h-[75vh]'>
        <img className='w-96 object-cover' src='./leadreships.png' alt='Leadership Background Image' />
        <h1 className='absolute text-center lg:mt-[500px] text-4xl sm:text-6xl md:text-8xl lg:text-[50px] px-2 font-semibold border bg-gradient-to-br from-violet-400/20 to-purple-500/20 backdrop-blur-xl border-r-[6px] sm:border-r-[8px] md:border-r-[10px] lg:border-r-[12px] border-b-[6px] sm:border-b-[8px] md:border-b-[10px] lg:border-b-[12px] text-white'>
           Our Leaders
        </h1>
      </div>

      <div className="container max-w-full lg:max-w-[900px] text-center mt-12 mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <p className="text-lg text-gray-600"></p>
        </header>
        <section>
          

          <div className="flex flex-col mb-8 items-center">
            <h2 className="text-3xl font-semibold mb-2">Our Ceo</h2>
            <div className="w-[400px]">
              <div className="group bg-white overflow-hidden transition-all mt-5 mb-8 relative shadow-md p-0 text-center">
                <img src={firstLeader.image} className='p-0  group-hover:grayscale-0 transition-all group-hover:scale-105 h-[360px] object-cover w-full' />
                <div className='absolute hidden group-hover:transition-all group-hover:block pt-1 w-full h-24 pl-4 bottom-0 pb-6 bg-white/60 backdrop-blur-lg'>
                  <h3 className="text-left text-black text-xl font-semibold">{firstLeader.name}</h3>
                  <p className="text-left text-gray-600">{firstLeader.title}</p>
                </div>
              </div>
            </div>
          </div>






          <div className="flex flex-col  mb-8 items-center">
            <h2 className="text-3xl font-semibold mb-2">Our Managers</h2>
            <div className="flex flex-wrap justify-center">
              {leaders.slice(1, 3).map((leader, index) => (
                <div key={index} className="w-[400px] m-4">
                  <div className="group bg-white overflow-hidden mt-5 mb-8  transition-all relative shadow-md p-0 text-center">
                    <img src={leader.image} className='p-0  group-hover:grayscale-0 transition-all group-hover:scale-105 h-[360px] object-cover w-full' />
                    <div className='absolute hidden group-hover:transition-all group-hover:block pt-1 w-full h-24 pl-4 bottom-0 pb-6 bg-white/60 backdrop-blur-lg'>
                      <h3 className="text-left text-black text-xl font-semibold">{leader.name}</h3>
                      <p className="text-left text-gray-600">{leader.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>





          <h2 className="text-3xl font-semibold mb-8">Our Leaders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader, index) => (
              <div key={index} className="group bg-white overflow-hidden transition-all mt-5 relative shadow-md p-0 text-center">
                <img src={leader.image} className='p-0  group-hover:grayscale-0 transition-all group-hover:scale-105 h-[360px] object-cover w-full' />
                <div className='absolute hidden group-hover:transition-all group-hover:block pt-1 w-full h-24 pl-4 bottom-0 pb-6 bg-white/60 backdrop-blur-lg'>
                  <h3 className="text-left text-black text-xl font-semibold">{leader.name}</h3>
                  <p className="text-left text-gray-600">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>





        </section>
      </div>
      <section>
        <section className="text-center my-12">
          <p className=" w-fit mx-auto  text-white  py-2 px-4 rounded-full my-12 text-4xl ">Contact Us</p>
          <Feedform title="" />
        </section>

        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Visit our Subscription and Preference Center</h3>
              <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Subscribe</button>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:underline">ABOUT US</a>
              <a href="#" className="hover:underline">CONTACT US</a>
              <a href="#" className="hover:underline">CAREERS</a>
              <a href="#" className="hover:underline">LOCATIONS</a>
            </div>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="hover:underline">Privacy Statement</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
              <a href="#" className="hover:underline">Cookie Policy/Settings</a>
              <a href="#" className="hover:underline">Accessibility Statement</a>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Leadership;
