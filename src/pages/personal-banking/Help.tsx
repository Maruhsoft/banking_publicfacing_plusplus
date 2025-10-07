import React from 'react';
import { Link } from '../../router/Router';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { Book, MessageCircle, Phone, Mail, FileText, HelpCircle } from 'lucide-react';

export function Help() {
  const resources = [
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Browse articles and guides on banking topics',
      link: '/support/faqs',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      link: '/support/chat',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with a banking specialist',
      link: '/contact',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions and concerns',
      link: '/contact',
    },
    {
      icon: FileText,
      title: 'Forms & Documents',
      description: 'Download forms and important documents',
      link: '/support/forms',
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      description: 'Find answers to common questions',
      link: '/support/faqs',
    },
  ];

  return (
    <PageTemplate
      title="Help & Resources"
      subtitle="We're here to help you with all your banking needs"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <Link
              key={idx}
              to={resource.link}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <resource.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.title}</h3>
              <p className="text-slate-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
