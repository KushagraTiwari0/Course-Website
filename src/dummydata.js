// data.js or wherever you store your data
export const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Quality Education",
    desc: "Providing top-notch coaching for NDA, CDS, AFCAT, and other defense exams to prepare students for a brighter future.",
  },
  {
    id: 2,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Earn Certificates",
    desc: "Upon completion of our specialized courses, students receive certificates recognizing their dedication and hard work.",
  },
  {
    id: 3,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Expert Faculty",
    desc: "Learn from experienced and qualified instructors dedicated to helping students achieve their goals in defense services.",
  },
  {
    id: 4,
    cover: "https://img.icons8.com/ios-filled/80/000000/login-rounded-right.png", // Login Icon
    title: "Login",
    desc: "Access your account to track your progress, join live sessions, and manage your courses.",
  },
];


export const awrapper = [
  {
    cover: "https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png",
    data: "1,500",
    title: "SUCCESS STORIES",
  },
  {
    cover: "https://img.icons8.com/ios/80/ffffff/athlete.png",
    data: "50",
    title: "EXPERT FACULTY",
  },
  {
    cover: "https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png",
    data: "100",
    title: "COURSES COMPLETED",
  },
  {
    cover: "https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png",
    data: "200",
    title: "ACTIVE STUDENTS",
  },
];

export const coursesCard = [
  {
    id: 1,
    cover: "../images/courses/c1.png",
    coursesName: "NDA Preparation",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Col. Rajesh Sharma",
        totalTime: "40 lectures (100 hrs)",
      },
    ],
    priceAll: "₹15,000 Full Course",
    pricePer: "₹2,000 per month",
  },
  {
    id: 2,
    cover: "../images/courses/c2.png",
    coursesName: "CDS Exam Coaching",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Major Neha Kapoor",
        totalTime: "50 lectures (150 hrs)",
      },
    ],
    priceAll: "₹20,000 Full Course",
    pricePer: "₹2,500 per month",
  },
  {
    id: 3,
    cover: "../images/courses/c3.png",
    coursesName: "AFCAT Training",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Capt. Anil Kumar",
        totalTime: "30 lectures (90 hrs)",
      },
    ],
    priceAll: "₹12,000 Full Course",
    pricePer: "₹1,500 per month",
  },
  {
    id: 4,
    cover: "../images/courses/c4.png",
    coursesName: "SSB Interview Preparation",
    courTeacher: [
      {
        dcover: "./images/back.webp",
        name: "by Wing Commander Kabir Singh",
        totalTime: "20 lectures (50 hrs)",
      },
    ],
    priceAll: "₹10,000 Full Course",
    pricePer: "₹1,200 per month",
  },
];

export const team = [
  {
    cover: "./images/team/t1.webp",
    name: "Col. Rajesh Sharma",
    work: "HEAD OF NDA TRAINING",
  },
  {
    cover: "./images/team/t2.webp",
    name: "Major Neha Kapoor",
    work: "LEAD FACULTY - CDS",
  },
  {
    cover: "./images/team/t3.webp",
    name: "Capt. Anil Kumar",
    work: "AFCAT TRAINER",
  },
  {
    cover: "./images/team/t4.webp",
    name: "Wing Commander Kabir Singh",
    work: "SSB INTERVIEW COACH",
  },
];

export const price = [
  {
    name: "BASIC PLAN",
    price: "₹10,000",
    desc: "Access to NDA or CDS classes, study materials, and limited mock tests.",
  },
  {
    name: "STANDARD PLAN",
    price: "₹15,000",
    desc: "Access to all defense exam classes, mock tests, and personalized mentoring.",
  },
  {
    name: "PREMIUM PLAN",
    price: "₹20,000",
    desc: "Includes live classes, study materials, unlimited tests, and interview preparation.",
  },
  {
    name: "ULTIMATE PLAN",
    price: "₹25,000",
    desc: "Comprehensive preparation for all exams, with expert mentorship and additional resources.",
  },
];

