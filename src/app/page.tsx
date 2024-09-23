import FeaturesCourses from '@/components/FeaturesCourses';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]'>
      <HeroSection/>
      <FeaturesCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
    </main>
  );
};

export default Home;