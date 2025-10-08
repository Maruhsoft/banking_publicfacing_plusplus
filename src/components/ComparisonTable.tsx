import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  basic: boolean;
  premium: boolean;
  business: boolean;
}

const features: ComparisonFeature[] = [
  { name: 'Online Banking', basic: true, premium: true, business: true },
  { name: 'Mobile App', basic: true, premium: true, business: true },
  { name: 'Free Debit Card', basic: true, premium: true, business: true },
  { name: 'ATM Access Worldwide', basic: true, premium: true, business: true },
  { name: 'Monthly Fee', basic: false, premium: false, business: false },
  { name: 'Interest on Balance', basic: true, premium: true, business: true },
  { name: 'Overdraft Protection', basic: false, premium: true, business: true },
  { name: 'Premium Credit Card', basic: false, premium: true, business: true },
  { name: 'Dedicated Relationship Manager', basic: false, premium: true, business: true },
  { name: 'Priority Customer Service', basic: false, premium: true, business: true },
  { name: 'Business Expense Management', basic: false, premium: false, business: true },
  { name: 'Payroll Services', basic: false, premium: false, business: true },
  { name: 'Multiple User Access', basic: false, premium: false, business: true },
  { name: 'Advanced Reporting', basic: false, premium: false, business: true },
];

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl shadow-lg">
      <table className="w-full min-w-[600px] border-collapse bg-white/90 backdrop-blur-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
            <th className="p-4 md:p-6 text-left text-white font-bold text-base md:text-lg sticky left-0 bg-gradient-to-r from-blue-600 to-blue-700">Features</th>
            <th className="p-4 md:p-6 text-center text-white font-bold text-base md:text-lg">Basic</th>
            <th className="p-4 md:p-6 text-center text-white font-bold text-base md:text-lg">Premium</th>
            <th className="p-4 md:p-6 text-center text-white font-bold text-base md:text-lg">Business</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr
              key={idx}
              className={`border-b border-slate-200/50 hover:bg-blue-50/80 transition-colors ${
                idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white/50'
              }`}
            >
              <td className="p-3 md:p-4 font-medium text-slate-900 text-sm md:text-base sticky left-0 bg-inherit">{feature.name}</td>
              <td className="p-3 md:p-4 text-center">
                {feature.basic ? (
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-5 h-5 md:w-6 md:h-6 text-slate-300 mx-auto" />
                )}
              </td>
              <td className="p-3 md:p-4 text-center">
                {feature.premium ? (
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-5 h-5 md:w-6 md:h-6 text-slate-300 mx-auto" />
                )}
              </td>
              <td className="p-3 md:p-4 text-center">
                {feature.business ? (
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-5 h-5 md:w-6 md:h-6 text-slate-300 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
