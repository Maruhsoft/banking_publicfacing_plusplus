import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { Link } from '../../router/Router';
import { Wallet, TrendingUp, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';

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
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      image: 'https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        title="Personal Account Types"
        subtitle="Choose the account that fits your lifestyle and financial goals"
        imageUrl="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Accounts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accountTypes.map((account, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={account.image} alt={account.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      <account.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
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
                    className="block text-center px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Open Account
                  </a>
                </div>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
