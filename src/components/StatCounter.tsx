import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function StatCounter({ end, duration = 2000, suffix = '', prefix = '', label, icon: Icon }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
      {Icon && (
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-7 h-7 text-blue-600" />
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium">{label}</div>
    </div>
  );
}
