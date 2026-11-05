import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Preciso agendar com antecedência para o banho e tosa?',
      a: 'Sim, recomendamos fortemente o agendamento prévio. Trabalhamos com capacidade controlada para garantir que nenhum animal fique esperando longas horas em gaiolas e que nossa equipe dedique tempo exclusivo e sem pressa ao seu pet.',
    },
    {
      q: 'Posso acompanhar o banho e a tosa do meu pet presencialmente?',
      a: 'Com certeza! Nosso espaço estético conta com divisórias de vidro panorâmico de frente para a área de espera. Você pode acompanhar cada etapa com total transparência e tranquilidade.',
    },
    {
      q: 'Quais vacinas cães e gatos precisam tomar anualmente?',
      a: 'Para cães, o protocolo anual inclui a vacina polivalente (V8 ou V10), antirrábica, vacina contra gripe canina e giárdia. Para gatos, a vacina quádrupla ou quíntupla felina (V4/V5) e antirrábica. Na consulta prévia, o veterinário avalia o estilo de vida do pet para prescrever o protocolo exato.',
    },
    {
      q: 'Vocês atendem pets idosos, cardíacos ou com necessidades especiais no banho?',
      a: 'Sim. Por sermos uma clínica veterinária integrada, nossos banhos e tosas contam com supervisão profissional caso seja necessário. Ajustamos a temperatura da água, utilizamos tapetes antiderrapantes, pausas para descanso e secadores especiais de baixo ruído.',
    },
    {
      q: 'O que é o banho com ozonioterapia e para quem é indicado?',
      a: 'A água ozonizada possui propriedades antissépticas, fungicidas e anti-inflamatórias naturais. É excelente para animais com dermatites, pele sensível, foliculite, descamação ou para potencializar a maciez e brilho da pelagem.',
    },
    {
      q: 'Quais são as formas de pagamento aceitas?',
      a: 'Aceitamos cartões de crédito e débito (com opção de parcelamento para procedimentos clínicos e cirurgias), PIX e dinheiro.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tire Suas Dúvidas</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Tudo o que você precisa saber antes de nos visitar.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-stone-200/80 rounded-xl overflow-hidden transition-colors bg-stone-50/50 hover:border-emerald-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-stone-900 focus:outline-none focus-visible:bg-stone-100 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
