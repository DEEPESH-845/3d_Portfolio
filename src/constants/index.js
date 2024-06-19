
import { any } from "three/examples/jsm/nodes/Nodes.js";
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
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";


  import  mlsclogo1  from "../assets/company/mlsclogo1.png";
  import owasplogo from "../assets/company/owasplogo.png";
  import  AfterEffects from "../assets/AfterEffects.png";
  import dataanalytics from '../assets/company/dataanalytics.png';
  import DSA from "../assets/company/DSA.png";
  import CPLUS from "../assets/company/CPLUS.png";
  import python from "../assets/company/python.png";
  import C from "../assets/company/C.png";
  import mysql from "../assets/company/mysql.png";
  import Davinci from "../assets/company/Davinci.png";
import { px } from "framer-motion";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DSA",
      icon: DSA,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Data Analytics Using Python",
      icon: dataanalytics,
    },
    {
      title: "UI/UX Designer",
      icon:figma,
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
      name: "CSS 3",
      icon: css,
    },
    {
      name: "C++",
      icon: CPLUS,
    },
    {
      name: "Python",
      icon: python,
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
    
   
  ];
  
  const experiences = [
    
    {
      title: "React JS Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Executive Member",
      company_name: "Microsoft Learn Student Chapter",
      icon: mlsclogo1,
      iconBg:"#383E56",
      date: " Nov 2023 - Present",
      
      points:
       [
        "Developing and learning web applications  and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to provide high-quality services to the society",
        "Participating in multiple hackathons and gaining insightful experience from the seniors",
        

      ],
    },
    {
      title: "Executive Member",
      company_name: "Owasp",
      icon: owasplogo,
      iconBg: "black",
      date: "Nov 2023 - Present",
      points: [
        "Developing and learning web applications  and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to provide high-quality services to the society",
        "Participating in multiple hackathons and gaining insightful experience from the seniors",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Deepesh proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Deepesh does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Deepesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };