import { ArrowRightIcon } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Banner() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 py-2 px-4 text-center font-medium text-white text-xs sm:text-sm">
      <p>Explore our Founder Portfolio & Modern Web Solutions</p>
      <a
        href={siteConfig.founder.portfolioUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-orange-600 transition hover:bg-orange-50 active:scale-95 shadow-sm"
      >
        <span>View Portfolio</span>
        <ArrowRightIcon className="size-3.5" />
      </a>
    </div>
  );
}
