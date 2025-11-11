// Skills.tsx  (or paste inside your page/component)
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGit,
  SiFigma,
  SiVercel,
  SiJavascript,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    iconColor: "text-sky-500",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Next.js 14+", Icon: SiNextdotjs },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Framer Motion", Icon: SiReact },
    ],
  },
  {
    title: "Backend",
    iconColor: "text-purple-500",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma ORM", Icon: SiPrisma },
    ],
  },
  {
    title: "Design & Soft",
    iconColor: "text-pink-500",
    skills: [
      { name: "UI/UX Principles", Icon: SiFigma },
      { name: "Responsive Design", Icon: SiReact },
      { name: "Agile / Scrum", Icon: SiGit },
      { name: "Problem Solving", Icon: SiJavascript },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-900/50 py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-9">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Tech Stack & Skills
        </h2>

        <div className="mx-auto grid max-w-lg gap-8 md:w-full md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl bg-slate-800/60 p-6 transition-all duration-300 hover:bg-slate-800/90 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <h3
                className={`mb-5 flex items-center gap-2 text-xl font-semibold ${group.iconColor}`}
              >
                <span className="inline-block h-2 w-2 rounded-full bg-current"></span>
                {group.title}
              </h3>

              <ul className="space-y-3">
                {group.skills.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-slate-300 transition-all group-hover:text-white"
                  >
                    <Icon className="h-5 w-5 flex-shrink-0 text-sky-400" />
                    <span className="text-sm sm:text-base">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-4">
          {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <span className="w-28 text-sm text-slate-400">{skill}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-500 to-purple-600 transition-all duration-1000"
                  style={{
                    width:
                      skill === "React"
                        ? "85%"
                        : skill === "TypeScript"
                          ? "70%"
                          : skill === "Node.js"
                            ? "80%"
                            : "85%",
                  }}
                />
              </div>
              <span className="w-12 text-right text-xs text-slate-500">
                {skill === "React"
                  ? "85%"
                  : skill === "TypeScript"
                    ? "70%"
                    : skill === "Node.js"
                      ? "80%"
                      : "85%"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
