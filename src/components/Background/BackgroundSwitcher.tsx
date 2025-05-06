'use client';

import { useState } from 'react';
import Background from './Background';

const BackgroundSwitcher = () => {
  const [bgType, setBgType] = useState<'petals' | 'hearts' | 'flowers' | 'bubbles'>('hearts');

  return (
    <>
      <Background type={bgType} />
      <div className="fixed bottom-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-2">
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setBgType('petals')}
            className={`px-3 py-1 rounded-md text-sm ${
              bgType === 'petals' ? 'bg-pink-500 text-white' : 'bg-white/50 hover:bg-pink-100'
            }`}
          >
            Cánh hoa
          </button>
          <button
            onClick={() => setBgType('hearts')}
            className={`px-3 py-1 rounded-md text-sm ${
              bgType === 'hearts' ? 'bg-pink-500 text-white' : 'bg-white/50 hover:bg-pink-100'
            }`}
          >
            Trái tim
          </button>
          <button
            onClick={() => setBgType('flowers')}
            className={`px-3 py-1 rounded-md text-sm ${
              bgType === 'flowers' ? 'bg-pink-500 text-white' : 'bg-white/50 hover:bg-pink-100'
            }`}
          >
            Hoa rơi
          </button>
          <button
            onClick={() => setBgType('bubbles')}
            className={`px-3 py-1 rounded-md text-sm ${
              bgType === 'bubbles' ? 'bg-pink-500 text-white' : 'bg-white/50 hover:bg-pink-100'
            }`}
          >
            Bong bóng
          </button>
        </div>
      </div>
    </>
  );
};

export default BackgroundSwitcher;