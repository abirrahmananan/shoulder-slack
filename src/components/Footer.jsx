import React from "react";
import footerBackground from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background Image */}
      <img
        src={footerBackground}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/65" />

      {/* Red Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-56 w-56 rounded-full bg-red-600/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-56 w-56 rounded-full bg-red-600/10 blur-3xl sm:h-72 sm:w-72" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 sm:py-9 md:px-8 lg:px-10 lg:py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-7 sm:gap-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wide sm:text-lg">
              Get in <span className="text-red-500">Touch</span>
            </h3>

            <div className="mx-auto max-w-sm space-y-3 md:mx-0">

              {/* Phone */}
              <a
                href="tel:01606470340"
                className="group flex items-center gap-3 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-500 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.042 11.042 0 005.502 5.502l1.128-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Phone
                  </p>

                  <p className="text-sm font-semibold text-white">
                    01606470340
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:shoulderslack@gmail.com"
                className="group flex items-center gap-3 text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600/10 text-red-500 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-gray-500">
                    Email
                  </p>

                  <p className="break-all text-sm font-semibold text-white">
                    shoulderslack@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-base font-bold uppercase tracking-wide sm:text-lg">
              Follow <span className="text-red-500">Us</span>
            </h3>

            <div className="mx-auto grid max-w-sm grid-cols-2 gap-2.5 md:mx-0 lg:grid-cols-2">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61593417520324"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-left transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-base font-bold">
                  f
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500">Facebook</p>
                  <p className="truncate text-xs font-medium text-gray-200">
                    Shoulder Slack
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/shoulder_slack/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-left transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="3"
                      rx="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500">Instagram</p>
                  <p className="truncate text-xs font-medium text-gray-200">
                    @shoulder_slack
                  </p>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@shoulderslack"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-left transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black ring-1 ring-gray-700">
                  <span className="text-base font-black">♪</span>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500">TikTok</p>
                  <p className="truncate text-xs font-medium text-gray-200">
                    @shoulderslack
                  </p>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@ShoulderSlack"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-left transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.06]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.2 31.2 0 0024 12a31.2 31.2 0 00-.5-5.8zM9.6 15.5v-7l6.3 3.5-6.3 3.5z" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] text-gray-500">YouTube</p>
                  <p className="truncate text-xs font-medium text-gray-200">
                    @ShoulderSlack
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Optional third column */}
          <div className="hidden lg:block" />
        </div>

        {/* Bottom Footer */}
        <div className="mt-7 border-t border-white/10 pt-5 flex flex-col items-center gap-3 text-center text-[11px] text-gray-500 sm:text-xs md:flex-row md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Shoulder Slack
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-red-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-200 hover:text-red-500"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;