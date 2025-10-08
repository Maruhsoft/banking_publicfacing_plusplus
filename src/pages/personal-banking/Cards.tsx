import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { CreditCard, Gift, Shield, Percent, CheckCircle, Star, Globe, Smartphone, Zap, Award, Lock, TrendingUp } from 'lucide-react';
import { PageHeader } from '../../components/PageHeader';
import { CreditCardIcon } from '../../components/BankingIcons';

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
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Most Popular',
      tagColor: 'bg-orange-500',
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
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Essential',
      tagColor: 'bg-blue-500',
    },
    {
      type: 'Premium Card',
      name: 'Black Elite',
      icon: CreditCard,
      features: [
        '5% cashback on all purchases',
        'Complimentary airport lounge access',
        'Concierge service 24/7',
        '2 free international trips per year',
        'Premium travel and medical insurance',
      ],
      gradient: 'from-gray-900 to-black',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Exclusive',
      tagColor: 'bg-yellow-500',
    },
  ];

  const cardBenefits = [
    {
      icon: Star,
      title: 'Cashback Rewards',
      description: 'Earn up to 5% cashback on all purchases with no category restrictions',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Use your card at over 40 million merchants worldwide',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile Wallet',
      description: 'Compatible with Apple Pay, Google Pay, and Samsung Pay',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Lock,
      title: 'Advanced Security',
      description: 'EMV chip, biometric authentication, and real-time fraud monitoring',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Get real-time alerts for every transaction on your account',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Award,
      title: 'Premium Perks',
      description: 'Access exclusive discounts, offers, and VIP experiences',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        title="Credit & Debit Cards"
        subtitle="Premium cards with rewards, security, and worldwide acceptance"
        imageUrl="https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-90`}></div>
                  {card.tag && (
                    <div className={`absolute top-4 right-4 ${card.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {card.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium opacity-90 mb-2">{card.type}</p>
                      <h3 className="text-3xl font-bold">{card.name}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <card.icon className="w-16 h-16 opacity-40" />
                      <div className="text-right">
                        <p className="text-sm opacity-90 font-medium">Chip & PIN</p>
                        <p className="text-xs opacity-75">Contactless</p>
                      </div>
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
                    className="block text-center px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Gift className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Rewards Program</h4>
              <p className="text-slate-600">Earn points on every purchase and redeem for rewards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Fraud Protection</h4>
              <p className="text-slate-600">24/7 monitoring and zero liability on unauthorized charges</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <Percent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Competitive Rates</h4>
              <p className="text-slate-600">Low interest rates and transparent fee structure</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Card Benefits & Features</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience premium banking with our feature-rich card offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100"
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <CreditCardIcon className="w-20 h-20 animate-float" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Cards?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Join millions of satisfied cardholders who trust us for secure, rewarding banking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-10 h-10 text-green-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Build Credit Score</h3>
                <p className="text-slate-300">Responsible card usage helps improve your credit rating over time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Shield className="w-10 h-10 text-blue-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Zero Liability</h3>
                <p className="text-slate-300">You're not responsible for unauthorized transactions on your card</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Globe className="w-10 h-10 text-yellow-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Travel Benefits</h3>
                <p className="text-slate-300">Enjoy travel insurance, airport lounge access, and no foreign transaction fees</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Gift className="w-10 h-10 text-purple-400 mb-3" />
                <h3 className="text-xl font-bold mb-2">Exclusive Offers</h3>
                <p className="text-slate-300">Access special deals, discounts, and early sales from partner merchants</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={config?.userRegistrationUrl}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Apply for a Card Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
