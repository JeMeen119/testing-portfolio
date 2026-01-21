// Editable Portfolio Data - Update your personal information here

export const personalInfo = {
  name: "Alex Johnson",
  role: "AI Product Manager",
  tagline: "Bridging the gap between cutting-edge AI technology and user-centric product experiences",
  bio: "Passionate about leveraging artificial intelligence to create impactful products that solve real-world problems. With a strong foundation in finance and technology, I bring a unique perspective to product management, combining analytical rigor with creative problem-solving.",
  email: "alex.johnson@email.com",
  location: "Bangalore, India",
  linkedIn: "https://linkedin.com/in/alexjohnson",
  profileImage: "", // Add your profile image path here
  resumeUrl: "/resume.pdf", // Add your resume PDF path here
};

export const stats = [
  { value: "6+", label: "Projects Completed" },
  { value: "2", label: "Capstone Projects" },
  { value: "10+", label: "Years Learning" },
  { value: "1", label: "Case Study" },
];

export const skills = [
  {
    category: "Product Management",
    items: [
      { name: "Product Roadmapping", percentage: 90 },
      { name: "PRD Writing", percentage: 85 },
      { name: "User Research", percentage: 80 },
      { name: "A/B Testing", percentage: 75 },
      { name: "Agile/Scrum", percentage: 85 },
      { name: "Stakeholder Management", percentage: 80 },
    ],
    icon: "Layers",
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "ML Algorithms", percentage: 75 },
      { name: "NLP Basics", percentage: 70 },
      { name: "Computer Vision", percentage: 65 },
      { name: "Prompt Engineering", percentage: 85 },
      { name: "AI Ethics", percentage: 80 },
      { name: "LLM Applications", percentage: 80 },
    ],
    icon: "Brain",
  },
  {
    category: "Strategy",
    items: [
      { name: "GTM Strategy", percentage: 85 },
      { name: "PLG Strategy", percentage: 80 },
      { name: "Market Analysis", percentage: 85 },
      { name: "Competitive Analysis", percentage: 90 },
      { name: "Business Modeling", percentage: 80 },
      { name: "Monetization", percentage: 75 },
    ],
    icon: "Target",
  },
  {
    category: "Analytics",
    items: [
      { name: "Data Analysis", percentage: 85 },
      { name: "SQL", percentage: 80 },
      { name: "Python Basics", percentage: 70 },
      { name: "Dashboard Design", percentage: 85 },
      { name: "KPI Definition", percentage: 90 },
      { name: "Metrics Framework", percentage: 85 },
    ],
    icon: "BarChart3",
  },
  {
    category: "Design Thinking",
    items: [
      { name: "UI/UX Principles", percentage: 80 },
      { name: "Wireframing", percentage: 85 },
      { name: "User Journey Mapping", percentage: 90 },
      { name: "Prototyping", percentage: 75 },
      { name: "Figma", percentage: 70 },
      { name: "Design Systems", percentage: 75 },
    ],
    icon: "Palette",
  },
  {
    category: "Technical",
    items: [
      { name: "API Understanding", percentage: 80 },
      { name: "System Design Basics", percentage: 70 },
      { name: "Version Control", percentage: 75 },
      { name: "Technical Documentation", percentage: 85 },
      { name: "Agile Tools", percentage: 90 },
      { name: "Data Structures", percentage: 65 },
    ],
    icon: "Code2",
  },
];

