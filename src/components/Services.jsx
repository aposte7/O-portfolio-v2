const Services = ({ services }) => {
  return (
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
  );
};

export default Services;
