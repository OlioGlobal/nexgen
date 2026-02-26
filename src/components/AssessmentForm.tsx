"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import type { FormConfig, FormField } from "@/config/forms";
import { APPS_SCRIPT_URL } from "@/config/forms";

interface Step1Data {
  fullName: string;
  companyName: string;
  role: string;
  email: string;
  phone: string;
  city: string;
  leadId: string;
  formSlug: string;
}

function FieldRenderer({
  field,
  value,
  onChange,
  otherText,
  onOtherTextChange,
  hasError,
}: {
  field: FormField;
  value: string | string[];
  onChange: (val: string | string[]) => void;
  otherText: string;
  onOtherTextChange: (val: string) => void;
  hasError: boolean;
}) {
  const isCheckbox = field.type === "checkbox";
  const isRadio = field.type === "radio";

  if (!isCheckbox && !isRadio) return null;

  const allOptions = [
    ...(field.options || []),
    ...(field.hasOther ? ["Other"] : []),
  ];

  const handleChange = (opt: string, checked: boolean) => {
    if (isRadio) {
      onChange(opt);
    } else {
      const current = Array.isArray(value) ? value : [];
      if (checked) {
        onChange([...current, opt]);
      } else {
        onChange(current.filter((v) => v !== opt));
      }
    }
  };

  return (
    <div className="mb-6">
      <p
        className={`font-sans font-semibold text-[15px] mb-3 ${hasError ? "text-red-500" : "text-[#364761]"}`}
      >
        {field.label} <span className="text-red-400">*</span>
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {allOptions.map((opt) => {
          const isChecked = isRadio
            ? value === opt
            : Array.isArray(value) && value.includes(opt);

          return (
            <label
              key={opt}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type={isCheckbox ? "checkbox" : "radio"}
                name={field.name}
                value={opt}
                checked={isChecked}
                onChange={(e) => handleChange(opt, e.target.checked)}
                className="w-4 h-4 border-[#D5D5D5] text-[#0E4D85] accent-[#0E4D85]"
              />
              <span className="font-sans font-normal text-[14px] text-[#4D4D4D]">
                {opt}
              </span>
            </label>
          );
        })}
      </div>
      {hasError && (
        <p className="mt-2 font-sans text-[13px] text-red-500">
          Please select an option
        </p>
      )}
      {field.hasOther && (
        <input
          type="text"
          placeholder="Please specify..."
          value={otherText}
          onChange={(e) => onOtherTextChange(e.target.value)}
          className="mt-3 w-full max-w-xs border border-[#D5D5D5] rounded-lg px-4 py-2 font-sans text-[14px] text-[#364761] placeholder:text-[#B0B0B0] outline-none focus:border-[#2B74B8] transition-colors"
        />
      )}
    </div>
  );
}

