import React from 'react';
import { HeartHandshake, Eye, Sparkles, Clock, Stethoscope, Scissors } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 bg-white border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
            <span>Sobre Nós</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Tradição na Asa Norte</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Um refúgio de tranquilidade, saúde e bem-estar para cães e gatos em Brasília.
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Localizada no tradicional Edifício Flamboyant na CLN 116, a <strong className="text-stone-800">Clínica Vet & Pet</strong> nasceu do desejo de proporcionar aos tutores um espaço completo: onde o rigor clínico da medicina veterinária caminha lado a lado com um centro de banho e tosa acolhedor, transparente e verdadeiramente respeitoso aos limites de cada animal.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
              <Stethoscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Medicina Humanizada</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Exames minuciosos e diagnósticos claros. Explicamos cada etapa do tratamento ao tutor com empatia e transparência.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Vidro Panorâmico</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Nosso centro estético conta com visores de vidro para que você possa acompanhar o banho e tosa do seu pet em tempo real.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Manejo Low-Stress</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Respeitamos o tempo do animal: sem movimentos bruscos, secadores com ruído controlado e pausas para adaptação e afeto.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-200 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-stone-900">Horários Pontuais</h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Atendimento programado para evitar longas esperas em gaiolas e reduzir o estresse de convivência com outros pets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
