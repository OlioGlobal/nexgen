"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  companyName: string;
  role: string;
  email: string;
  phone: string;
  city: string;
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
      <circle cx="12" cy="12" r="12" fill="rgba(255,255,255,0.25)" />
      <path
        d="M7.5 12.5l3 3 6-6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const steps = [
  "Fill out the form below (takes 60 seconds)",
  "Our solutions expert contacts you within 24 hours",
  "We analyze your requirements and provide a customized proposal",
  "Schedule a demo at our facility or yours",
  "Get detailed ROI projections based on your actual volumes",
];

const roles = [
  "Director",
  "Operations Head",
  "Production Manager",
  "Plant Head",
  "Business Owner",
  "Procurement Manager",
  "Other",
];

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log("Step 1 submitted:", data);
    localStorage.setItem("contactStep1", JSON.stringify(data));
    // Simulate a short delay for UX
    await new Promise((r) => setTimeout(r, 800));
    router.push("/assessment");
  };

  return (
    <section
      id="contact"
      className="py-16"
      style={{
        background: "linear-gradient(116.55deg, #CD0646 0%, #F90554 100%)",
      }}
    >
      <div className="pad max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left — Content */}
          <div>
            <h2 className="font-title font-bold text-[28px] md:text-[32px] leading-[120%] text-white mb-4">
              Join 500+ Smart Food Processors Who&apos;ve Already Made The
              Switch
            </h2>
            <p className="font-sans font-normal text-[16px] leading-[150%] text-white/80 mb-8">
              Get your personalized ROI assessment and see exactly how much you
              could save.
            </p>

            <ul className="space-y-4">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <CheckCircle />
                  <span className="font-sans font-normal text-[16px] leading-[150%] text-white">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Row 1: Full name + Company name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                    Full name
                  </label>
                  <input
                    {...register("fullName", { required: true })}
                    placeholder="Jane Doe"
                    className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${
                      errors.fullName
                        ? "border-red-400"
                        : "border-[#D5D5D5] focus:border-[#2B74B8]"
                    }`}
                  />
                </div>
                <div>
                  <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                    Company name
                  </label>
                  <input
                    {...register("companyName", { required: true })}
                    placeholder="Orahne"
                    className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${
                      errors.companyName
                        ? "border-red-400"
                        : "border-[#D5D5D5] focus:border-[#2B74B8]"
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: Role + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                    Your Role
                  </label>
                  <select
                    {...register("role", { required: true })}
                    className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] outline-none transition-colors appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234D4D4D%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] ${
                      errors.role
                        ? "border-red-400"
                        : "border-[#D5D5D5] focus:border-[#2B74B8]"
                    }`}
                  >
                    {roles.map((r) => (
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
                    placeholder="janedoe@gmail.com"
                    className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${
                      errors.email
                        ? "border-red-400"
                        : "border-[#D5D5D5] focus:border-[#2B74B8]"
                    }`}
                  />
                </div>
              </div>

              {/* Row 3: Phone + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phone", { required: true })}
                    placeholder="+91 1234567890"
                    className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${
                      errors.phone
                        ? "border-red-400"
                        : "border-[#D5D5D5] focus:border-[#2B74B8]"
                    }`}
                  />
                </div>
                <div>
                  <label className="font-sans font-normal text-[14px] text-[#4D4D4D] mb-1 block">
                    City
                  </label>
                  <input
                    {...register("city", { required: true })}
                    placeholder="Mumbai"
                    className={`w-full border rounded-lg px-4 py-3 font-sans text-[16px] text-[#364761] placeholder:text-[#B0B0B0] outline-none transition-colors ${
                      errors.city
                        ? "border-red-400"
                        : "border-[#D5D5D5] focus:border-[#2B74B8]"
                    }`}
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0E4D85] text-white font-sans font-semibold text-[16px] px-8 py-3 rounded-lg hover:bg-[#0b3d6a] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
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
                {loading ? "Submitting..." : "Submit"}
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
