import SectionTitle from "../components/section-title";
import { siteConfig } from "../data/siteConfig";
import {
  PaletteIcon,
  Code2Icon,
  ShieldCheckIcon,
  ArrowUpRightIcon,
  SparklesIcon,
  LaptopIcon,
} from "lucide-react";

export default function AboutSection() {
  const corePillars = [
    {
      icon: PaletteIcon,
      title: "Thoughtful Design",
      description:
        "Every interface is intentionally structured for clarity, accessibility, and strong visual brand identity.",
    },
    {
      icon: Code2Icon,
      title: "Modern Technology",
      description:
        "Engineered with clean, fast, and scalable technologies including React, Tailwind CSS, and Vite.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Reliable Development",
      description:
        "Clear project scopes, fast turnaround, direct developer communication, and dependable post-launch support.",
    },
  ];

  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="About ZONECRAFT"
        description="A digital development startup focused on creating modern, responsive, and professional web solutions."
      />

      <div className="mt-8 max-w-6xl w-full">
        {/* Main Positioning & Overview Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          {/* Company Positioning Card */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <SparklesIcon className="size-4" />
                <span>Our Positioning & Goal</span>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
                Building Websites That Elevate Your Brand
              </h3>

              <div className="mt-5 space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900 font-semibold">ZONECRAFT</strong> is a digital development startup focused on creating modern, responsive and professional websites for businesses, startups, creators and individuals.
                </p>
                <p>
                  Our goal is to help clients build a strong online presence through thoughtful design, modern technology and reliable development.
                </p>
              </div>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              {corePillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="size-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-2.5">
                      <IconComponent className="size-4.5" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Founder & Direct Collaboration Spotlight */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gray-950 p-6 sm:p-8 text-white shadow-md">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-amber-400">
                  <LaptopIcon className="size-3.5" />
                  Direct Developer Access
                </span>
                <span className="text-xs text-gray-400">Remote-First</span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="/assets/logo.jpeg"
                  alt="ZONECRAFT Logo / Founder"
                  className="size-14 sm:size-16 rounded-full object-cover border-2 border-white/20 shadow-md"
                  width={64}
                  height={64}
                />
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {siteConfig.founder.name}
                  </h4>
                  <p className="text-xs font-medium text-orange-400">
                    {siteConfig.founder.role}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                {siteConfig.founder.bio}
              </p>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Team
                </p>
                {siteConfig.team.map((member) => (
                  <div key={member.name} className="mt-2 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-white">{member.name}</span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-orange-400">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-white/5 p-4 border border-white/10">
                <h5 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
                  Our Work Ethic
                </h5>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">
                  Direct collaboration with the builder. No agency bureaucracy, no unnecessary delays, and straightforward communication at every phase.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-xs text-gray-400">Founder Portfolio</span>
              <a
                href={siteConfig.founder.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs font-semibold text-white transition hover:text-orange-400"
              >
                <span>yeshthakur.me</span>
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
