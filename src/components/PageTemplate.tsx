import React, { ReactNode } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  gradient?: string;
  children: ReactNode;
}

export function PageTemplate({ title, subtitle, gradient = 'from-blue-600 to-blue-700', children }: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className={`bg-gradient-to-r ${gradient} text-white py-20`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{subtitle}</p>
        </div>
      </section>
      {children}
    </div>
  );
}

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  background?: 'white' | 'slate';
}

export function ContentSection({ title, children, background = 'white' }: ContentSectionProps) {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-slate-50';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        {title && <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  action?: {
    label: string;
    href: string;
  };
}

export function FeatureCard({ icon: Icon, title, description, features, action }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700">
              <span className="text-blue-600">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {action && (
        <a
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
