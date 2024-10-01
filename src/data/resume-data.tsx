import { GitHubIcon, LinkedInIcon } from "../components/icons";
  
export const RESUME_DATA = {
    name: "Sameeha Mubeen",
    initials: "SM",
    // location: "Hyderabad, India",
    // locationLink: "https://www.google.com/maps/place/Hyderabad",
    about:
      "Software Developer skilled in the ServiceNow platform and backend technologies, focused on learning through experimentation.",
    summary:
      "I am a Software Engineer at ServiceNow, contributing to the development and maintenance of a comprehensive in-house CRM and CPQ solution on the ServiceNow platform",
    avatarUrl: "https://raw.githubusercontent.com/MSameeha/MSameeha/main/avatar.jpg",
    // personalWebsiteUrl: "https://jarocki.me",
    contact: {
        email: "sameehamubeen81@gmail.com",
        tel: "+91 8688669479",
        social: [
            {
            name: "GitHub",
            url: "https://github.com/MSameeha",
            icon: GitHubIcon,
            },
            {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sameehamubeen/",
            icon: LinkedInIcon,
            },
        ],
    },
    education: [{
        school: "Vasavi College of Engineering, Affiliated to Osmania University",
        degree: "Bachelor's Degree in Computer Science & Engineering",
        start: "2019",
        end: "2023",
    },],
    work: [
        {
        company: "ServiceNow",
        link: "https://www.servicenow.com/",
        // badges: ["Hybrid"],
        title: "Associate Software Engineer",
        // logo: Logo,
        start: "Sep 2023",
        end: null,
        description:
        "Contributing to the development and maintenance of a comprehensive in-house CRM and CPQ solution on the ServiceNow platform, with a focus on leveraging sales and order management."
        // "• Led the Secondary Meters project, optimising data retrieval from Snowflake and reducing API calls by 85% through efficient caching and a robust architectural design \n • Deployed performance optimisations for legacy code, achieving a 21% reduction in Sales Opportunity loading time and enhancing user experience throughout the sales process cycle\n• Implemented a critical fix to eliminate duplicate renewal line items in quotes, reducing RACV discrepancies and improving quote accuracy by 10%, resulting in a time savings of approximately 24 hours per quarter \n • Co-led the ServiceNow India Book Club, organising 10+ discussions that doubled membership, achieved 90% 5-star feedback, and improved social media engagement from 10% to over 60% within a year. \n • Earned certifications as a Certified ServiceNow Administrator (CSA), Application Developer (CAD), and CIS-ITSM, showcasing my ability to quickly learn and adapt to new technologies.",
        },
        {
        company: "Techsophy",
        link: "https://techsophy.com/",
        // badges: ["Office"],
        title: "Software Engineer Trainee",
        // logo: Logo,
        start: "Jan 2023",
        end: "Jul 2023",
        description:
        "Developed Recroot, an interactive bot that reduced job application time by 40%, and integrated an internal chatbot with live project backend interactions using SpringBoot and Java."
        // "• Developed Recroot, an interactive bot that streamlined the job application process, reducing application time by 40% with features like status tracking, analytics  \n • Integrated the internal chatbot to a live project, handled the backend interaction through the tool by writing Rest APIs using SpringBoot and Java",
        },
        {
        company: "TextHappen",
        // link: "https://clevertech.biz",
        // badges: ["Remote"],
        title: "Technical Content Creator",
        // logo: Logo,
        start: "Sep 2021",
        end: "Jan 2022",
        description:
        "Wrote technical articles for clients, leveraging strong research, SEO optimization techniques, and keyword strategies to enhance visibility and engagement.",
        },
    ],
    skills: [
      "JavaScript TypeScript Java React/Next.js Node.js Express.js SQL MongoDB AWS",
      "Data Structures and Algorithm ServiceNow platform"
    ],
    projects: [
    {
        title: "Blogging Site",
        techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Zod",
        "Prisma ORM"
        ],
        description:
        "Developed a blogging platform enabling users to post blogs and view a feed of published content, offering a streamlined and intuitive user experience",
        // logo: Logo,
        link: {
        label: "github.com",
        href: "https://github.com/MSameeha/BloggingApplication",
        },
    },
    {
        title: "Flowtion",
        techStack: [
            "MongoDB",
            "Express.js",
            "React",
            "Node.js"
        ],
        description:
        "Built a MERN stack web application designed to help students effectively learn through flowcharts. Implemented features such as user authentication, a comprehensive scoreboard, and time alarms, with admin capabilities to add, delete, and update flowchart nodes.",
        link: {
            label: "github.com",
            href: "https://github.com/MSameeha/FlowTion_ByEnigmatic"
        }
    },
    {
        title: "Token-Based Authentication API",
        techStack: [
            "Spring Boot",
            "JWT",
            "MongoDB"
        ],
        description: "Developed a token-based REST API authentication system using Spring Boot, leveraging JSON Web Tokens (JWT) for secure authentication and MongoDB for user data storage.",
        link: {
            label: "github.com",
            href: "https://github.com/MSameeha/Token-Based-AuthenticationAPI-using-Springboot"
        }
    },
    {
        title: "Docker Compose NodeJS Application",
        techStack: [
            "Node.js",
            "MySQL",
            "Docker Compose"
        ],
        description: "Created a Node.js application to perform CRUD operations on a MySQL database.",
        link: {
            label: "github.com",
            href: "https://github.com/MSameeha/Docker-Compose-NodeJS_Application"
        }
    },
    {
        title: "Serverless Web Application Using AWS",
        techStack: [
            "AWS Lambda",
            "Amazon API Gateway",
            "AWS Amplify",
            "Amazon DynamoDB",
            "Amazon Cognito"
        ],
        description: "Built a serverless web application using AWS Lambda, Amazon API Gateway, AWS Amplify, Amazon DynamoDB, and Amazon Cognito.",
        link: {
            label: "github.com",
            href: "https://github.com/MSameeha/Serverless-Web-Application-Using-AWS"
        }
    },            
    {
        title: "Learning Git",
        techStack: [
            "React",
            "Git",
            "GitHub",
            "GitHub Pages"
        ],
        description:
        "Developed a React application to help users learn Git and GitHub basics, featuring common commands.",
        link: {
            label: "github.com",
            href: "https://github.com/MSameeha/Learning-Git"
        }
    },
    ],
} as const;