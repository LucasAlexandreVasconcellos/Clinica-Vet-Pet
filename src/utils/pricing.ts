export type PetSpecies = 'dog' | 'cat';
export type PetSize = 'pequeno' | 'medio' | 'grande' | 'gigante';
export type CoatType = 'curto' | 'medio' | 'longo';

export interface ServiceOption {
  id: string;
  category: 'vet' | 'grooming';
  name: string;
  description: string;
  basePrice: number;
  baseMinutes: number;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
  minutes: number;
}

export const VET_SERVICES: ServiceOption[] = [
  {
    id: 'consulta_geral',
    category: 'vet',
    name: 'Consulta Clínica Geral',
    description: 'Avaliação completa dos parâmetros vitais, orientação preventiva e anamnese detalhada.',
    basePrice: 180,
    baseMinutes: 45,
  },
  {
    id: 'vacinacao',
    category: 'vet',
    name: 'Vacinação Ética & Imunização',
    description: 'Aplicação de vacinas importadas (V8/V10, Antirrábica, Giárdia, Gripe) com exame físico prévio.',
    basePrice: 130,
    baseMinutes: 30,
  },
  {
    id: 'checkup_preventivo',
    category: 'vet',
    name: 'Check-up Preventivo Sênior/Adulto',
    description: 'Consulta clínica + hemograma completo + painel renal e hepático preventivo.',
    basePrice: 340,
    baseMinutes: 60,
  },
  {
    id: 'dermatologia',
    category: 'vet',
    name: 'Consulta Dermatológica & Alergias',
    description: 'Investigação profunda de coceiras, otites recorrentes, dermatites e alergias alimentares.',
    basePrice: 220,
    baseMinutes: 50,
  },
];

export const GROOMING_SERVICES: ServiceOption[] = [
  {
    id: 'banho_relaxante',
    category: 'grooming',
    name: 'Banho Terapêutico & Hidratante',
    description: 'Água climatizada, cosméticos hipoalergênicos de alta performance, escovação e toalha esterilizada individual.',
    basePrice: 70,
    baseMinutes: 45,
  },
  {
    id: 'banho_tosa_higienica',
    category: 'grooming',
    name: 'Banho + Tosa Higiênica Completa',
    description: 'Banho relaxante, corte de unhas, limpeza de ouvidos, higienização de patinhas e área íntima.',
    basePrice: 95,
    baseMinutes: 65,
  },
  {
    id: 'banho_tosa_completa',
    category: 'grooming',
    name: 'Banho + Tosa da Raça / Tosa Geral',
    description: 'Estética completa respeitando o padrão da raça ou preferência do tutor, com acabamento refinado.',
    basePrice: 140,
    baseMinutes: 90,
  },
  {
    id: 'spa_ozonio_premium',
    category: 'grooming',
    name: 'Spa VIP com Ozonioterapia',
    description: 'Banho enriquecido com microbolhas de ozônio, máscara capilar de reconstrução e massagem relaxante.',
    basePrice: 180,
    baseMinutes: 105,
  },
];

export const ADDONS_LIST: AddonOption[] = [
  { id: 'hidratacao_profunda', name: 'Hidratação Máscara Argan & Queratina', price: 40, minutes: 15 },
  { id: 'ozonioterapia_pele', name: 'Banho com Ozônio (Anti-odor e Antisséptico)', price: 50, minutes: 20 },
  { id: 'desembaraco_pelagem', name: 'Desembolo Cuidadoso com Fluido Termoativo', price: 45, minutes: 25 },
  { id: 'tosa_tesoura_artesanal', name: 'Acabamento Artístico na Tesoura', price: 40, minutes: 20 },
  { id: 'corte_unha_ouvido', name: 'Corte de Unhas + Higiene Auricular Segura', price: 25, minutes: 15 },
];

export interface CalculationInput {
  species: PetSpecies;
  size: PetSize;
  coat: CoatType;
  serviceId: string;
  selectedAddonIds: string[];
}

export interface CalculationResult {
  serviceName: string;
  category: 'vet' | 'grooming';
  basePrice: number;
  sizeMultiplier: number;
  coatMultiplier: number;
  serviceFinalPrice: number;
  addonsTotal: number;
  totalPrice: number;
  estimatedMinutes: number;
}

