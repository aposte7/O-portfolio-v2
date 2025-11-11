const Footer = () => {
  return (
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
              href="https://aedin.com/in/yourusername"
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
  );
};

export default Footer;
