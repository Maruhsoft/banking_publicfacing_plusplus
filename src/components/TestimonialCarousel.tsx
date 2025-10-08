import React, { useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const visibleTestimonials = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleTestimonials);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleTestimonials
  );

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {displayedTestimonials.map((testimonial, idx) => (
          <div
            key={currentIndex + idx}
            className="animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white border-2 border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-md hover:shadow-lg"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial set ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white border-2 border-slate-300 text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-md hover:shadow-lg"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
