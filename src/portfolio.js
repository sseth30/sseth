/* Updated portfolio.js for Satchit Seth */

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
  username: "Satchit Seth",
  title: "Hi, I'm Satchit",
  subTitle: emoji(
    "2nd-year Computer Engineering @ Georgia Tech 🐝"
  ),
  resumeLink: "https://sseth30.github.io/sseth/Resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/sseth30",
  linkedin: "https://www.linkedin.com/in/satchitseth/",
  gmail: "sseth60@gatech.edu",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "I bridge the gap between cutting-edge technology and practical applications.",
  skills: [
    emoji("⚡ Build intelligent systems using AI/ML for real-world problems"),
    emoji(
      "⚡ Design efficient circuits and work across the hardware-software boundary"
    ),
    emoji("⚡ Develop Python, Java, C++, and embedded systems applications")
  ],
  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "vhdl", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/gtLogo.png"),
      subHeader: "B.S. in Computer Engineering",
      duration: "Jan 2025 – Present",
      desc: "Threads: Distributed Systems & Software Design, Systems & Architecture | Relevant Coursework: Programming HW/SW Systems, Object-Oriented Design, Intro to ECE"
    },
    {
      schoolName: "University of Georgia",
      logo: require("./assets/images/ugaLogo.png"),
      subHeader: "B.S. in Computer Systems Engineering",
      duration: "Aug 2023 – Dec 2024",
      desc: "GPA: 3.79/4.00 | Dean's List | VIPR Scholar | Coursework: Circuit Analysis, Software Dev, Logic Design, Multivariable Calc, Differential Eq, Discrete Math"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "AI/ML & Python", progressPercentage: "80%"},
    {Stack: "Hardware & Circuits", progressPercentage: "75%"},
    {Stack: "Software Engineering", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Undergraduate Researcher - VIPR",
      company: "University of Georgia",
      companylogo: require("./assets/images/ugaLogo.png"),
      logoClass: "experience-logo-small",
      date: "Aug 2024 – Dec 2024",
      desc: "Developed robotics + AI solutions for precision agriculture. Built an autonomous floor egg detection robot using YOLOv11 and RESTful Python interfaces. Awarded VIPR scholarship."
    },
    {
      role: "Founder",
      company: "Meals for One, Meals for All",
      companylogo: require("./assets/images/momaLogo.png"),
      logoClass: "experience-logo-large",
      date: "Aug 2021 – May 2023",
      desc: "Founded and scaled nonprofit addressing food insecurity with 500+ members and 250+ volunteer hours. Partnered with nonprofits across GA and CA."
    },
    {
      role: "Sales Floor Team Member",
      company: "Target",
      companylogo: require("./assets/images/targetLogo.png"),
      logoClass: "experience-logo-small",
      date: "Jan 2023 – May 2023",
      desc: "Worked collaboratively with team members, gaining experience in communication, initiative, and reliability."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Select projects showcasing applied engineering & software skills",
  projects: [
    {
      image: require("./assets/images/studysphere.png"),
      projectName: "StudySphere",
      projectDesc:
        "An educational tool built to help students with homework using AI-generated explanations, summaries, and interactive interfaces.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/sseth30/studysphere"}
      ]
    },
    {
      image: require("./assets/images/dialectify.png"),
      projectName: "Dialectify",
      projectDesc:
        "NLP-powered tool that detects and converts regional dialects into standardized English using PyTorch.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/sseth30/Dialectify"}
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "Recognized learning milestones",
  achievementsCards: [
    {
      title: "MTA: Software Development Fundamentals",
      subtitle: "Microsoft certification earned April 2022",
      image: require("./assets/images/mtaLogo.png"),
      imageAlt: "MTA Logo",
      imageLink: "/MTASoftwareDevFundCert.pdf", // ✅ NEW LINE
      footerLink: [
        {
          name: "Credential ID: 9007571",
          url: "/MTASoftwareDevFundCert.pdf" // Optional, or leave "" if unused
        }
      ]
    }
  ],
  display: true
};



// const about = {
//   display: true,
//   title: "About Me",
//   description: `I’m a second-year Computer Engineering major at Georgia Tech, fascinated by how AI/ML can be integrated with hardware design to build cutting-edge solutions. My journey started with a small robotics project in high school, and ever since, I’ve been hooked on the idea of shaping technology to solve real-world challenges.
  
//   Beyond academics, I’m deeply involved in community work as the founder of MOMA, a nonprofit addressing food insecurity. These experiences have helped me develop strong leadership and collaboration skills. When I’m not coding or volunteering, I enjoy tinkering with new technologies and exploring how software and hardware can seamlessly merge.`,
// };

const blogSection = {
  title: "Blogs",
  subtitle: "Coming soon: thoughts on tech, learning, and leadership.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Always up for sharing knowledge!"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Guest appearances and tech talks (TBD)",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to collaboration, projects, or conversations!",
  number: "",
  email_address: "sseth60@gatech.edu"
};

const twitterDetails = {
  userName: "",
  display: false
};

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
