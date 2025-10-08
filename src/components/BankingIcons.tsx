import React from 'react';

export function SecureVaultIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="80" height="70" rx="4" fill="#1e40af" stroke="#3b82f6" strokeWidth="2"/>
      <circle cx="50" cy="50" r="20" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2"/>
      <circle cx="50" cy="50" r="12" fill="none" stroke="#93c5fd" strokeWidth="2"/>
      <line x1="50" y1="38" x2="50" y2="50" stroke="#dbeafe" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="50" x2="58" y2="50" stroke="#dbeafe" strokeWidth="3" strokeLinecap="round"/>
      <rect x="15" y="25" width="8" height="8" rx="1" fill="#60a5fa"/>
      <rect x="15" y="40" width="8" height="8" rx="1" fill="#60a5fa"/>
      <rect x="15" y="55" width="8" height="8" rx="1" fill="#60a5fa"/>
      <rect x="77" y="25" width="8" height="8" rx="1" fill="#60a5fa"/>
      <rect x="77" y="40" width="8" height="8" rx="1" fill="#60a5fa"/>
      <rect x="77" y="55" width="8" height="8" rx="1" fill="#60a5fa"/>
    </svg>
  );
}

export function MoneyTransferIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="50" r="15" fill="#10b981" stroke="#059669" strokeWidth="2"/>
      <text x="30" y="56" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">$</text>
      <path d="M 45 50 L 70 50" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" markerEnd="url(#arrowblue)"/>
      <circle cx="70" cy="50" r="8" fill="#3b82f6"/>
      <defs>
        <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6"/>
        </marker>
      </defs>
      <circle cx="70" cy="50" r="3" fill="white"/>
      <path d="M 45 35 Q 57.5 20 70 35" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="70" cy="35" r="4" fill="#22c55e"/>
    </svg>
  );
}

export function MobileWalletIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="10" width="50" height="80" rx="6" fill="#1e40af" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="30" y="20" width="40" height="55" rx="2" fill="#3b82f6"/>
      <circle cx="50" cy="83" r="3" fill="#60a5fa"/>
      <rect x="38" y="35" width="24" height="15" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
      <line x1="38" y1="40" x2="62" y2="40" stroke="#f59e0b" strokeWidth="1"/>
      <line x1="38" y1="45" x2="62" y2="45" stroke="#f59e0b" strokeWidth="1"/>
      <path d="M 35 60 L 45 65 L 65 50" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

export function InvestmentGrowthIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="85" x2="85" y2="85" stroke="#64748b" strokeWidth="2"/>
      <line x1="15" y1="15" x2="15" y2="85" stroke="#64748b" strokeWidth="2"/>
      <path d="M 20 70 L 35 55 L 50 60 L 65 35 L 80 25" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="20" cy="70" r="4" fill="#10b981"/>
      <circle cx="35" cy="55" r="4" fill="#10b981"/>
      <circle cx="50" cy="60" r="4" fill="#10b981"/>
      <circle cx="65" cy="35" r="4" fill="#10b981"/>
      <circle cx="80" cy="25" r="4" fill="#10b981"/>
      <path d="M 70 20 L 80 25 L 75 35" fill="#10b981"/>
      <rect x="20" y="75" width="10" height="10" fill="#3b82f6" opacity="0.3"/>
      <rect x="35" y="60" width="10" height="25" fill="#3b82f6" opacity="0.3"/>
      <rect x="50" y="65" width="10" height="20" fill="#3b82f6" opacity="0.3"/>
      <rect x="65" y="40" width="10" height="45" fill="#3b82f6" opacity="0.3"/>
    </svg>
  );
}

export function CreditCardIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="30" width="80" height="50" rx="6" fill="url(#cardGradient)" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="10" y="42" width="80" height="12" fill="#1e40af"/>
      <rect x="20" y="60" width="30" height="8" rx="2" fill="#60a5fa"/>
      <circle cx="75" cy="64" r="8" fill="#fbbf24" opacity="0.7"/>
      <circle cx="82" cy="64" r="8" fill="#f59e0b" opacity="0.7"/>
      <defs>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 10 L 80 25 L 80 50 C 80 70 50 90 50 90 C 50 90 20 70 20 50 L 20 25 Z" fill="#10b981" stroke="#059669" strokeWidth="2"/>
      <path d="M 35 50 L 45 60 L 65 40" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="50" cy="10" r="4" fill="#22c55e"/>
      <circle cx="80" cy="25" r="4" fill="#22c55e"/>
      <circle cx="20" cy="25" r="4" fill="#22c55e"/>
    </svg>
  );
}

export function GlobalBankingIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
      <ellipse cx="50" cy="50" rx="15" ry="35" fill="none" stroke="#60a5fa" strokeWidth="2"/>
      <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="#60a5fa" strokeWidth="2"/>
      <line x1="15" y1="50" x2="85" y2="50" stroke="#93c5fd" strokeWidth="2"/>
      <circle cx="50" cy="20" r="4" fill="#fbbf24"/>
      <circle cx="50" cy="80" r="4" fill="#fbbf24"/>
      <circle cx="20" cy="50" r="4" fill="#fbbf24"/>
      <circle cx="80" cy="50" r="4" fill="#fbbf24"/>
    </svg>
  );
}

export function DigitalWalletIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="30" width="70" height="45" rx="4" fill="#1e40af" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="20" y="40" width="60" height="25" rx="3" fill="#3b82f6"/>
      <circle cx="70" cy="52.5" r="8" fill="#60a5fa"/>
      <path d="M 30 50 L 35 55 L 45 45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <rect x="25" y="20" width="50" height="15" rx="2" fill="#10b981" stroke="#059669" strokeWidth="1"/>
      <text x="50" y="30" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">DIGITAL</text>
    </svg>
  );
}

export function LoanCalculatorIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="15" width="60" height="70" rx="4" fill="#1e40af" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="25" y="22" width="50" height="15" rx="2" fill="#60a5fa"/>
      <circle cx="35" cy="50" r="3" fill="#93c5fd"/>
      <circle cx="50" cy="50" r="3" fill="#93c5fd"/>
      <circle cx="65" cy="50" r="3" fill="#93c5fd"/>
      <circle cx="35" cy="62" r="3" fill="#93c5fd"/>
      <circle cx="50" cy="62" r="3" fill="#93c5fd"/>
      <circle cx="65" cy="62" r="3" fill="#93c5fd"/>
      <circle cx="35" cy="74" r="3" fill="#93c5fd"/>
      <rect x="47" y="71" width="21" height="6" rx="1" fill="#10b981"/>
      <text x="50" y="29" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">LOAN CALC</text>
    </svg>
  );
}

export function SecureTransactionIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="40" width="30" height="35" rx="3" fill="#3b82f6" stroke="#1e40af" strokeWidth="2"/>
      <rect x="55" y="40" width="30" height="35" rx="3" fill="#10b981" stroke="#059669" strokeWidth="2"/>
      <path d="M 45 57.5 L 55 57.5" stroke="#fbbf24" strokeWidth="3" markerEnd="url(#arrowyellow)"/>
      <defs>
        <marker id="arrowyellow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#fbbf24"/>
        </marker>
      </defs>
      <path d="M 30 30 L 40 20 L 40 30 C 40 35 35 40 30 40 Z" fill="#1e40af" stroke="#3b82f6" strokeWidth="1"/>
      <circle cx="70" cy="25" r="10" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
      <path d="M 67 25 L 70 28 L 76 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
