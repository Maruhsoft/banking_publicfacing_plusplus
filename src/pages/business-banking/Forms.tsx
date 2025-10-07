import React from 'react';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { FileText, Download } from 'lucide-react';

export function BusinessForms() {
  const forms = [
    { title: 'Business Account Application', category: 'Accounts' },
    { title: 'Corporate Credit Application', category: 'Credit' },
    { title: 'Wire Transfer Request', category: 'Transactions' },
    { title: 'Signatory Update Form', category: 'Account Management' },
    { title: 'Business Loan Application', category: 'Lending' },
    { title: 'Treasury Services Agreement', category: 'Treasury' },
  ];

  return (
    <PageTemplate
      title="Business Forms"
      subtitle="Download forms and applications for business banking services"
      gradient="from-slate-600 to-slate-700"
    >
      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {forms.map((form, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-6 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{form.title}</h3>
                    <p className="text-sm text-slate-600">{form.category}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
