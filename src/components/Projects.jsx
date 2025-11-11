import pizzaImage from "../assets/projects/pizza.jpg";
import specifyImage from "../assets/projects/specify.jpg";
import tourImage from "../assets/projects/tour.jpg";
import weatherioImage from "../assets/projects/weatherio.jpg";
import wizardImage from "../assets/projects/wizard.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "pizza",
      image: pizzaImage,
      description:
        "A responsive pizza-ordering app with real-time order tracking and cart functionality. Integrates REST APIs for smooth data flow.",
      tech: "Tech Stack: React, Redux Toolkit, React Router, Tailwind CSS",
      liveLink: "https://fastpizza-mu.vercel.app/",
      liveLabel: "Live Demo",
      sourceLink: "https://github.com/aposte7/PizzaExpress",
    },
    {
      id: "wizard",
      image: wizardImage,
      description:
        "A visually engaging landing page for a software development agency, crafted with responsive design principles using Tailwind CSS.",
      tech: "Tech Stack: React, Tailwind CSS, React Hooks, CSS Animations",
      liveLink: "https://web-wizards-xi.vercel.app/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/software-agency-landing",
    },
    {
      id: "tour",
      image: tourImage,
      description:
        "A responsive web app for exploring and booking travel tours. Built collaboratively as part of a capstone project, with a focus on clean design, accessibility, and seamless user experience.",
      tech: "Tech Stack: React, Tailwind CSS, React Hooks, CSS Animations",
      liveLink: "https://gdg-capstone-g1.netlify.app/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/gdg-capstone-g1",
    },
    {
      id: "specify",
      image: specifyImage,
      description:
        "A sleek and interactive landing page built with vanilla HTML, CSS, and JavaScript. Showcases a modern UI with smooth animations and responsive design principles to ensure a clean user experience across all devices.",
      tech: "Tech Stack: HTML, CSS, JavaScript",
      liveLink: "https://aposte7.github.io/specify/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/specify",
    },
    {
      id: "weatherio",
      image: weatherioImage,
      description:
        "Built a responsive weather web app with live data, featuring search functionality and automatic location detection.",
      tech: "Tech Stack: HTML, CSS, JavaScript",
      liveLink: "https://aposte7.github.io/weatherio/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/weatherio",
    },
  ];

  return (
    <section id="project" className="px-5 py-20 md:px-10 lg:px-28">
      <h2 className="my-20 text-center text-3xl font-bold text-white">
        My Projects
      </h2>

      <div className="grid grid-flow-row auto-rows-auto grid-cols-[repeat(auto-fit,minmax(18rem,_23rem))] justify-evenly gap-10 py-10">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
