import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

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
    <div className="bg-slate-950/85">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Projects />
      <Services />
      <Skills />
      <Contact submitted={submitted} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}

export default App;
