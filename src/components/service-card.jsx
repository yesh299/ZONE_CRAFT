import {
  Building2Icon,
  UserCheckIcon,
  TargetIcon,
  ShoppingBagIcon,
  RocketIcon,
  GraduationCapIcon,
  BookOpenIcon,
  Code2Icon,
  PaletteIcon,
  RefreshCwIcon,
  ArrowRightIcon,
  GlobeIcon,
} from "lucide-react";

const iconMap = {
  Building2Icon: Building2Icon,
  UserCheckIcon: UserCheckIcon,
  TargetIcon: TargetIcon,
  ShoppingBagIcon: ShoppingBagIcon,
  RocketIcon: RocketIcon,
  GraduationCapIcon: GraduationCapIcon,
  BookOpenIcon: BookOpenIcon,
  Code2Icon: Code2Icon,
  PaletteIcon: PaletteIcon,
  RefreshCwIcon: RefreshCwIcon,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || GlobeIcon;

  return (
    <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-gray-200/90 bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">
      <div>
        {/* Top bar with Icon and Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl bg-gray-950 text-white shadow-2xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-orange-600">
            <IconComponent className="size-5" />
          </div>
          {service.badge && (
            <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-semibold text-orange-600 border border-orange-100/80">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-5 text-base font-bold text-gray-950 tracking-tight transition-colors group-hover:text-orange-600">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Bottom Link Action */}
      <div className="mt-6 border-t border-gray-100 pt-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 transition hover:text-gray-950 group-hover:text-orange-600"
        >
          <span>Request this service</span>
          <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
