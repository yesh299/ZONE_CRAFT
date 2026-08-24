import { ArrowUpRightIcon } from "lucide-react";

export default function ProjectCard({ project, onPreview }) {
  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-xl">
      <div>
        {/* Project Image Preview */}
        <button
          type="button"
          onClick={() => onPreview(project)}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-gray-950 text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500"
          aria-label={`Enlarge ${project.title} preview`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold text-amber-400 backdrop-blur-xs border border-white/10 shadow-xs">
            {project.category}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-950/0 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:bg-gray-950/25 group-hover:opacity-100">
            View larger
          </div>
        </button>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight transition-colors group-hover:text-orange-600">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700 border border-gray-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="border-t border-gray-100 p-5 sm:px-6 pt-4 flex items-center justify-between">
        <span className="text-[11px] font-medium text-gray-400">
          {project.link ? "Project link" : "Concept preview"}
        </span>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white shadow-xs transition hover:bg-black active:scale-95"
          >
            <span>View project</span>
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        ) : (
          <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-500">
            Link coming soon
          </span>
        )}
      </div>
    </div>
  );
}
