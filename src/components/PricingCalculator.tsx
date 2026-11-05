import React, { useState, useMemo } from 'react';
import {
  PetSpecies,
  PetSize,
  CoatType,
  VET_SERVICES,
  GROOMING_SERVICES,
  ADDONS_LIST,
  calculateServiceEstimate,
  formatBRL,
  generateWhatsAppLink,
} from '../utils/pricing';
import { Sparkles, Clock, Check, MessageSquare, ArrowRight, Dog, Cat, ShieldCheck } from 'lucide-react';

interface PricingCalculatorProps {
  initialServiceId?: string;
  onOpenBookingModalWithData: (data: {
    species: PetSpecies;
    size: PetSize;
    serviceName: string;
    estimatedPrice: number;
  }) => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  initialServiceId,
  onOpenBookingModalWithData,
}) => {
  const [species, setSpecies] = useState<PetSpecies>('dog');
  const [size, setSize] = useState<PetSize>('pequeno');
  const [coat, setCoat] = useState<CoatType>('curto');
  const [serviceCategory, setServiceCategory] = useState<'grooming' | 'vet'>('grooming');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || GROOMING_SERVICES[0].id
  );
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [petName, setPetName] = useState('');

  // Update selected service if category switches or initial changes
  const activeServices = serviceCategory === 'grooming' ? GROOMING_SERVICES : VET_SERVICES;

  const currentResult = useMemo(() => {
    return calculateServiceEstimate({
      species,
      size,
      coat,
      serviceId: selectedServiceId,
      selectedAddonIds: selectedAddons,
    });
  }, [species, size, coat, selectedServiceId, selectedAddons]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleWhatsAppBooking = () => {
    const url = generateWhatsAppLink({
      tutorName: 'Tutor(a)',
      phone: 'WhatsApp',
      petName: petName.trim() || (species === 'dog' ? 'Cãozinho' : 'Gatinho'),
      species,
      size,
      serviceName: currentResult.serviceName,
      estimatedPrice: currentResult.totalPrice,
      notes: selectedAddons.length > 0 ? `Adicionais selecionados: ${selectedAddons.length}` : '',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>Transparência em Primeiro Lugar</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Sem Taxas Ocultas</span>
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Simulador de Serviços & Estimativa Instantânea
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Monte o pacote de cuidados sob medida para as características do seu pet e confira a estimativa transparente de tempo e valor antes de confirmar o agendamento.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs space-y-7">
            {/* 1. Espécie */}
            <div>
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                1. Espécie do Pet
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSpecies('dog')}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                    species === 'dog'
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 shadow-xs ring-1 ring-emerald-600'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                  }`}
                >
                  <Dog className="w-4 h-4 text-emerald-700" />
                  <span>Cachorro</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSpecies('cat')}
                  className={`flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                    species === 'cat'
                      ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 shadow-xs ring-1 ring-emerald-600'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                  }`}
                >
                  <Cat className="w-4 h-4 text-emerald-700" />
                  <span>Gato</span>
                </button>
              </div>
            </div>

            {/* 2. Porte & Pelagem */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  2. Porte do Pet
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: 'pequeno', label: 'Pequeno', sub: 'Até 10kg' },
                      { id: 'medio', label: 'Médio', sub: '11 - 20kg' },
                      { id: 'grande', label: 'Grande', sub: '21 - 35kg' },
                      { id: 'gigante', label: 'Gigante', sub: '+35kg' },
                    ] as const
                  ).map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSize(p.id)}
                      className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                        size === p.id
                          ? 'border-emerald-600 bg-emerald-50/60 text-emerald-900 ring-1 ring-emerald-600'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{p.label}</div>
                      <div className="text-[11px] text-stone-500">{p.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  3. Tipo de Pelagem
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'curto', label: 'Curto' },
                      { id: 'medio', label: 'Médio' },
                      { id: 'longo', label: 'Longo' },
                    ] as const
                  ).map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCoat(c.id)}
                      className={`py-3 px-2 text-center rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                        coat === c.id
                          ? 'border-emerald-600 bg-emerald-50/60 text-emerald-900 ring-1 ring-emerald-600'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-stone-500 mt-2">
                  Influencia o tempo de secagem e volume de produtos especiais.
                </p>
              </div>
            </div>

            {/* 4. Categoria de Serviço */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  4. Selecione o Serviço Principal
                </label>
                <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => {
                      setServiceCategory('grooming');
                      setSelectedServiceId(GROOMING_SERVICES[0].id);
                    }}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      serviceCategory === 'grooming'
                        ? 'bg-white text-emerald-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Banho & Tosa
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setServiceCategory('vet');
                      setSelectedServiceId(VET_SERVICES[0].id);
                    }}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      serviceCategory === 'vet'
                        ? 'bg-white text-emerald-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Clínica Veterinária
                  </button>
                </div>
              </div>

              <div className="space-y-2 mt-3">
                {activeServices.map((svc) => (
                  <label
                    key={svc.id}
                    className={`flex items-start justify-between gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      selectedServiceId === svc.id
                        ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="selectedService"
                        value={svc.id}
                        checked={selectedServiceId === svc.id}
                        onChange={() => setSelectedServiceId(svc.id)}
                        className="mt-1 h-4 w-4 text-emerald-700 border-stone-300 focus:ring-emerald-600"
                      />
                      <div>
                        <div className="text-xs font-bold text-stone-900">{svc.name}</div>
                        <div className="text-xs text-stone-500 mt-0.5">{svc.description}</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-800 whitespace-nowrap tabular-nums">
                      A partir de {formatBRL(svc.basePrice)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* 5. Opcionais / Adicionais */}
            {serviceCategory === 'grooming' && (
              <div>
                <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                  5. Adicionais de Cuidado & Estética (Opcional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ADDONS_LIST.map((addon) => {
                    const isChecked = selectedAddons.includes(addon.id);
                    return (
                      <button
                        type="button"
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-lg border text-left flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isChecked
                            ? 'border-emerald-600 bg-emerald-50/60 text-emerald-950 ring-1 ring-emerald-600'
                            : 'border-stone-200 hover:border-stone-300 text-stone-700'
                        }`}
                      >
                        <div className="text-xs">
                          <span className="font-semibold block">{addon.name}</span>
                          <span className="text-stone-500 text-[11px]">+{addon.minutes} min</span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold text-emerald-800 tabular-nums">
                            +{formatBRL(addon.price)}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Nome do Pet opcional para mensagem rápida */}
            <div>
              <label htmlFor="pet-name-calc" className="block text-xs font-bold text-stone-800 uppercase tracking-wider mb-1.5">
                Nome do seu Pet (Opcional)
              </label>
              <input
                id="pet-name-calc"
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Ex: Thor, Pipoca, Amora..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Resumo da Estimativa
                </span>
                <span className="text-xs text-stone-500">Asa Norte · Brasília</span>
              </div>

              {/* Service details */}
              <div>
                <h3 className="text-lg font-extrabold text-stone-900 leading-snug">
                  {currentResult.serviceName}
                </h3>
                <p className="text-xs text-stone-500 mt-1 capitalize">
                  {species === 'dog' ? 'Cão' : 'Gato'} · Porte {size} · Pêlo {coat}
                </p>
              </div>

              {/* Price and Duration Badge */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-stone-600">Investimento Estimado:</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tabular-nums tracking-tight">
                    {formatBRL(currentResult.totalPrice)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-600 pt-2 border-t border-stone-200/60">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    Tempo médio previsto:
                  </span>
                  <span className="font-bold text-stone-800 tabular-nums">
                    ~{currentResult.estimatedMinutes} minutos
                  </span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Serviço base ({currentResult.serviceName}):</span>
                  <span className="tabular-nums font-medium">{formatBRL(currentResult.serviceFinalPrice)}</span>
                </div>
                {currentResult.addonsTotal > 0 && (
                  <div className="flex justify-between text-emerald-800">
                    <span>Adicionais ({selectedAddons.length}):</span>
                    <span className="tabular-nums font-medium">+{formatBRL(currentResult.addonsTotal)}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Produtos hipoalergênicos e toalha individual inclusos.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar Estimativa para o WhatsApp</span>
                </button>

                <button
                  onClick={() =>
                    onOpenBookingModalWithData({
                      species,
                      size,
                      serviceName: currentResult.serviceName,
                      estimatedPrice: currentResult.totalPrice,
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors cursor-pointer"
                >
                  <span>Preencher Formulário de Agendamento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center leading-relaxed">
                *O valor final pode sofrer pequenos ajustes caso haja nós excessivos ou necessidade de tratamentos dermatológicos específicos diagnosticados no acolhimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
