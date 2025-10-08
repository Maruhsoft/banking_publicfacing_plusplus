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
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
            <th className="p-6 text-left text-white font-bold text-lg">Features</th>
            <th className="p-6 text-center text-white font-bold text-lg">Basic</th>
            <th className="p-6 text-center text-white font-bold text-lg">Premium</th>
            <th className="p-6 text-center text-white font-bold text-lg">Business</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, idx) => (
            <tr
              key={idx}
              className={`border-b border-slate-100 hover:bg-blue-50 transition-colors ${
                idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'
              }`}
            >
              <td className="p-4 font-medium text-slate-900">{feature.name}</td>
              <td className="p-4 text-center">
                {feature.basic ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-slate-300 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center">
                {feature.premium ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-slate-300 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center">
                {feature.business ? (
                  <Check className="w-6 h-6 text-green-600 mx-auto" />
                ) : (
                  <X className="w-6 h-6 text-slate-300 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
