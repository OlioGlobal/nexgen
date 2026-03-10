import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A2332] pt-10 pb-6">
      <div className="pad max">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 pb-8 border-b border-white/10">
          {/* Address — Left */}
          <div>
            <h4 className="font-sans font-semibold text-[18px] text-white/60 uppercase tracking-wider mb-3">
              Address
            </h4>
            <p className="font-sans font-normal text-[16px] leading-[170%] text-white/80 max-w-[280px]">
              S. No. 14, Opp. Setco, Dhadge Industrial Estate, Sinhgad Road,
              Ghule Patil Nagar, Pandurang Industrial Area, Nanded, Pune,
              Maharashtra 411041
            </p>
          </div>

          {/* Contact — Center */}
          <div>
            <h4 className="font-sans font-semibold text-[18px] text-white/60 uppercase tracking-wider mb-3">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919822651535"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-sans text-[16px]">+91 98226 51535</span>
              </a>
              <a
                href="mailto:marketing@nexgenhygiene.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 shrink-0"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 7l-10 7L2 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-sans text-[16px]">
                  info@nexgenhygiene.com
                </span>
              </a>
            </div>
          </div>

          {/* Follow Us + Certifications — Right */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-sans font-semibold text-[18px] text-white/60 uppercase tracking-wider mb-3">
              Follow Us
            </h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://in.linkedin.com/company/nexgen-hygiene-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/nexgenfoodprocessingmachines/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCLMBjr35XDVVkyvb0fXEjUQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            {/* Certifications */}
            <div className="flex items-center gap-3">
              <Image
                src="/icon/iaf.webp"
                alt="IAF Certification"
                width={100}
                height={100}
                className="object-contain"
              />
              <Image
                src="/icon/iso.webp"
                alt="ISO 9001:2015"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6">
          <p className="font-sans font-normal text-[13px] text-white/50">
            &copy; 2026 Nexgen Hygiene System
          </p>
        </div>
      </div>
    </footer>
  );
}
