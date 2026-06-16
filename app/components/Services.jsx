"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const services = [
  {
    icon: "kitchen",
    titleZh: "廚房喉管疏導",
    titleEn: "Kitchen Drain Cleaning",
    subtitle: "KITCHEN DRAIN CLEANING",
    descriptionZh: "快速清除油脂、食物殘渣及堵塞問題。",
    descriptionEn: "Quickly removes grease, food waste and drain blockages.",
  },
  {
    icon: "bathroom",
    titleZh: "浴室淤塞處理",
    titleEn: "Bathroom Unblocking",
    subtitle: "BATHROOM UNBLOCKING",
    descriptionZh: "解決頭髮、皂垢及排水不暢問題。",
    descriptionEn: "Eliminates hair, soap scum and drainage issues.",
  },
  {
    icon: "pressure",
    titleZh: "高壓通渠服務",
    titleEn: "High Pressure Jetting",
    subtitle: "HIGH PRESSURE JETTING",
    descriptionZh: "專業設備高效處理頑固堵塞。",
    descriptionEn: "Professional equipment for stubborn blockages.",
  },
  {
    icon: "inspection",
    titleZh: "CCTV 管道檢測",
    titleEn: "CCTV Pipe Inspection",
    subtitle: "CCTV PIPE INSPECTION",
    descriptionZh: "使用管道鏡頭檢查喉管裂縫、異物及淤塞位置。",
    descriptionEn: "Camera inspection for cracks and blockage locations.",
  },
  {
    icon: "maintenance",
    titleZh: "定期保養清潔",
    titleEn: "Regular Maintenance",
    subtitle: "REGULAR MAINTENANCE",
    descriptionZh: "為住宅、商舖及餐飲場所提供定期渠務保養方案。",
    descriptionEn: "Scheduled maintenance plans for homes and businesses.",
  },
];

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: index % 4 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  delay: `${(index % 9) * 0.45}s`,
  duration: `${5 + (index % 7) * 0.55}s`,
  drift: `${index % 2 === 0 ? 18 + (index % 5) * 6 : -18 - (index % 5) * 6}px`,
}));

function ServiceIcon({ type }) {
  const svgProps = {
    width: 72,
    height: 72,
    viewBox: "0 0 72 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className:
      "h-16 w-16 text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:text-cyan-100",
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    kitchen: (
      <svg {...svgProps}>
        <path {...strokeProps} d="M22 31h28" />
        <path {...strokeProps} d="M25 31v-6c0-4 3-7 7-7h8c4 0 7 3 7 7v6" />
        <path {...strokeProps} d="M20 35h32l-3 17H23l-3-17Z" />
        <path {...strokeProps} d="M30 40v7M36 40v7M42 40v7M30 16v-4M42 16v-4" />
        <path {...strokeProps} d="M18 56h36" opacity="0.6" />
      </svg>
    ),
    bathroom: (
      <svg {...svgProps}>
        <path {...strokeProps} d="M24 18v19M24 22h11c5 0 9 4 9 9v6" />
        <path {...strokeProps} d="M20 37h34v6c0 7-6 13-13 13h-8c-7 0-13-6-13-13v-6Z" />
        <path {...strokeProps} d="M30 56l-3 5M44 56l3 5M30 15h10" />
        <path {...strokeProps} d="M31 29h10" opacity="0.65" />
      </svg>
    ),
    pressure: (
      <svg {...svgProps}>
        <path {...strokeProps} d="M17 41h23c5 0 9-4 9-9s-4-9-9-9H27" />
        <path {...strokeProps} d="M24 23l-6 6 6 6M49 32h8M56 25l7 7-7 7" />
        <path {...strokeProps} d="M22 50h24" opacity="0.75" />
        <path {...strokeProps} d="M27 57h14" opacity="0.55" />
        <path {...strokeProps} d="M33 17l4-6 4 6" />
      </svg>
    ),
    inspection: (
      <svg {...svgProps}>
        <path {...strokeProps} d="M18 26h28c5 0 9 4 9 9s-4 9-9 9H29" />
        <path {...strokeProps} d="M29 44l-7 7M22 51h-5M47 35h11" opacity="0.8" />
        <circle {...strokeProps} cx="32" cy="35" r="8" />
        <circle cx="32" cy="35" r="2.6" fill="currentColor" />
        <path {...strokeProps} d="M15 19h16M15 56h25" opacity="0.6" />
      </svg>
    ),
    maintenance: (
      <svg {...svgProps}>
        <path {...strokeProps} d="M36 16v7M36 49v7M22 23l5 5M45 45l5 5M16 36h7M49 36h7M22 49l5-5M45 27l5-5" />
        <circle {...strokeProps} cx="36" cy="36" r="12" />
        <path {...strokeProps} d="M31 36l3 3 8-8" />
        <path {...strokeProps} d="M19 61h34" opacity="0.55" />
      </svg>
    ),
  };

  return icons[type] ?? null;
}

