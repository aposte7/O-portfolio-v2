import Menu from "./Menu";
import { HiDownload } from "react-icons/hi";
import { RiTelegram2Fill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiGithubLogo } from "react-icons/pi";

const Header = ({ resumePdf, isOpen, toggleMenu }) => {
  return (
    <header
      id="home"
      className="relative mx-auto min-h-dvh max-w-[1100px] px-9 py-1.5"
    >
      <div className="fixed top-0 left-0 -z-10 h-dvh w-full">
        <div className="relative z-10 h-full w-full bg-slate-950">
          <div className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-[linear-gradient(to_right,#4f4f4f3a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f35_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,#000_70%,transparent_100%)] bg-[size:14px_24px]"></div>
        </div>
      </div>

      <div className="fixed top-0 left-0 z-10 w-full bg-slate-950/85 py-4 text-lg text-gray-200 md:py-0">
        <nav className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between px-6">
          <div>
            <a href="/" className="text-3xl font-semibold text-sky-600">
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
          <h1 className="text-2xl font-bold sm:text-5xl">
            Hello, <span className="text-sky-600">Olman</span> here
          </h1>
          <div className="text-xl font-semibold sm:text-3xl">
            <span className="text-sky-600">Fullstack Developer</span>
          </div>

          <p className="max-w-[40rem] text-[1rem] text-slate-300 sm:text-[1.1rem]">
            I&apos;m a 4th-year Software Engineering student at AASTU,
            passionate about web development. I love bringing ideas to life with
            clean, responsive, and user friendly designs , or just coding
            something fun.
          </p>
          <div className="flex flex-wrap items-center gap-[7%] py-8">
            <a href={resumePdf} target="_blank" rel="noopener noreferrer">
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
  );
};

export default Header;
