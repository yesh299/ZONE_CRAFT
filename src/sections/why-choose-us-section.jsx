import SectionTitle from "../components/section-title";
import { whyUsFeatures } from "../data/whyUs";
import {
  SparklesIcon,
  LaptopIcon,
  ZapIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  Code2Icon,
  CircleDollarSignIcon,
  HeartHandshakeIcon,
  PaletteIcon,
  ShieldCheckIcon,
  CheckCircle2Icon,
} from "lucide-react";

const iconMap = {
  SparklesIcon: SparklesIcon,
  LaptopIcon: LaptopIcon,
  ZapIcon: ZapIcon,
  SmartphoneIcon: SmartphoneIcon,
  TrendingUpIcon: TrendingUpIcon,
  Code2Icon: Code2Icon,
  CircleDollarSignIcon: CircleDollarSignIcon,
  HeartHandshakeIcon: HeartHandshakeIcon,
  PaletteIcon: PaletteIcon,
  ShieldCheckIcon: ShieldCheckIcon,
};

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Why Choose ZONECRAFT"
        description="Built on engineering excellence, modern design aesthetics, and client-first collaboration."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl w-full">
        {whyUsFeatures.map((item) => {
          const IconComponent = iconMap[item.icon] || CheckCircle2Icon;
          return (
            <div
              key={item.id}
              className="group flex h-full flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <IconComponent className="size-5" />
                  </div>
                  {item.tag && (
                    <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-600 border border-orange-100/80">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-gray-950 tracking-tight transition-colors group-hover:text-orange-600">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