export default function Services() {
  const { language } = useLanguage();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#031018] py-20 text-white"
    >
      <style jsx>{`
        @keyframes scanLine {
          0% { transform: translateY(-120%); opacity: 0; }
          12%, 88% { opacity: 0.95; }
          100% { transform: translateY(120%); opacity: 0; }
        }

        @keyframes scanGlow {
          0%, 100% { opacity: 0.28; }
          50% { opacity: 0.72; }
        }

        @keyframes particleFloat {
          0% { transform: translate3d(0, 18px, 0) scale(0.72); opacity: 0; }
          18% { opacity: 0.9; }
          72% { opacity: 0.55; }
          100% { transform: translate3d(var(--drift), -64px, 0) scale(1.05); opacity: 0; }
        }

        @keyframes particlePulse {
          0%, 100% { box-shadow: 0 0 8px rgba(103, 232, 249, 0.35); }
          50% { box-shadow: 0 0 18px rgba(103, 232, 249, 0.9); }
        }

        .service-scan-card::before {
          content: "";
          position: absolute;
          inset: -60% 0;
          background: linear-gradient(180deg, transparent 0%, transparent 42%, rgba(103, 232, 249, 0.08) 47%, rgba(103, 232, 249, 0.38) 50%, rgba(103, 232, 249, 0.08) 53%, transparent 58%, transparent 100%);
          transform: translateY(-120%);
          animation: scanLine 4.8s linear infinite;
          pointer-events: none;
          z-index: 2;
        }

        .service-scan-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(180deg, rgba(103, 232, 249, 0.085) 0px, rgba(103, 232, 249, 0.085) 1px, transparent 1px, transparent 7px);
          mix-blend-mode: screen;
          opacity: 0.28;
          animation: scanGlow 3.2s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        .particle-dot {
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(103,232,249,0.95) 32%, rgba(34,211,238,0.12) 72%, transparent 100%);
          animation: particleFloat var(--duration) ease-in-out infinite, particlePulse 2.4s ease-in-out infinite;
          animation-delay: var(--delay);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.14),transparent_32%),linear-gradient(180deg,rgba(2,19,30,0.2),rgba(2,8,14,0.96))]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(34,211,238,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-1/2 top-0 h-px w-[74%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle-dot"
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
          className="mb-10 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-4 text-cyan-300">
            <span className="h-px w-10 bg-cyan-300/70" />
            <span className="text-xs font-semibold tracking-[0.45em]">///</span>
            <span className="h-px w-10 bg-cyan-300/70" />
          </div>
          <h3 className="text-3xl font-black tracking-[0.12em] md:text-5xl">{language === "zh" ? "服務項目" : "OUR SERVICES"}</h3>
          <p className="mt-2 text-xs font-semibold tracking-[0.42em] text-cyan-200/80">
            {language === "zh" ? "SERVICES" : "SERVICE LIST"}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <motion.div
              key={language === "zh" ? service.titleZh : service.titleEn}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="service-scan-card group relative overflow-hidden rounded-xl border border-cyan-300/30 bg-[#061b25]/78 p-6 text-center shadow-[0_0_28px_rgba(0,216,255,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:shadow-[0_0_42px_rgba(0,216,255,0.28)]"
            >
              <div className="absolute left-3 top-3 z-[3] h-3 w-3 border-l border-t border-cyan-300/60" />
              <div className="absolute right-3 top-3 z-[3] h-3 w-3 border-r border-t border-cyan-300/60" />
              <div className="absolute bottom-3 left-3 z-[3] h-3 w-3 border-b border-l border-cyan-300/60" />
              <div className="absolute bottom-3 right-3 z-[3] h-3 w-3 border-b border-r border-cyan-300/60" />
              <div className="absolute inset-x-8 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_48%)] opacity-70" />

              <div className="relative z-[4] mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/[0.06] shadow-[inset_0_0_24px_rgba(34,211,238,0.08),0_0_26px_rgba(34,211,238,0.12)]">
                <ServiceIcon type={service.icon} />
              </div>

              <h4 className="relative z-[4] text-base font-bold tracking-[0.08em] text-white">
                {language === "zh" ? service.titleZh : service.titleEn}
              </h4>
              <p className="relative z-[4] mt-1 min-h-[28px] text-[9px] font-semibold leading-4 tracking-[0.16em] text-cyan-200/80">
                {service.subtitle}
              </p>
              <p className="relative z-[4] mt-4 text-sm leading-7 text-slate-300">
                {language === "zh" ? service.descriptionZh : service.descriptionEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
