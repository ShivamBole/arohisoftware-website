import React from 'react';

const WhyReinventLearning: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Reinvent Learning?</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-3xl font-bold mb-2"> Learning Strategies:</h3>
            <p className="text-gray-400 text-justify">Explore the effectiveness of personalized learning approaches compared to traditional methods, considering diverse student needs and preferences. Evaluate technologies enabling personalized learning and their impact on engagement and academic performance.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-3xl font-bold mb-2">Emerging Technologies</h3>
            <p className="text-gray-400 text-justify"> Investigate how AI, virtual reality, and augmented reality are transforming education. Discuss benefits, challenges, case studies, and ethical considerations for integrating these technologies into learning environments.</p>
          </div>
          <div className="flex flex-col items-center ">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-3xl font-bold mb-2">Cultural Adaptations</h3>
            <p className="text-gray-400 text-justify">Analyze the importance of cultural diversity in education. Explore strategies for inclusive learning environments that respect diverse perspectives, enhancing student motivation and academic achievement</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t-4 border-purple-600 w-16 mb-4"></div>
            <h3 className="text-3xl font-bold mb-2">Skills for the Future</h3>
            <p className="text-gray-400 text-justify">Identify essential 21st-century skills and competencies. Discuss how educational frameworks can be updated to prepare students for evolving job markets, emphasizing critical thinking, creativity, collaboration, and digital literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyReinventLearning;
