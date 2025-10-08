import React from 'react';
import { useApp } from '../../contexts/AppContext';
import { PageTemplate, ContentSection, FeatureCard } from '../../components/PageTemplate';
import { Building, CreditCard, TrendingUp, Users } from 'lucide-react';

export function SME() {
  const { config } = useApp();

  const services = [
    {
      icon: Building,
      title: 'Business Accounts',
      description: 'Tailored accounts for small and medium enterprises',
      features: ['No monthly fees', 'Unlimited transactions', 'Multi-user access', 'Integration with accounting software'],
      imageUrl: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: CreditCard,
      title: 'Business Cards',
      description: 'Corporate cards with expense management tools',
      features: ['Cashback rewards', 'Spending controls', 'Real-time reporting', 'Employee cards'],
      imageUrl: 'https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: TrendingUp,
      title: 'Business Loans',
      description: 'Flexible financing to grow your business',
      features: ['Working capital loans', 'Equipment financing', 'Line of credit', 'Competitive rates'],
      imageUrl: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: 'Payroll Services',
      description: 'Streamline your payroll processing',
      features: ['Direct deposit', 'Tax filing assistance', 'Time tracking integration', 'Automated payments'],
      imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <PageTemplate
      title="SME Banking"
      subtitle="Comprehensive banking solutions designed for small and medium enterprises"
      gradient="from-emerald-600 to-emerald-700"
      imageUrl="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <FeatureCard
              key={idx}
              {...service}
              action={{ label: 'Learn More', href: config?.userRegistrationUrl || '#' }}
            />
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
