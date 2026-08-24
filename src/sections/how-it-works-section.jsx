import SectionTitle from "../components/section-title";
import { processSteps } from "../data/process";
import {
  MessageSquareTextIcon,
  PaletteIcon,
  Code2Icon,
  RocketIcon,
  ArrowRightIcon,
} from "lucide-react";

const iconMap = {
  MessageSquareTextIcon: MessageSquareTextIcon,
  PaletteIcon: PaletteIcon,
  Code2Icon: Code2Icon,
  RocketIcon: RocketIcon,
};

export default function HowItWorksSection() {
  return (
    <section id="process" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Our 4-Step Process"
        description="A transparent, collaborative roadmap from initial concept to live website deployment."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
        {processSteps.map((item, index) => {
          const Icon = iconMap[item.icon] || RocketIcon;
          return (
            <div
              key={index}
              className="group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 pt-10 shadow-2xs transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-lg"
            >
              {/* Step floating badge */}
              <div className="absolute -top-5 left-6 flex items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gray-950 text-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-600">
                  <Icon className="size-5" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-extrabold tracking-widest text-orange-600 uppercase">
                    Step {item.step}
                  </span>
                  <span className="text-2xl font-black text-gray-200 select-none group-hover:text-orange-100 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-gray-950 tracking-tight transition-colors group-hover:text-orange-600">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 border-t border-gray-100 pt-3 flex items-center justify-between text-[11px] font-medium text-gray-400">
                <span>Phase {index + 1} of 4</span>
                {index < 3 ? (
                  <ArrowRightIcon className="size-3.5 text-gray-300 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
                ) : (
                  <span className="text-emerald-600 font-semibold">
                    Ready to Launch
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
