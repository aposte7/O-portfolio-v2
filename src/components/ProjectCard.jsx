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
    <div className="h-fit rounded-xl border border-sky-800">
      <div className="w-full">
        <img
          className="h-full w-full rounded-t-xl object-cover object-left"
          src={image}
          alt=""
        />
      </div>

      <div className="space-y-4 rounded-b-xl bg-slate-900 px-3 py-6 text-[15px]">
        <p className="text-slate-300">{description}</p>

        <div className="w-fit text-center text-slate-500">{tech}</div>

        <div className="flex items-center justify-between">
          {liveLink && (
            <a
              className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="h-fit text-[13px] font-semibold">
                {liveLabel}
              </span>
              <BsGlobe size="1rem" className="h-fit text-white" />
            </a>
          )}

          {sourceLink && (
            <a
              className="flex h-fit items-center gap-2 rounded-sm bg-sky-900 px-2.5 py-1 text-white"
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="h-fit text-[13px] font-semibold">
                {sourceLabel}
              </span>
              <IoLogoGithub size="1.1rem" className="h-fit text-white" />
            </a>
          )}
        </div>
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
