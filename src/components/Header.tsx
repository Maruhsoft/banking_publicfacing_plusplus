import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Link } from '../router/Router';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Clock,
  Wifi,
  WifiOff,
  Globe,
  Activity,
  CreditCard,
  User,
  Briefcase,
  Smartphone,
  PiggyBank,
  DollarSign,
  HelpCircle,
  FileText,
  Phone,
  MapPin,
  Layers,
  Home,
} from 'lucide-react';
import { Language } from '../utils/translations';

export function Header() {
  const { config, t, isOnline, currentTime, currentLanguage, setLanguage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [sessionStartTime] = useState(new Date());

  if (!config) return null;

  const formatSessionTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ar', name: 'العربية' },
    { code: 'pt', name: 'Português' },
    { code: 'ja', name: '日本語' },
    { code: 'ru', name: 'Русский' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'it', name: 'Italiano' },
  ];

  const menuItems = [
    {
      title: t('nav.personalBanking'),
      icon: User,
      items: [
        { label: 'Account Types', path: '/personal-banking/accounts', icon: User },
        { label: 'Cards (Credit/Debit)', path: '/personal-banking/cards', icon: CreditCard },
        { label: 'Loans', path: '/personal-banking/loans', icon: DollarSign },
        { label: 'Open an Account', path: '/personal-banking/open-account', icon: PiggyBank },
        { label: 'Manage Finances', path: '/personal-banking/manage', icon: Layers },
        { label: 'Help and Resources', path: '/personal-banking/help', icon: HelpCircle },
      ],
    },
    {
      title: t('nav.businessBanking'),
      icon: Briefcase,
      items: [
        { label: 'SME Banking', path: '/business-banking/sme', icon: Briefcase },
        { label: 'Corporate Accounts', path: '/business-banking/corporate', icon: User },
        { label: 'Forms', path: '/business-banking/forms', icon: FileText },
        { label: 'Business Resources', path: '/business-banking/resources', icon: HelpCircle },
      ],
    },
    {
      title: t('nav.digitalBanking'),
      icon: Smartphone,
      items: [
        { label: 'Internet Banking', path: '/digital-banking/internet', icon: Globe },
        { label: 'Mobile App', path: '/digital-banking/mobile', icon: Smartphone },
        { label: 'Online Chat Support', path: '/digital-banking/support', icon: HelpCircle },
      ],
    },
    {
      title: t('nav.investmentWealth'),
      icon: PiggyBank,
      items: [
        { label: 'Fixed Deposits', path: '/investment-wealth/fixed-deposits', icon: PiggyBank },
        { label: 'Treasury Bills', path: '/investment-wealth/treasury-bills', icon: Layers },
        { label: 'Investment Planning', path: '/investment-wealth/planning', icon: DollarSign },
        { label: 'Wealth Advisory', path: '/investment-wealth/advisory', icon: Briefcase },
      ],
    },
    {
      title: t('nav.support'),
      icon: HelpCircle,
      items: [
        { label: 'FAQs', path: '/support/faqs', icon: HelpCircle },
        { label: 'Contact Us', path: '/contact', icon: Phone },
        { label: 'Branch Locator', path: '/support/branches', icon: MapPin },
        { label: 'Forms', path: '/support/forms', icon: FileText },
        { label: 'Online Chat Support', path: '/support/chat', icon: HelpCircle },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-sm py-2 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {/* Secure Connection */}
              <div className="flex items-center gap-2 opacity-70">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">{t('header.secureConnection')}</span>
                <span className="text-green-400">{config.security.sslEncryption}</span>
              </div>

              {/* Online Status */}
              <div className="flex items-center gap-2 opacity-70">
                {isOnline ? (
                  <>
                    <Wifi className="w-4 h-4 text-green-400 animate-pulse" />
                    <span className="text-slate-300">{t('header.online')}</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="w-4 h-4 text-red-400" />
                    <span className="text-red-400">{t('header.offline')}</span>
                  </>
                )}
              </div>

              {/* Session Secure */}
              <div className="flex items-center gap-2 opacity-70 group relative">
                <Activity className="w-4 h-4 text-green-400" />
                <span className="text-slate-300">
                  {t('header.sessionSecure')} {formatSessionTime(sessionStartTime)}
                </span>
                <div className="absolute left-0 top-full mt-2 w-64 bg-slate-800 text-white text-xs shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <p>{t('header.sessionTooltip')}</p>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors opacity-70 hover:opacity-100"
              >
                <Globe className="w-4 h-4" />
                <span className="text-slate-300">{languages.find(l => l.code === currentLanguage)?.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {languageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/70 backdrop-blur-md text-slate-900 shadow-xl z-50 max-h-96 overflow-y-auto">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as Language);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 hover:bg-slate-100 transition-colors ${
                        currentLanguage === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : ''
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/icons8-bank-48.png"
                alt={config.bankName}
                className="h-12 w-12 transition-transform group-hover:scale-110"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">{config.bankName}</h1>
                <p className="text-xs text-slate-600 leading-tight">Secure. Trusted. Modern.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((menu, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(menu.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-4 py-2 text-slate-700 hover:text-blue-600 font-medium flex items-center gap-2 transition-colors">
                    <menu.icon className="w-4 h-4 text-slate-500" />
                    {menu.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === menu.title && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white/70 backdrop-blur-md shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {menu.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          to={item.path}
                          className="flex items-center gap-3 px-6 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-slate-100 last:border-b-0"
                        >
                          <item.icon className="w-4 h-4 text-slate-500" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={config.userLoginUrl}
                className="px-6 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {t('home.login')}
              </a>
              <a
                href={config.userRegistrationUrl}
                className="px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 whitespace-nowrap font-medium"
              >
                {t('home.openAccount')}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/70 backdrop-blur-md border-t border-slate-200 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((menu, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <menu.icon className="w-4 h-4 text-slate-500" />
                    {menu.title}
                  </h3>
                  <div className="space-y-1 pl-6">
                    {menu.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        to={item.path}
                        className="flex items-center gap-3 py-2 text-slate-600 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-slate-500" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-200">
                <a
                  href={config.userLoginUrl}
                  className="px-6 py-3 text-center text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-medium transition-colors"
                >
                  {t('home.login')}
                </a>
                <a
                  href={config.userRegistrationUrl}
                  className="px-6 py-3 text-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  {t('home.openAccount')}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
