import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Link } from '../router/Router';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const { config, t } = useApp();

  if (!config) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/icons8-bank-48.png" alt={config.bankName} className="h-10 w-10" />
              <h3 className="text-xl font-bold">{config.bankName}</h3>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Modern banking solutions for individuals and businesses. Trusted, secure, and innovative.
            </p>
            <div className="flex gap-3">
              <a
                href={config.socialMedia.facebook}
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:scale-110 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={config.socialMedia.twitter}
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-400 hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={config.socialMedia.linkedin}
                className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={config.socialMedia.instagram}
                className="p-2 bg-slate-800 rounded-lg hover:bg-pink-600 hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">{t('footer.contact')}</h3>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">{t('footer.headOffice')}</p>
                  <p>{config.contact.headOffice}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">{t('footer.phone')}</p>
                  {config.contact.phones.map((phone, idx) => (
                    <p key={idx}>{phone}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">{t('footer.email')}</p>
                  <a href={`mailto:${config.contact.email}`} className="hover:text-blue-400 transition-colors">
                    {config.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/personal-banking/accounts" className="hover:text-blue-400 transition-colors">
                  Personal Banking
                </Link>
              </li>
              <li>
                <Link to="/business-banking/sme" className="hover:text-blue-400 transition-colors">
                  Business Banking
                </Link>
              </li>
              <li>
                <Link to="/digital-banking/internet" className="hover:text-blue-400 transition-colors">
                  Digital Banking
                </Link>
              </li>
              <li>
                <Link to="/investment-wealth/fixed-deposits" className="hover:text-blue-400 transition-colors">
                  Investment & Wealth
                </Link>
              </li>
              <li>
                <Link to="/support/faqs" className="hover:text-blue-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400 transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-blue-400 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-blue-400 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} {config.bankName}. {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>Regulated by: {config.regulations.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
