import React, { useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Home, Car, GraduationCap, Percent, Calculator, CheckCircle, Clock, FileText, DollarSign, TrendingDown } from 'lucide-react';
import { LoanCalculatorIcon } from '../../components/BankingIcons';

export function Loans() {
  const { config } = useApp();

  const loans = [
    {
      icon: Home,
      title: 'Home Loans',
      description: 'Make your dream home a reality with competitive mortgage rates',
      features: ['Rates from 3.5% APR', 'Up to 30-year terms', 'No prepayment penalties', 'Fast approval process'],
    },
    {
      icon: Car,
      title: 'Auto Loans',
      description: 'Drive away in your new car with flexible financing options',
      features: ['New and used cars', 'Rates from 4.2% APR', 'Up to 7-year terms', 'Quick online application'],
    },
    {
      icon: GraduationCap,
      title: 'Personal Loans',
      description: 'Flexible loans for education, consolidation, or major purchases',
      features: ['Borrow up to $50,000', 'Fixed interest rates', 'No collateral required', 'Same-day funding available'],
    },
  ];

  const [loanAmount, setLoanAmount] = useState(25000);
  const [loanTerm, setLoanTerm] = useState(5);
  const [interestRate] = useState(5.99);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    return payment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  const loanBenefits = [
    {
      icon: Clock,
      title: 'Quick Approval',
      description: 'Get approved in as little as 24 hours with our streamlined application process',
    },
    {
      icon: FileText,
      title: 'Simple Documentation',
      description: 'Minimal paperwork required with easy online document submission',
    },
    {
      icon: DollarSign,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no application fees or prepayment penalties',
    },
    {
      icon: TrendingDown,
      title: 'Competitive Rates',
      description: 'Industry-leading interest rates that save you money over the life of your loan',
    },
  ];

  return (
    <PageTemplate
      title="Personal Loans"
      subtitle="Flexible financing solutions to help you achieve your goals"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loans.map((loan, idx) => (
            <FeatureCard
              key={idx}
              {...loan}
              action={{ label: 'Apply Now', href: config?.userRegistrationUrl || '#' }}
            />
          ))}
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <LoanCalculatorIcon className="w-20 h-20 animate-float" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Loan Payment Calculator</h2>
            <p className="text-xl text-slate-600">
              Calculate your estimated monthly payments and see how much you can save
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <DollarSign className="w-4 h-4" />
                    Loan Amount: ${loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$5,000</span>
                    <span>$100,000</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                    <Clock className="w-4 h-4" />
                    Loan Term: {loanTerm} years
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Interest Rate</span>
                    <span className="text-lg font-bold text-blue-600">{interestRate}% APR</span>
                  </div>
                  <p className="text-xs text-slate-500">Rate based on excellent credit score</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                  <div className="text-sm font-medium text-slate-600 mb-2">Monthly Payment</div>
                  <div className="text-4xl font-bold text-blue-600">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-slate-600">Total Amount Paid</span>
                    <span className="text-xl font-bold text-slate-900">${totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Total Interest</span>
                    <span className="text-xl font-bold text-orange-600">${totalInterest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                  Apply for This Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Loans?</h2>
            <p className="text-xl text-slate-600">
              Experience hassle-free borrowing with competitive rates and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-3xl mx-auto text-center">
          <Percent className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Competitive Rates & Transparent Terms</h2>
          <p className="text-xl text-slate-600 mb-8">
            No hidden fees, flexible repayment options, and personalized service from application to approval
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">5.99%</div>
              <div className="text-sm text-slate-600">Starting APR</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">24 Hours</div>
              <div className="text-sm text-slate-600">Fast Approval</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">$0</div>
              <div className="text-sm text-slate-600">Application Fee</div>
            </div>
          </div>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
