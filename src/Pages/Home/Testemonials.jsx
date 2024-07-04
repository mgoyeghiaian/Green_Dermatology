import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FormatQuote } from '@mui/icons-material';

const testimonialsData = [
  {
    name: 'Emily Davis',
    text: 'Delaware Dermatology has transformed my skin. The team is incredibly knowledgeable and kind.',
  },
  {
    name: 'Michael Brown',
    text: 'I’ve been coming here for years. They’ve helped me manage my eczema with such care.',
  },
  {
    name: 'Sophia Johnson',
    text: 'The team really listens and provides solutions that work. My skin has never looked better!',
  },
  {
    name: 'William Garcia',
    text: 'From the moment I walked in, I felt at ease. My psoriasis is finally under control!',
  },
  {
    name: 'Olivia Martinez',
    text: 'Wonderful experience! The anti-aging treatments have made a huge difference. I look years younger!',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] bg-bg-main flex flex-col border-y-2 border-primary items-center justify-center text-primary p-4">
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <button
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2"
          onClick={handlePrev}
        >
          <ChevronLeft fontSize="large" />
        </button>
        <div className="p-8 flex flex-col items-center">
          <FormatQuote fontSize="large" className="mb-4" />
          <p className="text-center px-5 text-xl md:text-2xl lg:text-3xl italic mb-4">&quot;{testimonialsData[currentIndex].text}&quot;</p>
          <hr className="w-16 border-t-2 border-gray-300 mb-4" />
          <p className="text-center text-base md:text-lg lg:text-xl">- {testimonialsData[currentIndex].name} -</p>
        </div>
        <button
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2"
          onClick={handleNext}
        >
          <ChevronRight fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
