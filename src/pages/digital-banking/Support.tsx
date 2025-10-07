import React from 'react';
import { PageTemplate, ContentSection } from '../../components/PageTemplate';
import { MessageCircle, Clock, Users, Award } from 'lucide-react';

export function DigitalSupport() {
  return (
    <PageTemplate
      title="Online Chat Support"
      subtitle="Get instant help from our expert support team"
      gradient="from-rose-600 to-rose-700"
    >
      <ContentSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Clock className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Availability</h3>
            <p className="text-slate-600">Support available around the clock</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <MessageCircle className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Response</h3>
            <p className="text-slate-600">Get help in under 2 minutes</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
            <p className="text-slate-600">Trained banking professionals</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Award-Winning</h3>
            <p className="text-slate-600">Best customer service 2024</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="slate">
        <div className="max-w-2xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 text-rose-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start a Chat</h2>
          <p className="text-xl text-slate-600 mb-8">
            Click the chat icon in the bottom right corner to start a conversation with our support team
          </p>
        </div>
      </ContentSection>
    </PageTemplate>
  );
}
