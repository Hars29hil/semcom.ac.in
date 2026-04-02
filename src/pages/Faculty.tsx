import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Award, BookOpen, Briefcase, MapPin } from 'lucide-react';

const facultyMembers = [
  // Teaching Faculty
  {
    name: 'Dr. Preethi Luhana',
    qualification: 'M.Com., Ph.D.',
    designation: 'Principal (In-Charge)',
    area: 'Commerce and Accountancy',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Reena Dave',
    qualification: 'M.Com., M.Phil., LLB, Ph.D.',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1580894732230-28e193399e8c?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ms. Ami Trivedi',
    qualification: 'MCA, Ph.D. (Pursuing)',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ms. Palak Patel',
    qualification: 'MCA, Ph.D. (Pursuing)',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Joe Marry George',
    qualification: 'M.Com., B.Ed., M.Phil., Ph.D.',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Sunil Chaudhary',
    qualification: 'M.Com., M.Phil., PGDCA, NET, Ph.D.',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Ajayraj Vyas',
    qualification: 'M.Com., Ph.D.',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Chetan Patel',
    qualification: 'M.Sc.(Maths), M.Phil., Ph.D., GATE',
    designation: 'Assistant Professor',
    area: 'Mathematics',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Renil Thomas',
    qualification: 'M.Com., B.Ed., M.Phil., Ph.D.',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Khyati J Patel',
    qualification: 'M.Com., M.Phil., Ph.D.(Commerce)',
    designation: 'Assistant Professor',
    area: 'Accountancy and Finance',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0fe427c731?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Dipal Patel',
    qualification: 'MBA, M.Phil., Ph.D.',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Abhishek Dave',
    qualification: 'MCA',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Maulin Omprakash Punjabi',
    qualification: 'MCA, Ph.D. (Pursuing)',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Premal Soni',
    qualification: 'B.Com, M.C.A',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Dhruv Patel',
    qualification: 'B.Sc (C.S), M.Sc (I.T)',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Dhara Mehta',
    qualification: 'M.com(Gold Medallist), PhD',
    designation: 'Assistant Professor',
    area: 'Accountancy and Finance',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Rajesh Sangvi',
    qualification: 'Ph.D, M.Sc(Mathematics)',
    designation: 'Assistant Professor',
    area: 'Mathematics',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1504257432379-73551ba0e822?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Faizan Saeeda',
    qualification: 'M. Com, M. Phil, Ph.D, GSET',
    designation: 'Assistant Professor',
    area: 'Accountancy and Finance',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Kumarjay Shakya',
    qualification: 'M. Com, Ph.D(Pursuing)',
    designation: 'Assistant Professor',
    area: 'International Accounting and Finance',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ms. Shreya Patel',
    qualification: 'MBA, MSc.IB with Data Analytics(London)',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Hinabahen Nikunjkumar Patel',
    qualification: 'Ph.D., M.A(ELT), M.Phil, B.Ed.',
    designation: 'Assistant Professor',
    area: 'English Language',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Urvi Singh',
    qualification: 'M.Com, PhD',
    designation: 'Assistant Professor',
    area: 'Finance',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Sandip Chandra',
    qualification: 'B.Com, M.Com, MBA & Ph.D.',
    designation: 'Associate Professor',
    area: 'HRM and General Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ms. Archna Garasiya',
    qualification: 'MBA Phd (Pursuing) UGC NET.',
    designation: 'Assistant Professor',
    area: 'Management - Marketing',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Pooja Choudhary',
    qualification: 'NET, Ph.D, Mphil, Post-Doc, MBA',
    designation: 'Associate Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Shivani Pandey',
    qualification: 'Ph.D. in English literature',
    designation: 'Assistant Professor',
    area: 'English',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0fe427c731?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ms. Sarvi Dineshkumar Patel',
    qualification: 'B TECH, MBA, UGC(NET)',
    designation: 'Assistant Professor',
    area: 'Commerce Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Jay Chandrakant Panchal',
    qualification: 'BCA, MSCIT',
    designation: 'Assistant Professor',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Ms. Stuti Bhaveshkumar Prajapati',
    qualification: 'MCA Gold Medalist',
    designation: 'Guest Faculty',
    area: 'Computer Science',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Dhara Jha',
    qualification: 'Ph.D, UGC-NET, IIM-CFMT, MBA Finance',
    designation: 'Assistant Professor',
    area: 'Finance',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Gyandeep Hazarika',
    qualification: 'PhD in Management (Pursuing)',
    designation: 'Assistant Professor',
    area: 'Rural Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Dipali Gajjar',
    qualification: 'B.B.A, M.B.A, M.Com, PhD',
    designation: 'Assistant Professor',
    area: 'Commerce and Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Mr. Vijay Gamit',
    qualification: 'MBA, PhD (Pursuing)',
    designation: 'Assistant Professor',
    area: 'Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Dr. Puneet Tak',
    qualification: 'BBA, MBA, M.Com, PhD',
    designation: 'Assistant Professor',
    area: 'HRM and General Management',
    type: 'Teaching',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
  },

  // Technical Staff
  { name: 'Ms. Reshma Pathak', designation: 'TECHNICAL STAFF', type: 'Technical', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Ami Patel', designation: 'TECHNICAL STAFF', type: 'Technical', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Nilesh Patel', designation: 'TECHNICAL STAFF', type: 'Technical', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Krunal Shah', designation: 'SPORTS IN-CHARGE', type: 'Technical', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' },

  // Administrative Staff
  { name: 'Mr. Arvind Mistry', designation: 'ADMINISTRATIVE STAFF', type: 'Admin', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Hemangini Patel', designation: 'ADMINISTRATIVE STAFF', type: 'Admin', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },

  // Supportive Staff
  { name: 'Mr. Manhar Prajapati', designation: 'SUPPORTIVE STAFF', type: 'Support', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Raju Rathva', designation: 'SUPPORTIVE STAFF', type: 'Support', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Hitesh Patel', designation: 'SUPPORTIVE STAFF', type: 'Support', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Rajnikant Machhi', designation: 'SUPPORTIVE STAFF', type: 'Support', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Rikesh Rabari', designation: 'SUPPORTIVE STAFF', type: 'Support', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' },
];

export default function Faculty() {
  const staffTypes = [
    { id: 'Teaching', label: 'Teaching Faculty', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'Technical', label: 'Technical Staff', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'Admin', label: 'Administrative Staff', icon: <Award className="w-5 h-5" /> },
    { id: 'Support', label: 'Supportive Staff', icon: <Users size={20} className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner Section */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1c2e5a]/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" 
          alt="Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black text-white uppercase tracking-[0.2em]"
          >
            OUR TEAM
          </motion.h1>
          <p className="text-teal-400 font-bold tracking-widest mt-4 uppercase text-sm">Dedication • Expertise • Excellence</p>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {staffTypes.map((type) => (
        <section key={type.id} className="py-16 px-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-100 pb-6">
            <div className="p-3 bg-teal-600 rounded-2xl text-white shadow-lg shadow-teal-600/20">
              {type.icon}
            </div>
            <h2 className="text-3xl font-serif font-black text-[#1c2e5a] uppercase tracking-tight">
              {type.label}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers
              .filter((m) => m.type === type.id)
              .map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="text-center pb-4 border-b border-gray-100">
                      <h3 className="text-lg font-serif font-black text-[#1c2e5a] uppercase tracking-tight truncate">
                        {member.name}
                      </h3>
                      <p className="text-[#0b807b] font-black text-[10px] uppercase tracking-widest mt-1">
                        {member.designation}
                      </p>
                    </div>

                    {member.type === 'Teaching' && (
                      <div className="space-y-3">
                        {member.qualification && (
                          <div className="flex gap-3">
                            <GraduationCap size={16} className="text-teal-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Qualification</p>
                              <p className="text-xs font-semibold text-gray-700 leading-tight">{member.qualification}</p>
                            </div>
                          </div>
                        )}
                        {member.area && (
                          <div className="flex gap-3">
                            <MapPin size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Area</p>
                              <p className="text-xs font-semibold text-gray-700 leading-tight">{member.area}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="pt-4 flex justify-center gap-4 border-t border-gray-50">
                       <button className="text-gray-400 hover:text-teal-600 transition-colors">
                          <Mail size={18} />
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>
      ))}

      {/* Bottom Footer */}
      <section className="bg-[#1c2e5a] py-16 px-6 text-center text-white mt-12">
         <p className="text-teal-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">SEMCOM Institutional Pride</p>
         <h2 className="text-2xl font-serif font-bold">Guided by Visionaries, Driven by Excellence.</h2>
      </section>
    </div>
  );
}

function Users({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// Sub-components/Icons for better visuals
function Linkedin({ size, className = "" }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
