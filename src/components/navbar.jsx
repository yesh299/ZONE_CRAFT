import { MenuIcon, XIcon, ArrowRightIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200/70 bg-white/85 px-4 py-3 backdrop-blur-md md:px-12 lg:px-20 transition-all shadow-2xs"
      >
        {/* Brand Logo & Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("#hero");
          }}
          className="flex items-center gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900 rounded-lg p-1"
          aria-label="ZONECRAFT Home"
        >
          <img
            src="/assets/logo.jpeg"
            alt="ZONECRAFT Logo"
            className="size-9 rounded-full object-cover border border-gray-200 shadow-xs transition-transform duration-300 group-hover:scale-105"
            width={36}
            height={36}
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-gray-950 font-sans">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-orange-600 uppercase -mt-1 hidden sm:block">
              Web Development
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center space-x-1 lg:space-x-2 text-sm font-medium text-gray-700 md:flex">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-gray-950 font-semibold bg-gray-100/90 shadow-2xs"
                    : "text-gray-600 hover:text-gray-950 hover:bg-gray-50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="flex items-center gap-1.5 rounded-full bg-gray-950 px-5 py-2 text-sm font-medium text-white transition hover:bg-black hover:shadow-md active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            <span>Start Project</span>
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
          className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 active:scale-90 md:hidden focus:outline-hidden focus-visible:ring-2 focus-visible:ring-gray-900"
        >
          {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-white/95 px-6 py-10 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Header with Close */}
        <div className="flex w-full items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.jpeg"
              alt="ZONECRAFT Logo"
              className="size-10 rounded-full object-cover border border-gray-200 shadow-xs"
            />
            <span className="text-xl font-bold tracking-tight text-gray-950">
              {siteConfig.name}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-gray-100 p-2 text-gray-800 transition hover:bg-gray-200 active:scale-90 focus:outline-hidden"
            aria-label="Close Navigation Menu"
          >
            <XIcon className="size-5" />
          </button>
        </div>

        {/* Links */}
        <div className="flex w-full flex-col items-center gap-3 py-6">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`w-full max-w-xs text-center py-2.5 px-4 rounded-xl text-base font-medium transition ${
                  isActive
                    ? "bg-gray-900 text-white font-semibold shadow-xs"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex w-full flex-col items-center gap-3 border-t border-gray-100 pt-6">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-gray-950 py-3.5 text-base font-semibold text-white transition hover:bg-black shadow-md active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRightIcon className="size-4" />
          </a>
          <span className="text-xs text-gray-500 font-medium">
            {siteConfig.tagline}
          </span>
        </div>
      </div>
    </>
  );
}
