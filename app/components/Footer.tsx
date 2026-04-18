'use client';

import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaTwitter
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="reveal border-t border-black/10 dark:border-white/10 px-6 py-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-widest">ADGRAM</h2>
          <p className="text-black/60 dark:text-white/60 text-sm mt-2 transition-colors duration-300">
            © {new Date().getFullYear()} ADGRAM. All rights reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right">
          <p className="mb-4 font-medium text-black/70 dark:text-white/70 transition-colors duration-300">
            Follow us for daily finds
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
        </div>

      </div>
    </footer>
  );
}
