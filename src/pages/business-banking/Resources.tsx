import React from 'react';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { BookOpen, Video, FileText, TrendingUp } from 'lucide-react';

export function BusinessResources() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Business Guides',
      description: 'Comprehensive guides on starting and growing your business',
      count: '25+ guides',
    },
    {
      icon: Video,
      title: 'Webinars',
      description: 'Expert-led webinars on financial management and strategy',
      count: '50+ recordings',
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Learn from successful businesses and their growth stories',
      count: '30+ studies',
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Latest trends, analysis, and economic forecasts',
      count: 'Updated daily',
    },
  ];

  return (
    <PageTemplate
      title="Business Resources"
      subtitle="Tools, insights, and education to help your business succeed"
      gradient="from-teal-600 to-teal-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{resource.title}</h3>
              <p className="text-slate-600 mb-4">{resource.description}</p>
              <p className="text-teal-600 font-semibold">{resource.count}</p>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
