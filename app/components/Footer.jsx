 "use client";

import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/20 bg-[#020812] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-black text-cyan-300">
            {language === "zh"
              ? "24小時緊急通渠服務"
              : "24 Hours Emergency Drainage Service"}
          </h3>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <a href="tel:+85297631811" className="flex items-center gap-2 rounded-lg border border-cyan-300/30 px-5 py-3">
            <Phone size={18} />
            +852 9763 1811
          </a>

          <a href="https://wa.me/85297631811" className="flex items-center gap-2 rounded-lg border border-cyan-300/30 px-5 py-3">
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <div className="mt-10 text-center text-sm text-cyan-100/70">
          <p>TUNGKUI PRO</p>
          <p>FLAT 2306, 23/F, W668, CASTLE PEAK ROAD, LAI CHI KOK, HONG KONG</p>
          <p className="mt-4">© 2026 TUNGKUI PRO. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
