const db = require('./db');

const facultyMembers = [
  { name: 'Dr. Preethi Luhana', qualification: 'M.Com., Ph.D.', designation: 'Principal (In-Charge)', area: 'Commerce and Accountancy', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Reena Dave', qualification: 'M.Com., M.Phil., LLB, Ph.D.', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1580894732230-28e193399e8c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Ami Trivedi', qualification: 'MCA, Ph.D. (Pursuing)', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Palak Patel', qualification: 'MCA, Ph.D. (Pursuing)', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Joe Marry George', qualification: 'M.Com., B.Ed., M.Phil., Ph.D.', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Sunil Chaudhary', qualification: 'M.Com., M.Phil., PGDCA, NET, Ph.D.', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Ajayraj Vyas', qualification: 'M.Com., Ph.D.', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Chetan Patel', qualification: 'M.Sc.(Maths), M.Phil., Ph.D., GATE', designation: 'Assistant Professor', area: 'Mathematics', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Renil Thomas', qualification: 'M.Com., B.Ed., M.Phil., Ph.D.', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Khyati J Patel', qualification: 'M.Com., M.Phil., Ph.D.(Commerce)', designation: 'Assistant Professor', area: 'Accountancy and Finance', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1598550874175-4d0fe427c731?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Dipal Patel', qualification: 'MBA, M.Phil., Ph.D.', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Abhishek Dave', qualification: 'MCA', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Maulin Omprakash Punjabi', qualification: 'MCA, Ph.D. (Pursuing)', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Premal Soni', qualification: 'B.Com, M.C.A', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Dhruv Patel', qualification: 'B.Sc (C.S), M.Sc (I.T)', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Dhara Mehta', qualification: 'M.com(Gold Medallist), PhD', designation: 'Assistant Professor', area: 'Accountancy and Finance', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Rajesh Sangvi', qualification: 'Ph.D, M.Sc(Mathematics)', designation: 'Assistant Professor', area: 'Mathematics', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1504257432379-73551ba0e822?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Faizan Saeeda', qualification: 'M. Com, M. Phil, Ph.D, GSET', designation: 'Assistant Professor', area: 'Accountancy and Finance', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Kumarjay Shakya', qualification: 'M. Com, Ph.D(Pursuing)', designation: 'Assistant Professor', area: 'International Accounting and Finance', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Shreya Patel', qualification: 'MBA, MSc.IB with Data Analytics(London)', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Hinabahen Nikunjkumar Patel', qualification: 'Ph.D., M.A(ELT), M.Phil, B.Ed.', designation: 'Assistant Professor', area: 'English Language', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Urvi Singh', qualification: 'M.Com, PhD', designation: 'Assistant Professor', area: 'Finance', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Sandip Chandra', qualification: 'B.Com, M.Com, MBA & Ph.D.', designation: 'Associate Professor', area: 'HRM and General Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Archna Garasiya', qualification: 'MBA Phd (Pursuing) UGC NET.', designation: 'Assistant Professor', area: 'Management - Marketing', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Pooja Choudhary', qualification: 'NET, Ph.D, Mphil, Post-Doc, MBA', designation: 'Associate Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Shivani Pandey', qualification: 'Ph.D. in English literature', designation: 'Assistant Professor', area: 'English', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1598550874175-4d0fe427c731?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Sarvi Dineshkumar Patel', qualification: 'B TECH, MBA, UGC(NET)', designation: 'Assistant Professor', area: 'Commerce Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Jay Chandrakant Panchal', qualification: 'BCA, MSCIT', designation: 'Assistant Professor', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Stuti Bhaveshkumar Prajapati', qualification: 'MCA Gold Medalist', designation: 'Guest Faculty', area: 'Computer Science', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Dhara Jha', qualification: 'Ph.D, UGC-NET, IIM-CFMT, MBA Finance', designation: 'Assistant Professor', area: 'Finance', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Gyandeep Hazarika', qualification: 'PhD in Management (Pursuing)', designation: 'Assistant Professor', area: 'Rural Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Dipali Gajjar', qualification: 'B.B.A, M.B.A, M.Com, PhD', designation: 'Assistant Professor', area: 'Commerce and Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Vijay Gamit', qualification: 'MBA, PhD (Pursuing)', designation: 'Assistant Professor', area: 'Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Puneet Tak', qualification: 'BBA, MBA, M.Com, PhD', designation: 'Assistant Professor', area: 'HRM and General Management', staff_type: 'Teaching', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Reshma Pathak', designation: 'TECHNICAL STAFF', staff_type: 'Technical', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=400' },
  { name: 'Ms. Ami Patel', designation: 'TECHNICAL STAFF', staff_type: 'Technical', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Nilesh Patel', designation: 'TECHNICAL STAFF', staff_type: 'Technical', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Krunal Shah', designation: 'SPORTS IN-CHARGE', staff_type: 'Technical', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Arvind Mistry', designation: 'ADMINISTRATIVE STAFF', staff_type: 'Admin', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Dr. Hemangini Patel', designation: 'ADMINISTRATIVE STAFF', staff_type: 'Admin', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Manhar Prajapati', designation: 'SUPPORTIVE STAFF', staff_type: 'Support', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Raju Rathva', designation: 'SUPPORTIVE STAFF', staff_type: 'Support', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Hitesh Patel', designation: 'SUPPORTIVE STAFF', staff_type: 'Support', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Rajnikant Machhi', designation: 'SUPPORTIVE STAFF', staff_type: 'Support', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Mr. Rikesh Rabari', designation: 'SUPPORTIVE STAFF', staff_type: 'Support', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400' },
];

(async () => {
    try {
        console.log('Clearing old faculty data...');
        // Remove all current faculty except base admin accounts
        await db.execute("DELETE FROM users WHERE staff_type IS NOT NULL OR role = 'counselor'");
        
        console.log('Seeding full institutional staff dataset...');
        for (const m of facultyMembers) {
            await db.execute(
                'INSERT INTO users (name, short_name, role, image_url, qualification, area, staff_type, email, phone_number, password, plain_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [m.name, m.name.split(' ').pop(), m.designation, m.image, m.qualification || '', m.area || '', m.staff_type, `${m.name.toLowerCase().replace(/ /g, '.')}@cvmu.edu.in`, '0000000000', 'password', 'password']
            );
        }
        console.log('Full staff directory seeded successfully. Total:', facultyMembers.length);
    } catch (e) {
        console.error('Seeding error:', e.message);
    } finally {
        process.exit();
    }
})();
