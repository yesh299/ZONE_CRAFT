import { useState } from "react";
import SectionTitle from "../components/section-title";
import { siteConfig } from "../data/siteConfig";
import {
  MailIcon,
  PhoneIcon,
  MessageSquareIcon,
  SendIcon,
  CheckCircle2Icon,
  ClockIcon,
  ShieldCheckIcon,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: "Business Website",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryReady, setInquiryReady] = useState(false);

  const websiteTypes = [
    "Business Website",
    "Portfolio",
    "E-Commerce",
    "Landing Page",
    "Startup Website",
    "Education Website",
    "Custom Web Application",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Please enter your business or project name.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a brief message (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    window.location.href = constructMailtoLink();
    setIsSubmitting(false);
    setInquiryReady(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `*New Project Inquiry for ZONECRAFT*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone || "Not provided"}
🏢 *Business/Project:* ${formData.businessName}
🌐 *Website Type:* ${formData.websiteType}
💬 *Message:* ${formData.message}`;

    const cleanPhone = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  const constructMailtoLink = () => {
    const subject = `Project Inquiry: ${formData.websiteType} - ${formData.businessName}`;
    const body = `Hi ZONECRAFT Team,

Here are the details for my website project:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Business / Project Name: ${formData.businessName}
Website Type: ${formData.websiteType}

Project Overview / Message:
${formData.message}

Best regards,
${formData.name}`;

    return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Start Your Project Inquiry"
        description="Tell us about your brand vision, requirements, and timeline. We'll get back to you with a tailored proposal."
      />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 max-w-6xl w-full items-start">
        {/* Left Form Card */}
        <div className="lg:col-span-7 rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-sm">
          {!inquiryReady ? (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-gray-950">
                  Project Details
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Fill out the form below to receive a free consultation and project quote.
                </p>
              </div>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Your Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    aria-required="true"
                    className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-gray-900 transition ${
                      errors.name ? "border-red-500 bg-red-50/20" : "border-gray-300 bg-white"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Email Address <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    aria-required="true"
                    className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-gray-900 transition ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-gray-300 bg-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Business Name Row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-gray-900 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Business / Project Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corp or Portfolio"
                    aria-required="true"
                    className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-gray-900 transition ${
                      errors.businessName ? "border-red-500 bg-red-50/20" : "border-gray-300 bg-white"
                    }`}
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-[11px] text-red-600" role="alert">
                      {errors.businessName}
                    </p>
                  )}
                </div>
              </div>

              {/* Website Type Dropdown */}
              <div>
                <label
                  htmlFor="websiteType"
                  className="block text-xs font-semibold text-gray-800"
                >
                  Website Type <span className="text-orange-600">*</span>
                </label>
                <select
                  id="websiteType"
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm font-medium text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-gray-900 transition cursor-pointer"
                >
                  {websiteTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-800"
                >
                  Project Overview & Goals <span className="text-orange-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your desired website, key features, target audience, and preferred deadline..."
                  aria-required="true"
                  className={`mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-hidden focus:ring-2 focus:ring-gray-900 transition resize-none ${
                    errors.message ? "border-red-500 bg-red-50/20" : "border-gray-300 bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-black active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <SendIcon className="size-4" />
                <span>{isSubmitting ? "Opening email..." : "Send Project Inquiry"}</span>
              </button>
            </form>
          ) : (
            /* Inquiry Ready Dispatch Confirmation */
            <div className="flex flex-col items-center text-center py-6">
              <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2Icon className="size-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-950">
                Inquiry Details Validated!
              </h3>
              <p className="mt-2 text-sm text-gray-600 max-w-md">
                Your inquiry for a <strong>{formData.websiteType}</strong> ({formData.businessName}) is addressed to our development team. Your email app should now be open with the project details filled in.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
                >
                  <MessageSquareIcon className="size-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={constructMailtoLink()}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-black active:scale-95"
                >
                  <MailIcon className="size-4" />
                  <span>Send via Email</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setInquiryReady(false)}
                className="mt-6 text-xs font-semibold text-gray-500 underline hover:text-gray-900 cursor-pointer"
              >
                Edit or submit another inquiry
              </button>
            </div>
          )}
        </div>

        {/* Right Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Channels Card */}
          <div className="rounded-3xl bg-gray-950 p-8 text-white shadow-md">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-amber-400 uppercase">
              Direct Channels
            </span>
            <h3 className="mt-3 text-2xl font-bold">
              Direct Developer Contact
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
              Skip agency bureaucracy. Speak directly with our lead builder about requirements, timelines, and pricing.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
                >
                  <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition">
                    <MailIcon className="size-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Email</span>
                    <span className="font-semibold">{siteConfig.contact.email}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.contact.secondaryEmail}`}
                  className="group flex items-center gap-3 text-gray-300 transition hover:text-white"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-orange-400 transition group-hover:bg-orange-500 group-hover:text-white">
                    <MailIcon className="size-4.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-gray-400">Team Email</span>
                    <span className="font-semibold">{siteConfig.contact.secondaryEmail}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
                >
                  <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition">
                    <MessageSquareIcon className="size-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">WhatsApp Direct</span>
                    <span className="font-semibold">{siteConfig.contact.phone}</span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition group"
                >
                  <div className="size-9 rounded-lg bg-white/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition">
                    <PhoneIcon className="size-4.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase">Phone</span>
                    <span className="font-semibold">{siteConfig.contact.phone}</span>
                  </div>
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/10 pt-5 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <ClockIcon className="size-3.5 text-orange-400" />
                {siteConfig.contact.availability}
              </span>
              <span>Remote-First</span>
            </div>
          </div>

          {/* Quick FAQ / Guarantee Box */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-900 uppercase tracking-wider">
              <ShieldCheckIcon className="size-4 text-emerald-600" />
              <span>ZONECRAFT Guarantee</span>
            </div>
            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
              Free consultation & wireframe breakdown included with every inquiry. No upfront commitments required until you approve the project scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
