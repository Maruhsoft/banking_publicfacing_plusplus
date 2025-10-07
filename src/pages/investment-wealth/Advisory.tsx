import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { Users, Award, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export function Advisory() {
  const { config } = useApp();

  const services = [
    'Personalized wealth management',
    'Estate planning assistance',
    'Tax-efficient strategies',
    'Retirement income planning',
    'Risk management',
    'Charitable giving strategies',
  ];

  return (
    <PageTemplate
      title="Wealth Advisory"
      subtitle="Expert guidance from certified financial advisors"
      gradient="from-indigo-600 to-indigo-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Advisors</h3>
            <p className="text-slate-600">Certified professionals with decades of experience</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Award-Winning</h3>
            <p className="text-slate-600">Recognized for excellence in wealth management</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Results</h3>
            <p className="text-slate-600">Consistent outperformance for our clients</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Shield className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Fiduciary Duty</h3>
            <p className="text-slate-600">Always acting in your best interest</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="slate" title="Our Services">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Schedule a Consultation</h2>
          <p className="text-xl text-slate-600 mb-8">
            Meet with one of our wealth advisors to discuss your financial goals
          </p>
          <a
            href={config?.userRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Book Appointment
          </a>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
