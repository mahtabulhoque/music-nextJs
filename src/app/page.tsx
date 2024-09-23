import HeroSection from '@/components/HeroSection';
import React from 'react';

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]'>
      <h1 className='text-2xl text-center'>Home</h1>
      <HeroSection/>
    </main>
  );
};

export default Home;