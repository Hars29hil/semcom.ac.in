import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CoursesPage from './pages/CoursesPage';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Placement from './pages/Placement';
import AboutSemcom from './pages/AboutSemcom';
import VisionMission from './pages/VisionMission';
import AboutVVN from './pages/AboutVVN';
import ChairmanMessage from './pages/ChairmanMessage';
import PrincipalMessage from './pages/PrincipalMessage';
import IQAC from './pages/IQAC';
import AICTE from './pages/AICTE';
import Rankings from './pages/Rankings';
import SEDGCell from './pages/SEDGCell';
import GrievanceCell from './pages/GrievanceCell';
import NEEV from './pages/NEEV';

import BBA_ITM_Hons from './pages/BBA_ITM_Hons';
import BBA_Hons from './pages/BBA_Hons';
import BCom_Hons from './pages/BCom_Hons';
import BCA_Hons from './pages/BCA_Hons';
import MCom from './pages/MCom';
import PHD from './pages/PHD';
import FAQsPage from './pages/FAQsPage';
import SMTRJournal from './pages/SMTRJournal';
import SEMSpire from './pages/SEMSpire';
import Facilities from './pages/Facilities';
import MegaEvents from './pages/MegaEvents';
import ExtensionActivities from './pages/ExtensionActivities';
import ImportantLinks from './pages/ImportantLinks';
import DownloadForms from './pages/DownloadForms';
import InternshipPlacement from './pages/InternshipPlacement';
import CompanyDetail from './pages/CompanyDetail';
import ContactPlacement from './pages/ContactPlacement';
import Alumni from './pages/Alumni';
import AlumniRegistration from './pages/AlumniRegistration';
import Gallery from './pages/Gallery';
import MediaKit from './pages/MediaKit';
import EducationVerification from './pages/EducationVerification';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <TopHeader />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/about/semcom" element={<PageWrapper><AboutSemcom /></PageWrapper>} />
            <Route path="/about/vision" element={<PageWrapper><VisionMission /></PageWrapper>} />
            <Route path="/about/vvn" element={<PageWrapper><AboutVVN /></PageWrapper>} />
            <Route path="/about/chairman" element={<PageWrapper><ChairmanMessage /></PageWrapper>} />
            <Route path="/about/principal" element={<PageWrapper><PrincipalMessage /></PageWrapper>} />
            <Route path="/about/iqac" element={<PageWrapper><IQAC /></PageWrapper>} />
            <Route path="/about/aicte" element={<PageWrapper><AICTE /></PageWrapper>} />
            <Route path="/about/sedgs" element={<PageWrapper><SEDGCell /></PageWrapper>} />
            <Route path="/about/grievance" element={<PageWrapper><GrievanceCell /></PageWrapper>} />
            <Route path="/faculty" element={<PageWrapper><Faculty /></PageWrapper>} />
            <Route path="/academics" element={<PageWrapper><CoursesPage /></PageWrapper>} />
            
            <Route path="/academics/bba-itm" element={<PageWrapper><BBA_ITM_Hons /></PageWrapper>} />
            <Route path="/academics/bba" element={<PageWrapper><BBA_Hons /></PageWrapper>} />
            <Route path="/academics/bcom" element={<PageWrapper><BCom_Hons /></PageWrapper>} />
            <Route path="/academics/bca" element={<PageWrapper><BCA_Hons /></PageWrapper>} />
            <Route path="/academics/mcom" element={<PageWrapper><MCom /></PageWrapper>} />
            <Route path="/academics/phd" element={<PageWrapper><PHD /></PageWrapper>} />
            <Route path="/admission/faqs" element={<PageWrapper><FAQsPage /></PageWrapper>} />
            <Route path="/research/journal" element={<PageWrapper><SMTRJournal /></PageWrapper>} />
            <Route path="/research/newsletter" element={<PageWrapper><SEMSpire /></PageWrapper>} />
            <Route path="/student/facilities" element={<PageWrapper><Facilities /></PageWrapper>} />
            <Route path="/student/events" element={<PageWrapper><MegaEvents /></PageWrapper>} />
            <Route path="/student/activities" element={<PageWrapper><ExtensionActivities /></PageWrapper>} />
            <Route path="/student/links" element={<PageWrapper><ImportantLinks /></PageWrapper>} />
            <Route path="/student/downloads" element={<PageWrapper><DownloadForms /></PageWrapper>} />
            <Route path="/student/neev" element={<PageWrapper><NEEV /></PageWrapper>} />
            
            <Route path="/placement" element={<PageWrapper><InternshipPlacement /></PageWrapper>} />
            <Route path="/placement/companies" element={<PageWrapper><CompanyDetail /></PageWrapper>} />
            <Route path="/placement/contact" element={<PageWrapper><ContactPlacement /></PageWrapper>} />
            
            <Route path="/admission" element={<PageWrapper><Admissions /></PageWrapper>} />
            <Route path="/research" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/student-corner" element={<PageWrapper><Home /></PageWrapper>} />
            
            <Route path="/alumni" element={<PageWrapper><Alumni /></PageWrapper>} />
            <Route path="/alumni/list" element={<PageWrapper><Alumni /></PageWrapper>} />
            <Route path="/alumni/register" element={<PageWrapper><AlumniRegistration /></PageWrapper>} />
            
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/rankings" element={<PageWrapper><Rankings /></PageWrapper>} />
            <Route path="/education-verification" element={<PageWrapper><EducationVerification /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
