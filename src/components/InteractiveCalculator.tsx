import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react';

export function InteractiveCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(4.5);
  const [years, setYears] = useState(5);

  const calculateInterest = () => {
    const totalAmount = principal * Math.pow(1 + rate / 100, years);
    const interest = totalAmount - principal;
    return { totalAmount, interest };
  };

  const { totalAmount, interest } = calculateInterest();

  return (
    <div className="bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-blue-200/50">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">Savings Calculator</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="flex items-center justify-between gap-2 text-sm font-semibold text-slate-700 mb-3">
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Initial Deposit
            </span>
            <span className="text-blue-600">${principal.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700"
            aria-label="Initial deposit amount"
          />
        </div>

        <div>
          <label className="flex items-center justify-between gap-2 text-sm font-semibold text-slate-700 mb-3">
            <span className="flex items-center gap-2">
              <Percent className="w-4 h-4" />
              Annual Interest Rate
            </span>
            <span className="text-blue-600">{rate}%</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700"
            aria-label="Annual interest rate"
          />
        </div>

        <div>
          <label className="flex items-center justify-between gap-2 text-sm font-semibold text-slate-700 mb-3">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Investment Period
            </span>
            <span className="text-blue-600">{years} years</span>
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-700"
            aria-label="Investment period in years"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
          <div className="text-sm font-medium text-slate-600 mb-2">Total Interest Earned</div>
          <div className="text-2xl md:text-3xl font-bold text-green-600">${interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
        </div>
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow">
          <div className="text-sm font-medium text-slate-600 mb-2">Total Amount</div>
          <div className="text-2xl md:text-3xl font-bold text-blue-600">${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
        </div>
      </div>
    </div>
  );
}
