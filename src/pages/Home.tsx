import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Link } from '../router/Router';
import { HeroCarousel } from '../components/HeroCarousel';
import { SecureVaultIcon, MoneyTransferIcon, InvestmentGrowthIcon, ShieldCheckIcon } from '../components/BankingIcons';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { ComparisonTable } from '../components/ComparisonTable';
import { StatCounter } from '../components/StatCounter';
import { InteractiveCalculator } from '../components/InteractiveCalculator';
import { ProcessSteps } from '../components/ProcessSteps';
import { BenefitCard } from '../components/BenefitCard';
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
  FileText,
  UserPlus,
  CheckSquare,
  Banknote,
  PiggyBank,
  Wallet,
  BarChart3,
  Briefcase,
  HandCoins,
  Landmark,
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
    { number: '2M+', label: 'Active Customers', emoji: '🚀' },
    { number: '$50B+', label: 'Assets Managed', emoji: '💰' },
    { number: '150+', label: 'Countries Served', emoji: '🌍' },
    { number: '99.9%', label: 'Uptime', emoji: '⚡' },
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

  const openingSteps = [
    {
      number: 1,
      title: 'Choose Account',
      description: 'Select the account type that best fits your financial needs',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Fill Application',
      description: 'Complete our secure online application in just 5 minutes',
      icon: UserPlus,
    },
    {
      number: 3,
      title: 'Verify Identity',
      description: 'Upload your ID and verify your identity quickly and securely',
      icon: CheckSquare,
    },
    {
      number: 4,
      title: 'Start Banking',
      description: 'Fund your account and start enjoying our banking services',
      icon: Banknote,
    },
  ];

  interface TestimonialType {
    name: string;
    role: string;
    content: string;
  }

  const testimonials: TestimonialType[] = [
  {
    name: "Sophia",
    role: "Retail Banking Client",
    content:
      "Opening an account took less than five minutes on my phone. Transfers are instant, and the notifications keep me in control of my spending.",
  },
  {
    name: "Liam",
    role: "Small Business Owner – Tech Supply Co.",
    content:
      "Their business dashboard has simplified how I pay suppliers and reconcile transactions. I no longer queue at the branch — everything is handled online securely.",
  },
  {
    name: "Olivia",
    role: "CFO, Horizon Foods",
    content:
      "The bulk payment feature and scheduled transfers have saved our finance team hours every week. We also appreciate the quick support whenever we raise a ticket.",
  },
  {
    name: "Ethan",
    role: "Corporate Client – Logistics Sector",
    content:
      "We’ve integrated their API into our invoicing system to automate collections. Settlement is same-day, which has improved our cash-flow visibility.",
  },
  {
    name: "Ava",
    role: "Treasury Manager, Summit Energy",
    content:
      "Their secure virtual cards have been a game-changer for managing departmental expenses — we now set monthly limits and track usage in real time.",
  },
  {
    name: "Noah",
    role: "Freelancer & Remittance User",
    content:
      "Receiving payments from clients abroad is faster and cheaper than with traditional banks. Currency conversion is transparent and updates instantly.",
  },
  {
    name: "Emma",
    role: "Customer Support Manager, PrimeTech Ltd",
    content:
      "As a payroll customer, I’m impressed by how seamlessly the system handles large salary disbursements. Staff get alerts immediately, and reconciliation is effortless.",
  },
  {
    name: "James",
    role: "Retail Client – Long-term Saver",
    content:
      "The savings vault feature helps me lock funds aside for emergencies while still earning interest. I like that I can track everything from my mobile app.",
  },
];

  const benefits = [
    {
      icon: PiggyBank,
      title: 'High-Yield Savings',
      description: 'Grow your wealth with competitive interest rates up to 4.5% APY',
      color: 'green' as const,
      features: ['No minimum balance', 'Compound interest daily', 'Easy withdrawals'],
    },
    {
      icon: CreditCard,
      title: 'Rewards Credit Cards',
      description: 'Earn cashback and points on every purchase you make',
      color: 'blue' as const,
      features: ['3% cashback on purchases', 'Travel insurance included', 'Zero annual fee first year'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Bank on the go with our award-winning mobile app',
      color: 'purple' as const,
      features: ['Instant transfers', 'Mobile check deposit', 'Biometric security'],
    },
    {
      icon: BarChart3,
      title: 'Investment Tools',
      description: 'Access professional investment advice and tools',
      color: 'orange' as const,
      features: ['Portfolio management', 'Real-time market data', 'Expert advisory'],
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

      {/* Banking Hero Image Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Banking Made Simple</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Experience modern banking with cutting-edge technology, exceptional service, and security you can trust. Manage your finances seamlessly from anywhere in the world.
              </p>
              <Link to="/personal-banking/open-account" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern banking experience"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
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
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200/50 shiny-card glow-on-hover"
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
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition-transform">
                <div className="text-5xl mb-2">{stat.emoji}</div>
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
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 border border-slate-200/50 shiny-card glow-on-hover"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={service.link}
                className="group bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm p-8 rounded-xl border-2 border-slate-200/50 hover:border-blue-400 transition-all hover:shadow-xl shiny-card glow-on-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-3 leading-relaxed">{service.description}</p>
                    <span className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Digital banking solutions"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Investment planning"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Business banking"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Banner with SVG Icons */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10">
          <SecureVaultIcon className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <ShieldCheckIcon className="w-32 h-32" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-float mb-6 inline-block">
              <ShieldCheckIcon className="w-20 h-20" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Security is Our Priority</h2>
            <p className="text-xl text-slate-300 mb-8">
              Bank-grade {config.security.sslEncryption} encryption, multi-factor authentication, and 24/7 fraud
              monitoring keep your money safe
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 p-6 rounded-xl animate-slide-in">
                <Lock className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Encrypted</h3>
                <p className="text-slate-400 text-sm">256-bit SSL encryption</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl animate-slide-in" style={{ animationDelay: '0.1s' }}>
                <Shield className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Protected</h3>
                <p className="text-slate-400 text-sm">24/7 fraud monitoring</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <Award className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Trusted</h3>
                <p className="text-slate-400 text-sm">FDIC insured deposits</p>
              </div>
            </div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Exclusive Banking Benefits</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience premium benefits designed to maximize your financial potential
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <BenefitCard key={idx} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Calculate Your Savings Growth</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how much you could earn with our competitive interest rates
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <InteractiveCalculator />
          </div>
        </div>
      </section>

      {/* Opening Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Open Your Account in Minutes</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Fast, simple, and secure account opening process
            </p>
          </div>
          <ProcessSteps steps={openingSteps} />
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compare Account Types</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Find the perfect account that matches your banking needs
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real stories from satisfied customers who trust us with their finances
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Banking by the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join millions of satisfied customers worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter end={2000000} suffix="+" label="Active Customers" icon={Users} />
            <StatCounter end={50} suffix="B+" prefix="$" label="Assets Under Management" icon={Landmark} />
            <StatCounter end={150} suffix="+" label="Countries Served" icon={Globe} />
            <StatCounter end={25} suffix="+" label="Years of Excellence" icon={Award} />
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial solutions for all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Loans</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Flexible loan options with competitive rates starting from 5.99% APR</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Quick approval process
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  No hidden fees
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Flexible repayment terms
                </li>
              </ul>
              <Link to="/personal-banking/loans" className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Business Banking</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Powerful tools and services to help your business thrive and grow</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Business checking accounts
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Merchant services
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Payroll solutions
                </li>
              </ul>
              <Link to="/business-banking/sme" className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <HandCoins className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wealth Management</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Expert guidance to help you build and preserve your wealth</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Investment advisory
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Retirement planning
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Estate planning
                </li>
              </ul>
              <Link to="/investment-wealth/advisory" className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest updates on products, offers, and financial tips
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-blue-200 mt-4">
              By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join millions who trust {config.bankName} for their banking needs
          </p>
          <a
            href={config.userRegistrationUrl}
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