export const faq = [
  {
    title: "How can I enroll in a course?",
    desc: "You can enroll online through our website or visit our center at Pilani. For guidance, contact our support team.",
  },
  {
    title: "What is the duration of the courses?",
    desc: "Course durations vary depending on the program, ranging from 2 months to 6 months.",
  },
  {
    title: "Do you provide study materials?",
    desc: "Yes, we provide complete study materials, including books, notes, and practice tests.",
  },
  {
    title: "Are there any online classes available?",
    desc: "Yes, we offer live online classes for students who cannot attend in-person sessions.",
  },
];

export const testimonal = [
  {
    id: 1,
    name: "Rohan Gupta",
    post: "NDA Qualified",
    desc: "The guidance at LNC Defence Academy helped me clear NDA in my first attempt!",
    cover: "./images/testo/t1.webp",
  },
  {
    id: 2,
    name: "Sneha Patel",
    post: "AFCAT Cleared",
    desc: "A big thanks to the faculty for making the preparation so easy and structured.",
    cover: "./images/testo/t2.webp",
  },
  {
    id: 3,
    name: "Vikram Sharma",
    post: "CDS Cleared",
    desc: "The mock tests and study material were excellent and very close to the real exam.",
    cover: "./images/testo/t3.webp",
  },
];

export const blog = [
  {
    id: 1,
    type: "admin",
    date: "JAN. 15, 2023",
    com: "5 COMMENTS",
    title: "Tips to Crack NDA Exam in 2024",
    desc: "Learn effective strategies and tips to excel in the upcoming NDA exam.",
    cover: "./images/blog/nda_exam.webp",
  },
  {
    id: 2,
    type: "admin",
    date: "MAR. 22, 2023",
    com: "8 COMMENTS",
    title: "Importance of SSB Interview Preparation",
    desc: "Why SSB interviews are crucial and how to prepare effectively.",
    cover: "./images/blog/ssb_interview.webp",
  },
  {
    id: 3,
    type: "user",
    date: "JUN. 18, 2023",
    com: "10 COMMENTS",
    title: "AFCAT Success Stories",
    desc: "Real-life success stories of students who cracked AFCAT exams with our help.",
    cover: "./images/blog/story.webp",
  },
];

export const online = [
  {
    cover: "/images/blog/maths.png",
    hoverCover: "/images/blog/maths.png",
    courseName: "Mathematics for NDA & CDS",
    course: "15 Courses",
  },
  {
    cover: "/images/blog/grammar.png",
    hoverCover: "/images/blog/grammar.png",
    courseName: "English Grammar & Comprehension",
    course: "20 Courses",
  },
  {
    cover: "/images/blog/knowledge.png",
    hoverCover: "/images/blog/knowledge.png",
    courseName: "General Knowledge & Current Affairs",
    course: "10 Courses",
  },
  {
    cover: "/images/blog/ssb.png",
    hoverCover: "/images/blog/ssb.png",
    courseName: "SSB Interview Preparation",
    course: "5 Courses",
  },
  {
    cover: "/images/blog/physics.png",
    hoverCover: "/images/blog/physics.png",
    courseName: "Physics for NDA & CDS",
    course: "12 Courses",
  },
  {
    cover: "/images/blog/chemistry.png",
    hoverCover: "/images/blog/chemistry.png",
    courseName: "Chemistry Basics for Defence Exams",
    course: "8 Courses",
  },
  {
    cover: "/images/blog/mental_ability.png",
    hoverCover: "/images/blog/mental_ability.png",
    courseName: "Mental Ability & Logical Reasoning",
    course: "10 Courses",
  },
  {
    cover: "/images/blog/physical_training.png",
    hoverCover: "/images/blog/physical_training.png",
    courseName: "Physical Training & Fitness Preparation",
    course: "6 Courses",
  },
  {
    cover: "/images/blog/geography.png",
    hoverCover: "/images/blog/geography.png",
    courseName: "Geography for Defence Exams",
    course: "7 Courses",
  },
  {
    cover: "/images/blog/psychology.png",
    hoverCover: "/images/blog/psychology.png",
    courseName: "Psychology for SSB & Leadership",
    course: "5 Courses",
  },
];