export const projects = {
  capstone: [
    {
      id: 1,
      title: "Build for Bharat Challenge",
      description: "A comprehensive product solution designed to address challenges unique to the Indian market, focusing on accessibility, scalability, and local user needs.",
      fullDescription: "This capstone project was developed as part of the Build for Bharat Challenge, focusing on creating inclusive digital solutions for the Indian market. The project involved extensive user research across tier-2 and tier-3 cities, identifying pain points in existing digital services, and proposing innovative solutions that cater to diverse linguistic and economic backgrounds.",
      tags: ["Product Strategy", "Market Research", "User-Centric Design", "Localization"],
      status: "Completed",
      type: "capstone",
      image: "", // Add project image path
      pdfUrl: "", // Add PDF path for download
    },
    {
      id: 2,
      title: "Personal Product (In Progress)",
      description: "Currently developing an innovative product that leverages AI capabilities to solve a specific problem. Details will be revealed upon completion.",
      fullDescription: "An ongoing personal project exploring the intersection of AI and everyday productivity. This product aims to leverage large language models and machine learning to automate repetitive tasks while maintaining user control and transparency. Currently in the MVP development phase with user testing planned for Q2 2024.",
      tags: ["AI Integration", "Product Development", "MVP", "Iteration"],
      status: "In Progress",
      type: "capstone",
      image: "",
      pdfUrl: "",
    },
  ],
  normal: [
    {
      id: 3,
      title: "Is Metaverse the Future of Education?",
      description: "An in-depth analysis exploring how metaverse technologies could revolutionize educational experiences, including virtual classrooms and immersive learning.",
      fullDescription: "This research project explored the potential of metaverse technologies in transforming education. Key areas investigated include virtual reality classrooms, immersive learning experiences, accessibility considerations, and the psychological impact of extended VR use on students. The analysis includes case studies from early adopters and recommendations for educational institutions.",
      tags: ["Metaverse", "EdTech", "Research", "Trend Analysis"],
      type: "normal",
      image: "",
      pdfUrl: "",
    },
    {
      id: 4,
      title: "LinkedIn Mentorship Feature",
      description: "Proposed a new mentorship feature for LinkedIn to enhance professional networking and career development through structured mentoring programs.",
      fullDescription: "Designed a comprehensive mentorship feature for LinkedIn that connects professionals with mentors based on career goals, industry expertise, and learning preferences. The feature includes structured mentorship programs, progress tracking, goal setting, and feedback mechanisms. User research was conducted with 50+ professionals to validate the concept.",
      tags: ["Feature Design", "B2B", "Networking", "UX"],
      type: "normal",
      image: "",
      pdfUrl: "",
    },
    {
      id: 5,
      title: "WhatsApp Monetization Feature PRD",
      description: "Created a comprehensive Product Requirements Document for a new monetization feature on WhatsApp, balancing revenue generation with user experience.",
      fullDescription: "Developed a detailed PRD for a WhatsApp monetization feature that introduces premium business tools while preserving the core free messaging experience. The document covers user stories, technical requirements, success metrics, and a phased rollout strategy. Special attention was given to privacy concerns and user trust.",
      tags: ["PRD", "Monetization", "Messaging", "B2C"],
      type: "normal",
      image: "",
      pdfUrl: "",
    },
    {
      id: 6,
      title: "Social Media Analytics Dashboard",
      description: "Designed an analytics dashboard for a newly launching social media app, focusing on key metrics, user insights, and actionable recommendations.",
      fullDescription: "Created a comprehensive analytics dashboard design for a new social media platform. The dashboard provides real-time insights into user engagement, content performance, growth metrics, and predictive analytics. Features include customizable widgets, automated reports, and AI-powered recommendations for content optimization.",
      tags: ["Analytics", "Dashboard", "Data Visualization", "Metrics"],
      type: "normal",
      image: "",
      pdfUrl: "",
    },
    {
      id: 7,
      title: "Amazon Music GTM & PLG Strategy",
      description: "Developed a comprehensive Go-To-Market and Product-Led Growth strategy for relaunching Amazon Music in competitive markets.",
      fullDescription: "Formulated a strategic plan for Amazon Music's relaunch focusing on product-led growth principles. The strategy includes competitive analysis against Spotify and Apple Music, unique value proposition development, viral loop mechanisms, freemium model optimization, and targeted marketing campaigns for different user segments.",
      tags: ["GTM", "PLG", "Music Streaming", "Strategy"],
      type: "normal",
      image: "",
      pdfUrl: "",
    },
    {
      id: 8,
      title: "5 Daily Use Cases of ML Algorithms",
      description: "Documented and analyzed five practical applications of machine learning algorithms that we encounter in daily life, making AI accessible to everyone.",
      fullDescription: "An educational project breaking down complex machine learning concepts into everyday examples. Covers recommendation systems (Netflix, Spotify), fraud detection (banking), voice assistants (Alexa, Siri), image recognition (Google Photos), and predictive text. Each use case includes algorithm explanations, real-world implementations, and ethical considerations.",
      tags: ["Machine Learning", "AI Applications", "Use Cases", "Education"],
      type: "normal",
      image: "",
      pdfUrl: "",
    },
  ],
  caseStudy: [
    {
      id: 9,
      title: "Grok AI Case Study",
      description: "A comprehensive case study analyzing Grok, xAI's conversational AI assistant. Submitted as part of a competition organized by Unstop, exploring its positioning, features, and market impact.",
      fullDescription: "This case study provides an in-depth analysis of Grok, the AI chatbot developed by xAI (Elon Musk's AI venture). The study covers Grok's unique positioning with real-time information access, its integration with X (formerly Twitter), competitive advantages over ChatGPT and Claude, monetization strategy, and future growth potential. Includes SWOT analysis, user persona development, and strategic recommendations.",
      tags: ["Case Study", "AI Assistant", "Competition", "Market Analysis", "Unstop"],
      type: "caseStudy",
      competition: "Unstop Challenge",
      image: "",
      pdfUrl: "",
    },
  ],
};

export const education = [
  {
    degree: "MBA in Finance",
    institution: "Business School",
    year: "2022 - 2024",
    description: "Specialized in financial analysis, strategic management, and business analytics.",
  },
  {
    degree: "BCA - Bachelor of Computer Applications",
    institution: "University",
    year: "2019 - 2022",
    description: "Foundation in programming, database management, and software development.",
  },
  {
    degree: "MEC - Intermediate",
    institution: "Junior College",
    year: "2017 - 2019",
    description: "Mathematics, Economics, and Commerce stream with focus on analytical skills.",
  },
  {
    degree: "SSC - Secondary School Certificate",
    institution: "High School",
    year: "2017",
    description: "Completed secondary education with distinction.",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
