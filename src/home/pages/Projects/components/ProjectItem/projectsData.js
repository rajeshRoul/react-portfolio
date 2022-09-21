import ProjectCalculator from "../../../../../assets/images/ProjectCalculator.jpg";
import ProjectTodo from "../../../../../assets/images/ProjectTodo.jpg";
import ProjectCodeial from "../../../../../assets/images/ProjectCodeial.png";
import ProjectMusicPlayer from "../../../../../assets/images/ProjectMusicPlayer.jpg";
import ProjectReactApp from "../../../../../assets/images/ProjectReactApp.png";
import ProjectNextJsApp from "../../../../../assets/images/ProjectNextJsApp.png";
import ProjectConfidential from "../../../../../assets/images/ProjectConfidential.png";

export const personalProjects = [
  {
    title: "AIO Calculator",
    image: ProjectCalculator,
    techUsed: "Android, XML, Retrofit",
    description: [
      "An Android Application having 12+ different calculators and convertors.",
      "dskjhfnkjsdhfbjk"
    ],
    github: "https://github.com/rajeshRoul/AIO-Calculator",
    liveProject: "https://github.com/rajeshRoul/AIO-Calculator/releases/tag/v4"
  },
  {
    title: "Todo App",
    image: ProjectTodo,
    techUsed: "EJS, Javascript, Node.js, Express.js, Mongoose ODM",
    description: [
      "An Android Application having 12+ different calculators and convertors.",
      "dskjhfnkjsdhfbjk"
    ],
    github: "https://github.com/rajeshRoul/Todo-App",
    liveProject: ""
  },
  {
    title: "Codeial - Social Media App",
    image: ProjectCodeial,
    techUsed:
      "EJS, Javascript, Node.js, Express.js, Mongoose ODM, Redis, Passport Auth, Web Socket, Gulp",
    description: [
      "A Full Stack Web Application having Social Media Features like: Authentication, Posting, Commenting, Liking, Messaging and Editing Profile etc."
    ],
    github: "https://github.com/rajeshRoul/codeial",
    liveProject: ""
  }
];

export const learningProjects = [
  {
    title: "React App",
    image: ProjectReactApp,
    techUsed:
      "HTML, CSS, Javascript, Typescript, ReactJs, Redux, Firebase, Jest, React Testing Library, Google and Facebook Authentication, Axios",
    description: [
      "A Web Application created to learn :",
      "Typescript",
      "Social Media Authentication using Firebase",
      "Api Calling and State Management using Axios and Redux",
      "Writing Test Cases using Jest and React Testing Library",
      "Code Optimization Using techniques like: Code Splitting, Lazy Loading, Reusable Components",
      "ESLint and Prettier for Code Formatting and debugging"
    ],
    github: "https://github.com/rajeshRoul/react-app"
  },
  {
    title: "Music Player UI",
    image: ProjectMusicPlayer,
    techUsed: "HTML and CSS",
    description: ["A web page created to learn css styling and animations"],
    github: "https://github.com/rajeshRoul/Music-Player-UI"
  },
  {
    title: "NextJs App",
    image: ProjectNextJsApp,
    techUsed: "HTML, CSS, Javascript, NextJs, Typescript",
    description: [
      "A Web Application created to learn NextJs, Typescript, Static Generation, Server Side Rendering and NextJs Routing etc."
    ],
    github: "https://github.com/rajeshRoul/learn-nextjs"
  }
];

export const companyProjects = [
  {
    title: "CooperHawk - Restaurant Conversion App",
    image: ProjectConfidential,
    techUsed:
      "HTML, CSS, Bootstrap, Javascript, ReactJs, Redux Saga, Axios, Material UI, Formik Library",
    description: [
      "A Web Application having 7 different Admin Panels for different departments of the restaurant",
      "Developed various Dynamic forms using Formik Library",
      "Used Redux Saga for API Calls and Global State Management"
    ]
  },
  {
    title: "Simplee - Real Estate Investment App",
    image: ProjectConfidential,
    techUsed:
      "HTML, CSS, Javascript, ReactJs, NextJS, Redux, Material UI, Formik Library",
    description: [
      "A Web Application having two Portals: Admin and Client",
      "Created Pixel Perfect UI Using Figma Designs",
      "Developed various Dynamic forms with Add More functionality using Formik Library",
      "Added Validations in Dynamic forms using Yup Library",
      "Hosted Client Demos Multiple times",
      "Handled Permission Checks on login for users with limited privileges"
    ]
  },
  {
    title: "Nickelfox Hiring Portal",
    image: ProjectConfidential,
    techUsed:
      "HTML, CSS, Javascript, ReactJs, Axios, Material UI, Formik Library",
    description: [
      "A Web Application having two Portals: Admin and Candidate",
      "Created Live Exam, where a candidate can attempt a timed exam using the link received in the email",
      "Handled cases to disqualify candidates like: Tab Resize, Tab Change, Page Reload, Attempt on multiple devices etc.",
      "Created Admin panel for HRs/Examiners to manage exams, questions, departments, Sub-Admins and Vacancies.",
      "Candidate can be hired/rejected from the admin panel",
      "Created Email Template having compatibility with Gmail and Outlook"
    ]
  }
];
