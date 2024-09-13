import React from 'react';
import ChatInterface from '../components/ChatInterface';
import Header from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ChatInterface />
      </main>
    </div>
  );
};

export default Index;