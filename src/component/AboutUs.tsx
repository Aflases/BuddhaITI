import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const AboutUs = () => {
      const [currentSlide, setCurrentSlide] = useState(0);
        const aboutImages = [
    { id: 1, src: '/assets/Entrance.jpeg', alt: 'Campus Entrance' },
    { id: 2, src: '/assets/computerlab.jpeg', alt: 'Computer Lab' },
    { id: 3, src: '/assets/newspaperMention.jpeg', alt: 'Job Fare NewsPaper Mention' },
    { id: 4, src: '/assets/Acheivements.jpeg', alt: 'Acheivements' }
  ];
    

     const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Established by Late Er. JAINATH PRASAD in 2016, I.T.I trainees play a vital role in industrial growth. With rapid industrialization, the demand for skilled manpower has risen sharply. I.T.I aims to meet this need by training youth in various trades and boosting employment.              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This Technical Institutional has been set up provide quality in technical education to the student and making the student socially, physically, psychologically and mentally fit, active and useful and worthy for job.

              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The founder of the Technical Institute has established this institute not with the aim of generating any fund but for delivering some of the social responsibilties.
              </p>
              

            </div>

            {/* Image Slider */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl h-96">
                <img
                  src={aboutImages[currentSlide].src}
                  alt={aboutImages[currentSlide].alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Slider Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                >
                  <ChevronLeft size={24} className="text-gray-800" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
                >
                  <ChevronRight size={24} className="text-gray-800" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <h4>DGET File Reference No. -DGT-6/4/141/2016-TC</h4>
          </div>
        </div>
  )
}

export default AboutUs