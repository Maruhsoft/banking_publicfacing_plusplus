import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
}

export function TestimonialCard({ name, role, content }: TestimonialProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 relative">
      <Quote className="absolute top-4 right-4 w-12 h-12 text-blue-100" />
      <div className="mb-4">
        <h4 className="text-lg font-bold text-slate-900">{name}</h4>
        <p className="text-slate-600 text-sm">{role}</p>
      </div>
      <p className="text-slate-700 leading-relaxed">{content}</p>
    </div>
  );
}
