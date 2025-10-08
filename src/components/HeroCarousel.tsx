import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgColor: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export function HeroCarousel({ slides, autoPlayInterval = 5000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className={`h-full ${slide.bgColor} bg-gradient-to-br`}>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/70 to-transparent"></div>

            <div className="container mx-auto px-4 py-20 md:py-32 relative z-10 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    {slide.buttonText}
                  </a>
                </div>

                <div className="hidden lg:flex flex-col gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all">
                    <div className="text-white">
                      <div className="text-sm font-medium text-blue-200 mb-2">Current Interest Rate</div>
                      <div className="text-4xl font-bold mb-1">4.5% APY</div>
                      <div className="text-sm text-blue-200">On savings accounts</div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all">
                    <div className="text-white">
                      <div className="text-sm font-medium text-blue-200 mb-2">Active Users</div>
                      <div className="text-4xl font-bold mb-1">2M+</div>
                      <div className="text-sm text-blue-200">Banking with confidence</div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 shadow-2xl transform hover:scale-105 transition-all">
                    <div className="text-white">
                      <div className="text-sm font-medium text-blue-200 mb-2">Global Reach</div>
                      <div className="text-4xl font-bold mb-1">150+</div>
                      <div className="text-sm text-blue-200">Countries served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
