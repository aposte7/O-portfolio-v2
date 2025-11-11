import pizzaImage from "../assets/projects/pizza.jpg";
import shopkooImage from "../assets/projects/shop-koo.png";
import greenPillImage from "../assets/projects/green-pill.png";
import blogImage from "../assets/projects/blog-lib.png";
import specifyImage from "../assets/projects/specify.jpg";
import weatherioImage from "../assets/projects/weatherio.jpg";
import wizardImage from "../assets/projects/wizard.jpg";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: "shop-koo",
      image: shopkooImage,
      description:
        "A compact Next.js + Typescript e-commerce showcasing product listing, product detail + reviews, client-side favorites, search and category filters, and a small admin area with login for product management.",
      tech: "Next.js, React, TypeScript, RTK, shadcn UI, Tailwind CSS, RHF",
      liveLink: "https://shop-koo.vercel.app/",
      liveLabel: "Live Demo",
      sourceLink: "https://github.com/aposte7/shop",
    },
    {
      id: "green-pill",
      image: greenPillImage,
      description:
        "Green Pill is a responsive training website and admin dashboard for managing programs, blog posts, galleries and users. It includes a public marketing site (home, programs, gallery, blog) and a protected admin area for content management.",
      tech: "Next.js, Tailwind CSS, Supabase, TanStack Query",
      liveLink: "https://green-wpc3.vercel.app/",
      liveLabel: "Live Demo",
      sourceLink: "https://github.com/aposte7/green-pill",
    },
    {
      id: "blog-system-ui",
      image: blogImage,
      description:
        "blog-system-ui is a shadcn-style, copyable blog library. It provides a public site and a protected admin area with full content management. The package ships UI components, React hooks, Supabase data services, the source are full customizable.",
      tech: "Next.js , React, Tailwind CSS, Supabase, TanStack Query, RHF",
      liveLink: "https://www.npmjs.com/package/blog-system-ui",
      liveLabel: "Npm Package",
      sourceLink: "https://github.com/aposte7/blog-system/tree/library",
    },
    {
      id: "pizza",
      image: pizzaImage,
      description:
        "A responsive pizza-ordering app with real-time order tracking and cart functionality. Integrates REST APIs for smooth data flow.",
      tech: "React, RTK, React Router, Tailwind CSS",
      liveLink: "https://fastpizza-mu.vercel.app/",
      liveLabel: "Live Demo",
      sourceLink: "https://github.com/aposte7/PizzaExpress",
    },
    {
      id: "wizard",
      image: wizardImage,
      description:
        "A visually engaging landing page for a software development agency, crafted with responsive design principles using Tailwind CSS.",
      tech: "React, Tailwind CSS, React Hooks, CSS Animations",
      liveLink: "https://web-wizards-xi.vercel.app/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/software-agency-landing",
    },
    {
      id: "specify",
      image: specifyImage,
      description:
        "A sleek and interactive landing page built with vanilla HTML, CSS, and JavaScript. Showcases a modern UI with smooth animations and responsive design principles to ensure a clean user experience across all devices.",
      tech: "HTML, CSS, JavaScript",
      liveLink: "https://aposte7.github.io/specify/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/specify",
    },
    {
      id: "weatherio",
      image: weatherioImage,
      description:
        "Built a responsive weather web app with live data, featuring search functionality and automatic location detection.",
      tech: "HTML, CSS, JavaScript",
      liveLink: "https://aposte7.github.io/weatherio/",
      liveLabel: "Website",
      sourceLink: "https://github.com/aposte7/weatherio",
    },
  ];

  return (
    <section id="projects" className="px-5 py-24 md:px-10 lg:px-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-4xl">
          My Projects
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
