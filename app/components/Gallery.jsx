 "use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const particles = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: index % 4 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  delay: `${(index % 8) * 0.4}s`,
  duration: `${5 + (index % 6) * 0.5}s`,
  drift: `${index % 2 === 0 ? 20 + (index % 5) * 5 : -20 - (index % 5) * 5}px`,
}));

export default function Gallery() {
  const { language } = useLanguage();
  const gallery = [
    {
      titleZh: "鋅盆及廚房通渠",
      titleEn: "Kitchen Drain Cleaning",
      category: "KITCHEN DRAIN",
      image: "/gallery/1.png",
    },
    {
      titleZh: "浴室地漏疏通",
      titleEn: "Bathroom Drain Service",
      category: "BATHROOM DRAIN",
      image: "/gallery/2.png",
    },
    {
      titleZh: "住宅渠管保養",
      titleEn: "Pipe Maintenance",
      category: "PIPE MAINTENANCE",
      image: "/gallery/3.png",
    },
    {
      titleZh: "24小時緊急通渠",
      titleEn: "Emergency Service",
      category: "EMERGENCY",
      image: "/gallery/4.png",
    },
    {
      titleZh: "高壓水射通渠",
      titleEn: "High Pressure Jetting",
      category: "JETTING",
      image: "/gallery/5.png",
    },
    {
      titleZh: "商業渠務工程",
      titleEn: "Commercial Project",
      category: "COMMERCIAL",
      image: "/gallery/6.png",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#031018] py-24 text-white"
    >
      <style jsx>{`
        @keyframes galleryParticleFloat {
          0% { transform: translate3d(0,18px,0) scale(.72); opacity:0; }
          18% { opacity:.9; }
          72% { opacity:.55; }
          100% { transform: translate3d(var(--drift),-64px,0) scale(1.05); opacity:0; }
        }

        @keyframes galleryParticlePulse {
          0%,100% { box-shadow:0 0 8px rgba(103,232,249,.35); }
          50% { box-shadow:0 0 18px rgba(103,232,249,.9); }
        }

        @keyframes scanLine {
          0% { transform:translateY(-120%); opacity:0; }
          12%,88% { opacity:.95; }
          100% { transform:translateY(120%); opacity:0; }
        }

        .gallery-particle {
          position:absolute;
          border-radius:9999px;
          background:radial-gradient(circle,
          rgba(255,255,255,.95) 0%,
          rgba(103,232,249,.95) 32%,
          rgba(34,211,238,.12) 72%,
          transparent 100%);
          animation:
            galleryParticleFloat var(--duration) ease-in-out infinite,
            galleryParticlePulse 2.5s ease-in-out infinite;
          animation-delay:var(--delay);
          pointer-events:none;
        }

        .gallery-card::before{
          content:"";
          position:absolute;
          inset:-60% 0;
          background:linear-gradient(
            180deg,
            transparent 0%,
            transparent 42%,
            rgba(103,232,249,.08) 47%,
            rgba(103,232,249,.35) 50%,
            rgba(103,232,249,.08) 53%,
            transparent 58%,
            transparent 100%
          );
          transform:translateY(-120%);
          animation:scanLine 5s linear infinite;
          pointer-events:none;
          z-index:2;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.12),transparent_32%),linear-gradient(180deg,rgba(2,19,30,0.2),rgba(2,8,14,0.96))]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(34,211,238,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-1/2 top-0 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="gallery-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              "--delay": particle.delay,
              "--duration": particle.duration,
              "--drift": particle.drift,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-4 text-cyan-300">
            <span className="h-px w-10 bg-cyan-300/70" />
            <span className="text-xs font-semibold tracking-[0.45em]">///</span>
            <span className="h-px w-10 bg-cyan-300/70" />
          </div>

          <h2 className="text-3xl font-black tracking-[0.12em] md:text-5xl">
            {language === "zh" ? "施工案例展示" : "Project Gallery"}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-300">
            {language === "zh"
              ? "真實施工案例分享，包括鋅盆堵塞、浴室地渠、高壓通渠及商業渠務工程。"
              : "Real drainage projects including kitchen drains, bathroom blockages, jetting services and commercial drainage works."}
          </p>

          <p className="mt-2 text-xs font-semibold tracking-[0.42em] text-cyan-200/80">
            PROJECT GALLERY
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="gallery-card group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-[#061b25]/80 shadow-[0_0_28px_rgba(0,216,255,0.12)] backdrop-blur transition duration-300 hover:border-cyan-200/70 hover:shadow-[0_0_42px_rgba(0,216,255,0.28)]"
            >
              <div className="absolute left-3 top-3 z-[3] h-3 w-3 border-l border-t border-cyan-300/60" />
              <div className="absolute right-3 top-3 z-[3] h-3 w-3 border-r border-t border-cyan-300/60" />
              <div className="absolute bottom-3 left-3 z-[3] h-3 w-3 border-b border-l border-cyan-300/60" />
              <div className="absolute bottom-3 right-3 z-[3] h-3 w-3 border-b border-r border-cyan-300/60" />

              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={language === "zh" ? item.titleZh : item.titleEn}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#031018] via-transparent to-transparent" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-cyan-300/40 bg-black/40 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-cyan-200 backdrop-blur">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold tracking-[0.06em] text-white">
                  {language === "zh" ? item.titleZh : item.titleEn}
                </h3>

                <div className="mt-3 h-px w-16 bg-gradient-to-r from-cyan-300 to-transparent" />

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {language === "zh"
                    ? "專業團隊採用先進設備施工，快速解決各類渠管堵塞問題。"
                    : "Professional drainage solutions using advanced equipment and proven techniques."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
