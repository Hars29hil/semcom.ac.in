import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import NewsSection from '../components/NewsSection';
import Features from '../components/Features';
import Courses from '../components/Courses';
import CampusLifeSection from '../components/CampusLifeSection';
import WhySemcom from '../components/WhySemcom';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <NewsSection />
      <Features />
      <Courses />
      <CampusLifeSection />
      <WhySemcom />
      <Testimonials />
    </>
  );
}
