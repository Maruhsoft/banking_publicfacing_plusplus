import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: 'blue' | 'green' | 'orange' | 'purple';
  features?: string[];
}

const colorClasses = {
  blue: {
    bg: 'from-blue-500 to-blue-600',
    icon: 'bg-blue-100 text-blue-600',
    badge: 'bg-blue-500'
  },
  green: {
    bg: 'from-green-500 to-green-600',
    icon: 'bg-green-100 text-green-600',
    badge: 'bg-green-500'
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    icon: 'bg-orange-100 text-orange-600',
    badge: 'bg-orange-500'
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    icon: 'bg-purple-100 text-purple-600',
    badge: 'bg-purple-500'
  }
};

export function BenefitCard({ icon: Icon, title, description, color = 'blue', features }: BenefitCardProps) {
  const colors = colorClasses[color];

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden border border-slate-200/50">
      <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>
      <div className="p-8">
        <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.badge} mt-1.5 flex-shrink-0`}></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
