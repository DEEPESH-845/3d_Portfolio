// Removed incorrect import of 'any' from 'Nodes.js'
// import { any } from "three/examples/jsm/nodes/Nodes.js";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  
  threejs,
} from "../assets";

import mlsclogo1 from "../assets/company/mlsclogo1.png";
import owasplogo from "../assets/company/owasplogo.png";
import AfterEffects from "../assets/AfterEffects.png";
import dataanalytics from "../assets/company/dataanalytics.png";
import DSA from "../assets/company/DSA.png";
import CPLUS from "../assets/company/CPLUS.png";
import mysql from "../assets/company/mysql.png";
import davinci from "../assets/company/Davinci.png";
import tableau from "../assets/tech/tableau.png";
import Screenshot from "../assets/Screenshot.png";

// Commented out incorrect import
// import { px } from "framer-motion"; 



  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Next.js",
      icon: web,
    },
    {
      title: "DSA",
      icon: DSA,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    {
      title: "Devops",
      icon: mobile,
    },
    {
      title: "Data Analytics Using Python",
      icon: dataanalytics,
    },
    {
      title: "Tableau",
      icon: tableau,
    },
    {
      title: "UI/UX Designer",
      icon:figma,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "Video Editor",
      icon: AfterEffects,
    },
    
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS ",
      icon: css,
    },
    {
      name: "C++",
      icon: CPLUS,
    },

    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MysQl",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Davinci",
      icon: davinci ,
    },
   
  ];
  
  const experiences = [
    
    {
      title: "Marketing Coordinator",
      company_name: "Microsoft Learn Student Chapter",
      icon: mlsclogo1,
      iconBg:"#383E56",
      date: " Nov 2023 - Present",
      
      points:
       [
        "A student-led organization focused on increasing awareness and adoption of microsoft texhnolgies.",
        "Organised many tech workshops and our flagship event Makeathon-6 (All India level Hackathon)",
        "Engaged with peers to enhance learning experiences through workshops and projects",
        

      ],
    },
    {
      title: "Tech Coordinator",
      company_name: "Owasp",
      icon: owasplogo,
      iconBg: "black",
      date: "Nov 2023 - Present",
      points: [
        "Organisation focused on improving the security of the software",
        "Contributed in OWASP TIET Website",
        "Worked with a team of 3 developers through the development and deployment phase of Capture The Flag (CTF) Website which successfully attracted 2000+ participants ",
        "Participating in multiple hackathons and gaining insightful experience from the seniors",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    
    {
      name: "Metaverse Madness",
      description:
        "A Web portal representation to explore unique virtual worlds while at home. The only platform that enables users to seamlessly explore and interact with immersive virtual worlds.",
      tags: [
        {
          name: "Tailwind-CSS",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Framer-Motion",
          color: "pink-text-gradient",
        },
      ],
      image: Screenshot ,
      source_code_link: "https://github.com/DEEPESH-845/Metaverse.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };