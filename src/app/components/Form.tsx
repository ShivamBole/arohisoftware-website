"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export function SignupForm() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSignup();
  };

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
      router.refresh();
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.name.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleSocialLogin = async (provider: string) => {
    const response = await signIn(provider, { callbackUrl: "/" });
    if (response?.error) {
      toast.error(response.error);
    }
  };

  return (
    <div
      className="flex flex-1 justify-end items-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/035/801/456/large_2x/young-woman-sitting-on-online-meeting-in-outdoor-cafe-talking-to-laptop-camera-explaining-something-drinking-coffee-photo.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="max-w-md w-full md:mx-5 rounded-lg my-3 p-8 bg-gray-900 bg-opacity-90 shadow-lg py-9">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        <h2 className="font-bold text-3xl text-center text-white">Welcome to ArohiSoftware</h2>
        <p className="text-neutral-400 text-sm text-center mt-2">
          Login to Arohi if you can because we don&apos;t have a login flow yet
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <h1>{loading ? "Processing" : " "}</h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Label htmlFor="firstname" className="text-white">
                Username
              </Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              placeholder="projectmayhem@fc.com"
              type="email"
              className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
            />
          </div>
          <div className="flex flex-col space-y-2 pb-4">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="••••••••"
              required
              type="password"
              className="dark:bg-gray-700 dark:text-white rounded w-full shadow-md"
            />
          </div>
          <div className="flex justify-center ">
            <button
              onClick={onSignup}
              className={`flex w-full justify-center mb-4 rounded ${
                buttonDisabled ? "bg-indigo-600" : "bg-indigo-400"
              } hover:bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
              disabled={buttonDisabled}
            >
              {loading ? "Loading..." : "Signup"}
            </button>
          </div>
        </form>

        <div className="relative my-4 h-px w-full bg-gray-600" />

        <form
          className="flex flex-col items-center mb-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSocialLogin("google");
          }}
        >
          <button
            className="group/btn flex items-center justify-center px-4 w-full max-w-xs bg-gray-800 text-white text-sm font-semibold rounded h-10 shadow-lg"
            type="submit"
          >
            <FcGoogle className="h-4 w-4 mr-2" />
            Sign up with Google
          </button>
        </form>

        <form
          className="flex flex-col items-center space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSocialLogin("github");
          }}
        >
          <button
            className="group/btn flex items-center justify-center px-4 w-full max-w-xs bg-gray-800 text-white text-sm font-semibold rounded h-10 shadow-lg"
            type="submit"
          >
            <FaGithub className="h-4 w-4 mr-2" />
            Sign up with Github
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const Div = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
