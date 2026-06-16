 "use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function GoogleMap() {
  const { language } = useLanguage();
  return (
    <section id="location" className="relative overflow-hidden bg-[#031018] py-24 text-white">
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(34,211,238,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-4 text-cyan-300">
            <span className="h-px w-10 bg-cyan-300/70" />
            <span className="text-xs font-semibold tracking-[0.45em]">///</span>
            <span className="h-px w-10 bg-cyan-300/70" />
          </div>

          <h2 className="text-3xl font-black md:text-5xl">
            {language === "zh" ? "我們的位置" : "Our Location"}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl border border-cyan-300/30 bg-[#061b25]/80 p-4 backdrop-blur"
        >
          <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-cyan-300/60" />
          <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-cyan-300/60" />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cyan-300/60" />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cyan-300/60" />

          <iframe
            src="https://maps.google.com/maps?q=W668%20Lai%20Chi%20Kok&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />

          <div className="mt-4 rounded-lg border border-cyan-300/20 bg-black/20 p-4">
            <div className="font-bold text-cyan-300">TUNGKUI PRO</div>
            <div className="text-sm text-slate-300">+852 9763 1811</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
