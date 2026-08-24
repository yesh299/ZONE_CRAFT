import { QuoteIcon, StarIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/section-title";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Cafe Owner, Mumbai",
    feedback: "The website feels premium, loads quickly, and makes it much easier for customers to find our menu and contact us.",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Delhi",
    feedback: "Clear communication, thoughtful design, and a smooth launch. Our new website finally reflects the quality of our brand.",
  },
  {
    name: "Rohan Gupta",
    role: "Business Owner, Bengaluru",
    feedback: "ZONECRAFT understood the brief quickly and delivered a polished, mobile-friendly site that our team is proud to share.",
  },
];

export default function OurTestimonialsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="What Clients Say"
        description="A few words from business owners and founders we have supported with their online presence."
      />

      <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className={`testimonial-reveal rounded-2xl border border-gray-200/90 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg ${
              isVisible ? "is-visible" : ""
            }`}
            style={{ "--reveal-delay": `${index * 150}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5 text-amber-400" aria-label="Five out of five stars">
                {Array.from({ length: 5 }, (_, starIndex) => (
                  <StarIcon key={starIndex} className="size-3.5 fill-current" />
                ))}
              </div>
              <QuoteIcon className="size-5 text-orange-200" aria-hidden="true" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">&ldquo;{testimonial.feedback}&rdquo;</p>
            <div className="mt-6 border-t border-gray-100 pt-4">
              <p className="text-sm font-bold text-gray-950">{testimonial.name}</p>
              <p className="mt-0.5 text-xs font-medium text-orange-600">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
