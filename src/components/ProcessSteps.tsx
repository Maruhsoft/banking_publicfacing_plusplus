import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStepsProps {
  steps: Step[];
  title?: string;
}

export function ProcessSteps({ steps, title }: ProcessStepsProps) {
  return (
    <div>
      {title && (
        <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">{title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-blue-600 to-blue-400">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
              </div>
            )}
            <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200/50 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
