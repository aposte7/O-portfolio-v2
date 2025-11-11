import PropTypes from "prop-types";
import { BsGlobe } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";

const ProjectCard = ({
  image,
  description,
  tech,
  liveLink,
  liveLabel,
  sourceLink,
  sourceLabel,
}) => {
  return (
    <div className="group relative h-fit cursor-pointer overflow-hidden rounded-2xl border border-sky-800/30 bg-gradient-to-br from-slate-900/80 via-slate-900 to-slate-950/90 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-sky-600/60 hover:shadow-2xl hover:shadow-sky-900/30">
      <div className="relative h-52 overflow-hidden">
        <img
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt="Project preview"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="space-y-5 p-5 text-sm">
        <p className="line-clamp-3 text-slate-300">{description}</p>

        {tech && (
          <div className="flex flex-wrap gap-1.5">
            {tech
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean)
              .map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-sky-900/40 px-2.5 py-1 text-[11px] font-medium tracking-wider text-sky-300 uppercase backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-700 to-sky-800 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:from-sky-600 hover:to-sky-700 hover:shadow-lg hover:shadow-sky-700/30"
            >
              <BsGlobe size={14} />
              {liveLabel}
            </a>
          )}

          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:from-gray-700 hover:to-gray-800 hover:shadow-lg hover:shadow-gray-700/30"
            >
              <IoLogoGithub size={15} />
              {sourceLabel}
            </a>
          )}
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-cyan-600 opacity-30 blur-xl"></div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string,
  liveLink: PropTypes.string,
  liveLabel: PropTypes.string,
  sourceLink: PropTypes.string,
  sourceLabel: PropTypes.string,
};

ProjectCard.defaultProps = {
  tech: "",
  liveLabel: "Live Demo",
  sourceLabel: "Source",
};

export default ProjectCard;
