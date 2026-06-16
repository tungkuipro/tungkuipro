

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Menu, X, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const navItems = [
  { zh: "首頁", en: "HOME", href: "#home" },

  { zh: "服務項目", en: "SERVICES", href: "#services" },

  { zh: "施工前後", en: "RESULTS", href: "#before-after" },

  { zh: "施工案例", en: "GALLERY", href: "#gallery" },

  { zh: "客戶評價", en: "REVIEWS", href: "#reviews" },

  { zh: "線上預約", en: "BOOKING", href: "#booking" },

  { zh: "聯絡我們", en: "CONTACT", href: "#location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-cyan-300/20 bg-[#020812]/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          <a
            href="#home"
            className="relative text-xl md:text-2xl font-black tracking-[0.18em] text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          >
            TUNGKUI PRO
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-semibold tracking-[0.08em] text-cyan-100 transition hover:text-cyan-300"
              >
                {language === "zh" ? item.zh : item.en}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:+85297631811"
              className="flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-100 transition hover:border-cyan-200"
            >
              <Phone size={15} />
              <span className="text-sm font-semibold">
                +852 9763 1811
              </span>
            </a>

            <a
              href="https://wa.me/85297631811"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-black/20 px-4 py-2 text-cyan-100 transition hover:bg-cyan-300/10"
            >
              <MessageCircle size={15} />
            </a>

            <button
              onClick={() =>
                setLanguage(language === "zh" ? "en" : "zh")
              }
              className="flex items-center gap-2 rounded-lg border border-cyan-300/50 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200"
            >
              <Globe size={15} />
              {language === "zh" ? "EN" : "中文"}
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cyan-200"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-[60] w-[300px] border-l border-cyan-300/20 bg-[#020812]/95 backdrop-blur-2xl"
          >
            <div className="flex h-20 items-center justify-between border-b border-cyan-300/20 px-6">
              <span className="font-black tracking-wider text-cyan-300">
                MENU
              </span>

              <button
                onClick={() => setOpen(false)}
                className="text-cyan-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col p-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cyan-300/10 py-4 text-cyan-100"
                >
                  {language === "zh" ? item.zh : item.en}
                </a>
              ))}

              <button
                onClick={() =>
                  setLanguage(language === "zh" ? "en" : "zh")
                }
                className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-cyan-300/30 py-3 text-cyan-200"
              >
                <Globe size={16} />
                {language === "zh" ? "EN" : "中文"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

