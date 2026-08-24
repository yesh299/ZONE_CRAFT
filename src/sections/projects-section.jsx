import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import SectionTitle from "../components/section-title";
import ProjectCard from "../components/project-card";
import { projects, projectCategories } from "../data/projects";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <SectionTitle
        title="Website Concepts & Portfolio"
        description="A selection of website concepts and selected work across business, ecommerce, education, and product experiences."
      />

      {/* Category Filter Tabs */}
      <div className="mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 px-2">
        {projectCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-gray-950 text-white shadow-xs scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-950"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* 10 Project Cards Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onPreview={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} image preview`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl motion-safe:animate-[preview-in_220ms_ease-out]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[82vh] w-full rounded-2xl border border-white/15 object-contain shadow-2xl"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-gray-950/90 to-transparent px-5 pb-5 pt-14 text-white">
              <p className="text-lg font-bold">{selectedProject.title}</p>
              <p className="mt-1 text-sm text-gray-300">
                {selectedProject.category}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-950 shadow-lg transition hover:scale-105 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-400"
              aria-label="Close image preview"
            >
              <XIcon className="size-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
