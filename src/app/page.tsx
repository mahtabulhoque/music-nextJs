import FeaturesCourses from '@/components/FeaturesCourses';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Instructor from '@/components/Instructor';
import TestimonialCard from '@/components/TestimonialCard';
import UpcomingWebinars from '@/components/UpcomingWebinars';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]'>
      <HeroSection/>
      <FeaturesCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
      <Instructor/>
      <UpcomingWebinars/>
      <Footer/>
    </main>
  );
};

export default Home;