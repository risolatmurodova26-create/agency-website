import React from 'react';

export default function AgencyLanding() {
  return (
    <div className="bg-[#F7F7FA] text-[#111111] font-sans min-h-screen">
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="z-10 max-w-5xl">
          <span className="px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 inline-block">
            SMM • MARKETING • CONTENT • TARGET
          </span>
          <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8">
            ДЕЛАЕМ МАРКЕТИНГ,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2FF7] to-[#C084FC]">ЗА КОТОРЫЙ НЕ СТЫДНО</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6E6E73] max-w-xl mb-10">
            Ваш Instagram — это не просто страница. Это первое впечатление о бизнесе и причина, почему выбирают именно вас.
          </p>
          <button className="bg-[#7B2FF7] text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_10px_30px_rgba(123,47,247,0.3)] transition-all">
            ОБСУДИТЬ ПРОЕКТ
          </button>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-12">УСЛУГИ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 rounded-[32px] bg-white border border-black/5 hover:border-[#7B2FF7]/30 transition-all">
            <h3 className="text-2xl font-bold mb-4">SMM</h3>
            <p className="text-[#6E6E73]">Полное ведение Instagram для бизнеса, который хочет расти.</p>
          </div>
          <div className="p-10 rounded-[32px] bg-white border border-black/5 hover:border-[#7B2FF7]/30 transition-all">
            <h3 className="text-2xl font-bold mb-4">ТАРГЕТ</h3>
            <p className="text-[#6E6E73]">Настраиваем рекламу, которая помогает расти, а не сливает бюджет.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
