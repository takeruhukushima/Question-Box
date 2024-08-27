// pages/index.tsx
import React from 'react';
import {ChatApp} from '@/components/component/ChatApp'; // ChatApp をインポート

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <ChatApp />
    </div>
  );
};

export default Home;
