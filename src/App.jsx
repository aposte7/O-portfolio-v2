import pizzaImage from "../src/assets/projects/pizza.jpg";
import specifyImage from "../src/assets/projects/specify.jpg";
import tourImage from "../src/assets/projects/tour.jpg";
import weatherioImage from "../src/assets/projects/weatherio.jpg";
import wizardImage from "../src/assets/projects/wizard.jpg";
// Use external CV link instead of bundling the PDF file
const resumePdf =
  "https://drive.google.com/file/d/1VToNGTDMfBHPc5os_BiFfhwGLJ98t0_z/view?usp=sharing";

import { useState } from "react";
import { FaPaintBrush, FaPlug } from "react-icons/fa";
import {
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Header resumePdf={resumePdf} isOpen={isOpen} toggleMenu={toggleMenu} />

      <Projects />

      <Services services={services} />

      <Skills technologies={technologies} />

      <Contact submitted={submitted} handleSubmit={handleSubmit} />

      <Footer />
    </>
  );
}

export default App;
