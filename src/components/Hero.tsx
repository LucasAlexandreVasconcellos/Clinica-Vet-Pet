import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToSimulator }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Subtle organic background gradient accents */}
      <div
        className="absolute top-0 right-0 -z-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Proposition & Focal Visual Carrier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Asa Norte · Brasília - DF</span>
              </span>
              <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
              <span className="text-stone-500 sm:text-emerald-800">Ed. Flamboyant, CLN 116</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-stone-900 leading-[1.14] text-balance">
              Saúde animal preventiva e estética completa com carinho e dedicação.
            </h1>

            {/* Value Proposition Body */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Cuidamos do seu melhor amigo com medicina veterinária humanizada, exames, vacinas éticas e um centro estético de banho e tosa livre de estresse, em ambiente moderno e climatizado.
            </p>

            {/* Proof highlights inline */}
            <div className="pt-1 flex flex-wrap gap-y-2 gap-x-6 text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Protocolo Low-Stress</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Vidro Panorâmico no Banho</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Equipe Médica Titulada</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span className="whitespace-nowrap">Agendar Consulta ou Tosa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToSimulator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span className="whitespace-nowrap">Simulador de Serviços & Preços</span>
              </button>
            </div>

            {/* Contact quick note */}
            <p className="text-xs text-stone-500 pt-1">
              Atendimento com hora marcada · Informações e agendamentos pelo telefone ou WhatsApp: <strong className="text-stone-700 font-semibold">(61) 3272-1002</strong>
            </p>
          </div>

          {/* Right Column: Visual Focal Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative clean offset backdrop */}
              <div className="absolute inset-0 bg-emerald-700/5 rounded-3xl transform rotate-2 translate-x-2 translate-y-2 -z-10" />

              <div className="relative overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 shadow-sm aspect-16/10 sm:aspect-4/3 lg:aspect-4/3">
                <img
                  src="/src/assets/images/hero_vet_clinic_1793889672977.jpg"
                  alt="Veterinária atenciosa da Clínica Vet & Pet examinando um golden retriever alegre em consultório moderno e iluminado em Brasília"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Quiet unobtrusive floating badge on visual */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md border border-stone-200/70 p-3 rounded-xl shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-900 leading-tight">Clínica Vet & Pet</p>
                      <p className="text-[11px] text-stone-500">Saúde e estética com respeito e carinho</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                    CLN 116 Norte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Pillar Trust Strip in a full-width row below hero split */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums">15+ Anos</span>
            <p className="text-xs font-semibold text-stone-900">Tradição & Confiança</p>
            <p className="text-xs text-stone-500">Cuidando de gerações de pets na Asa Norte e região.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums">100%</span>
            <p className="text-xs font-semibold text-stone-900">Banho Climatizado</p>
            <p className="text-xs text-stone-500">Água morna e toalhas esterilizadas individuais.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums">Vidro Panorâmico</span>
            <p className="text-xs font-semibold text-stone-900">Transparência Total</p>
            <p className="text-xs text-stone-500">Tutores acompanham todo o banho e tosa de perto.</p>
          </div>

          <div className="space-y-1">
            <span className="text-xl sm:text-2xl font-bold text-emerald-800 tabular-nums">Manejo Positivo</span>
            <p className="text-xs font-semibold text-stone-900">Livre de Traumas</p>
            <p className="text-xs text-stone-500">Equipe paciente, sem sedação desnecessária.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
