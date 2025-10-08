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
      imageUrl: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: 'Your data protected with advanced encryption',
      features: ['256-bit SSL', 'Multi-factor auth', 'Biometric login', 'Session timeout'],
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Move money quickly and securely',
      features: ['Same-day transfers', 'Scheduled payments', 'International wire', 'P2P payments'],
      imageUrl: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: BarChart,
      title: 'Financial Tools',
      description: 'Track and analyze your spending',
      features: ['Spending insights', 'Budget planner', 'Goal tracking', 'Reports & analytics'],
      imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <PageTemplate
      title="Internet Banking"
      subtitle="Secure online banking available 24/7 from anywhere in the world"
      gradient="from-cyan-600 to-cyan-700"
      imageUrl="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
