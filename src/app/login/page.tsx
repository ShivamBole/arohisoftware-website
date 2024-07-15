"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import './page.css';
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter(); // Use useRouter inside the component
  const { data: session, status } = useSession(); // Fetch session status

  const [user, setUser] = useState({ email: '', password: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/"); // Redirect to homepage if user is authenticated
    }
  }, [status, router]);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const result = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(result.error);
        setLoading(false);
      } else {
        toast.success("Login successful");
        router.push("/");
        router.refresh(); // Redirect after successful login
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed");
      setLoading(false);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>; // Optional loading state while checking session
  }

  return (
    <div className="flex flex-1 w-full h-[96vh] md:flex-row flex-col-reverse justify-between items-center mt-6 px-6 lg:px-8 main">
      <div className="w-full max-w-md p-10 md:mt-14 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="my-16 text-center text-3xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="email"
                  required
                  className="block w-full p-3 rounded border-0 py-1.5 placeholder-gray-400 text-white bg-gray-700 shadow-md ring-1 ring-inset ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <Link href="/password" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  required
                  className="block w-full p-3 rounded border-0 py-1.5 placeholder-gray-400 text-white bg-gray-700 shadow-md ring-1 ring-inset ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                disabled={buttonDisabled}
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
          <p className="mt-3 mb-3 text-center text-sm text-gray-400">
            Not a member?{' '}
            <Link href="/signup" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <p className="text-center text-sm border-gray-600 border-y-2 text-gray-400 py-2">
            Or Continue With
          </p>
          <form className="flex mt-5 space-x-4" onSubmit={async (e) => {
            e.preventDefault();
            await signIn("google");
          }}>
            <button
              className="flex items-center w-full justify-center rounded bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 px-4 py-2 text-sm font-semibold leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              type="submit"
            >
              <FcGoogle className="h-4 w-4 mr-2" />
              <span>Google</span>
            </button>
          </form>
          <form className="flex mt-5 space-x-4" onSubmit={async (e) => {
            e.preventDefault();
            await signIn("github");
          }}>
            <button
              className="flex items-center w-full justify-center rounded bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 px-4 py-2 text-sm font-semibold leading-6 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
              type="submit"
            >
              <FaGithub className="h-4 w-4 mr-2" />
              <span>Github</span>
            </button>
          </form>
        </div>
      </div>
      <div className="mt-[15%] md:w-[40%] mb-6">
        <h1 className="mb-10 text-4xl text-green-700 font-serif font-extrabold animate__animated animate__bounce animate__slower animate__infinite">
          Welcome To Arohi Softwares
        </h1>
        <p className="text-lg font-semibold text-white font-serif animate__animated animate__slower animate__infinite">
          Empower Your Business with Cutting-Edge Solutions: Seamless, Smart, and Secure. Welcome to Your Future with Arohi Software.
        </p>
      </div>
    </div>
  );
}

export default Page;
