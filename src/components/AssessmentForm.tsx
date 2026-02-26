"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import type { FormConfig, FormField } from "@/config/forms";

interface Step1Data {
  fullName: string;
  companyName: string;
  role: string;
  email: string;
  phone: string;
  city: string;
}

function FieldRenderer({
  field,
  register,
  otherValues,
  setOtherValue,
}: {
  field: FormField;
  register: ReturnType<typeof useForm>["register"];
  otherValues: Record<string, string>;
  setOtherValue: (name: string, value: string) => void;
}) {
  const isCheckbox = field.type === "checkbox";
  const isRadio = field.type === "radio";

  if (!isCheckbox && !isRadio) return null;

  return (
    <div className="mb-6">
      <p className="font-sans font-semibold text-[15px] text-[#364761] mb-3">
        {field.label}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        {field.options?.map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer">
            <input
              type={isCheckbox ? "checkbox" : "radio"}
              value={opt}
              {...register(field.name)}
              className="w-4 h-4 border-[#D5D5D5] text-[#0E4D85] accent-[#0E4D85]"
            />
            <span className="font-sans font-normal text-[14px] text-[#4D4D4D]">
              {opt}
            </span>
          </label>
        ))}
        {field.hasOther && (
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type={isCheckbox ? "checkbox" : "radio"}
              value="Other"
              {...register(field.name)}
              className="w-4 h-4 border-[#D5D5D5] text-[#0E4D85] accent-[#0E4D85]"
            />
            <span className="font-sans font-normal text-[14px] text-[#4D4D4D]">
              Other
            </span>
          </label>
        )}
      </div>
      {field.hasOther && (
        <input
          type="text"
          placeholder="Please specify..."
          value={otherValues[field.name] || ""}
          onChange={(e) => setOtherValue(field.name, e.target.value)}
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const stored = localStorage.getItem("contactStep1");
    if (!stored) return;
    const data: Step1Data = JSON.parse(stored);
    setStep1(data);
    reset({
      fullName: data.fullName,
      companyName: data.companyName,
      role: data.role,
      email: data.email,
      phone: data.phone,
      city: data.city,
    });
  }, [reset]);

  const handleOtherValue = (name: string, value: string) => {
    setOtherValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (data: Record<string, unknown>) => {
    setLoading(true);
    // Merge "Other" free-text values
    const finalData = { ...data, otherValues, formType: config.slug };
    console.log("Assessment submission:", finalData);
    await new Promise((r) => setTimeout(r, 1200));
    localStorage.removeItem("contactStep1");
    setLoading(false);
    setSubmitted(true);
  };

  if (!step1) {
    return (
      <section className="py-16 bg-[#F4F4F4] min-h-screen flex items-center">
        <div className="pad max w-full text-center">
          <p className="text-[#4D4D4D] text-[16px]">Loading your details...</p>
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
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0E4D85] text-white font-sans font-semibold text-[16px] rounded-lg hover:bg-[#0b3d6a] transition-colors"
            >
              Back to Home
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Details (pre-filled) */}
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
                        {...register("fullName", { required: true })}
                        className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${errors.fullName ? "border-red-400" : "border-[#D5D5D5] focus:border-[#2B74B8]"}`}
                      />
                    </div>
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Company name
                      </label>
                      <input
                        {...register("companyName", { required: true })}
                        className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${errors.companyName ? "border-red-400" : "border-[#D5D5D5] focus:border-[#2B74B8]"}`}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        Your Role
                      </label>
                      <select
                        {...register("role", { required: true })}
                        className={`${selectClasses} ${errors.role ? "border-red-400" : "border-[#D5D5D5] focus:border-[#2B74B8]"}`}
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
                        {...register("email", { required: true })}
                        className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${errors.email ? "border-red-400" : "border-[#D5D5D5] focus:border-[#2B74B8]"}`}
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
                        {...register("phone", { required: true })}
                        className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${errors.phone ? "border-red-400" : "border-[#D5D5D5] focus:border-[#2B74B8]"}`}
                      />
                    </div>
                    <div>
                      <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                        City
                      </label>
                      <input
                        {...register("city", { required: true })}
                        className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${errors.city ? "border-red-400" : "border-[#D5D5D5] focus:border-[#2B74B8]"}`}
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
                      register={register}
                      otherValues={otherValues}
                      setOtherValue={handleOtherValue}
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
