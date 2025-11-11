import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import { SiSpeedtest, SiFigma } from "react-icons/si";

const services = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Custom, responsive websites built with React, Next.js, and modern tooling.",
    icon: <FaLaptopCode className="text-5xl text-sky-500" />,
    cta: { label: "See Projects", href: "#projects" },
  },
  {
    id: "mobile-dev",
    title: "Mobile-First Design",
    description:
      "Pixel-perfect, fast-loading UIs that work flawlessly on phones and tablets.",
    icon: <FaMobileAlt className="text-5xl text-purple-500" />,
    cta: { label: "View Demos", href: "#projects" },
  },

  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Lightning-fast load times, Core Web Vitals, and SEO-ready code.",
    icon: <SiSpeedtest className="text-5xl text-green-500" />,
    cta: { label: "Audit My Site", href: "mailto:your@email.com" },
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description: "Deploy to Vercel, Netlify, Docker and monitoring.",
    icon: <FaRocket className="text-5xl text-orange-500" />,
    cta: { label: "Launch Now", href: "#contact" },
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="animate-fadeIn mb-16 text-center text-3xl font-bold text-white sm:text-4xl">
          Services I Offer
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`animate-slideUp group relative overflow-hidden rounded-2xl bg-slate-800 p-6 text-center transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-900 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="animate-iconFadeIn mb-5 flex justify-center opacity-0">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-sky-400">
                  {service.title}
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes iconFadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-iconFadeIn {
          animation: iconFadeIn 0.5s ease-out 0.3s forwards;
        }
      `}</style>
    </section>
  );
}