export function calculateServiceEstimate(input: CalculationInput): CalculationResult {
  const allServices = [...VET_SERVICES, ...GROOMING_SERVICES];
  const service = allServices.find((s) => s.id === input.serviceId) || GROOMING_SERVICES[0];

  let sizeMultiplier = 1;
  let coatMultiplier = 1;
  let timeMultiplier = 1;

  if (service.category === 'grooming') {
    switch (input.size) {
      case 'pequeno':
        sizeMultiplier = 1.0;
        timeMultiplier = 1.0;
        break;
      case 'medio':
        sizeMultiplier = 1.25;
        timeMultiplier = 1.2;
        break;
      case 'grande':
        sizeMultiplier = 1.6;
        timeMultiplier = 1.45;
        break;
      case 'gigante':
        sizeMultiplier = 2.0;
        timeMultiplier = 1.7;
        break;
    }

    switch (input.coat) {
      case 'curto':
        coatMultiplier = 1.0;
        break;
      case 'medio':
        coatMultiplier = 1.15;
        break;
      case 'longo':
        coatMultiplier = 1.3;
        break;
    }
  }

  // Raw service cost calculation rounded to nearest multiple of 5
  const rawServicePrice = service.basePrice * sizeMultiplier * coatMultiplier;
  const serviceFinalPrice = Math.round(rawServicePrice / 5) * 5;

  let addonsTotal = 0;
  let addonsMinutes = 0;

  for (const addonId of input.selectedAddonIds) {
    const addon = ADDONS_LIST.find((a) => a.id === addonId);
    if (addon) {
      addonsTotal += addon.price;
      addonsMinutes += addon.minutes;
    }
  }

  const totalPrice = serviceFinalPrice + addonsTotal;
  const estimatedMinutes = Math.round((service.baseMinutes * timeMultiplier) + addonsMinutes);

  return {
    serviceName: service.name,
    category: service.category,
    basePrice: service.basePrice,
    sizeMultiplier,
    coatMultiplier,
    serviceFinalPrice,
    addonsTotal,
    totalPrice,
    estimatedMinutes,
  };
}

export function formatBRL(amount: number): string {
  return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export interface BookingPayload {
  tutorName: string;
  phone: string;
  petName: string;
  species: PetSpecies;
  size: PetSize;
  serviceName: string;
  estimatedPrice: number;
  preferredDate?: string;
  preferredPeriod?: 'morning' | 'afternoon';
  notes?: string;
}

export function generateWhatsAppLink(payload: BookingPayload): string {
  const phone = '556132721002'; // Official Clinic phone in Brasília
  const speciesLabel = payload.species === 'cat' ? 'Gato(a)' : 'Cachorro(a)';
  const sizeMap: Record<PetSize, string> = {
    pequeno: 'Pequeno (até 10kg)',
    medio: 'Médio (11 a 20kg)',
    grande: 'Grande (21 a 35kg)',
    gigante: 'Gigante (+35kg)',
  };

  const periodMap = {
    morning: 'Manhã (08h às 12h)',
    afternoon: 'Tarde (13h às 18h)',
  };

  const lines = [
    '🐾 *Olá, Clínica Vet & Pet!*',
    'Gostaria de agendar um horário com vocês:',
    '',
    `👤 *Tutor(a):* ${payload.tutorName}`,
    `📱 *Contato:* ${payload.phone}`,
    `🐶 *Pet:* ${payload.petName} (${speciesLabel} - Porte ${sizeMap[payload.size]})`,
    `✨ *Serviço Escolhido:* ${payload.serviceName}`,
    `💰 *Valor Estimado:* ${formatBRL(payload.estimatedPrice)}`,
  ];

  if (payload.preferredDate) {
    lines.push(`📅 *Data de preferência:* ${payload.preferredDate}`);
  }
  if (payload.preferredPeriod) {
    lines.push(`⏰ *Turno preferido:* ${periodMap[payload.preferredPeriod]}`);
  }
  if (payload.notes?.trim()) {
    lines.push(`📝 *Observações do Pet:* ${payload.notes.trim()}`);
  }

  lines.push('', '📍 *Unidade Asa Norte* (CLN 116 Bloco E, Ed. Flamboyant)');
  lines.push('Poderiam confirmar os horários disponíveis? Obrigado!');

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${text}`;
}
