const experiencesData = [
  {
    image: "orgs/cruise.png",
    title: "Team Leader and Full-stack Developer",
    company: "Cruise LLC (Autonomous Vehicles Company)",
    duration: "2022 - 2023",
    labels: [
      "Full-Stack",
      "React.js",
      "Node.js",
      "Typescript",
      "GraphQL",
      "Gatsby",
      "SCSS",
      "CI/CD",
      "Unit Testing",
      "Contentful (CMS)",
    ],
    descriptions: [
      "Developed the company static website using Gatsby, React, TypeScript and GraphQL. Demonstrated expertise in the use of GraphQL to communicate with the back end.",
      "Created and maintained development, staging, and production workflow for code, data and content. Provided technical direction for the development, design and systems integration.",
      "Worked as a React developer lead to design, implement and deploy reliable software, which meets customer requirements, scales easily and supports deployment in highly available environments.",
      "Created a GraphQL query to get data from Contentful CMS and rendered those data into a React website. Collaborated on the storybook and built stories for different independent components.",
      "Implemented the accessibility linting rules alone, which forces each developer to add the accessibility principles to each UI element for React website.",
      "Engaged in product revamping and refactoring to follow modern MVVM architecture. Designed and shipped pixel-perfect designs with responsive and attractive UIs for different screens and browsers.",
      "Designed, built and shipped complex solutions on projects for clients meeting functional, non-functional and compliance requirements.",
      "Produced clean and efficient code. Integrated components and third-party solutions and executed improvements.",
      "Managed project timelines, implemented design specifications, worked on flow diagrams and documentation, and provided ongoing support.",
    ],
  },
  {
    image: "orgs/iQ-logo.svg",
    title: "Senior Software Architect",
    company: "iQualify",
    duration: "2020 - 2021",
    labels: [
      "Frontend",
      "Angular",
      "Typescript",
      "MongoDB",
      "Node.js",
      "Automated Testing",
      "PubNub",
    ],
    descriptions: [
      "Set up a new project from scratch using PubNub and the JavaScript SDK.",
      "Implemented various in-app chats, including secure one-to-one, group, or live events.",
      "Created a secure API to enable communication with PubNub via the JavaScript SDK.",
      "Established a Node.js environment to connect the client using the Angular platform to access the PubNub API.",
      "Defined routes for APIs and made them public or private. Comfortable with Passport, JWT, Async and other important modules.",
      "Configured the database using MongoDB or MySQL. Defined models and registered schemas for the database. Efficient use of Async, await and ES6 standards.",
      "Wrote E2E and unit testing functionalities with web driver IO testes. Defined Angular components, filters, directives and routes.",
    ],
  },
  {
    image: "orgs/snowden_optiro.svg",
    title: "Freelance Senior Developer",
    company: "Snowden Mining Industry",
    duration: "2018 - 2020",
    labels: [
      "Angular",
      "React.js",
      "CSS",
      "Creative Programming",
      "Three.js",
      "Responsive UI",
      "Firebase",
    ],
    descriptions: [
      "Installed the foundation and architecture of the client's new front-end in Angular and React.",
      "Set up continuous integration for the deployment of code to production.",
      "Optimized the front-end performance for Angular and React.",
      "Developed a different Angular module in our application to be reused in other Angular applications.",
      "Created reusable UI components for Angular and React.",
      "Introduced an observable state and container and template patterns to reduce inappropriate and costly application re-renders while improving performance.",
      "Refactored and migrated a coupled front-end codebase using Angular into a reusable and tested Angular app, improving scalability and code longevity.",
    ],
  },
  {
    image: "orgs/Famaex.webp",
    title: "Freelance Angular Developer",
    company: "Famaex",
    duration: "2018 - 2018",
    labels: [
      "Angular",
      "React.js",
      "TypeScript",
      "SCSS",
      "Node.js",
      "Angular.js",
      "HTML Canvas",
    ],
    descriptions: [
      "Developed technical documentation to define the system components, development environment and implementation planning/strategies.",
      "Assisted in the design and implementation process for new features, informing senior executives of alternatives.",
      "Used extensive knowledge of Angular, TypeScript, HTML5, SCSS and JavaScript methods for providing performant visual effects.",
      "Optimized the front end and implemented performance techniques.",
      "Made design recommendations towards developing new code or the reuse of existing code.",
      "Communicated with clients and worked as an interface between team members and client counterparts.",
      "Structured single-page applications to make them easy to maintain and ensure they are highly modularized.",
      "Cooperated with the back-end developer in the process of building the RESTful API.",
    ],
  },
  {
    image: "orgs/BlueSurge.png",
    title: "Front-end Developer",
    company: "BlueSurge",
    duration: "2017 - 2018",
    labels: [
      "Angular",
      "Javascript",
      "TypeScript",
      "SCSS",
      "LESS",
      "Single-page Applications",
      "Angular.js",
    ],
    descriptions: [
      "Implemented deep-level routing by using Angular 6.",
      "Created a real-time application using Socket.IO with Angular.",
      "Developed self-contained, reusable, and testable modules and components.",
      "Ensured a clear dependency chain regarding the app logic and the file system.",
      "Implemented an API call, caching layer, and other web services used in the system.",
      "Validated client-side user actions using a Reactive form.",
      "Wrote non-blocking code and resorted to advanced techniques such as multithreading when needed.",
      "Created custom, general use modules and components that extended the elements and module.",
    ],
  },
];

function ExperienceItem({
  experience,
}: {
  experience: (typeof experiencesData)[number];
}) {
  const { image, title, company, duration, labels, descriptions } = experience;

  return (
    <div className="relative whitespace-pre-wrap sm:flex gap-4 items-start">
      <div className="hidden sm:block w-px h-full absolute top-0 left-10 bg-white shadow" />

      <div className="relative inline-block rounded-full overflow-hidden p-4 bg-white flex-shrink-0">
        <img
          className="block w-12 h-12 object-contain"
          src={image}
          alt={company}
        />
      </div>

      <div className="relative inline-grid gap-6">
        <div className="text-gray-200">
          <h2>{title}</h2>
          <h3 className="font-semibold sm:text-xl text-gray-100">{company}</h3>
          <p className="text-sm text-white-400">{duration}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 flex-1 flex-shrink-0">
          {labels.map((label) => (
            <h4
              className="bg-white md:bg-opacity-80 py-px sm:py-1 px-2 sm:px-4 rounded text-xs sm:text-sm"
              key={label}
            >
              {label}
            </h4>
          ))}
        </div>

        <ul>
          {descriptions.map((text) => (
            <li
              key={text}
              className="text-gray-300 font-light text-sm sm:text-base max-w-2xl mb-3 sm:list-disc"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experiences() {
  return (
    <div id="Experiences" className="bg-accent">
      <div className="container py-24 sm:py-32">
        <h2 className="text-white mb-20">
          <small className="uppercase">The amazing </small>
          <span className="FontFancy text-3xl sm:text-5xl font-bold block">
            Experiences
          </span>
          <small className="uppercase"> I have had</small>
        </h2>

        <div className="grid gap-20">
          {experiencesData.map((experience) => (
            <ExperienceItem
              key={experience.title + experience.company}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
