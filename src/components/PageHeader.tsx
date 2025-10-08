import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function PageHeader({ title, subtitle, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h1>
          <p className="text-xl text-blue-100">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-12 md:h-16 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
}
