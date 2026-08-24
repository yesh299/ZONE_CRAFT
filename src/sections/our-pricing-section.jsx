import SectionTitle from "../components/section-title";
import { pricingPlans } from "../data/pricing";
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function OurPricingSection() {
  return (
    <section id="pricing" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Transparent Pricing Packages"
        description="Affordable packages tailored for businesses, creators, and startups. No hidden fees."
      />

      <div className="mt-8 flex w-full max-w-6xl flex-wrap items-stretch justify-center gap-6">
        {pricingPlans.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[22rem] motion-safe:animate-[pricing-float_5s_ease-in-out_infinite]"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <div
            className={`flex h-full w-full flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[29rem] ${
              item.mostPopular
                ? "border-gray-900 bg-gray-950 text-white shadow-lg"
                : "border-gray-200 bg-white text-gray-900"
            }`}
          >
            <div>
              <div className="min-h-36">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  {item.mostPopular && (
                    <span className="shrink-0 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                </div>

                <p
                  className={`mt-2 min-h-10 text-xs leading-relaxed sm:text-sm ${
                    item.mostPopular ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.description}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {item.price}
                  </span>
                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${
                      item.mostPopular ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    / {item.billingCycle}
                  </span>
                </div>
              </div>

              {/* Button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20ZONECRAFT,%20I%20am%20interested%20in%20the%20${encodeURIComponent(item.title)}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition active:scale-95 ${
                  item.mostPopular
                    ? "bg-white text-gray-950 hover:bg-gray-100 shadow-md"
                    : "bg-gray-900 text-white hover:bg-black"
                }`}
              >
                <span>{item.buttonText}</span>
                <ArrowRightIcon className="size-4" />
              </a>

              {/* Features List */}
              <div className="mt-6 space-y-2.5 border-t border-gray-100/20 pt-4">
                <p
                  className={`text-xs font-semibold tracking-wider uppercase ${
                    item.mostPopular ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  What&apos;s Included:
                </p>
                {item.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm"
                  >
                    <div
                      className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                        item.mostPopular
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-emerald-100 text-emerald-600"
                      }`}
                    >
                      <CheckIcon className="size-3.5" strokeWidth={3} />
                    </div>
                    <span
                      className={
                        item.mostPopular ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-100/20 pt-3 text-center">
              <span
                className={`text-[11px] ${
                  item.mostPopular ? "text-gray-400" : "text-gray-400"
                }`}
              >
                100% Satisfaction Guarantee • Fast Delivery
              </span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
