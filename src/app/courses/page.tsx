"use client";
// import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import StayConnected from "../components/StayConnected";

function Page() {
  return (
    <>
      <div className="w-full bg-white mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col justify-around p-6">
            <h3 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Expand your edge
            </h3>
            <p className="text-black font-normal mt-8 text-lg md:text-xl max-w-lg">
              At Arohi Software, learning is in our DNA. We are passionate about
              empowering our team with opportunities to gain new skills and
              advance into exciting new roles. By fostering a culture of
              continuous development and innovation, we ensure everyone is ready
              to meet and exceed career challenges, driving our collective
              success.
            </p>
            {/* <Link href="/jobs"> */}
              <a href="/jobs" className="text-blue-500 font-normal text-lg md:text-xl mt-6 cursor-pointer hover:underline">
                SEARCH JOBS
              </a>
            {/* </Link> */}
          </div>
          <div className="flex justify-center items-center p-6">
            <img
              src="/training.webp"
              alt="Training Image"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <h3 className="text-5xl font-semibold text-black px-10 py-8">
          Training and Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col justify-around p-8">
            <p className="text-black font-normal leading-6 tracking-wide">
              At Arohi Software, innovation never stops. We are committed to
              continuous learning and skill enhancement in the ever-evolving
              field of IT. Our training programs cover a wide range of topics,
              from basic programming to advanced cloud computing, cybersecurity,
              and data analytics. Whether you`&apos;`re a beginner or an experienced
              professional, we have the right course for you. We offer flexible
              learning options, including online courses, in-person workshops,
              and customized corporate training. Our industry expert instructors
              provide practical, up-to-date knowledge to ensure you gain
              relevant skills. At Arohi Software, we foster a culture of
              innovation and continuous improvement, helping you stay ahead in
              the digital age.
            </p>
          </div>

          <div className="p-5">
            <img
              src="https://www.sutisoft.com/blog/wp-content/uploads/2023/05/Employee-Training-Development.jpg"
              alt="Training and Development"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 justify-center py-24">
          <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white mt-5">
            <img
              src="/Accenture-globe-clock-icon-150.png"
              alt="24/7 Learning"
              className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]"
            />
            <h4 className="mt-4 text-2xl font-semibold text-black">
              24/7 learning
            </h4>
            <p className="text-black font-normal text-lg leading-6 tracking-wide">
              The world is at your fingertips with unlimited access to leading
              mobile-friendly online training, curated by Accenture subject
              matter experts and Arohi Software to help you advance at every
              level of your career.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white mt-5">
            <img
              src="/mind.png"
              alt="Feed your mind"
              className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]"
            />
            <h4 className="mt-4 text-2xl font-semibold text-black">
              Feed your mind
            </h4>
            <p className="text-black font-normal text-lg leading-6 tracking-wide">
              Discover our award-winning learning management system at Arohi
              Software, featuring expertly curated content from leading
              providers such as Coursera, Percipio, Pluralsight, and Thrive
              Global. Our platform is designed to help you advance at every
              level of your career.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white mt-5">
            <img
              src="/sun.png"
              alt="Go beyond your edge"
              className="max-w-full h-auto mt-[-4rem] sm:mt-[-6rem] md:mt-[-8rem]"
            />
            <h4 className="mt-4 text-2xl font-semibold text-black">
              Go beyond your edge
            </h4>
            <p className="text-black font-normal text-lg leading-6 tracking-wide">
              No matter your function, industry, or business expertise, take
              advantage of programs using our neuroscience-based learning
              principles and expansive educational opportunities that can help
              take you as far as your ambition.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200">
        <h3 className="text-5xl font-semibold text-black px-10 py-8">
          Follow your aspirations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col justify-around p-8">
            <p className="text-black font-normal leading-6 tracking-wide">
              Elevate your skills with our state-of-the-art offerings that
              seamlessly connect virtual learning to your real-world career.
              Dive into specialized development opportunities crafted and
              delivered through our industry-leading partnerships. Key areas of
              learning include advanced technologies, leadership development,
              and professional growth strategies, all designed to help you excel
              at every stage of your career.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
        <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white">
          <img
            src="/Accenture-work-environment2.webp"
            alt="Technology"
            className="max-w-full h-auto"
          />
          <h4 className="mt-4 text-2xl font-semibold text-black">Technology</h4>
          <p className="text-black font-normal text-lg leading-6 tracking-wide">
            Enhance your expertise with external credentials through
            certifications in cutting-edge technologies and platforms such as
            Microsoft, Azure, Google, AWS, SAP, Salesforce, ServiceNow, and
            more. These certifications are designed to keep you at the forefront
            of the industry and propel your career forward.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white">
          <img src="/ind.png" alt="Industry" className="max-w-full h-auto" />
          <h4 className="mt-4 text-2xl font-semibold text-black">Industry</h4>
          <p className="text-black font-normal text-lg leading-6 tracking-wide">
            Learning across industries where we serve clients.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white">
          <img src="/function.png" alt="Function" className="max-w-full h-auto" />
          <h4 className="mt-4 text-2xl font-semibold text-black">Function</h4>
          <p className="text-black font-normal text-lg leading-6 tracking-wide">
            Job-specific skills and expertise in what drives value across the
            business value chain, from supply chain to talent to finance and
            sales.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white">
          <img src="/leadership.png" alt="Leadership" className="max-w-full h-auto" />
          <h4 className="mt-4 text-2xl font-semibold text-black">Leadership</h4>
          <p className="text-black font-normal text-lg leading-6 tracking-wide">
            Grow your leadership abilities at all levels throughout your career,
            supported by industry-leading tools like the CliftonStrengths
            assessment and wide-ranging, diverse, and inclusive leadership
            development programs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white">
          <img src="/tq.png" alt="TQ" className="max-w-full h-auto" />
          <h4 className="mt-4 text-2xl font-semibold text-black">TQ</h4>
          <p className="text-black font-normal text-lg leading-6 tracking-wide">
            Our unique Technology Quotient offering builds broad-based fluency
            around the hottest technology topics. Get a preview.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center shadow p-6 bg-white">
          <img src="/learn.png" alt="Learning to Learn" className="max-w-full h-auto" />
          <h4 className="mt-4 text-2xl font-semibold text-black">
            Learning to Learn
          </h4>
          <p className="text-black font-normal text-lg leading-6 tracking-wide">
            Become a better learner by improving your learning skills, starting
            now: check out our Brain Hacks series.
          </p>
        </div>
      </div>

     
      <StayConnected/>
      <Footer />
    </>
  );
}

export default Page;
