import React from 'react';
import { AppProvider } from './contexts/AppContext';
import { Router } from './router/Router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SmartSuppChat } from './components/SmartSuppChat';
import { Home } from './pages/Home';

// Personal Banking
import { Accounts } from './pages/personal-banking/Accounts';
import { Cards } from './pages/personal-banking/Cards';
import { Loans } from './pages/personal-banking/Loans';
import { OpenAccount } from './pages/personal-banking/OpenAccount';
import { Manage } from './pages/personal-banking/Manage';
import { Help } from './pages/personal-banking/Help';

// Business Banking
import { SME } from './pages/business-banking/SME';
import { Corporate } from './pages/business-banking/Corporate';
import { BusinessForms } from './pages/business-banking/Forms';
import { BusinessResources } from './pages/business-banking/Resources';

// Digital Banking
import { Internet } from './pages/digital-banking/Internet';
import { Mobile } from './pages/digital-banking/Mobile';
import { DigitalSupport } from './pages/digital-banking/Support';

// Investment & Wealth
import { FixedDeposits } from './pages/investment-wealth/FixedDeposits';
import { TreasuryBills } from './pages/investment-wealth/TreasuryBills';
import { Planning } from './pages/investment-wealth/Planning';
import { Advisory } from './pages/investment-wealth/Advisory';

// Support
import { FAQs } from './pages/support/FAQs';
import { Contact } from './pages/support/Contact';
import { Branches } from './pages/support/Branches';
import { SupportForms } from './pages/support/SupportForms';
import { Chat } from './pages/support/Chat';

function App() {
  const routes = [
    { path: '/', component: Home },

    // Personal Banking
    { path: '/personal-banking/accounts', component: Accounts },
    { path: '/personal-banking/cards', component: Cards },
    { path: '/personal-banking/loans', component: Loans },
    { path: '/personal-banking/open-account', component: OpenAccount },
    { path: '/personal-banking/manage', component: Manage },
    { path: '/personal-banking/help', component: Help },

    // Business Banking
    { path: '/business-banking/sme', component: SME },
    { path: '/business-banking/corporate', component: Corporate },
    { path: '/business-banking/forms', component: BusinessForms },
    { path: '/business-banking/resources', component: BusinessResources },

    // Digital Banking
    { path: '/digital-banking/internet', component: Internet },
    { path: '/digital-banking/mobile', component: Mobile },
    { path: '/digital-banking/support', component: DigitalSupport },

    // Investment & Wealth
    { path: '/investment-wealth/fixed-deposits', component: FixedDeposits },
    { path: '/investment-wealth/treasury-bills', component: TreasuryBills },
    { path: '/investment-wealth/planning', component: Planning },
    { path: '/investment-wealth/advisory', component: Advisory },

    // Support
    { path: '/support/faqs', component: FAQs },
    { path: '/contact', component: Contact },
    { path: '/support/branches', component: Branches },
    { path: '/support/forms', component: SupportForms },
    { path: '/support/chat', component: Chat },
  ];

  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">
          <Router routes={routes} />
        </main>
        <Footer />
        <SmartSuppChat />
      </div>
    </AppProvider>
  );
}

export default App;
