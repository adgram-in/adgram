'use client';

import { useState, useEffect, useRef } from "react";
import { products } from "./data/products";
import Hero from "./components/Hero";
import { Footer } from "./components/Footer";

import {
  Sun, Moon, Menu, Search, Share2, X, Copy
} from "lucide-react";

import {
  FaInstagram, FaWhatsapp
} from "react-icons/fa";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const [navbarSearchOpen, setNavbarSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);
  const mobileCategoriesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const mobileContactRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickOutsideHeader = headerRef.current && !headerRef.current.contains(event.target as Node);
      
      if (categoriesOpen && isClickOutsideHeader) {
        setCategoriesOpen(false);
      }
      if (contactOpen && isClickOutsideHeader) {
        setContactOpen(false);
      }
      if (mobileContactOpen && !mobileContactRef.current?.contains(event.target as Node)) {
        setMobileContactOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setNavbarSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [categoriesOpen, contactOpen, mobileContactOpen]);

  /* THEME */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setDarkMode(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const openShare = (link: string) => {
    setSelectedLink(link);
    setShareOpen(true);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(selectedLink);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition">

      {/* NAVBAR */}
      <header ref={headerRef} className={`sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/50 border-b border-black/10 dark:border-white/10 transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}>

        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <button onClick={() => setSelectedCategory("")} className="text-lg font-bold tracking-widest hover:opacity-75 transition">ADGRAM</button>

          <nav className="hidden md:flex gap-8 text-sm text-gray-600 dark:text-gray-300 items-center">
            <a href="#" onClick={() => setSelectedCategory("")}>Home</a>
            <a href="#products">Products</a>
            <div ref={categoriesRef} className="relative">
              <button
                type="button"
                onClick={() => { setCategoriesOpen((prev) => !prev); setContactOpen(false); }}
                className="inline-flex items-center gap-1"
              >
                Categories{selectedCategory ? ` (${selectedCategory})` : ""}
              </button>
              <div className={`absolute -left-2 top-full mt-2 w-48 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 ${categoriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="flex flex-col p-3 gap-2">
                  <button type="button" onClick={() => { setSelectedCategory(""); setCategoriesOpen(false); }} className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">All</button>
                  <button type="button" onClick={() => { setSelectedCategory("Tech Gadgets"); setCategoriesOpen(false); }} className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Tech Gadgets</button>
                  <button type="button" onClick={() => { setSelectedCategory("Home Essentials"); setCategoriesOpen(false); }} className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Home Essentials</button>
                  <button type="button" onClick={() => { setSelectedCategory("Kitchen Finds"); setCategoriesOpen(false); }} className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Kitchen Finds</button>
                  <button type="button" onClick={() => { setSelectedCategory("Viral Products"); setCategoriesOpen(false); }} className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Viral Products</button>
                </div>
              </div>
            </div>
            <div ref={contactRef} className="relative">
              <button
                type="button"
                onClick={() => { setContactOpen((prev) => !prev); setCategoriesOpen(false); }}
                className="inline-flex items-center gap-1"
              >
                Contact
              </button>
              <div className={`absolute left-0 top-full mt-2 w-64 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300 ${contactOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="flex flex-col p-3 gap-2">
                  <a href="mailto:advertisementgram@gmail.com" className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">advertisementgram@gmail.com</a>
                  <a href="tel:+919579714069" className="text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">+91 9579714069</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Mobile: Menu button outside search area */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              <Menu size={20} />
            </button>

            {/* Search and other controls */}
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
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
            <button type="button" onClick={() => { setSelectedCategory(""); setMenuOpen(false); setCategoriesOpen(false); }} className="text-left">Home</button>
            <a href="#products" onClick={() => { setMenuOpen(false); setCategoriesOpen(false); }}>Products</a>
            <div ref={mobileCategoriesRef} className="relative">
              <button
                type="button"
                onClick={() => { setCategoriesOpen((prev) => !prev); setMobileContactOpen(false); }}
                className="w-full text-left"
              >
                Categories
              </button>
              <div className={`mt-2 space-y-1 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${categoriesOpen ? 'block' : 'hidden'}`}>
                <button type="button" onClick={() => { setSelectedCategory(""); setCategoriesOpen(false); }} className="w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">All</button>
                <button type="button" onClick={() => { setSelectedCategory("Tech Gadgets"); setCategoriesOpen(false); }} className="w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Tech Gadgets</button>
                <button type="button" onClick={() => { setSelectedCategory("Home Essentials"); setCategoriesOpen(false); }} className="w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Home Essentials</button>
                <button type="button" onClick={() => { setSelectedCategory("Kitchen Finds"); setCategoriesOpen(false); }} className="w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Kitchen Finds</button>
                <button type="button" onClick={() => { setSelectedCategory("Viral Products"); setCategoriesOpen(false); }} className="w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">Viral Products</button>
              </div>
            </div>
            <div ref={mobileContactRef} className="relative">
              <button
                type="button"
                onClick={() => { setMobileContactOpen((prev) => !prev); setCategoriesOpen(false); }}
                className="w-full text-left"
              >
                Contact
              </button>
              <div className={`mt-2 space-y-1 rounded-2xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${mobileContactOpen ? 'block' : 'hidden'}`}>
                <a href="mailto:advertisementgram@gmail.com" onClick={() => { setMenuOpen(false); setMobileContactOpen(false); }} className="block w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">advertisementgram@gmail.com</a>
                <a href="tel:+919579714069" onClick={() => { setMenuOpen(false); setMobileContactOpen(false); }} className="block w-full text-left text-sm text-gray-700 dark:text-gray-200 rounded-xl px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition">+91 9579714069</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <div className="mt-10">
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>

      {/* PRODUCTS */}
      <section id="products" className="mt-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="reveal text-2xl font-semibold mb-8">Latest Drops</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products
              .filter(p =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
                (!selectedCategory || p.categories?.includes(selectedCategory))
              )
              .map((product, index) => {

                const tags = ["💸 Under ₹999", "⚡ Must Have", "💡 Smart Pick", "🔥 Best Seller", "💸 Under ₹299", "💡 Smart Pick"];
                const tag = tags[index];

                return (
                  <div key={product.id}
                    className="group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#111] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 card-hover">

                    {/* IMAGE */}
                    <div className="relative aspect-square bg-gray-100 dark:bg-white flex items-center justify-center">

                      <span className="absolute top-3 left-3 text-xs bg-black text-white px-3 py-1 rounded-full">
                        {tag}
                      </span>

                      <button
                        onClick={() => openShare(product.link)}
                        className="absolute top-3 right-3 bg-black/80 text-white p-2 rounded-full transition"
                      >
                        <Share2 size={16} />
                      </button>

                      <img src={product.image} className="p-4 object-contain h-full" />

                    </div>

                    {/* CONTENT */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold line-clamp-2">
                        {product.title}
                      </h3>

                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block text-center bg-black text-white dark:bg-white dark:text-black py-2 rounded-xl text-sm font-medium hover:opacity-90 transition"
                      >
                        BUY NOW
                      </a>
                    </div>

                  </div>
                );
              })}

          </div>
        </div>
      </section>

      {/* SHARE MODAL */}
      {shareOpen && (
        <div
          onClick={() => setShareOpen(false)}
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#111] p-6 rounded-2xl w-[260px] text-center animate-fadeIn shadow-xl"
          >
            <div className="flex justify-between mb-4">
              <h3 className="font-medium">Share</h3>
              <button onClick={() => setShareOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="flex justify-around">

              <a href={`https://wa.me/?text=${selectedLink}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={22} className="text-green-500" />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={22} className="text-pink-500" />
              </a>

              <button onClick={copyLink}>
                <Copy size={20} />
              </button>

            </div>
          </div>
        </div>
      )}

      <Footer />

    </main>
  );
}