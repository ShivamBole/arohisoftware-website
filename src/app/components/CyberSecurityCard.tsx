import React from 'react';

function CyberSecurityCard() {
  return (
    <div className="w-full max-w-screen-lg bg-gray-100 lg:w-10/12 p-6 rounded-lg py-16 px-10 shadow-2xl transform transition-transform hover:scale-105 my-10 mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">360° Cyber Resiliency</h2>
          <p className="text-gray-700 mb-4 font-semibold">
            Why invest on reactive threat mitigation`&rsquo;` when managed Cyber Security Services help proactively prevent threats?
          </p>
          <p className="text-gray-700 mb-4">
            Effective security and compliance are crucial for safeguarding business assets`&rsquo;` customer data`&rsquo;` and reputation. Despite the relentless stream of attacks`&rsquo;` Xoriant`&apos;`s extensive security expertise and continuous adoption of innovative tools empower us to shield your assets—be it legacy systems`&rsquo;` cloud-native infrastructure`&rsquo;` or mobile apps. Count on us to eliminate both existing and potential vulnerabilities`&rsquo;` enabling your business to stay secure.
          </p>
        </div>
        <div className="flex-1 p-4 flex justify-center items-center">
          <iframe
            className="w-full h-64 md:h-full rounded-lg"
            src="https://www.youtube.com/embed/GX_XsdNv1PY?si=YTuHgczhwTbU6DSo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurityCard;
