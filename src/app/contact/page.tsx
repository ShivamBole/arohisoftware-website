"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Footer from "../components/Footer";
import logo from "../../../public/logo.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add logic to submit form data here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Arohi</h1>
        <p className="text-2xl font-extrabold text-center text-black mb-12">
          We appreciate your interest in Arohi. Please select the method below to contact us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl text-black font-bold mb-4">General Inquiries</h2>
              <div className="flex items-center mb-4">
                <MdPhone className="text-2xl text-purple-600 mr-2" />
                <div>
                  <p className="font-bold text-black">+91 7517861332</p>
                  <p className="text-gray-600">Toll-free from India</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-purple-600 mr-2" />
                <div>
                  <p className="font-bold text-black">Arohi Software Development</p>
                  <p className="text-gray-600">Near Sai hospital building, Bhairavnath Chawk, Shrigoanda, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold text-black mb-4">Find A Location</h2>
            <p className="text-gray-600 mb-4">
              View a list of local Arohi Software office information.
            </p>
            <a href="#" className="text-blue-600 flex items-center">
              <FaMapMarkerAlt className="text-xl mr-2" />
              Find office locations
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-zinc-800 rounded-lg p-8 md:flex items-center gap-8 shadow-lg">
          <div
            className="md:w-1/2 mb-8 md:mb-0"
            style={{
              backgroundImage: `url(${logo.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              borderRadius: "10px",
            }}
          >
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-4">
            We welcome your interest in Arohi Software. Whether you have questions, want to discuss potential projects, or simply wish to connect, we're here to assist you. Reach out to us using the contact details below, and let's start a conversation.
            </p>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <MdPhone className="text-xl text-purple-600 mr-2" />
                <span>+91 7517861332</span>
              </div>
              <div className="flex items-center mb-2">
                <MdEmail className="text-xl text-purple-600 mr-2" />
                <span>arohisoftware98@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-xl text-purple-600 mr-2" />
                <span>Arohi Software Development, near Sai hospital building, Bhairavnath Chawk, Shrigoanda, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-white">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              id="phone"
              placeholder="Phone number"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-2 rounded bg-gray-700 text-white h-32"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-purple-800 text-white p-2 rounded hover:bg-purple-700 transition duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactForm;
