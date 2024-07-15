"use client";
import React, { FormEvent, useState, useEffect, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FeedformProps {
  title: string;
}

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  return { question: `${num1} + ${num2} =`, answer: num1 + num2 };
};

const Feedform: React.FC<FeedformProps> = ({ title }) => {
  const [result, setResult] = useState("");
  const [captcha, setCaptcha] = useState({ question: "", answer: 0 });
  const [captchaInput, setCaptchaInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  useEffect(() => {
    setIsCaptchaValid(parseInt(captchaInput) === captcha.answer);
  }, [captchaInput, captcha]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", `e5f59593-4cf3-468f-9e07-0a9bc14e4195`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      formRef.current?.reset();
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      setIsCaptchaValid(false);
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(data.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ToastContainer />
      <div className="flex-1 bg-gradient-to-r from-purple-600 to-[#020817] p-10 text-white flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold mb-4">
          Think Tomorrow With Arohi Software
        </h1>
        <p className="mb-4">
          Empowering Futures through Innovative Software Solutions
        </p>
        <p className="mb-4">
          Join us as we shape the future of software solutions, driving progress
          and success for businesses worldwide.
        </p>
        <div className="flex space-x-4 mt-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-white text-lg text-purple-600 px-4 py-2 rounded-lg">
                Absolutely Yes
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Yes, I&apos;m absolutely sure.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-white text-lg text-purple-600 px-4 py-2 rounded-lg">
                Not Completely
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  No, not now!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="flex-1 bg-white p-10 flex flex-col justify-center">
        <h2 className="text-xl font-black mb-4 text-start text-gray-500">
          Get Started
        </h2>
        <h1 className="text-2xl md:text-3xl text-start text-black lg:text-4xl font-bold mb-3">
          {title}
        </h1>

        <p className="text-md mb-5 font-sans text-black">business</p>
        <form
          className="lg:space-y-4 mb-5"
          onSubmit={onSubmit}
          ref={formRef}
        >
          <div className="lg:flex lg:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="lg:flex-1 w-full border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="lg:flex-1 border-b-2 w-full focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="lg:flex lg:space-x-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              maxLength={10}
              required
              className="lg:flex-1 border-b-2 w-full focus:border-purple-600 text-[#0a0a0a] p-2 border-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              className="lg:flex-1 border-b-2 w-full focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="lg:flex lg:space-x-4">
            <input
              type="text"
              name="we_are_looking_for"
              placeholder="We are looking for"
              required
              className="lg:flex-1 w-full border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              required
              className="lg:flex-1 w-full border-b-2 focus:border-purple-600 text-[#0a0a0a] border-gray-300 p-2 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 pt-10 pb-4">
            <input
              type="checkbox"
              id="agree"
              className="form-checkbox"
              required
            />
            <label htmlFor="agree" className="text-sm text-black">
              I agree to your{" "}
              <a href="#" className="text-blue-500">
                privacy
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500">
                cookie
              </a>{" "}
              policies.
            </label>
          </div>
          {captcha.question && (
            <div className="flex items-center space-x-1 pb-4">
              <div className="bg-black text-white px-4 py-2">{captcha.question}</div>
              <input
                type="text"
                name="captcha"
                value={captchaInput}
                onChange={(e) => {
                  setCaptchaInput(e.target.value);
                  setIsCaptchaValid(parseInt(e.target.value) === captcha.answer);
                }}
                required
                className="lg:flex-1 border-2 focus:border-purple-600 text-[#0a0a0a] p-2 focus:outline-none border-gray-300"
              />
            </div>
          )}
          <button
            type="submit"
            className={`bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold ${
              !isCaptchaValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isCaptchaValid}
          >
            Submit
          </button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Feedform;
