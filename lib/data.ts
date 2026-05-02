export const profile = {
  name: "Rishi Kesh",
  shortName: "Rishi",
  title: "MCA Student | Software Developer",
  role: "Full Stack Developer & ML Enthusiast",
  location: "Bengaluru, Karnataka, India",
  email: "rishikesh2230@gmail.com",
  academicEmail: "525110001@nitkkr.ac.in",
  linkedin: "https://linkedin.com/in/rishikesh-k-756b1a236",
  github: "https://github.com/githubrishi2230",
  photo: "/assets/rishi-profile.jpg",
  resumePdf: "/resume/rishi-kesh-resume.pdf",
  resumeHtml: "/resume/rishi-kesh-resume.html",
  summary:
    "Highly analytical MCA student with strong foundations in Python, Java, C++, data structures, machine learning, and enterprise application support at Accenture."
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: "8.9/10", label: "MCA CGPA", detail: "NIT Kurukshetra" },
  { value: "8.8/10", label: "B.Sc CGPA", detail: "Mathematics + Computer Science" },
  { value: "2025-28", label: "MCA Timeline", detail: "Current postgraduate program" },
  { value: "CS + AI", label: "Focus Areas", detail: "DSA, backend, ML, cybersecurity" }
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Frameworks & ML",
    skills: ["Spring Boot", "Flask", "Django", "TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite", "DBMS"]
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Jupyter", "REST APIs", "Google Cloud", "Cybersecurity"]
  }
];

export const projects = [
  {
    title: "Personalized Fitness Diet Recommendation System",
    description:
      "ML-powered Flask app that predicts calorie needs and generates optimized diet plans using Random Forest and Gradient Boosting models.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy"],
    features: [
      "Predicts calorie requirements from user inputs.",
      "Generates diet recommendations with ML-backed logic.",
      "Includes Flask interface for real-time output."
    ],
    live: "",
    github: profile.github,
    preview: "fitness"
  },
  {
    title: "Enterprise GenAI Adoption Analysis",
    description:
      "Data analysis project measuring enterprise AI adoption trends, productivity impact, employee sentiment, and workforce role transformation.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Analyzed productivity and role transformation trends.",
      "Created visual dashboards for presentation-ready insights.",
      "Mapped employee sentiment patterns around AI adoption."
    ],
    live: "",
    github: profile.github,
    preview: "genai"
  },
  {
    title: "Spotify Data Analysis",
    description:
      "Exploratory data analysis on music datasets with feature correlation, top genre discovery, artist insights, and interactive visual dashboards.",
    tech: ["Python", "Pandas", "NumPy", "Plotly"],
    features: [
      "Explored audio feature correlations across tracks.",
      "Identified top artists, genres, and engagement patterns.",
      "Built interactive data visualizations with Plotly."
    ],
    live: "",
    github: profile.github,
    preview: "spotify"
  },
  {
    title: "Delhi National Museum Management System",
    description:
      "Spring Boot and MySQL backend for artifact records, structured database management, and local image storage workflows.",
    tech: ["Spring Boot", "MySQL", "Java", "REST APIs"],
    features: [
      "Designed artifact and collection database schema.",
      "Built backend workflows for record management.",
      "Handled local image storage for museum artifacts."
    ],
    live: "",
    github: profile.github,
    preview: "museum"
  }
];

export const journey = [
  {
    period: "Oct 2024 - Oct 2025",
    role: "Packaged App Development Associate",
    company: "Accenture",
    summary:
      "Supported enterprise-scale applications through incident resolution, change management, automation, releases, and onboarding documentation.",
    highlights: [
      "Maintained 98% SLA compliance and reduced service disruptions.",
      "Contributed to 3 major releases impacting 5000+ global users.",
      "Automated deployment tasks with shell scripts, reducing manual effort by 30%."
    ]
  },
  {
    period: "July 2024",
    role: "Cybersecurity Trainee",
    company: "DevTown",
    summary:
      "Built foundations in ethical hacking, vulnerability assessment, threat analysis, encryption, and cloud security basics.",
    highlights: [
      "Performed vulnerability assessments and simulated phishing scenarios.",
      "Created an awareness module for non-technical users."
    ]
  },
  {
    period: "May 2024 - June 2024",
    role: "Front-End Developer",
    company: "Eduphonix Solutions",
    summary:
      "Developed a responsive e-commerce website using HTML, CSS, JavaScript, and Bootstrap with product listing and cart flows.",
    highlights: [
      "Improved UI/UX for better engagement across mobile-first screens.",
      "Conducted A/B testing for conversion optimization."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "National Institute of Technology Kurukshetra",
    period: "Aug 2025 - July 2028",
    score: "CGPA: 8.9/10"
  },
  {
    degree: "Bachelor of Science (Mathematics & Computer Science)",
    school: "Seshadripuram First Grade College, Bengaluru City University",
    period: "Jan 2021 - May 2024",
    score: "CGPA: 8.8/10"
  },
  {
    degree: "Pre-University (PCMC)",
    school: "Government First Grade College, Bengaluru City University",
    period: "Jan 2019 - May 2020",
    score: "CGPA: 8.8/10"
  }
];

export const offers = [
  {
    title: "ML-Backed Web Apps",
    description: "Python, Flask, and data pipelines for recommendation systems and practical AI features."
  },
  {
    title: "Backend APIs",
    description: "Spring Boot, REST APIs, database schemas, and secure service logic for scalable systems."
  },
  {
    title: "Data Analysis",
    description: "EDA, dashboards, and insight reports using Pandas, Plotly, Matplotlib, and Seaborn."
  }
];

export const profileCards = [
  { label: "Current", value: "MCA @ NIT Kurukshetra" },
  { label: "Academic", value: "8.9/10 CGPA" },
  { label: "Builds", value: "ML apps, APIs, dashboards" },
  { label: "Core", value: "Python, Java, Spring Boot" }
];

export const strengths = [
  "Strong analytical and problem-solving mindset.",
  "Industry experience balanced with academic consistency.",
  "Quick learner with calm, disciplined execution.",
  "Comfortable with technical and social leadership."
];

export const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` }
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/rishikesh-k-756b1a236", href: profile.linkedin },
  { label: "GitHub", value: "github.com/githubrishi2230", href: profile.github },
  { label: "Portfolio", value: "127.0.0.1:3000", href: "/" }
];
