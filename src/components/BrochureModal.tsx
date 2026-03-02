"use client";

import { useState, FormEvent } from "react";
import { APPS_SCRIPT_URL } from "@/config/forms";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  brochureHref: string;
  brochureName?: string;
}

export default function BrochureModal({
  isOpen,
  onClose,
  brochureHref,
  brochureName = "Brochure",
}: Props) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim()) e.email = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.city.trim()) e.city = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const payload = {
      step: "brochure",
      brochureName,
      pageUrl: window.location.href,
      ...form,
    };

    if (APPS_SCRIPT_URL) {
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error("Brochure lead sync failed:", err);
      }
    }

    // Analytics tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "NexGen_Brochure_Download",
      brochureName,
      ...form,
      pageUrl: window.location.href,
    });

    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full border rounded-lg px-4 py-3 font-sans text-[15px] text-[#364761] outline-none transition-colors ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-[#D5D5D5] focus:border-[#2B74B8]"
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-6 md:p-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#364761] transition-colors text-xl leading-none cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h3 className="font-title font-bold text-[22px] text-[#364761] mb-1">
              Download {brochureName}
            </h3>
            <p className="font-sans text-[14px] text-[#4D4D4D] mb-5">
              Fill in your details to get instant access.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  placeholder="Full Name *"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className={inputClass("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <input
                  placeholder="City *"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className={inputClass("city")}
                />
                {errors.city && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.city}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0E4D85] text-white font-sans font-semibold text-[15px] py-3 rounded-lg hover:bg-[#0b3d6a] transition-colors disabled:opacity-70 cursor-pointer"
              >
                {loading ? "Please wait..." : "Get Brochure"}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#0E4D85] flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-title font-bold text-[20px] text-[#364761] mb-2">
              Thank you, {form.fullName}!
            </h3>
            <p className="font-sans text-[14px] text-[#4D4D4D] mb-6">
              Your brochure is ready to download.
            </p>
            <a
              href={brochureHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-[#0E4D85] text-white font-sans font-semibold text-[15px] px-6 py-3 rounded-lg hover:bg-[#0b3d6a] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-4 h-4"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 16l-4-4h3V4h2v8h3l-4 4zM4 20h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Open Brochure
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
