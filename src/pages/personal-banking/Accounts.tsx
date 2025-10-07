import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { Link } from '../../router/Router';
import { Wallet, TrendingUp, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

export function Accounts() {
  const { config } = useApp();

  const accountTypes = [
    {
      icon: Wallet,
      title: 'Savings Account',
      description: 'Earn competitive interest rates while keeping your money safe and accessible',
      features: [
        'Up to 3.5% annual interest',
        'No minimum balance',
        'Free online banking',
        'Mobile app access',
      ],
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Checking Account',
      description: 'Perfect for everyday banking with unlimited transactions and no monthly fees',
      features: [
        'Unlimited transactions',
        'Free debit card',
        'Overdraft protection',
        'Direct deposit',
      ],
      color: 'green',
    },
    {
      icon: Briefcase,
      title: 'Premium Account',
      description: 'Exclusive benefits and personalized service for high-value customers',
      features: [
        'Dedicated relationship manager',
        'Premium card with benefits',
        'Preferential rates',
        'Concierge services',
      ],
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Account Types</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Choose the account that fits your lifestyle and financial goals
          </p>
        </div>
      </section>

      {/* Accounts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accountTypes.map((account, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-${account.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <account.icon className={`w-7 h-7 text-${account.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{account.title}</h3>
                <p className="text-slate-600 mb-6">{account.description}</p>
                <ul className="space-y-3 mb-6">
                  {account.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={config?.userRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-6 py-3 bg-${account.color}-600 text-white rounded-lg font-semibold hover:bg-${account.color}-700 transition-colors`}
                >
                  Open Account
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-slate-600 mb-8">Our banking experts are here to help you find the perfect account</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
