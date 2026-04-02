import Hero from '../components/Hero';
import Features from '../components/Features';
import WhySemcom from '../components/WhySemcom';
import Courses from '../components/Courses';

import CampusLifeSection from '../components/CampusLifeSection';
import NewsSection from '../components/NewsSection';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <Features />
      <Courses />
      <CampusLifeSection />
      <WhySemcom />
      <Testimonials />
    </>
  );
}
