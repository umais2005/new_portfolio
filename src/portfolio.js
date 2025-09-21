/* Updated portfolio.js with info from Umais's CV */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Umais Siddiqui",
  title: "Hi all, I'm Umais",
  subTitle: emoji(
    "AI Engineer with hands-on experience in machine learning, NLP, and LLMs. Skilled in building AI pipelines, deploying applications, and integrating RAG workflows with vector databases."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-OGKu5F_95qGX4ZUWfd_u9aXn6xdPkF8/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/umais2005",
  linkedin: "https://www.linkedin.com/in/umais-siddiqui-0291a7178",
  gmail: "umaismuhammad99@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "AI Engineer passionate about ML, NLP, and deploying AI systems",
  skills: [
    emoji(
      "⚡ Build and deploy AI & NLP applications using Python, LangChain, and Hugging Face"
    ),
    emoji(
      "⚡ Develop APIs with FastAPI and deploy scalable AI applications on cloud platforms"
    ),
    emoji(
      "⚡ Creating data pipelines for AI workflows, data preprocessing, web scraping for data acquisition"
    )
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "AI/ML/LLMs", fontAwesomeClassname: "fas fa-hexagon-nodes"},
    {skillName: "LangChain", fontAwesomeClassname: "fas fa-link"},
    {skillName: "OpenAI", fontAwesomeClassname: "fab fa-openai"},
    {skillName: "Automation", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-server"},
    {skillName: "Postgres", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Institure of Business Administration (IBA), Karachi",
      logo: require("./assets/images/iba.png"),
      subHeader: "Bachelor's in Computer Science",
      duration: "Aug 2025 - Present",
      desc: "Pursuing Bachelor's in Computer Science with a focus on AI and ML."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "LLMs and AI Agents", progressPercentage: "90%"},
    {Stack: "Backend Development (FastAPI, APIs)", progressPercentage: "85%"},
    {Stack: "Data processing, Scraping", progressPercentage: "85%"},
    {Stack: "Machine Learning / NLP", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI Engineer",
      company: "Freelance",
      companylogo: require("./assets/images/freelancer-icon.png"),
      date: "Dec 2024 – Present",
      desc: "Building AI-powered applications and chatbots for clients using Python, LLMs and NLP models, and many other frameworks. Implementing AI workflows with RAG to automate business processes."
    },
    {
      role: "Junior AI Engineer",
      company: "Ariel Teknology",
      companylogo: require("./assets/images/aerialtek.png"),
      date: "Aug 2024 – Dec 2024",
      desc: "Developed a prototype AI agent using LLMs and vector databases, implementing RAG techniques to provide context-aware medical report explanations."
    },
    {
      role: "AI Engineer Intern",
      company: "Saynt AI",
      companylogo: require("./assets/images/sayntai.webp"),
      date: "Jul 2024",
      desc: "Contributed at a startup to develop AI workflows for enhancing teaching and learning. Leveraged OCR and RAG techniques with LLMs to improve access to educational content and support innovative student engagement solutions."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some AI projects I have worked on",
  projects: [
    {
      // image: require("./assets/images/project.png"),
      projectName: "AI Chatbot for Climate Research",
      projectDesc:
        "Built with LangChain, GPT-4, and Whisper. Integrated 20+ books & 100+ podcasts into a Pinecone vector DB for RAG responses. Deployed on Streamlit Cloud.",
      footerLink: []
    },
    {
      // image: require("./assets/images/project.png"),
      projectName: "Recommender Chatbot",
      projectDesc:
        "Developed a LangChain + Llama 3 chatbot to provide recommendations from a database of 15,000+ app descriptions using RAG.",
      footerLink: []
    },
    {
      // image: require("./assets/images/project.png"),
      projectName: "Mobile Price Range Classifier",
      projectDesc: "Achieved 95% accuracy using SVC with feature engineering.",
      footerLink: []
    }
  ],
  display: false
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Courses and certifications I have completed",
  achievementsCards: [
    {
      title: "Generative AI with LangChain & Hugging Face (Udemy)",
      subtitle: "Built 10+ projects including chatbots and content generators.",
      image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-98c7bf84-957c-49e0-8b4c-3b73ec76f650/"
        }
      ]
    },
    {
      title: "Google Data Analytics (Coursera)",
      subtitle:
        "Learned data cleaning, analysis, and visualization with SQL, R, and Tableau.",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/WZCG83YW1KPM"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing what I learn about AI and ML.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {title: "", subtitle: "", talks: [], display: false};
const podcastSection = {title: "", subtitle: "", podcast: [], display: false};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to collaborations, internships, and AI projects.",
  number: "+92 3401106263",
  email_address: "umaismuhammad99@gmail.com"
};

const twitterDetails = {userName: "", display: false};
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
