// "use client"
// import { useState } from "react";
// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     twitterPassword: '',
//   })
//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center pt-36 bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-white">Welcome to Aceternity</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="firstName" className="block text-gray-400 mb-2">First name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastName" className="block text-gray-400 mb-2">Last name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-400 mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="twitterPassword" className="block text-gray-400 mb-2">Your twitter password</label>
//             <input
//               type="password"
//               id="twitterPassword"
//               name="twitterPassword"
//               value={formData.twitterPassword}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-white"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full p-2 bg-blue-600 rounded text-white font-bold hover:bg-blue-700"
//           >
//             Sign up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
"use client"
import { SignupForm } from "../components/Form"

function page() {
  return (
    <div className="pt-16">
     <SignupForm/>
    </div>
  )
}

export default page
