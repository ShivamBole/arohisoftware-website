"use client";

import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="">
        <footer className="footer bg-gray-900 lg:p-20 p-10 text-white grid lg:grid-cols-5 grid-cols-2 gap-8 lg:gap-0">
          <nav className="text-white">
            <h6 className="footer-title text-white text-xl mb-4">Services</h6>
            <div className="font-thin">
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Development</Link>
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Design</Link>
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Marketing</Link>
              <Link href="/service" className="link hover:underline link-hover mt-2 block">Security</Link>
            </div>
          </nav>
          <nav className="text-white">
            <h6 className="footer-title text-white text-xl mb-4">Company</h6>
            <div className="font-thin">
              <Link href="/leaders" className="link hover:underline link-hover mt-2 block">About us</Link>
              <Link href="/contact" className="link hover:underline link-hover mt-2 block">Contact</Link>
              <Link href="/jobs" className="link hover:underline link-hover mt-2 block">Jobs</Link>
              {/* <Link href={"/press"} className="link hover:underline link-hover mt-2 block">Press kit</Link> */}
            </div>
          </nav>
          <nav className="text-white">
            <h6 className="footer-title text-white text-xl mb-4">Legal</h6>
            <div className="font-thin">
              <Link href="/termsofuse" className="link hover:underline link-hover mt-2 block">Terms of use</Link>
              <Link href="/CookiePolicy" className="link hover:underline link-hover mt-2 block">Cookie Policy/Settings</Link>
              <Link href="/accesebility" className="link hover:underline link-hover mt-2 block">Cookie policy</Link>
            </div>
          </nav>
          <form className="lg:col-span-1 col-span-2">
            <h6 className="footer-title text-white text-xl mb-4">Newsletter</h6>
            <fieldset className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Enter your email address</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input my-3 bg-black font-mono input-bordered rounded-lg p-3 flex-grow"
                />
                <button className="btn btn-primary p-2 h-12 rounded-xl bg-blue-600 ml-2">Subscribe</button>
              </div>
            </fieldset>
          </form>
          <div className="col-span-2 lg:col-span-5 text-center text-sm mt-20 lg:mt-10">
            <p>&copy; {new Date().getFullYear()} Arohi Software. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
