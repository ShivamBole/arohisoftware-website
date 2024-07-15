"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function page() {
  const faqs = [
    {
      question: "What products or services does your software company offer?",
      answer: "We offer custom software development, off-the-shelf solutions, and consultancy services."
    },
    {
      question: "How can I request a quote or proposal for your services?",
      answer: "Contact us through our website, email, or phone for a customized proposal."
    },
    {
      question: "Can you customize your software solutions to fit our specific requirements?",
      answer: "Yes, we specialize in tailoring solutions to meet your unique needs."
    },
    {
      question: "How do you ensure the security and privacy of our data?",
      answer: "We employ industry-standard security measures and comply with data protection regulations."
    },
    {
      question: "What support and maintenance options do you offer for your software products?",
      answer: "We provide comprehensive support, updates, and maintenance services."
    },
    {
      question: "What is your company's approach to innovation?",
      answer: "We foster a culture of innovation by encouraging creativity and continuous improvement."
    },
    {
      question: "How experienced is your development team?",
      answer: "Our team consists of highly skilled professionals with years of experience in the software industry."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in a wide range of technologies including web, mobile, and cloud solutions."
    },
    {
      question: "Do you offer training for your software products?",
      answer: "Yes, we provide training sessions to ensure our clients can effectively use our software."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a variety of industries including healthcare, finance, retail, and more."
    },
    {
      question: "Can you integrate your software with our existing systems?",
      answer: "Yes, we can integrate our solutions with your current systems to ensure seamless operation."
    },
    {
      question: "How do you handle project management?",
      answer: "We use agile methodologies to manage projects, ensuring timely and efficient delivery."
    },
    {
      question: "Do you provide ongoing support after the project is completed?",
      answer: "Yes, we offer ongoing support to ensure your software continues to meet your needs."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing model is flexible and depends on the scope and requirements of the project."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "The timeline varies depending on the project size and complexity, but we strive to deliver as quickly as possible."
    },
    {
      question: "Can you help with digital transformation initiatives?",
      answer: "Yes, we assist businesses in their digital transformation journeys to improve efficiency and competitiveness."
    },
    {
      question: "What is your approach to quality assurance?",
      answer: "We have a dedicated QA team that ensures our software meets the highest quality standards."
    },
    {
      question: "Do you offer cloud-based solutions?",
      answer: "Yes, we offer a variety of cloud-based solutions to help businesses scale and improve performance."
    },
    {
      question: "What sets your company apart from others?",
      answer: "Our commitment to innovation, quality, and customer satisfaction sets us apart from the competition."
    },
    {
      question: "How can I get started with your services?",
      answer: "You can get started by contacting us through our website, where we can discuss your needs and how we can help."
    }
  ];

  return (
    <div>
      <h1 className="text-center relative pt-28 text-5xl pb-10">FAQ</h1>
      <div className="flex flex-col px-4 sm:px-10  text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-xl gap-y-10">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="p-4 lg:p-6 text-xl lg:text-3xl w-full max-w-full">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed p-4 lg:p-6 text-xl lg:text-2xl max-w-full">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default page;
