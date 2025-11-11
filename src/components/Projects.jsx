import pizzaImage from "../assets/projects/pizza.jpg";
import specifyImage from "../assets/projects/specify.jpg";
import tourImage from "../assets/projects/tour.jpg";
import weatherioImage from "../assets/projects/weatherio.jpg";
import wizardImage from "../assets/projects/wizard.jpg";
import { BsGlobe } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

const Projects = () => {
  return (
    <section id="project" className="px-5 py-20 md:px-10 lg:px-28">
      <h2 className="my-20 text-center text-3xl font-bold text-white">
        My Projects
      </h2>

      <div className="grid grid-flow-row auto-rows-auto grid-cols-[repeat(auto-fit,minmax(18rem,_23rem))] justify-evenly gap-10 py-10">
        <div className="h-fit rounded-xl border border-sky-800">
          <div className="w-full">
            <img
              className="h-full w-full rounded-t-xl object-cover object-left"
              src={pizzaImage}
              alt=""
            />
          </div>

          <div className="space-y-4 rounded-b-xl bg-slate-900 px-3 py-6 text-[15px]">
            <p className="text-slate-300">
              A responsive pizza-ordering app with real-time order tracking and
              cart functionality. Integrates REST APIs for smooth data flow.
            </p>

            <div className="w-fit text-center text-slate-500">
              Tech Stack: React, Redux Toolkit, React Router, Tailwind CSS
            </div>
            <div className="flex items-center justify-between">
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://fastpizza-mu.vercel.app/"
              >
                <span className="h-fit text-[13px] font-semibold">
                  Live Demo
                </span>
                <BsGlobe size="1rem" className="h-fit text-white" />
              </a>
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://github.com/aposte7/PizzaExpress"
              >
                <span className="h-fit text-[13px] font-semibold">Source</span>
                <IoLogoGithub size="1.1rem" className="h-fit text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-xl border border-sky-800">
          <div className="w-full">
            <img
              className="h-full w-full rounded-t-xl object-cover object-left"
              src={wizardImage}
              alt=""
            />
          </div>

          <div className="space-y-4 rounded-b-xl bg-slate-900 px-3 py-6 text-[15px]">
            <p className="text-slate-300">
              A visually engaging landing page for a software development
              agency, crafted with responsive design principles using Tailwind
              CSS.
            </p>

            <div className="w-fit text-center text-slate-500">
              Tech Stack: React, Tailwind CSS, React Hooks, CSS Animations
            </div>
            <div className="flex items-center justify-between">
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://web-wizards-xi.vercel.app/"
              >
                <span className="h-fit text-[13px] font-semibold">Website</span>
                <BsGlobe size="1rem" className="h-fit text-white" />
              </a>
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://github.com/aposte7/software-agency-landing"
              >
                <span className="h-fit text-[13px] font-semibold">Source</span>
                <IoLogoGithub size="1.1rem" className="h-fit text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-xl border border-sky-800">
          <div className="w-full">
            <img
              className="h-full w-full rounded-t-xl object-cover object-left"
              src={tourImage}
              alt=""
            />
          </div>

          <div className="space-y-4 rounded-b-xl bg-slate-900 px-3 py-6 text-[15px]">
            <p className="text-slate-300">
              A responsive web app for exploring and booking travel tours. Built
              collaboratively as part of a capstone project, with a focus on
              clean design, accessibility, and seamless user experience.
            </p>

            <div className="w-fit text-center text-slate-500">
              Tech Stack: React, Tailwind CSS, React Hooks, CSS Animations
            </div>
            <div className="flex items-center justify-between">
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://gdg-capstone-g1.netlify.app/"
              >
                <span className="h-fit text-[13px] font-semibold">Website</span>
                <BsGlobe size="1rem" className="h-fit text-white" />
              </a>
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://github.com/aposte7/gdg-capstone-g1"
              >
                <span className="h-fit text-[13px] font-semibold">Source</span>
                <IoLogoGithub size="1.1rem" className="h-fit text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-xl border border-sky-800">
          <div className="w-full">
            <img
              className="h-full w-full rounded-t-xl object-cover object-left"
              src={specifyImage}
              alt=""
            />
          </div>

          <div className="space-y-4 rounded-b-xl bg-slate-900 px-3 py-6 text-[15px]">
            <p className="text-slate-300">
              A sleek and interactive landing page built with vanilla HTML, CSS,
              and JavaScript. Showcases a modern UI with smooth animations and
              responsive design principles to ensure a clean user experience
              across all devices.
            </p>

            <div className="w-fit text-center text-slate-500">
              Tech Stack: HTML, CSS, JavaScript
            </div>
            <div className="flex items-center justify-between">
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://aposte7.github.io/specify/"
              >
                <span className="h-fit text-[13px] font-semibold">Website</span>
                <BsGlobe size="1rem" className="h-fit text-white" />
              </a>
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://github.com/aposte7/specify"
              >
                <span className="h-fit text-[13px] font-semibold">Source</span>
                <IoLogoGithub size="1.1rem" className="h-fit text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="h-fit rounded-xl border border-sky-800">
          <div className="w-full">
            <img
              className="h-full w-full rounded-t-xl object-cover object-left"
              src={weatherioImage}
              alt=""
            />
          </div>

          <div className="space-y-4 rounded-b-xl bg-slate-900 px-3 py-6 text-[15px]">
            <p className="text-slate-300">
              Built a responsive weather web app with live data, featuring
              search functionality and automatic location detection.
            </p>

            <div className="w-fit text-center text-slate-500">
              Tech Stack: HTML, CSS, JavaScript
            </div>
            <div className="flex items-center justify-between">
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://aposte7.github.io/weatherio/"
              >
                <span className="h-fit text-[13px] font-semibold">Website</span>
                <BsGlobe size="1rem" className="h-fit text-white" />
              </a>
              <a
                className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                href="https://github.com/aposte7/weatherio"
              >
                <span className="h-fit text-[13px] font-semibold">Source</span>
                <IoLogoGithub size="1.1rem" className="h-fit text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
