"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href={`https://wa.me/85297631811?text=您好，我想查詢通渠服務`}
        target="_blank"
        className="h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_50px_rgba(0,255,255,.5)] animate-pulse"
      >
        <MessageCircle className="text-black" size={28} />
      </a>
    </div>
  );
}
