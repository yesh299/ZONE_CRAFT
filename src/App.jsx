import Banner from "./components/banner";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import ServicesSection from "./sections/services-section";
import ProjectsSection from "./sections/projects-section";
import HowItWorksSection from "./sections/how-it-works-section";
import TechnologiesSection from "./sections/technologies-section";
import WhyChooseUsSection from "./sections/why-choose-us-section";
import OurPricingSection from "./sections/our-pricing-section";
import OurTestimonialsSection from "./sections/our-testimonials-section";
import CallToActionSection from "./sections/call-to-action-section";
import ContactSection from "./sections/contact-section";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white selection:bg-orange-500 selection:text-white">
      <LenisScroll />
      <Banner />
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-10 px-4 pt-4 pb-10 sm:space-y-12 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <HowItWorksSection />
        <TechnologiesSection />
        <WhyChooseUsSection />
        <OurPricingSection />
        <OurTestimonialsSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
