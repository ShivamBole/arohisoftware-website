"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";


interface News {
  id: number;
  title: string;
  description: string;
  image: string;
}

const NewsroomPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const openModal = (news: News) => {
    setSelectedNews(news);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const newsList: News[] = [
    {
      id: 1,
      title: "Scholarship Program 2024",
      description: "We are excited to announce our 2024 Scholarship Program...",
      image: "/scholershipimage.avif",
    },
    {
      id: 2,
      title: "New Partnership with Tech Corp",
      description:
        "Arohi Softwares has partnered with Tech Corp to bring innovative solutions...",
      image: "/scholershipimage.avif",
    },
    {
      id: 3,
      title: "Annual Hackathon",
      description: "Join us for our annual hackathon event...",
      image: "/scholershipimage.avif",
    },
  ];

  const scholarshipNews: News[] = [
    {
      id: 4,
      title: "Scholarship Program 2024",
      description: "We are excited to announce our 2024 Scholarship Program...",
      image: "/scholershipimage.avif",
    },
  ];

  const partnershipNews: News[] = [
    {
      id: 5,
      title: "New Partnership with Tech Corp",
      description:
        "Arohi Softwares has partnered with Tech Corp to bring innovative solutions...",
      image: "/scholershipimage.avif",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">Newsroom</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Featured News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsList.map((news) => (
                <div
                  key={news.id}
                  className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:-translate-y-2"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                  <h3
                    className="text-2xl font-semibold text-blue-600 mb-3 cursor-pointer hover:text-blue-800 transition-colors"
                    onClick={() => openModal(news)}
                  >
                    {news.title}
                  </h3>
                  <p className="text-gray-700">{news.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Scholarship News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {scholarshipNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:-translate-y-2"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                  <h3
                    className="text-2xl font-semibold text-blue-600 mb-3 cursor-pointer hover:text-blue-800 transition-colors"
                    onClick={() => openModal(news)}
                  >
                    {news.title}
                  </h3>
                  <p className="text-gray-700">{news.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Partnership News
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:-translate-y-2"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                  <h3
                    className="text-2xl font-semibold text-blue-600 mb-3 cursor-pointer hover:text-blue-800 transition-colors"
                    onClick={() => openModal(news)}
                  >
                    {news.title}
                  </h3>
                  <p className="text-gray-700">{news.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} Arohi Softwares. All rights
            reserved.
          </div>
        </div>
      </footer>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {selectedNews?.title}
                </Dialog.Title>
                <div className="mt-4">
                  <img
                    src={selectedNews?.image}
                    alt={selectedNews?.title}
                    className="w-full h-52 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm text-gray-500">
                    {selectedNews?.description}
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
};

export default NewsroomPage;
