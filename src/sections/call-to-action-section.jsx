import { ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function CallToActionSection() {
  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center py-8"
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 sm:p-14 text-center text-white shadow-2xl">
        {/* Ambient glow decorations */}
        <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-amber-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-block rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-amber-400 uppercase">
            Let&apos;s Build Together
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Launch Your Website With ZONECRAFT
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-300 leading-relaxed">
            Get a professional website designed and developed according to your
            business or personal requirements.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20ZONECRAFT,%20I%20would%20like%20to%20start%20my%20website%20project!`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-950 shadow-md transition hover:bg-gray-100 active:scale-95"
            >
              <span>Start Your Website</span>
              <ArrowRightIcon className="size-4" />
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}?subject=Start%20My%20Website%20-%20ZONECRAFT`}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xs transition hover:bg-white/10 active:scale-95"
            >
              <MailIcon className="size-4 text-orange-400" />
              <span>Email Us</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xs transition hover:bg-white/10 active:scale-95"
            >
              <PhoneIcon className="size-4 text-orange-400" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span>Direct Developer Access</span>
            <span>•</span>
            <span>Free Initial Consultation</span>
            <span>•</span>
            <span>Fast Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
}
