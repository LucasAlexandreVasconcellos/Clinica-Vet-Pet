import React from 'react';
import { Heart, MapPin, Phone, Clock, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-800">
          {/* Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white">
                <Heart className="w-4 h-4 fill-white" />
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                Clínica <span className="text-emerald-400">Vet & Pet</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Saúde veterinária preventiva e centro completo de banho e tosa na Asa Norte, Brasília. Compromisso diário com a longevidade e a felicidade do seu animal de estimação.
            </p>
            <div className="text-xs text-stone-400 flex items-center gap-2">
              <span>Responsabilidade Técnica Veterinária</span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span>CRMV-DF</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#sobre" className="hover:text-emerald-400 transition-colors">
                  Sobre a Clínica
                </a>
              </li>
              <li>
                <a href="#clinica" className="hover:text-emerald-400 transition-colors">
                  Consultas & Saúde Animal
                </a>
              </li>
              <li>
                <a href="#banho-tosa" className="hover:text-emerald-400 transition-colors">
                  Centro de Banho & Tosa
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition-colors">
                  Simulador de Preços
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-emerald-400 transition-colors">
                  Como Chegar (CLN 116)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Unidade Asa Norte</h3>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>CLN 116, Bloco E, Loja 63 (Ed. Flamboyant) — Asa Norte, Brasília - DF, 70773-550</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:6132721002" className="hover:text-white transition-colors">
                  (61) 3272-1002
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Seg a Sex: 08h às 18h | Sáb: 08h às 14h</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Clínica Vet & Pet. Todos os direitos reservados.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
