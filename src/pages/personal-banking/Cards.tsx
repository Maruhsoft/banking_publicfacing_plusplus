import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { CreditCard, Gift, Shield, Percent, CheckCircle } from 'lucide-react';

export function Cards() {
  const { config } = useApp();

  const cards = [
    {
      type: 'Credit Card',
      name: 'Platinum Rewards',
      icon: CreditCard,
      features: [
        '3% cashback on all purchases',
        'No annual fee first year',
        'Travel insurance included',
        '0% APR for 12 months',
        'Global acceptance',
      ],
      gradient: 'from-slate-700 to-slate-900',
    },
    {
      type: 'Debit Card',
      name: 'Everyday Plus',
      icon: CreditCard,
      features: [
        'Contactless payments',
        'No transaction fees',
        'Instant alerts',
        'ATM access worldwide',
        'Fraud protection',
      ],
      gradient: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit & Debit Cards</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Premium cards with rewards, security, and worldwide acceptance
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${card.gradient} p-8 text-white`}>
                  <p className="text-sm font-medium opacity-80 mb-2">{card.type}</p>
                  <h3 className="text-3xl font-bold mb-6">{card.name}</h3>
                  <div className="flex items-center justify-between">
                    <card.icon className="w-16 h-16 opacity-50" />
                    <div className="text-right">
                      <p className="text-sm opacity-80">Chip & PIN</p>
                      <p className="text-xs opacity-60">Contactless</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-3 mb-6">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={config?.userRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Gift className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Rewards Program</h4>
              <p className="text-slate-600">Earn points on every purchase and redeem for rewards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Fraud Protection</h4>
              <p className="text-slate-600">24/7 monitoring and zero liability on unauthorized charges</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Percent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Competitive Rates</h4>
              <p className="text-slate-600">Low interest rates and transparent fee structure</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
