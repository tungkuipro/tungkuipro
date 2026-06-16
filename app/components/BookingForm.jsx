"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const particles = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: index % 4 === 0 ? 4 : index % 3 === 0 ? 3 : 2,
  delay: `${(index % 8) * 0.4}s`,
  duration: `${5 + (index % 7) * 0.5}s`,
  drift: `${index % 2 === 0 ? 24 : -24}px`,
}));

export default function BookingForm() {
  const { language } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#031018] py-24 text-white"
    >
      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translate3d(0, 18px, 0) scale(0.72);
            opacity: 0;
          }
          18% {
            opacity: 0.9;
          }
          72% {
            opacity: 0.55;
          }
          100% {
            transform: translate3d(var(--drift), -70px, 0)
              scale(1.08);
            opacity: 0;
          }
        }

        @keyframes particlePulse {
          0%,
          100% {
            box-shadow: 0 0 8px rgba(103, 232, 249, 0.35);
          }
          50% {
            box-shadow: 0 0 18px rgba(103, 232, 249, 0.9);
          }
        }

        @keyframes scanLine {
          0% {
            transform: translateY(-120%);
            opacity: 0;
          }
          12%,
          88% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(120%);
            opacity: 0;
          }
        }

        .particle-dot {
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(103, 232, 249, 0.95) 35%,
            rgba(34, 211, 238, 0.12) 75%,
            transparent 100%
          );

          animation:
            particleFloat var(--duration)
              ease-in-out infinite,
            particlePulse 2.4s ease-in-out infinite;

          animation-delay: var(--delay);
          pointer-events: none;
        }

        .scan-card::before {
          content: "";
          position: absolute;
          inset: -60% 0;

          background: linear-gradient(
            180deg,
            transparent 0%,
            transparent 42%,
            rgba(103, 232, 249, 0.08) 47%,
            rgba(103, 232, 249, 0.35) 50%,
            rgba(103, 232, 249, 0.08) 53%,
            transparent 58%,
            transparent 100%
          );

          transform: translateY(-120%);
          animation: scanLine 5s linear infinite;

          pointer-events: none;
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,229,255,0.14),transparent_32%),linear-gradient(180deg,rgba(2,19,30,0.2),rgba(2,8,14,0.96))]" />

      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(34,211,238,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.22)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-4 text-cyan-300">
            <span className="h-px w-10 bg-cyan-300/70" />
            <span className="text-xs font-semibold tracking-[0.45em]">
              ///
            </span>
            <span className="h-px w-10 bg-cyan-300/70" />
          </div>

          <h2 className="text-4xl font-black tracking-[0.12em] md:text-5xl">
            {language === "zh"
              ? "線上預約"
              : "BOOKING FORM"}
          </h2>

          <p className="mt-2 text-xs font-semibold tracking-[0.42em] text-cyan-200/80">
            BOOKING SERVICE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="scan-card relative overflow-hidden rounded-xl border border-cyan-300/30 bg-[#061b25]/78 p-8 shadow-[0_0_28px_rgba(0,216,255,0.12)] backdrop-blur"
        >
          <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-cyan-300/60" />
          <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-cyan-300/60" />
          <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-cyan-300/60" />
          <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-cyan-300/60" />

          <form className="relative z-10 grid gap-6 md:grid-cols-2">
            <input
              name="name"
              onChange={handleChange}
              placeholder={
                language === "zh" ? "姓名" : "Name"
              }
              className="rounded-xl border border-cyan-300/20 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            />

            <input
              name="phone"
              onChange={handleChange}
              placeholder={
                language === "zh" ? "電話" : "Phone"
              }
              className="rounded-xl border border-cyan-300/20 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            />

            <input
              name="address"
              onChange={handleChange}
              placeholder={
                language === "zh" ? "地址" : "Address"
              }
              className="md:col-span-2 rounded-xl border border-cyan-300/20 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            />

            <select
              name="service"
              onChange={handleChange}
              className="md:col-span-2 rounded-xl border border-cyan-300/20 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-300"
            >
              <option>
                {language === "zh"
                  ? "選擇服務"
                  : "Select Service"}
              </option>

              <option>
                {language === "zh"
                  ? "廚房通渠"
                  : "Kitchen Drain Cleaning"}
              </option>

              <option>
                {language === "zh"
                  ? "浴室淤塞"
                  : "Bathroom Unblocking"}
              </option>

              <option>CCTV Inspection</option>
              <option>High Pressure Jetting</option>
            </select>

            <textarea
              rows={6}
              name="message"
              onChange={handleChange}
              placeholder={
                language === "zh"
                  ? "服務需求"
                  : "Service Request"
              }
              className="md:col-span-2 rounded-xl border border-cyan-300/20 bg-black/30 px-5 py-4 outline-none transition focus:border-cyan-300 focus:shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            />

            <button
              type="submit"
              className="md:col-span-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 hover:shadow-[0_0_42px_rgba(34,211,238,0.55)]"
            >
              <Send size={18} />
              {language === "zh"
                ? "提交預約"
                : "Submit Booking"}
            </button>
          </form>

          <a
            href="https://wa.me/85297631811"
            target="_blank"
            rel="noreferrer"
            className="relative z-10 mt-6 flex items-center justify-center gap-2 rounded-xl border border-cyan-300/30 bg-black/20 p-4 text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            <MessageCircle size={18} />
            WhatsApp Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}