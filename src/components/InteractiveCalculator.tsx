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
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Savings Calculator</h3>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
            <DollarSign className="w-4 h-4" />
            Initial Deposit: ${principal.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
            <Percent className="w-4 h-4" />
            Annual Interest Rate: {rate}%
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
            <TrendingUp className="w-4 h-4" />
            Investment Period: {years} years
          </label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
          <div className="text-sm font-medium text-slate-600 mb-2">Total Interest Earned</div>
          <div className="text-3xl font-bold text-green-600">${interest.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
          <div className="text-sm font-medium text-slate-600 mb-2">Total Amount</div>
          <div className="text-3xl font-bold text-blue-600">${totalAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
        </div>
      </div>
    </div>
  );
}
