import pizzaImage from "../src/assets/projects/pizza.jpg";
import specifyImage from "../src/assets/projects/specify.jpg";
import tourImage from "../src/assets/projects/tour.jpg";
import weatherioImage from "../src/assets/projects/weatherio.jpg";
import wizardImage from "../src/assets/projects/wizard.jpg";
import resumePdf from "../src/assets/files/Olman Gemechu Resume.pdf";

import { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { FaPaintBrush, FaPlug } from "react-icons/fa";
import {
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import { PiGithubLogo } from "react-icons/pi";
import { RiTelegram2Fill } from "react-icons/ri";
import {
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";

const technologies = [
  { name: "React", icon: <FaReact color="#61DBFB" className="text-[35px]" /> },
  {
    name: "Redux Toolkit",
    icon: <SiRedux color="#764ABC" className="text-[28px] md:text-[35px]" />,
  },
  {
    name: "Tailwind CSS",
    icon: (
      <SiTailwindcss color="#06B6D4" className="text-[28px] md:text-[35px]" />
    ),
  },
  {
    name: "React Router",
    icon: (
      <SiReactrouter color="#CA4245" className="text-[28px] md:text-[35px]" />
    ),
  },
  {
    name: "React Hook Form",
    icon: (
      <SiReacthookform color="#EC5990" className="text-[28px] md:text-[35px]" />
    ),
  },
  {
    name: "React Query",
    icon: (
      <SiReactquery color="#FF4154" className="text-[28px] md:text-[35px]" />
    ),
  },
  {
    name: "HTML5",
    icon: <FaHtml5 color="#E34F26" className="text-[28px] md:text-[35px]" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt color="#1572B6" className="text-[28px] md:text-[35px]" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#F7DF1E" className="text-[28px] md:text-[35px]" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub color="#ffffff" className="text-[28px] md:text-[35px]" />,
  },
];

const services = [
  {
    title: "Frontend Development",
    description:
      "I build responsive, high-performance websites using modern frameworks like React, Tailwind CSS, and Redux.",
    icon: <FaCode size={30} color="#4F46E5" />,
  },
  {
    title: "UI/UX Implementation",
    description:
      "I turn designs into fully functional interfaces, ensuring accessibility, responsiveness, and interactivity.",
    icon: <FaPaintBrush size={30} color="#EC4899" />,
  },
  {
    title: "API Integration",
    description:
      "I integrate RESTful APIs to add dynamic features like data fetching, user interactions, and syncing with backend services.",
    icon: <FaPlug size={30} color="#10B981" />,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((error) => alert(error));
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <>
      <header
        id="home"
        className="relative mx-auto min-h-dvh max-w-[1100px] px-9 py-1.5"
      >
        <div className="fixed top-0 left-0 -z-10 h-dvh w-full">
          <div className="relative z-10 h-full w-full bg-slate-950">
            <div className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-[linear-gradient(to_right,#4f4f4f3a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f35_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,#000_70%,transparent_100%)] bg-[size:14px_24px]"></div>
          </div>
        </div>

        <div className="fixed top-0 left-0 w-full bg-slate-950/85 py-4 text-lg text-gray-200 md:py-0">
          <nav className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between px-6">
            <div>
              <a className="text-3xl font-semibold text-sky-600" href="#">
                OG
              </a>
            </div>

            <button
              id="menu-button"
              onClick={toggleMenu}
              className="block md:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Menu isOpen={isOpen} />
          </nav>
        </div>

        <div className="mt-20 py-20">
          <div className="space-y-3 text-white">
            <h1 className="text-3xl font-bold sm:text-5xl">
              Hello I'm <span className="text-sky-600">Olman</span>
            </h1>
            <div className="text-xl font-semibold sm:text-3xl">
              <span className="text-sky-600"> | Frontend Developer</span>
            </div>

            <p className="max-w-[40rem] text-[1rem] text-slate-300 sm:text-[1.1rem]">
              I'm a 4th-year Software Engineering student at AASTU, passionate
              about web development. I love bringing ideas to life with clean,
              responsive, and user-friendly designs. Whether it's React,
              Tailwind CSS, or just coding something fun, I’m always up for a
              challenge and eager to learn new things!
            </p>
            <div className="flex flex-wrap items-center gap-[7%] py-8">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="flex cursor-pointer items-center gap-1.5 rounded-4xl bg-[linear-gradient(to_right,#2361ac,#8c2dbe)] px-4 py-1.5 text-white transition-all duration-300 hover:scale-105 hover:bg-[linear-gradient(to_right,#4083d5,#af66d9)] hover:shadow-lg hover:shadow-purple-300/30 sm:text-lg">
                  <span>Resume</span>
                  <HiDownload size="1.5rem" />
                </button>
              </a>

              <a
                href="https://t.me/feelit_78"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Visit Telegram profile (opens in new tab)"
                title="Telegram"
                className="inline-flex items-center transition-transform hover:scale-105 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              >
                <RiTelegram2Fill
                  className="rounded-full text-[1.6rem] text-sky-600 outline-2 outline-offset-3 outline-sky-700 transition-all duration-300 hover:scale-125 hover:bg-sky-600 hover:p-1 hover:text-white hover:outline-none sm:text-[2rem]"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/olman-gemechu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="group transition-all"
                title="LinkedIn Profile"
              >
                <TiSocialLinkedin className="rounded-full text-[1.6rem] text-sky-600 outline-2 outline-offset-3 outline-sky-700 transition-all duration-300 hover:scale-125 hover:bg-sky-600 hover:p-1 hover:text-white hover:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2 focus:outline-none sm:text-[2rem]" />
              </a>

              <a
                href="https://github.com/aposte7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my GitHub repositories"
                className="group transition-all"
                title="GitHub Profile"
              >
                <PiGithubLogo className="rounded-full text-[1.6rem] text-sky-600 outline-2 outline-offset-3 outline-sky-700 transition-all duration-300 hover:scale-125 hover:bg-sky-600 hover:p-1 hover:text-white hover:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2 focus:outline-none sm:text-[2rem]" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* PROJECT SECTION */}
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
                A responsive pizza-ordering app with real-time order tracking
                and cart functionality. Integrates REST APIs for smooth data
                flow.
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
                  <span className="h-fit text-[13px] font-semibold">
                    Source
                  </span>
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
                  <span className="h-fit text-[13px] font-semibold">
                    Website
                  </span>
                  <BsGlobe size="1rem" className="h-fit text-white" />
                </a>
                <a
                  className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                  href="https://github.com/aposte7/software-agency-landing"
                >
                  <span className="h-fit text-[13px] font-semibold">
                    Source
                  </span>
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
                A responsive web app for exploring and booking travel tours.
                Built collaboratively as part of a capstone project, with a
                focus on clean design, accessibility, and seamless user
                experience.
              </p>

              <div className="w-fit text-center text-slate-500">
                Tech Stack: React, Tailwind CSS, React Hooks, CSS Animations
              </div>
              <div className="flex items-center justify-between">
                <a
                  className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                  href="https://gdg-capstone-g1.netlify.app/"
                >
                  <span className="h-fit text-[13px] font-semibold">
                    Website
                  </span>
                  <BsGlobe size="1rem" className="h-fit text-white" />
                </a>
                <a
                  className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                  href="https://github.com/aposte7/gdg-capstone-g1"
                >
                  <span className="h-fit text-[13px] font-semibold">
                    Source
                  </span>
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
                A sleek and interactive landing page built with vanilla HTML,
                CSS, and JavaScript. Showcases a modern UI with smooth
                animations and responsive design principles to ensure a clean
                user experience across all devices.
              </p>

              <div className="w-fit text-center text-slate-500">
                Tech Stack: HTML, CSS, JavaScript
              </div>
              <div className="flex items-center justify-between">
                <a
                  className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                  href="https://aposte7.github.io/specify/"
                >
                  <span className="h-fit text-[13px] font-semibold">
                    Website
                  </span>
                  <BsGlobe size="1rem" className="h-fit text-white" />
                </a>
                <a
                  className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                  href="https://github.com/aposte7/specify"
                >
                  <span className="h-fit text-[13px] font-semibold">
                    Source
                  </span>
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
                  <span className="h-fit text-[13px] font-semibold">
                    Website
                  </span>
                  <BsGlobe size="1rem" className="h-fit text-white" />
                </a>
                <a
                  className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
                  href="https://github.com/aposte7/weatherio"
                >
                  <span className="h-fit text-[13px] font-semibold">
                    Source
                  </span>
                  <IoLogoGithub size="1.1rem" className="h-fit text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="my-20 text-center text-3xl font-bold text-white">
            💼 Services
          </h2>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-1 rounded-2xl bg-slate-800 p-6 text-center shadow-md transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skill" className="mx-auto max-w-[900px] py-20">
        <h2 className="py-20 text-center text-4xl font-semibold text-white">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-1 text-sm text-white">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div className="min-h-screen px-4 py-20 text-slate-800 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h2 className="my-20 text-center text-3xl font-bold text-white">
              Contact Me
            </h2>
            <p className="mb-10 text-center text-slate-500">
              Feel free to reach out for collaborations, project inquiries.
            </p>
            <div className="rounded-2xl bg-slate-800/70 p-8 shadow-lg">
              {submitted && (
                <p className="font-semibold text-green-500">
                  Thank you! Your message has been sent.
                </p>
              )}
              <form
                name="contact"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 p-2 text-slate-200 focus:border-sky-600 focus:ring-sky-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 p-2 text-slate-200 focus:border-sky-600 focus:ring-sky-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 p-2 text-slate-200 focus:border-sky-600 focus:ring-sky-600"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 bg-slate-900 py-10 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold text-white">Olman </h2>
              <p className="mt-1 text-sm">Frontend Developer & Designer</p>
            </div>

            <div className="flex space-x-6">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.8-1.4-3.8-1.4-.6-1.6-1.5-2-1.5-2-1.2-.9.1-.9.1-.9 1.3.1 2 1.3 2 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.4.1-2.8 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.4.2 2.5.1 2.8.8.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.45 20.45h-3.555v-5.555c0-1.328-.024-3.042-1.855-3.042-1.857 0-2.142 1.45-2.142 2.947v5.65H9.343V9h3.414v1.561h.049c.476-.9 1.636-1.855 3.366-1.855 3.6 0 4.266 2.37 4.266 5.45v6.294zM5.337 7.433c-1.14 0-2.062-.926-2.062-2.062 0-1.14.922-2.062 2.062-2.062 1.136 0 2.058.922 2.058 2.062 0 1.136-.922 2.062-2.058 2.062zm1.778 13.017H3.56V9h3.555v11.45zM22.225 0H1.771C.792 0 0 .792 0 1.771v20.453C0 23.208.792 24 1.771 24h20.453C23.208 24 24 23.208 24 22.225V1.771C24 .792 23.208 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

const Menu = ({ isOpen }) => {
  return (
    <div
      id="menu"
      className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:items-center`}
    >
      <ul className="gap-3 bg-black/20 px-10 pt-4 text-base text-gray-200 md:flex md:justify-between md:pt-0">
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#project"
          >
            Project
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#service"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#skill"
          >
            Skill
          </a>
        </li>
        <li>
          <a
            className="block py-2 hover:text-sky-400 active:text-sky-400 md:p-4"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
