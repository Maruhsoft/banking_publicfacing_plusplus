import React, { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { TrendingUp, Shield, Calendar, CheckCircle, Calculator, DollarSign, Percent, Clock, PiggyBank, Award } from 'lucide-react';
import { InvestmentGrowthIcon } from '../../components/BankingIcons';

export function FixedDeposits() {
  const { config } = useApp();

  const terms = [
    { duration: '6 Months', rate: '3.5%', minDeposit: '$1,000' },
    { duration: '1 Year', rate: '4.0%', minDeposit: '$1,000' },
    { duration: '2 Years', rate: '4.5%', minDeposit: '$2,500' },
    { duration: '5 Years', rate: '5.2%', minDeposit: '$5,000' },
  ];

  const benefits = [
    'Guaranteed returns',
    'FDIC insured up to $250,000',
    'Flexible term options',
    'Automatic renewal available',
    'Competitive interest rates',
    'No monthly fees',
  ];

  const [depositAmount, setDepositAmount] = useState(10000);
  const [selectedTerm, setSelectedTerm] = useState(2);

  const calculateReturns = () => {
    const rateMap = [3.5, 4.0, 4.5, 5.2];
    const rate = rateMap[selectedTerm] / 100;
    const years = [0.5, 1, 2, 5][selectedTerm];
    const maturityAmount = depositAmount * Math.pow(1 + rate, years);
    const interest = maturityAmount - depositAmount;
    return { maturityAmount, interest, years };
  };

  const { maturityAmount, interest, years } = calculateReturns();

  const features = [
    {
      icon: Shield,
      title: 'Capital Protection',
      description: 'Your principal amount is fully protected and guaranteed',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Returns',
      description: 'Earn higher interest rates compared to regular savings',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Calendar,
      title: 'Flexible Terms',
      description: 'Choose from multiple tenure options to suit your goals',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Award,
      title: 'Reliable Income',
      description: 'Receive steady, predictable returns on maturity',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <PageTemplate
      title="Fixed Deposits"
      subtitle="Secure your future with guaranteed returns on your investments"
      gradient="from-amber-600 to-amber-700"
      imageUrl="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1920"
    >
      <ContentSection title="Current Rates">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {terms.map((term, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-600 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer ${
                selectedTerm === idx ? 'ring-4 ring-amber-300' : ''
              }`}
              onClick={() => setSelectedTerm(idx)}
            >
              <Calendar className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{term.duration}</h3>
              <div className="text-4xl font-bold text-amber-600 mb-2">{term.rate}</div>
              <p className="text-slate-600">APY</p>
              <p className="text-sm text-slate-500 mt-4">Min. {term.minDeposit}</p>
              {selectedTerm === idx && (
                <div className="mt-4 px-3 py-1 bg-amber-600 text-white text-xs rounded-full inline-block">
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <InvestmentGrowthIcon className="w-20 h-20 animate-float" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Calculate Your Returns</h2>
            <p className="text-xl text-slate-600">
              See how much you can earn with our fixed deposit accounts
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-xl border border-amber-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <DollarSign className="w-4 h-4" />
                    Deposit Amount: ${depositAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="w-full h-3 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$1,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Selected Term</span>
                    <span className="text-lg font-bold text-amber-600">{terms[selectedTerm].duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Interest Rate</span>
                    <span className="text-lg font-bold text-amber-600">{terms[selectedTerm].rate} APY</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <PiggyBank className="w-5 h-5 text-amber-700" />
                    <span className="text-sm font-semibold text-amber-900">Investment Summary</span>
                  </div>
                  <p className="text-xs text-amber-800">
                    Invest ${depositAmount.toLocaleString()} for {years} {years === 1 ? 'year' : 'years'} at {terms[selectedTerm].rate} APY
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                  <div className="text-sm font-medium text-slate-600 mb-2">Maturity Amount</div>
                  <div className="text-4xl font-bold text-green-600">${maturityAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-slate-600">Interest Earned</span>
                    <span className="text-2xl font-bold text-amber-600">${interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Principal Amount</span>
                    <span className="text-xl font-bold text-slate-900">${depositAmount.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl">
                  Open Fixed Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Fixed Deposits?</h2>
            <p className="text-xl text-slate-600">
              A safe and reliable investment option for your financial goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Additional Benefits">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-8 shadow-lg border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Investing Today</h2>
          <p className="text-xl text-slate-600 mb-8">
            Open a fixed deposit account and watch your savings grow
          </p>
          <a
            href={config?.userRegistrationUrl}
            
            
            className="inline-block px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg"
          >
            Open Account
          </a>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
