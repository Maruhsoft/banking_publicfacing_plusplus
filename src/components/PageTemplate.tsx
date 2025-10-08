import React, { ReactNode } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  gradient?: string;
  imageUrl?: string;
  children: ReactNode;
}

export function PageTemplate({ title, subtitle, gradient = 'from-blue-600 to-blue-700', imageUrl, children }: PageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className={`relative bg-gradient-to-r ${gradient} text-white py-20 overflow-hidden`}>
        {imageUrl && (
          <>
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${imageUrl}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/50"></div>
          </>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{subtitle}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="w-full h-12 md:h-16 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
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
  imageUrl?: string;
}

export function FeatureCard({ icon: Icon, title, description, features, action, imageUrl }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      )}
      <div className="p-8">
        {!imageUrl && (
          <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-blue-600" />
          </div>
        )}
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
            className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {action.label}
          </a>
        )}
      </div>
    </div>
  );
}
