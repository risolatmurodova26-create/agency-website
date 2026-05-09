import './globals.css';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AgencyLanding() {
  return (
    <div className="bg-[#F7F7FA] text-[#111111] font-sans min-h-screen">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
        <div className="z-10 max-w-5xl">
          <span className="inline-block px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5 text-sm font-medium mb-6">
            SMM • MARKETING • CONTENT • TARGET
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            ДЕЛАЕМ МАРКЕТИНГ <br />
            <span className="text-[#7B2FF7] italic font-serif">ЭСТЕТИЧНЫМ</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#6E6E73] max-w-xl mb-10 leading-relaxed">
            Ваш Instagram — это не просто страница. Это первое впечатление о бизнесе и причина, по которой у вас покупают.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://t.me/ВАШ_НИК" 
              target="_blank"
              className="bg-[#7B2FF7] text-white px-10 py-5 rounded-full font-bold hover:shadow-xl hover:shadow-[#7B2FF7]/20 transition-all flex items-center gap-3 active:scale-95"
            >
              ОБСУДИТЬ ПРОЕКТ <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
