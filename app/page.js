import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          ДЕЛАЕМ МАРКЕТИНГ <br />
          <span className="text-brand-accent italic">ЭСТЕТИЧНЫМ</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Создаем визуальные стратегии и контент, который влюбляет аудиторию в ваш бренд с первого взгляда.
        </p>
        <button className="bg-brand-accent text-white px-10 py-4 rounded-full text-lg font-medium flex items-center gap-3 mx-auto hover:opacity-90 transition-all">
          Начать проект <ArrowRight size={20} />
        </button>
      </div>
    </main>
  );
}
