'use client';
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Footer from '../components/Footer';
import Head from 'next/head';
import { ArrowRightIcon } from '@radix-ui/react-icons';

interface AnyReactComponentProps {
  lat: number;
  lng: number;
  text: string;
}

const AnyReactComponent: React.FC<AnyReactComponentProps> = ({ lat, lng, text }) => (
  <div>
    <div>{text}</div>
  </div>
);

const LocationPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [location, setLocation] = useState({
    lat: 19.9278796,
    lng: 74.73809
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleLocationChange = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  return (
    <div className=" mt-12 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Contact Us - Arohi Softwares</title>
        <meta name="description" content="Contact us at Arohi Softwares" />
      </Head>

      <div className="relative w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/4 bg-white/60 backdrop-blur-lg text-center text-black py-8 px-4 z-10 w-3/4 md:w-1/2 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Arohi Softwares IT Company</h1>
          <p className="text-base md:text-lg px-6">Find us at our office or get in touch with us for any inquiries. <span className="text-base md:text-lg px-6 hidden md:block">We are here to help you!</span></p>
        </div>
        <img className="w-full h-96 object-cover -z-10" src="https://cdn.dribbble.com/users/2096861/screenshots/18532623/media/7567479d6dd3db1282da37267a9cacc6.jpg" alt="Background" />
      </div>

      <main className="flex flex-col items-center justify-center w-full h-full p-6 bg-black shadow-lg rounded-lg z-10">
        <section className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 w-full mb-12">
          <div className="hover:bg-gradient-to-br p-[2px] from-violet-400 to-orange-300 w-full md:w-1/2">
            <button className="group w-full text-left border rounded-md flex justify-between items-center p-5 bg-white text-black" onClick={() => handleLocationChange(19.0945, 74.7381)}>
              <div>
                <h3 className="text-2xl">Arohi Software Development, near Sai hospital building, bhairavnath chawk, Shrigoanda, Maharashtra</h3>
                
              </div>
              <ArrowRightIcon className="scale-150 transition-all -translate-x-6 group-hover:-translate-x-2" />
            </button>
          </div>
          <div className="hover:bg-gradient-to-br p-[2px] from-violet-400 to-orange-300 w-full md:w-1/2">
            <button className="group w-full text-left border p-5 rounded-md flex justify-between items-center bg-white text-black" onClick={() => handleLocationChange(18.5204, 73.8567)}>
              <div>
                <h3 className="text-3xl">Pune, Maharashtra</h3>
                <p>Upcoming</p>
              </div>
              <ArrowRightIcon className="scale-150 transition-all -translate-x-6 group-hover:-translate-x-2" />
            </button>
          </div>
        </section>
        <div className="border-8 w-full md:w-[70vw] h-96 md:h-[70vh] rounded-lg overflow-hidden shadow-md">
          <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }} // Add your Google Maps API key here
              center={location}
              zoom={11}
            >
              <AnyReactComponent
                lat={location.lat}
                lng={location.lng}
                text="Arohi Software"
              />
            </GoogleMapReact>
          </div>
        </div>
      </main>

      <h2 className="text-3xl my-12 text-center">Get in touch with us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-lg p-6 shadow-md rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full text-black px-4 py-2 h-32 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-md border border-black transition-colors duration-300">
          Send Message
        </button>
        <div className="text-center">
          <p className="text-blue-900">or contact us via phone: <a href="tel:+91 7517861332" className="text-blue-900">+91 7517861332</a></p>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

export default LocationPage;
