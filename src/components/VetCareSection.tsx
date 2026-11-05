import React from 'react';
import { Stethoscope, Syringe, Activity, Sparkles, Shield, AlertCircle, ArrowUpRight } from 'lucide-react';

interface VetCareSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const VetCareSection: React.FC<VetCareSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const vetServices = [
    {
      id: 'consulta_geral',
      title: '01. Consulta Clínica Geral & Check-up',
      desc: 'Anamnese detalhada, palpação, verificação de mucosas, ausculta cardiopulmonar e orientações nutricionais preventivas.',
      badge: 'Essencial',
    },
    {
      id: 'vacinacao',
      title: '02. Vacinação Ética e Imunização',
      desc: 'Protocolos personalizados com vacinas importadas de alta eficácia (V8/V10, Antirrábica, Giárdia, Gripe Canina e Quádrupla Felina).',
      badge: 'Preventivo',
    },
    {
      id: 'dermatologia',
      title: '03. Dermatologia & Alergologia',
      desc: 'Tratamento eficaz de prurido (coceiras), alergias alimentares, sarnas, fungos e otites crônicas com citologia diagnóstica.',
      badge: 'Especialidade',
    },
    {
      id: 'checkup_preventivo',
      title: '04. Diagnóstico & Exames Laboratoriais',
      desc: 'Hemograma completo, perfis renais, hepáticos, glicemia e coletas rápidas para detecção precoce de doenças.',
      badge: 'Diagnóstico',
    },
    {
      id: 'odontologia',
      title: '05. Odontologia & Profilaxia de Tártaro',
      desc: 'Remoção ultrassônica de cálculo dentário com polimento e controle de halitose para prevenir infecções cardíacas e renais.',
      badge: 'Higiene Clínica',
    },
    {
      id: 'cirurgias',
      title: '06. Cirurgias Eletivas & Castração Segura',
      desc: 'Procedimentos cirúrgicos com anestesia inalatória moderna, monitor multiparamétrico contínuo e recuperação aquecida.',
      badge: 'Centro Cirúrgico',
    },
  ];

  return (
    <section id="clinica" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
              <span>Saúde Animal</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Medicina Veterinária de Excelência</span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
              Diagnósticos precisos, prevenção contínua e cuidado em cada detalhe.
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed max-w-2xl">
              Nossa clínica em Brasília conta com consultórios estruturados, equipamentos modernos de monitoramento e veterinários apaixonados pela vida e conforto do seu pet.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Agendar Consulta Veterinária</span>
            </button>
          </div>
        </div>

        {/* Content Layout: Asymmetric Bento Grid with photo feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left feature card with photo */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-stone-200/80 overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
              <img
                src="/src/assets/images/vet_care_cat_1793889674443.jpg"
                alt="Veterinária atenta examinando um gato saudável com estetoscópio em ambiente calmo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-emerald-900">
                Consulta Felina Sem Estresse
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Atenção Especial</span>
                <h3 className="text-lg font-bold text-stone-900 mt-1">Ambiente Amigável para Felinos & Caninos</h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Sabemos que gatos e cães demandam aproximações clínicas diferentes. Nossos profissionais utilizam técnicas de manejo gentil com feromônios calmantes e toque calmo para exames sem agitação.
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">Dúvidas sobre sintomas?</span>
                <button
                  onClick={() => onSelectService('consulta_geral')}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Simular no Agendador</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right services list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vetServices.map((service) => (
              <div
                key={service.id}
                className="p-5 rounded-2xl bg-white border border-stone-200/80 hover:border-emerald-300 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {service.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="text-xs font-semibold text-stone-700 group-hover:text-emerald-800 inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Calcular valor e agendar</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
