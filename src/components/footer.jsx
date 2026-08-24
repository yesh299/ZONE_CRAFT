import {
  GlobeIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { siteConfig } from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50/80 px-4 pt-12 pb-10 text-gray-600 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.jpeg"
                alt="ZONECRAFT Logo"
                className="size-10 rounded-full object-cover border border-gray-200 shadow-xs"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold tracking-tight text-gray-950">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {siteConfig.footerDescription}
            </p>
            <div className="pt-1">
              <a
                href={siteConfig.founder.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 transition hover:text-orange-600"
              >
                <span>Lead by {siteConfig.founder.name}</span>
                <ArrowUpRightIcon className="size-3.5 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-950 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-gray-950 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-gray-950 uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 transition hover:text-gray-950"
                >
                  <MailIcon className="size-4 text-orange-500 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.secondaryEmail}`}
                  className="flex items-center gap-2 transition hover:text-gray-950"
                >
                  <MailIcon className="size-4 shrink-0 text-orange-500" />
                  <span>{siteConfig.contact.secondaryEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 transition hover:text-gray-950"
                >
                  <PhoneIcon className="size-4 text-orange-500 shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-gray-950"
                >
                  <GlobeIcon className="size-4 text-orange-500 shrink-0" />
                  <span>WhatsApp: {siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <MapPinIcon className="size-4 text-orange-500 shrink-0" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Socials / Direct Channels */}
          <div>
            <h3 className="text-sm font-semibold text-gray-950 uppercase tracking-wider">
              Connect With Us
            </h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Available {siteConfig.contact.availability} for project inquiries and free consultations.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black shadow-2xs"
                >
                  <span>{social.name}</span>
                  <ArrowUpRightIcon className="size-3 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-gray-500 sm:flex-row">
          <p className="text-center sm:text-left font-medium">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right font-medium text-gray-600">
            {siteConfig.valueProposition}
          </p>
        </div>
      </div>
    </footer>
  );
}
