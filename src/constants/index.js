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
  starbucks,
  tesla,
  ashv,
  shopify,
  carrent,
  jobit,
  tripguide,
  watchtube,
  shoping,
  threejs,
} from "../assets";

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
    title: "Front End Developer",
    icon: creator,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Angular Developer",
    icon: backend,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Ashvfinance",
    icon: ashv,
    iconBg: "#383E56",
    date: "Jul 2022 - present",
    points: [
      "Develops responsive, user-friendly web interfaces using modern frontend technologies like ReactJs, Angular, JavaScript, and CSS, ensuring seamless user experiences.",
      "I collaborate with cross-functional teams to enhance and modify existing data processing display features and debug production issues.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    company_name: "Ashvfinance",
    icon: ashv,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Jun 2022",
    points: [
      "Worked on various technologies like Angular, Micro Services, MDM, Typescript, JavaScript & Git.",
      "Developed and implemented generic custom methods to optimise reusable code functionality, streamline development processes, and enhance maintainability."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Watch Tube",
    description:
      " Implemented YouTube Clone App where users can log in and can see the videos that are created by others with search by video title name.",
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
    image: watchtube,
    source_code_link: "https://github.com/sairevanth00/NxtWatch-1",
  },
  {
    name: "Nxt Trendz",
    description:
      "Implemented an e-commerce App where users can log in and can see a list of products with search by product title, filters based on rating range and product type, etc",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shoping,
    source_code_link: "https://github.com/sairevanth00/ecommerceApp",
  }
];

export { services, technologies, experiences, testimonials, projects };
