import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, ExternalLink, Car } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const googleMapsUrl =
    'https://www.google.com/maps/place/Clinica+Vet+%26+Pet/@-15.7370594,-47.8962094,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3b6c4c131459:0x3e9c567aaabc4c9!8m2!3d-15.7370646!4d-47.8936291!16s%2Fg%2F11grv4y007';

  const fullAddress = 'CLN 116, Bloco E, Loja 63, Edifício Flamboyant — Asa Norte, Brasília - DF, CEP 70773-550';

  const copyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Fácil Acesso em Brasília</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Estacionamento Amplo</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Onde estamos: no coração da Asa Norte.
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Localização privilegiada na comercial da 116 Norte, com vagas de estacionamento em frente e fácil desembarque com segurança para o seu pet.
          </p>
        </div>

        {/* 2-Column Info & Interactive Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/80 shadow-xs space-y-6">
              {/* Address card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Endereço Completo</h3>
                  <p className="text-sm font-semibold text-stone-800">
                    CLN 116, Bloco E, Loja 63
                  </p>
                  <p className="text-xs text-stone-500">
                    Edifício Flamboyant — Asa Norte, Brasília - DF, CEP 70773-550
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={copyAddress}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Endereço copiado!</span>
                        </>
                      ) : (
                        <span>Copiar endereço para o Waze / GPS</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Telefone & WhatsApp</h3>
                  <p className="text-sm font-semibold text-stone-800">
                    (61) 3272-1002
                  </p>
                  <p className="text-xs text-stone-500">
                    Atendimento rápido para dúvidas e confirmações de horário.
                  </p>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Horário de Funcionamento</h3>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-stone-600">Segunda a Sexta:</span>
                      <span className="font-semibold text-stone-900 tabular-nums">08:00 às 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Sábado:</span>
                      <span className="font-semibold text-stone-900 tabular-nums">08:00 às 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Domingo e Feriados:</span>
                      <span className="text-stone-500">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking tip */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/60 flex items-center gap-3 text-xs text-stone-600">
                <Car className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Estacionamento público amplo e arborizado bem em frente à loja.</span>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors"
            >
              <Navigation className="w-4 h-4" />
              <span>Abrir Localização no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Map Visual / Route Embed Mockup */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs flex flex-col">
            {/* Visual map interface representation */}
            <div className="relative flex-1 min-h-[340px] bg-emerald-50/30 flex items-center justify-center p-6 text-center">
              {/* Map grid lines background styling */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(#059669 1px, transparent 1px), radial-gradient(#059669 1px, #fbfbf9 1px)',
                  backgroundSize: '32px 32px',
                  backgroundPosition: '0 0, 16px 16px',
                }}
              />

              <div className="relative max-w-md bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-stone-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-sm">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-stone-900">Clínica Vet & Pet</h4>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">CLN 116 Bloco E, Loja 63</p>
                  <p className="text-xs text-stone-500 mt-1">
                    Edifício Flamboyant — Asa Norte, Brasília
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5 tabular-nums">
                    Coordenadas: -15.7370646, -47.8936291
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Iniciar Rota GPS</span>
                  </a>
                  <a
                    href="tel:6132721002"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-500" />
                    <span>Ligar (61) 3272-1002</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map footer detail */}
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-2">
              <span>Como chegar: entrada principal pela comercial da W3 Norte / L1.</span>
              <span className="font-semibold text-emerald-800">Referência: Próximo à praça da 116 Norte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
