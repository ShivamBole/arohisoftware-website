"use client";

import React, { useState } from "react";
import "./job.css";
const sharedButtonClasses =
  "py-2 bg-purple-800 text-white hover:bg-violet-800 rounded-lg transition duration-300";
const sharedInputClasses =
  "w-full max-w-md p-2 border border-zinc-700 rounded-lg text-black";
const sharedTextClasses = "text-black";

interface JobCardProps {
  location: string;
  title: string;
  role: string;
  businessArea: string;
  experience: string;
  postedTime: string;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  location,
  title,
  role,
  businessArea,
  experience,
  postedTime,
  onClick,
}) => {
  return (
    <div
      id="jobs"
      onClick={onClick}
      className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow-lg job-card duration-300"
    >
      <div className="flex justify-between items-center p-2 border-b-2 min-w">
        <span className={sharedTextClasses}>{location}</span>
      </div>
      <h3 className="text-xl font-semibold text-black mt-2">{title}</h3>
      <p className="text-black mt-2">{role}</p>
      <p className="text-black mt-2">{businessArea}</p>
      <p className="text-black mt-2">{experience}</p>
      <p className="text-black mt-2">{postedTime}</p>
    </div>
  );
};

const jobDetails = [
  {
    location: "INDIA",
    title: "Application Lead",
    role: "Software Engineering - Project Role: Application Lead",
    businessArea: "Technology",
    experience: "Open to Freshers",
    postedTime: "Posted within last 24 hours",
  },
  {
    location: "INDIA",
    title: "Project Manager",
    role: "Project Management - Project Role: Project Manager",
    businessArea: "Operations",
    experience: "Open to Freshers",
    postedTime: "Posted 1 week ago",
  },
  {
    location: "INDIA",
    title: "Team Leader",
    role: "Team Management - Project Role: Team Leader",
    businessArea: "Operations",
    experience: "Open to Freshers",
    postedTime: "Posted 2 days ago",
  },
  {
    location: "INDIA",
    title: "Full Stack Developer",
    role: "Developer",
    businessArea: "Development",
    experience: "Open to Freshers",
    postedTime: "Posted 1 day ago",
  },
  {
    location: "INDIA",
    title: "Java Developer",
    role: "Software Engineering - Project Role: Java Developer",
    businessArea: "Technology",
    experience: "Open to Freshers",
    postedTime: "Posted 3 days ago",
  },
  {
    location: "INDIA",
    title: "DevOps Engineer",
    role: "Software Engineering - Project Role: DevOps Engineer",
    businessArea: "Technology",
    experience: "Open to Freshers",
    postedTime: "Posted 2 days ago",
  },
  {
    location: "INDIA",
    title: "App Developer",
    role: "App Developer",
    businessArea: "Security",
    experience: "Open to Freshers",
    postedTime: "Posted 3 days ago",
  },
  {
    location: "INDIA",
    title: "UI/UX Developer",
    role: "Design - Project Role: UI/UX Developer",
    businessArea: "Design",
    experience: "Open to Freshers",
    postedTime: "Posted 4 days ago",
  },
  {
    location: "INDIA",
    title: "Digital Marketer",
    role: "Marketing - Project Role: Digital Marketer",
    businessArea: "Marketing",
    experience: "Open to Freshers",
    postedTime: "Posted 5 days ago",
  },
];

