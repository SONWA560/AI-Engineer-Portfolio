import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sonwabise",
  lastName: "Gcolotela",
  name: `Sonwabise Gcolotela`,
  role: "AI Engineer",
  avatar: "/images/avatar-sonwabise.jpeg",
  email: "sonwabisegcolotela@icloud.com",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on AI, data engineering, and tech projects</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/SONWA560",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sonwabise-gcolotela-315b94296/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing AI engineering, machine learning, and data-driven solutions by ${person.name}`,
  headline: <>Transforming data into intelligent systems that automate, predict, and innovate</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Sonwabise, a BCom Information Systems graduate [Cum Laude].
      <br /> I specialise in building intelligent systems that bridge data, automation, and innovation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Cape Town, South Africa`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sonwabise is a Cape Town-based BCom Information Systems graduate [Cum Laude]. With expertise spanning machine learning, 
        data engineering, and business intelligence, he transforms complex business challenges into 
        intelligent, automated solutions. His work includes developing AI-powered vision systems, 
        IoT automation, and enterprise-scale document processing platforms using cutting-edge 
        technologies like PyTorch, Azure AI, and Google Cloud.
      </>
    ),
  },
  work: {
    display: true,
    title: "Projects & Experience",
    experiences: [
      {
        company: "AI-Powered RFP/RFQ Analysis System",
        timeframe: "2024",
        role: "AI Developer - Think Tank Software Solutions",
        achievements: [
          <>
            Developed an AI-powered RFP/RFQ analysis system to automate document processing and enhance bid accuracy using React, FastAPI, and Azure AI services (Form Recogniser, Cognitive Search, OpenAI).
          </>,
          <>
            Implemented secure 2FA authentication and ensured GDPR/POPIA compliance while achieving 90%+ accuracy and reducing analysis time by 60%.
          </>,
          <>
            Built cloud-native solution with REST APIs, NLP, and workflow automation for intelligent document processing.
          </>,
        ],
        images: [],
      },
      {
        company: "Inventory Management System for TechInnovators",
        timeframe: "2024",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Developed an integrated equipment inventory tracking system using Oracle APEX and Python for real-time tracking of IoT and computing equipment.
          </>,
          <>
            Built centralized platform with QR code scanning for check-ins and automated reporting capabilities.
          </>,
          <>
            Designed custom APIs for Python-APEX integration, ensuring seamless communication between employee and admin interfaces with full system documentation.
          </>,
        ],
        images: [],
      },
      {
        company: "AI-Based Vision System for Smart Waste Sorting",
        timeframe: "2024",
        role: "Machine Learning Engineer",
        achievements: [
          <>
            Developed a machine learning-based vision system achieving 82.5% accuracy using MobileNetV2 to automate waste sorting into seven categories.
          </>,
          <>
            Applied transfer learning with ImageNet weights and preprocessed 17,000 images to optimize model performance.
          </>,
          <>
            Technologies: Python (PyTorch, MobileNetV2), Computer Vision, Deep Learning for smart waste management and recycling automation.
          </>,
        ],
        images: [],
      },
      {
        company: "IoT-Based Automated Motion Detector",
        timeframe: "2024",
        role: "IoT Developer",
        achievements: [
          <>
            Developed an IoT-based automated motion detection alarm system using ESP32 microcontrollers, PIR sensors, and MQTT communication.
          </>,
          <>
            Configured ESP32 as MQTT publisher to send motion detection data to Raspberry Pi broker with real-time alerts.
          </>,
          <>
            Integrated buzzer alarm and email notification features for smart security systems and home automation.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "University of the Western Cape, Cape Town",
        description: <>BCom Information Systems (Final Year) • GPA: 78% • Relevant Coursework: Data Analytics, Business Analytics, Database Management, Business Intelligence, Systems Analysis, Machine Learning, AI</>,
      },
      {
        name: "Awards & Certifications",
        description: <>DataCamp Associate Data Engineer (In Progress) • DataCamp Intermediate SQL • INSETA Bursary (2024-2025) • LinkedIn Learning PyTorch Deep Learning • Enactus UWC Top 15 Finalist (MTN Challenge) • Absa Inkanyezi IT, Cyber Security & Audit Academy</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Technologies",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>Expertise in deep learning, computer vision, and AI model development using PyTorch, Keras, and transfer learning techniques. Experienced in classification, regression, and neural network architectures.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "PyTorch",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: "Data Engineering & Analytics",
        description: (
          <>Proficient in ETL pipelines, data transformation, and analytics using SQL, pandas, NumPy, and cloud platforms. Skilled in building dashboards with Power BI and creating data-driven insights.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>Experience with Google Cloud Platform (BigQuery, Vertex AI, Cloud Storage, Cloud Run, Gemini) and Azure AI services. Skilled in deploying scalable cloud-native solutions and API development.</>
        ),
        tags: [
          {
            name: "GCP",
            icon: "cloud",
          },
          {
            name: "Azure",
            icon: "cloud",
          },
        ],
        images: [],
      },
      {
        title: "IoT & Embedded Systems",
        description: (
          <>Hands-on experience with Arduino (C++), ESP32, PIR sensors, MQTT protocols, and Raspberry Pi for building automated IoT solutions and smart systems.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Business Intelligence & Analysis",
        description: (
          <>Strong foundation in Power BI (data modeling, DAX, report building), systems analysis, requirements elicitation, workflow automation, and stakeholder management. Skilled in KPI development and data storytelling.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "GenAI & Automation",
        description: (
          <>Experienced in building GenAI solutions using OpenAI API, n8n, Zapier, v0.dev, Cursor, and Supabase for workflow automation and intelligent application development.</>
        ),
        tags: [
          {
            name: "OpenAI",
            icon: "code",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work };
