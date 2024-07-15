import React from 'react';
import Footer from '../components/Footer';

const TermsAndConditions: React.FC = () => {
  return (
  <div>
      <div className="max-w-3xl mx-auto p-8 mt-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Terms and Conditions</h1>
      
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-8"></div>

      <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        Welcome to <span className="font-bold">Arohi Software Development</span>. By accessing or using our website and services, you agree to be bound by these Terms and Conditions (`&quot;`Terms`&quot;`). Our company provides various software development services, including custom software development, web application development, mobile application development, software maintenance and support, software consulting, cloud computing, and software integration services.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        As a user, you are responsible for providing accurate and complete information, complying with all applicable laws, and respecting the intellectual property rights of <span className="font-bold">Arohi Software Development</span> and others. All content on our website, including text, graphics, logos, images, audio clips, digital downloads, and software, is the property of <span className="font-bold">Arohi Software Development</span> or its content suppliers and is protected by intellectual property laws.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        Fees for our services will be as agreed upon in the service contract, with payments made according to the specified schedule. Late payments may incur additional charges as outlined in the contract.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Confidentiality</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        Both parties agree to maintain the confidentiality of all private information, including business plans, customer lists, financial data, and proprietary software.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        <span className="font-bold">Arohi Software Development</span> will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses resulting from the use or inability to use our services, unauthorized access to our servers, interruption of transmission, bugs or viruses, or any errors or omissions in any content.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        We reserve the right to terminate or suspend your access to our services without prior notice or liability if you breach these Terms.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        These Terms are governed by the laws of India, without regard to conflict of law provisions.
      </p>

      <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
      <p className="mb-6 text-lg leading-relaxed text-white">
        We may modify or replace these Terms at our sole discretion, with at least 30 day`&apos;`s notice for any material changes.
      </p>

    </div>
    <Footer/>
  </div>
  );
};

export default TermsAndConditions;