const Job: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("");
  const [selectedJob, setSelectedJob] = useState<JobCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobsPerPage = 6;

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleSort = (option: string) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page on sort
  };

  const filteredJobs = jobDetails
    .filter((job) =>
      job.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "Most Recent") {
        return (
          new Date(b.postedTime).getTime() - new Date(a.postedTime).getTime()
        );
      }
      if (sortOption === "Most Relevant") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleJobCardClick = (job: JobCardProps) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    education: "",
    institution: "",
    graduationYear: "",
    workExperience: "",
    resume: null,
    coverLetter: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to an API
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white p-4 ">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="text-center my-14">
          <h1 className="text-xl lg:text-4xl font-bold text-black">
            Search Jobs at Arohi Software
          </h1>
          <div className="mt-4 flex text-black flex-row justify-center items-center">
            <input
              type="text"
              placeholder="Use quotation marks for exact matches"
              className={sharedInputClasses}
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button className={`${sharedButtonClasses} px-2 sm:mt-0 ml-2`}>
              Search
            </button>
          </div>
        </div>
        <div className="bg-gray-200 p-5 rounded-lg">
          <div className="my-8 lg:container">
            <h2 className="text-2xl font-semibold text-black">
              Latest Jobs ({filteredJobs.length})
            </h2>
            <div className="mt-4 lg:flex">
              <span
                className={`min-w-fit font-semibold text-black content-center`}
              >
                Sort by:
              </span>
              <div className="mb-4 lg:mb-0 grid grid-cols-2 gap-2 lg:grid-cols-6">
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                  onClick={() => handleSort("Most Recent")}
                >
                  Most Recent
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                  onClick={() => handleSort("Most Relevant")}
                >
                  Most Relevant
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                >
                  New Job Search
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                >
                  Save this search
                </button>
                <button
                  className={`${sharedButtonClasses} ml-2 mt-2 min-w-32 lg:mt-0`}
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentJobs.map((job, index) => (
              <JobCard
                key={index}
                location={job.location}
                title={job.title}
                role={job.role}
                businessArea={job.businessArea}
                experience={job.experience}
                postedTime={job.postedTime}
                onClick={() =>
                  handleJobCardClick({
                    location: job.location,
                    title: job.title,
                    role: job.role,
                    businessArea: job.businessArea,
                    experience: job.experience,
                    postedTime: job.postedTime,
                    onClick: () => {}, // Adding an empty onClick function to satisfy the prop requirement
                  })
                }
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`${sharedButtonClasses} mx-1 px-3`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`${sharedButtonClasses} mx-1 px-3`}
          >
            Next
          </button>
        </div>
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center h-70vh bg-black mt-5 bar overflow-y-scroll bg-opacity-50 z-50">
            <div className="p-6 rounded-lg shadow-lg bg-black mt-[80vh] lg:mt-[40vh] ">
              <form onSubmit={handleSubmit} className="">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      placeholder="Flowbite"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      placeholder="123-45-678"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-900 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <fieldset>
                  <legend className="block mb-2 text-sm text-gray-900 dark:text-white">
                    Education
                  </legend>
                  <div className="flex flex-col">
                    <label
                      htmlFor="education"
                      className="block mb-2 text-sm text-gray-900 dark:text-white"
                    >
                      Highest Level of Education:
                    </label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      onChange={handleChange}
                      required
                    />{" "}
                    <br />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="institution"
                      className="block mb-2 text-sm text-gray-900 dark:text-white"
                    >
                      Institution Name:
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                    />{" "}
                    <br />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="graduationYear"
                      className="block mb-2 text-sm text-gray-900 dark:text-white"
                    >
                      Year of Graduation:
                    </label>
                    <input
                      type="number"
                      id="graduationYear"
                      name="graduationYear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      required
                    />{" "}
                    <br />
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="block mb-2 text-sm text-gray-900 dark:text-white">
                    Resume and Cover Letter
                  </legend>
                  <div className="flex flex-col">
                    <label
                      className="block mb-2 text-sm text-gray-900 dark:text-white"
                      htmlFor="resume"
                    >
                      Upload Resume:
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      required
                    />{" "}
                    <br />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="block mb-2 text-sm text-gray-900 dark:text-white"
                      htmlFor="coverLetter"
                    >
                      Upload Cover Letter:
                    </label>
                    <input
                      type="file"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
                      id="coverLetter"
                      name="coverLetter"
                      onChange={handleFileChange}
                    />{" "}
                    <br />
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="text-white mr-4 bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                >
                  Submit
                </button>
                <button
                  className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
                  onClick={closeModal}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Job;
