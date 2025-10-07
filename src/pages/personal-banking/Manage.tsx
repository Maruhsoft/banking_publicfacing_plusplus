import React from 'react';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Smartphone, PieChart, Bell, Settings, Shield, TrendingUp } from 'lucide-react';

export function Manage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Banking',
      description: 'Manage your finances on the go with our award-winning mobile app',
      features: ['Check balances', 'Transfer funds', 'Pay bills', 'Deposit checks'],
    },
    {
      icon: PieChart,
      title: 'Financial Insights',
      description: 'Track spending, set budgets, and reach your financial goals',
      features: ['Spending analytics', 'Budget tracking', 'Goal setting', 'Category insights'],
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Stay informed with customizable notifications and alerts',
      features: ['Transaction alerts', 'Balance notifications', 'Bill reminders', 'Security alerts'],
    },
    {
      icon: Settings,
      title: 'Account Controls',
      description: 'Complete control over your accounts and preferences',
      features: ['Card controls', 'Payment limits', 'Beneficiary management', 'Statement preferences'],
    },
    {
      icon: Shield,
      title: 'Security Center',
      description: 'Advanced security features to protect your accounts',
      features: ['Biometric login', 'Two-factor auth', 'Device management', 'Activity monitoring'],
    },
    {
      icon: TrendingUp,
      title: 'Investment Tools',
      description: 'Grow your wealth with integrated investment options',
      features: ['Portfolio overview', 'Market insights', 'Auto-invest', 'Performance tracking'],
    },
  ];

  return (
    <PageTemplate
      title="Manage Your Finances"
      subtitle="Powerful tools and insights to help you take control of your money"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
