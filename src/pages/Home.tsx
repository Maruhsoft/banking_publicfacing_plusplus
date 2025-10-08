import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Link } from '../router/Router';
import { HeroCarousel } from '../components/HeroCarousel';
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
  Percent,
  Globe,
  Clock,
  Zap,
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

  const carouselSlides = [
    {
      title: t('home.heroTitle'),
      subtitle: t('home.heroSubtitle'),
      buttonText: t('home.getStarted'),
      buttonLink: config.userRegistrationUrl,
      bgColor: 'from-blue-900 via-blue-800 to-slate-900',
    },
    {
      title: 'Zero-Fee Business Accounts',
      subtitle: 'Start your business journey with no monthly fees for the first year',
      buttonText: 'Learn More',
      buttonLink: '/business-banking/sme',
      bgColor: 'from-emerald-900 via-emerald-800 to-slate-900',
    },
    {
      title: 'Earn 4.5% APY on Savings',
      subtitle: 'Grow your wealth with competitive interest rates on savings accounts',
      buttonText: 'Open Savings Account',
      buttonLink: '/personal-banking/accounts',
      bgColor: 'from-cyan-900 via-cyan-800 to-slate-900',
    },
  ];

  const featuredProducts = [
    {
      icon: CreditCard,
      title: 'Premium Credit Card',
      description: '3% cashback on all purchases',
      tag: 'Popular',
      tagColor: 'bg-orange-500',
    },
    {
      icon: Percent,
      title: 'High-Yield Savings',
      description: '4.5% APY with no minimum balance',
      tag: 'Best Rate',
      tagColor: 'bg-green-500',
    },
    {
      icon: Building2,
      title: 'Business Checking',
      description: 'Free for first year, unlimited transactions',
      tag: 'New',
      tagColor: 'bg-blue-500',
    },
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'FDIC insured up to $250,000',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: '50,000+ ATMs worldwide',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Always here when you need us',
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Move money in seconds',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] md:h-[700px] text-white overflow-hidden">
        <HeroCarousel slides={carouselSlides} />

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-16 md:h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Banking Products</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our most popular offerings designed for your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product, idx) => (
              <div
                key={idx}
                className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all hover:shadow-2xl group shiny-card glow-on-hover"
              >
                <div className={`absolute top-4 right-4 ${product.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.tag}
                </div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-slate-600 mb-4">{product.description}</p>
                <button className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Customers Trust Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Security, reliability, and service excellence are at the core of everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 shiny-card glow-on-hover"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{badge.title}</h3>
                <p className="text-slate-600 text-sm">{badge.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{t('home.trustTitle')}</h3>
            </div>
            <p className="text-slate-600 mb-6">{t('home.trustSubtitle')}</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {config.regulations.map((reg, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-slate-200 shadow-sm"
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-slate-100 shiny-card glow-on-hover"
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
                className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl border-2 border-slate-200 hover:border-blue-400 transition-all hover:shadow-xl shiny-card glow-on-hover"
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {t('home.openAccount')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
