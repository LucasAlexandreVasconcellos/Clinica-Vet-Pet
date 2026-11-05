import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      tutor: 'Camila Siqueira',
      role: 'Tutora do Golden Frederico',
      location: 'Asa Norte - SQN 215',
      stars: 5,
      comment:
        'O Frederico tem fobia de secador e sempre voltava estressado de outros lugares. Na Clínica Vet & Pet a equipe teve uma paciência surreal, usou secador brando e me deixou acompanhar pela vidraça. O pêlo dele voltou maravilhoso e ele saiu abanando o rabo!',
    },
    {
      tutor: 'Rodrigo Mendonça',
      role: 'Tutor dos gatos Simba e Luna',
      location: 'Asa Norte - CLN 116',
      stars: 5,
      comment:
        'Excelente atendimento veterinário. A doutora foi muito cuidadosa na vacinação e no check-up anual dos meus dois gatos. Consultório super silencioso e limpo, sem cheiro forte de químicos. Recomendo de olhos fechados.',
    },
    {
      tutor: 'Beatriz Alencar',
      role: 'Tutora da Maltês Mel',
      location: 'Asa Norte - SQN 416',
      stars: 5,
      comment:
        'A tosa na tesoura da Mel ficou perfeita, com acabamento impecável de carinha redondinha. E o banho com ozônio tirou completamente aquela coceira que ela tinha na barriguinha. Melhor clínica e pet da região.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
            <span>Depoimentos Reais</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Avaliações de Tutores</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            A tranquilidade de quem confia seu amor à nossa equipe.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col justify-between hover:border-emerald-200 transition-colors shadow-xs"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4" aria-label="5 estrelas">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-stone-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-stone-900">{t.tutor}</h3>
                  <p className="text-[11px] text-stone-500">{t.role}</p>
                </div>
                <span className="text-[11px] text-emerald-800 font-medium">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
