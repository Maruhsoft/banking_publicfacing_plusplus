import React from 'react';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { Smartphone, Camera, Fingerprint, Bell, Download } from 'lucide-react';

export function Mobile() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Full banking features in your pocket',
    },
    {
      icon: Camera,
      title: 'Mobile Deposit',
      description: 'Deposit checks by taking a photo',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Login',
      description: 'Quick and secure access with fingerprint or face ID',
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Real-time alerts for all your transactions',
    },
  ];

  return (
    <PageTemplate
      title="Mobile Banking App"
      subtitle="Award-winning mobile app for iOS and Android"
      gradient="from-violet-600 to-violet-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 bg-violet-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-3xl mx-auto text-center">
          <Download className="w-16 h-16 text-violet-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Download Our App</h2>
          <p className="text-xl text-slate-600 mb-8">Available on iOS and Android</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Download on App Store
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
              Get it on Google Play
            </button>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
