import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const { config } = useApp();

  if (!config) return null;

  return (
    <PageTemplate
      title="Contact Us"
      subtitle="We're here to help you with all your banking needs"
      gradient="from-blue-600 to-blue-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Phone</h3>
            {config.contact.phones.map((phone, idx) => (
              <p key={idx} className="text-slate-600 mb-1">
                <a href={`tel:${phone}`} className="hover:text-blue-600">
                  {phone}
                </a>
              </p>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Email</h3>
            <p className="text-slate-600">
              <a href={`mailto:${config.contact.email}`} className="hover:text-blue-600">
                {config.contact.email}
              </a>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Head Office</h3>
            <p className="text-slate-600">{config.contact.headOffice}</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Customer Service Hours</h3>
              <div className="space-y-1 text-slate-600">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
                <p className="text-blue-600 font-semibold mt-2">24/7 Online Chat Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
