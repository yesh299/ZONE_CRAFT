import SectionTitle from "../components/section-title";
import ServiceCard from "../components/service-card";
import { serviceOfferings } from "../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Our Web Development Services"
        description="Comprehensive website development and design solutions tailored for businesses, startups, creators, and individuals."
      />

      {/* 10 Reusable Service Cards Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {serviceOfferings.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
