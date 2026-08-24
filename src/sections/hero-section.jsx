import { ArrowRightIcon, CheckIcon } from "lucide-react";

export default function HeroSection() {
  const valuePillars = [
    "Modern Design",
    "Responsive Development",
    "Affordable Pricing",
    "Fast Delivery",
  ];

  return (
    <section
      id="hero"
      className="relative isolate flex flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/80 bg-white/65 px-4 pt-12 pb-12 text-center shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)] backdrop-blur-sm md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -left-24 top-8 z-0 size-64 rounded-full bg-orange-300/30 blur-3xl motion-safe:animate-[hero-drift_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 z-0 size-72 rounded-full bg-sky-300/25 blur-3xl motion-safe:animate-[hero-drift_10s_ease-in-out_infinite_reverse]" />
      <div className="pointer-events-none absolute left-8 top-8 size-16 rounded-full border border-orange-300/50 max-md:hidden" />
      <div className="pointer-events-none absolute bottom-10 right-10 size-5 rounded-full bg-orange-500/70 shadow-[0_0_0_8px_rgba(251,146,60,0.10)] max-md:hidden" />
      {/* Background SVG Grid / Blueprint Decoration */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 size-full opacity-60 max-md:hidden"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke="var(--color-gray-200)"
          strokeOpacity=".6"
          d="M-15.227 702.342H1439.7"
        />
        <circle
          cx="711.819"
          cy="372.562"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".6"
        />
        <circle
          cx="16.942"
          cy="20.834"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".6"
        />
        <path
          stroke="var(--color-gray-200)"
          strokeOpacity=".6"
          d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7"
        />
        <circle
          cx="782.595"
          cy="411.166"
          r="308.334"
          stroke="var(--color-gray-200)"
          strokeOpacity=".6"
        />
      </svg>

      {/* Startup Tag Badge */}
      <div className="relative mt-2 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/90 px-4 py-1.5 text-xs font-medium shadow-sm backdrop-blur-xs transition hover:border-orange-300 sm:text-sm">
        <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-gray-600 font-medium">Digital Development Startup</span>
        <span className="h-3 w-px bg-gray-200" />
        <span className="font-semibold text-orange-600">
          Professional Website Development
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="relative mt-6 max-w-5xl text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl md:text-6xl md:leading-[1.08] lg:text-7xl">
        Build Your Digital Presence With{" "}
        <span className="relative inline-block whitespace-nowrap bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent">
          ZONECRAFT
          <span className="absolute -bottom-1 left-1/2 h-1 w-4/5 -translate-x-1/2 rounded-full bg-orange-400/35" aria-hidden="true" />
        </span>
      </h1>

      {/* Supporting Text */}
      <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
        We design and develop modern, responsive and high-performance websites for businesses, startups, creators and individuals.
      </p>

      {/* CTA Buttons */}
      <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full bg-gray-950 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900 sm:text-base"
        >
          <span>Start Your Project</span>
          <ArrowRightIcon className="size-4" />
        </a>
        <a
          href="#projects"
          className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm sm:text-base font-medium text-gray-800 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 active:scale-95 shadow-2xs"
        >
          <span>View Our Work</span>
        </a>
      </div>

      {/* Value Statement Bar */}
      <div className="relative mt-10 w-full max-w-3xl rounded-2xl border border-white/90 bg-white/85 p-4 shadow-lg shadow-gray-900/5 backdrop-blur-xs">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium text-gray-700">
          {valuePillars.map((pillar, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="rounded-full bg-emerald-50 p-1 text-emerald-600">
                <CheckIcon className="size-3.5" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-gray-800">{pillar}</span>
              {idx < valuePillars.length - 1 && (
                <span className="hidden sm:inline-block text-gray-300 ml-3">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
