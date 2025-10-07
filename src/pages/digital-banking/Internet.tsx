import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Monitor, Lock, Zap, BarChart } from 'lucide-react';

export function Internet() {
  const { config } = useApp();

  const features = [
    {
      icon: Monitor,
      title: 'Full Account Access',
      description: 'Manage all your accounts from one secure platform',
      features: ['View balances', 'Transaction history', 'Transfer funds', 'Pay bills online'],
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'Your data protected with advanced encryption',
      features: ['256-bit SSL', 'Multi-factor auth', 'Biometric login', 'Session timeout'],
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Move money quickly and securely',
      features: ['Same-day transfers', 'Scheduled payments', 'International wire', 'P2P payments'],
    },
    {
      icon: BarChart,
      title: 'Financial Tools',
      description: 'Track and analyze your spending',
      features: ['Spending insights', 'Budget planner', 'Goal tracking', 'Reports & analytics'],
    },
  ];

  return (
    <PageTemplate
      title="Internet Banking"
      subtitle="Secure online banking available 24/7 from anywhere in the world"
      gradient="from-cyan-600 to-cyan-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              {...feature}
              action={{ label: 'Get Started', href: config?.userLoginUrl || '#' }}
            />
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
