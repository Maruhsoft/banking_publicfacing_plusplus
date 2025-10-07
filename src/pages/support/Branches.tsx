import React from 'react';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { MapPin, Clock, Phone } from 'lucide-react';

export function Branches() {
  const branches = [
    {
      name: 'Downtown Branch',
      address: '123 Main Street, New York, NY 10001',
      phone: '+1 (212) 555-0100',
      hours: 'Mon-Fri: 9AM-5PM, Sat: 9AM-1PM',
    },
    {
      name: 'Midtown Office',
      address: '456 Park Avenue, New York, NY 10022',
      phone: '+1 (212) 555-0200',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 9AM-2PM',
    },
    {
      name: 'Brooklyn Center',
      address: '789 Atlantic Ave, Brooklyn, NY 11217',
      phone: '+1 (718) 555-0300',
      hours: 'Mon-Fri: 9AM-5PM, Sat: 9AM-1PM',
    },
  ];

  return (
    <PageTemplate
      title="Branch Locator"
      subtitle="Find a branch near you"
      gradient="from-teal-600 to-teal-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{branch.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">{branch.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">{branch.phone}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">{branch.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