export default function AssessmentForm({ config }: { config: FormConfig }) {
  const [step1, setStep1] = useState<Step1Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [fieldValues, setFieldValues] = useState<
    Record<string, string | string[]>
  >({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const stored = localStorage.getItem("contactStep1");
    if (!stored) return;
    const data: Step1Data = JSON.parse(stored);
    setStep1(data);
  }, []);

  const updateField = (name: string, value: string | string[]) => {
    setFieldValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user selects something
    setFieldErrors((prev) => ({ ...prev, [name]: false }));
  };

  const updateOtherText = (name: string, value: string) => {
    setOtherValues((prev) => ({ ...prev, [name]: value }));
  };

  const getAllFields = (): FormField[] => {
    return config.sections.flatMap((s) => s.fields);
  };

  const validate = (): boolean => {
    const allFields = getAllFields();
    const newErrors: Record<string, boolean> = {};
    let valid = true;

    for (const field of allFields) {
      const val = fieldValues[field.name];
      if (field.type === "radio") {
        if (!val || val === "") {
          newErrors[field.name] = true;
          valid = false;
        }
      } else if (field.type === "checkbox") {
        if (!val || !Array.isArray(val) || val.length === 0) {
          newErrors[field.name] = true;
          valid = false;
        }
      }
    }

    setFieldErrors(newErrors);
    return valid;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll to first error
      const firstErrorKey = Object.keys(fieldErrors).find(
        (k) => fieldErrors[k]
      );
      if (firstErrorKey) {
        const el = document.querySelector(`[name="${firstErrorKey}"]`);
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setLoading(true);

    // Build assessment fields
    const fields: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(fieldValues)) {
      fields[key] = value;
    }
    // Merge "Other" free-text values
    for (const [key, value] of Object.entries(otherValues)) {
      if (value) fields[`${key}_other`] = value;
    }

    const payload = {
      step: 2,
      leadId: step1!.leadId,
      formSlug: step1!.formSlug,
      fields,
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
        console.error("Sheet sync failed:", err);
      }
    }

    // Analytics tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "NexGen_Lead_Submitted",
      formSlug: step1!.formSlug,
      leadId: step1!.leadId,
      step: 2,
      ...fields,
    });

    localStorage.removeItem("contactStep1");
    setLoading(false);
    setSubmitted(true);
  };

  if (!step1) {
    return (
      <section className="py-16 bg-[#F4F4F4] min-h-screen flex items-center">
        <div className="pad max w-full text-center">
          <p className="text-[#4D4D4D] text-[16px]">
            Loading your details...
          </p>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="py-16 bg-[#F4F4F4] min-h-screen flex items-center">
        <div className="pad max w-full">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#0E4D85] flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-title font-bold text-[28px] md:text-[36px] leading-[120%] text-[#364761] mb-4">
              Thank You, {step1.fullName}!
            </h2>
            <p className="font-sans font-normal text-[18px] leading-[160%] text-[#4D4D4D] mb-3">
              Your assessment request has been submitted successfully.
            </p>
            <p className="font-sans font-normal text-[16px] leading-[160%] text-[#4D4D4D] mb-8">
              Our solutions expert will connect with you within{" "}
              <strong className="text-[#364761]">24 hours</strong> to discuss
              your requirements and provide a customized proposal.
            </p>
            <div className="bg-white rounded-2xl p-6 md:p-8 text-left mb-8">
              <h3 className="font-title font-semibold text-[18px] text-[#2B74B8] mb-4">
                What happens next?
              </h3>
              <ul className="space-y-3">
                {[
                  "Our team reviews your requirements within a few hours",
                  "A solutions expert calls you to understand your setup",
                  "You receive a customized proposal with ROI projections",
                  "We schedule a demo at your facility or ours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-5 h-5 shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="12" fill="#0E4D85" />
                      <path
                        d="M7.5 12.5l3 3 6-6"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={
                {
                  homepage: "/",
                  hygiene: "/hygiene-station",
                  "air-knife": "/air-knife-drying",
                  "crate-washing": "/crate-washing",
                }[step1.formSlug] || "/"
              }
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0E4D85] text-white font-sans font-semibold text-[16px] rounded-lg hover:bg-[#0b3d6a] transition-colors"
            >
              {step1.formSlug === "homepage"
                ? "Back to Home"
                : "Back to Page"}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const selectClasses = `w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] outline-none transition-colors appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234D4D4D%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`;

  return (
    <section className="py-16 bg-[#F4F4F4] min-h-screen">
      <div className="pad max">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 items-start">
          {/* Left — Heading */}
          <div className="md:sticky md:top-[100px]">
            <h2 className="font-title font-bold text-[28px] md:text-[36px] leading-[120%] text-[#364761] mb-4">
              {config.pageTitle}
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[150%] text-[#4D4D4D]">
              {config.pageDescription.replace(
                "Thank you for enquiring",
                `Thank you for enquiring, ${step1.fullName}`
              )}
            </p>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Contact Details (pre-filled, disabled) */}
              <div>
                <h3 className="font-title font-semibold text-[18px] text-[#2B74B8] mb-5">
                  Your Details
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Full name
                      </label>
                      <input
                        value={step1.fullName}
                        disabled
                        className="w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] bg-[#F4F4F4] border-[#D5D5D5] outline-none cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Company name
                      </label>
                      <input
                        value={step1.companyName}
                        disabled
                        className="w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] bg-[#F4F4F4] border-[#D5D5D5] outline-none cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Your Role
                      </label>
                      <select
                        value={step1.role}
                        disabled
                        className={`${selectClasses} bg-[#F4F4F4] border-[#D5D5D5] cursor-not-allowed`}
                      >
                        {config.roles.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={step1.email}
                        disabled
                        className="w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] bg-[#F4F4F4] border-[#D5D5D5] outline-none cursor-not-allowed"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={step1.phone}
                        disabled
                        className="w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] bg-[#F4F4F4] border-[#D5D5D5] outline-none cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        City
                      </label>
                      <input
                        value={step1.city}
                        disabled
                        className="w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] bg-[#F4F4F4] border-[#D5D5D5] outline-none cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Sections from config */}
              {config.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-title font-semibold text-[18px] text-[#2B74B8] mb-5">
                    {section.title}
                  </h3>
                  {section.fields.map((field) => (
                    <FieldRenderer
                      key={field.name}
                      field={field}
                      value={fieldValues[field.name] || (field.type === "checkbox" ? [] : "")}
                      onChange={(val) => updateField(field.name, val)}
                      otherText={otherValues[field.name] || ""}
                      onOtherTextChange={(val) =>
                        updateOtherText(field.name, val)
                      }
                      hasError={!!fieldErrors[field.name]}
                    />
                  ))}
                </div>
              ))}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0E4D85] text-white font-sans font-semibold text-[16px] px-8 py-3 rounded-full hover:bg-[#0b3d6a] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                )}
                {loading
                  ? "Submitting..."
                  : config.submitLabel || "Submit Assessment"}
              </button>

              <p className="font-sans font-normal text-[13px] leading-[150%] text-[#999]">
                Your information is 100% secure | No spam, ever | Response
                within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
