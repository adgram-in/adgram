'use client';

import { useState, useEffect, useRef } from "react";

import {
  Sun,
  Moon,
  Menu,
  Search,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
  FaTwitter
} from "react-icons/fa";

export default function AffiliateDisclosure() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [navbarSearchOpen, setNavbarSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);
  const mobileCategoriesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const mobileContactRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");

    if (saved === "light") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    darkMode
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = 2026;

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition">

      {/* NAVBAR */}
      <header ref={headerRef} className={`sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/50 border-b border-black/10 dark:border-white/10 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>

        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <a
            href="/"
            className="text-lg font-bold tracking-widest hover:opacity-75 transition"
          >
            ADGRAM
          </a>

          <nav className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-300 items-center">

            <a href="/">Home</a>

            <a href="/#products">Products</a>

            <div ref={categoriesRef} className="relative">
              <button
                type="button"
                onClick={() => {
                  setCategoriesOpen((prev) => !prev);
                  setContactOpen(false);
                }}
                className="inline-flex items-center gap-1 outline-none"
              >
                Categories{selectedCategory ? ` (${selectedCategory})` : ""}
              </button>

              <div className={`absolute -left-2 top-full mt-2 w-48 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 ${categoriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>

                <div className="flex flex-col p-2 gap-1">

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Tech");
                      setCategoriesOpen(false);
                    }}
                    className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition outline-none"
                  >
                    Tech
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Home");
                      setCategoriesOpen(false);
                    }}
                    className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition outline-none"
                  >
                    Home
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Kitchen");
                      setCategoriesOpen(false);
                    }}
                    className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition outline-none"
                  >
                    Kitchen
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Viral");
                      setCategoriesOpen(false);
                    }}
                    className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition outline-none"
                  >
                    Viral
                  </button>

                </div>
              </div>
            </div>

            <div ref={contactRef} className="relative">

              <button
                type="button"
                onClick={() => {
                  setContactOpen((prev) => !prev);
                  setCategoriesOpen(false);
                }}
                className="inline-flex items-center gap-1 outline-none"
              >
                Contact
              </button>

              <div className={`absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 ${contactOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>

                <div className="flex flex-col p-2 gap-1">

                  <a
                    href="mailto:advertisementgram@gmail.com"
                    className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition outline-none"
                  >
                    advertisementgram@gmail.com
                  </a>

                  <a
                    href="tel:+919579714069"
                    className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition outline-none"
                  >
                    +91 9579714069
                  </a>

                </div>
              </div>
            </div>

          </nav>

          <div className="flex items-center gap-2 md:gap-3">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              <Menu size={20} />
            </button>

            <div ref={searchRef} className="flex items-center gap-2">

              <button
                type="button"
                onClick={() => setNavbarSearchOpen((prev) => !prev)}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                <Search className="w-5 h-5" />
              </button>

              <div className={`flex items-center overflow-hidden transition-all duration-300 ${navbarSearchOpen ? 'w-48 md:w-64 opacity-100' : 'w-0 opacity-0'}`}>

                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus={navbarSearchOpen}
                  placeholder="Search..."
                  className="w-full px-3 py-2 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-full text-sm text-black dark:text-white outline-none focus:border-black dark:focus:border-white transition"
                />

              </div>

              <button
                onClick={() => setDarkMode(prev => !prev)}
                className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                {mounted ? (
                  darkMode ? <Sun size={18} /> : <Moon size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>

            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">

            <a href="/" className="text-left">
              Home
            </a>

            <a href="/#products">
              Products
            </a>

            <div ref={mobileCategoriesRef} className="relative">

              <button
                type="button"
                onClick={() => {
                  setCategoriesOpen((prev) => !prev);
                  setMobileContactOpen(false);
                }}
                className="w-full text-left"
              >
                Categories
              </button>

              <div className={`mt-2 space-y-1 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${categoriesOpen ? 'block' : 'hidden'}`}>

                <button className="w-full text-left text-sm px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">
                  Tech
                </button>

                <button className="w-full text-left text-sm px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">
                  Home
                </button>

                <button className="w-full text-left text-sm px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">
                  Kitchen
                </button>

                <button className="w-full text-left text-sm px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5">
                  Viral
                </button>

              </div>
            </div>

            <div ref={mobileContactRef} className="relative">

              <button
                type="button"
                onClick={() => {
                  setMobileContactOpen((prev) => !prev);
                  setCategoriesOpen(false);
                }}
                className="w-full text-left"
              >
                Contact
              </button>

              <div className={`mt-2 space-y-1 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${mobileContactOpen ? 'block' : 'hidden'}`}>

                <a
                  href="mailto:advertisementgram@gmail.com"
                  className="block w-full text-left text-sm px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  advertisementgram@gmail.com
                </a>

                <a
                  href="tel:+919579714069"
                  className="block w-full text-left text-sm px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  +91 9579714069
                </a>

              </div>
            </div>

          </div>
        )}

      </header>

      {/* AFFILIATE DISCLOSURE */}
      <section className="flex-1 px-6 py-16">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-bold mb-8 border-b border-black/10 dark:border-white/10 pb-4">
            Affiliate Disclosure
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mb-10">
            Last Updated: May 2026
          </p>

          <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-8">

            <div>
              <p>
                Adgram is a participant in various affiliate marketing programs,
                including Cuelinks.
              </p>

              <p className="mt-4">
                This means that we may earn a commission when you click on
                affiliate links and make a purchase, at no additional cost to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Our Commitment
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We only recommend products and services that we believe are useful and valuable to our audience.
                </li>

                <li>
                  Our reviews and recommendations are based on research, trends, and user value, not just commissions.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Transparency
              </h2>

              <p>
                Affiliate links may be included in our content, product pages,
                and recommendations.
              </p>

              <p className="mt-4">
                We strive to be transparent and honest in all our recommendations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Contact
              </h2>

              <p>
                If you have any questions regarding this disclosure,
                feel free to contact us at:
              </p>

              <p className="mt-4">
                📩{" "}
                <a
                  href="mailto:advertisementgram@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  advertisementgram@gmail.com
                </a>
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 dark:border-white/10 px-6 py-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold tracking-widest">
              ADGRAM
            </h2>

            <p className="text-black/60 dark:text-white/60 text-sm mt-2">
              Platform that shares trending and useful products, tools and deals.
            </p>

            <p className="text-black/60 dark:text-white/60 text-sm mt-2">
              Business Inquiries & Collaborations:{" "}

              <a
                href="mailto:advertisementgram@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                advertisementgram@gmail.com
              </a>
            </p>

            <p className="text-black/60 dark:text-white/60 text-sm mt-2">
              <a
                href="/privacy-policy"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
            </p>

          </div>

          <div className="text-center md:text-right">

            <p className="mb-4 font-medium text-black/70 dark:text-white/70">
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

            <p className="text-black/60 dark:text-white/60 text-sm mt-2">

              <a
                href="/affiliate-disclosure"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Affiliate Disclosure
              </a>

            </p>

          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-black/10 dark:border-white/10">

          <p className="text-black/60 dark:text-white/60 text-sm">
            © {currentYear} ADGRAM. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}