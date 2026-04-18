'use client';

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

type HeroProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function Hero({ searchQuery, setSearchQuery, selectedCategory, onCategoryChange }: HeroProps) {
  const categories = ["All", "Tech Gadgets", "Home Essentials", "Kitchen Finds", "Viral Products"];

  return (
    <section className="reveal min-h-[80vh] flex items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 dark:bg-white/10 blur-3xl rounded-full transition-all duration-500"></div>

      <div className="relative max-w-2xl w-full">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          ADGRAM
        </motion.h1>

        {/* Category Bar */}
        <motion.div
          className="mt-6 flex gap-2 justify-center flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category === "All" ? "" : category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                (category === "All" && selectedCategory === "") || 
                (category !== "All" && selectedCategory === category)
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200 hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          className="mt-8 flex items-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Search className="text-gray-400" size={18} />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-3 py-3 bg-transparent outline-none transition-colors duration-300"
          />
        </motion.div>

        {/* Button */}
        <motion.a
          href="#products"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Explore Products <ArrowRight size={16} />
        </motion.a>

      </div>
    </section>
  );
}
