import React, { useState } from 'react';
import { Sparkles, Scissors, Droplets, Wind, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import groomingImg from '../assets/images/grooming_bath_tosa_1793889674260.jpg';
import happyPetImg from '../assets/images/happy_pet_showcase_1793889673680.jpg';

interface GroomingSectionProps {
  onSelectGrooming: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const GroomingSection: React.FC<GroomingSectionProps> = ({ onSelectGrooming, onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'process' | 'cuts'>('process');

  const groomingHighlights = [
    {
      icon: <Droplets className="w-5 h-5 text-emerald-700" />,
      title: 'Cosméticos Hipoalergênicos',
      desc: 'Linhas dermatológicas de primeira linha que limpam profundamente sem agredir a barreira cutânea nem irritar os olhos.',
    },
    {
      icon: <Wind className="w-5 h-5 text-emerald-700" />,
      title: 'Secagem Acústica Cuidadosa',
      desc: 'Secadores e sopradores com controle de temperatura e ruído atenuado para pets sensíveis a barulho.',
    },
    {
      icon: <Scissors className="w-5 h-5 text-emerald-700" />,
      title: 'Tosa Especializada & da Raça',
      desc: 'Tosadores experientes em tesoura artesanal, stripping, tosas comerciais e padrões oficiais de cada raça.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      title: 'Toalhas Esterilizadas Individuais',
      desc: 'Cada pet recebe toalha lacrada e esterilizada. Risco zero de contaminação cruzada por fungos ou bactérias.',
    },
  ];

  return (
    <section id="banho-tosa" className="py-16 sm:py-24 bg-white border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <span>Centro de Estética Animal</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Banho & Tosa Especializado</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
              Higiene, beleza e relaxamento: um verdadeiro dia de spa para o seu pet.
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed max-w-2xl">
              Esqueça o medo e o estresse de pet shops comuns. Na Clínica Vet & Pet, cada banho e tosa é uma experiência acolhedora, com água em temperatura ideal, massagem capilar e total visibilidade para os tutores.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <Scissors className="w-4 h-4" />
              <span>Agendar Banho & Tosa</span>
            </button>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photos Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs aspect-4/5 group">
              <img
                src={groomingImg}
                alt="Profissional da estética animal banhando e secando um cão com toalhas macias em cuba limpa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/grooming_bath_tosa.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">Banho Climatizado com Spa</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs aspect-4/5 group">
              <img
                src={happyPetImg}
                alt="Cão alegre com pelo tosado, macio e brilhante após finalização no centro de banho e tosa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/happy_pet_showcase.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-semibold text-white">Pelagem Sedosa & Hidratada</span>
              </div>
            </div>
          </div>

          {/* Details & Services Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 p-1 bg-stone-100 rounded-xl max-w-sm">
              <button
                type="button"
                onClick={() => setActiveTab('process')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'process'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Diferenciais do Nosso Spa
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cuts')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'cuts'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Tipos de Tosa Disponíveis
              </button>
            </div>

            {activeTab === 'process' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groomingHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 hover:border-emerald-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xs font-bold text-stone-900">{item.title}</h3>
                    <p className="mt-1 text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Tosa Higiênica Completa</h4>
                    <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                      Remoção dos pelos entre as almofadas plantares (patinhas), barriga e região perianal. Previne derrapagens e mantém a higiene diária.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectGrooming('banho_tosa_higienica')}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 whitespace-nowrap pt-1 cursor-pointer"
                  >
                    Simular &rarr;
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Tosa da Raça / Padrão Oficial</h4>
                    <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                      Especialidade para Schnauzer, Poodle, Maltês, Shih-tzu, Spitz Alemão e Golden Retriever. Respeita as linhas e volumes característicos.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectGrooming('banho_tosa_completa')}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 whitespace-nowrap pt-1 cursor-pointer"
                  >
                    Simular &rarr;
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">Tosa Bebê & Tosa na Tesoura</h4>
                    <p className="mt-1 text-xs text-stone-600 leading-relaxed">
                      Corte suave e arredondado todo moldado na tesoura por tosadores profissionais, ideal para quem quer um toque macio de filhote.
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectGrooming('banho_tosa_completa')}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 whitespace-nowrap pt-1 cursor-pointer"
                  >
                    Simular &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Quick banner about fear-free guarantee */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-emerald-700 shrink-0" />
                <p className="text-xs text-emerald-950">
                  <strong className="font-semibold">Transparência total:</strong> Você pode assistir a todo o procedimento pela janela panorâmica climatizada.
                </p>
              </div>
              <button
                onClick={() => onSelectGrooming('banho_relaxante')}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline underline-offset-2 whitespace-nowrap cursor-pointer"
              >
                Ver Valores
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
