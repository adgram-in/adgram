'use client';

import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaTwitter
} from "react-icons/fa";

export function Footer() {
  const currentYear = 2026; // Fixed year to avoid hydration mismatch

  return (
    <footer className="reveal border-t border-black/10 dark:border-white/10 px-6 py-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* LEFT: About Us */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-widest">ADGRAM</h2>
          <p className="text-black/60 dark:text-white/60 text-sm mt-2 transition-colors duration-300">
            Platform that shares trending and useful products, tools and deals.
          </p>
          <p className="text-black/60 dark:text-white/60 text-sm mt-2 transition-colors duration-300">
            Business Inquiries & Collaborations:{" "}
            <a
              href="mailto:advertisementgram@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
            >
              advertisementgram@gmail.com
            </a>
          </p>
          <p className="text-black/60 dark:text-white/60 text-sm mt-2 transition-colors duration-300">
            <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">Privacy Policy</a>
          </p>
        </div>

        {/* RIGHT: Follow Us */}
        <div className="text-center md:text-right">
          <p className="mb-4 font-medium text-black/70 dark:text-white/70 transition-colors duration-300">
            Warud - 444906, Maharashtra, India
          </p>
          <div className="flex items-center justify-center md:justify-end gap-3">
            {[FaInstagram, FaYoutube, FaFacebook, FaPinterest, FaTwitter].map((Icon, i) => {
              const links = [
                "https://insta.openinapp.co/wl5e8",
                "https://yt.openinapp.co/q5eoa",
                "https://fb.openinapp.co/sb5i4",
                "https://pin.openinapp.co/70xk8",
                "https://twtr.openinapp.co/zzx0x"
              ];

              return (
                <a
                  key={links[i]}
                  href={links[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
          {/* Affiliate Disclosure moved to right side below social handles */}
          <p className="text-black/60 dark:text-white/60 text-sm mt-2 transition-colors duration-300">
            <a href="/affiliate-disclosure" className="text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">Affiliate Disclosure</a>
          </p>
        </div>
      </div>

      {/* Bottom Section: Centered Copyright */}
      <div className="text-center mt-8 pt-8 border-t border-black/10 dark:border-white/10">
        <p className="text-black/60 dark:text-white/60 text-sm transition-colors duration-300">
          © {currentYear} ADGRAM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
