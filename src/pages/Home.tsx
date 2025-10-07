import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Link } from '../router/Router';
import {
  Shield,
  TrendingUp,
  Smartphone,
  CreditCard,
  Building2,
  Lock,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

export function Home() {
  const { config, t } = useApp();

  if (!config) return null;

  const features = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit encryption and multi-factor authentication protect your assets',
    },
    {
      icon: Smartphone,
      title: 'Digital First',
      description: 'Modern banking at your fingertips with our award-winning mobile app',
    },
    {
      icon: TrendingUp,
      title: 'Wealth Management',
      description: 'Expert advisors to help grow and protect your investments',
    },
    {
      icon: CreditCard,
      title: 'Smart Cards',
      description: 'Premium cards with rewards, cashback, and exclusive benefits',
    },
  ];

  const services = [
    {
      title: 'Personal Banking',
      description: 'Savings, checking, loans, and more for your personal needs',
      icon: Users,
      link: '/personal-banking/accounts',
    },
    {
      title: 'Business Solutions',
      description: 'Comprehensive banking services for SMEs and corporations',
      icon: Building2,
      link: '/business-banking/sme',
    },
    {
      title: 'Investment Planning',
      description: 'Build wealth with our fixed deposits and treasury bills',
      icon: TrendingUp,
      link: '/investment-wealth/planning',
    },
    {
      title: 'Digital Banking',
      description: 'Bank anytime, anywhere with our secure online platform',
      icon: Smartphone,
      link: '/digital-banking/internet',
    },
  ];

  const stats = [
    { number: '2M+', label: 'Active Customers' },
    { number: '$50B+', label: 'Assets Managed' },
    { number: '150+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/banking.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t('home.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <a
                href={config.userRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                {t('home.getStarted')}
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to="/personal-banking/accounts"
                className="px-8 py-4 bg-blue-700/50 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-blue-700 transition-all border-2 border-white/20 flex items-center justify-center gap-2"
              >
                {t('home.learnMore')}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{t('home.trustTitle')}</h2>
            </div>
            <p className="text-slate-600 mb-6">{t('home.trustSubtitle')}</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {config.regulations.map((reg, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-lg font-bold text-slate-900">{reg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose {config.bankName}?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience banking designed for the modern world with security and innovation at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive banking solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl border-2 border-slate-200 hover:border-blue-400 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-3">{service.description}</p>
                    <span className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Lock className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Security is Our Priority</h2>
            <p className="text-xl text-slate-300 mb-8">
              Bank-grade {config.security.sslEncryption} encryption, multi-factor authentication, and 24/7 fraud
              monitoring keep your money safe
            </p>
            <Link
              to="/security"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn About Our Security
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions who trust {config.bankName} for their banking needs
          </p>
          <a
            href={config.userRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {t('home.openAccount')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
