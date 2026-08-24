import { useState } from "react";
import SectionTitle from "../components/section-title";
import { technologies } from "../data/technologies";
import { Code2Icon, LayersIcon, SparklesIcon, CpuIcon } from "lucide-react";

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Database", "Tools & DevOps"];

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) =>
          tech.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <section id="technologies" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Technologies We Work With"
        description="A modern, battle-tested ecosystem of frameworks, tools, and platforms tailored to your project scope."
      />

      {/* Scope Disclaimer / Note */}
      <div className="mt-6 max-w-3xl rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-2.5 text-center text-xs text-gray-600 shadow-2xs">
        <span className="font-semibold text-gray-900">Adaptive Stack: </span>
        <span>
          We select the optimal technologies based on your specific project requirements, performance needs, and budget.
        </span>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => {
          const isSelected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-gray-950 text-white shadow-2xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Technologies Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl w-full">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col justify-between rounded-xl border border-gray-200/80 bg-white p-4 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100/60">
                  {tech.badge}
                </span>
                <span className="text-[10px] font-medium text-gray-400">
                  {tech.category}
                </span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-gray-950 transition-colors group-hover:text-orange-600">
                {tech.name}
              </h4>

              <p className="mt-1.5 text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
