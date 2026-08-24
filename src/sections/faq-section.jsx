import SectionTitle from "../components/section-title";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Frequently Asked Questions"
        description="Got questions about our web development process, hosting, or turnaround? Find answers here."
      />

      <div className="mx-auto mt-12 w-full max-w-2xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 shadow-xs">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 first:pt-2 last:pb-2">
              <button
                type="button"
                className="flex w-full cursor-pointer items-start justify-between gap-4 text-left font-semibold text-gray-900 transition hover:text-orange-600"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base">{item.question}</span>
                <span className="shrink-0 rounded-full bg-gray-100 p-1 text-gray-600">
                  {isOpen ? (
                    <MinusIcon className="size-4" />
                  ) : (
                    <PlusIcon className="size-4" />
                  )}
                </span>
              </button>
              {isOpen && (
                <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed pr-8 animate-in fade-in duration-200">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
