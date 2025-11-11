const Skills = ({ technologies }) => {
  return (
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
  );
};

export default Skills;
