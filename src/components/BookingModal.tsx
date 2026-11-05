import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare, CheckCircle, Dog, Cat, Phone, User, Clock, AlertCircle } from 'lucide-react';
import { PetSpecies, PetSize, formatBRL, generateWhatsAppLink } from '../utils/pricing';

export interface BookingModalInitialData {
  species?: PetSpecies;
  size?: PetSize;
  serviceName?: string;
  estimatedPrice?: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: BookingModalInitialData | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialData }) => {
  const [tutorName, setTutorName] = useState('');
  const [phone, setPhone] = useState('');
  const [petName, setPetName] = useState('');
  const [species, setSpecies] = useState<PetSpecies>(initialData?.species || 'dog');
  const [size, setSize] = useState<PetSize>(initialData?.size || 'pequeno');
  const [serviceName, setServiceName] = useState(
    initialData?.serviceName || 'Banho + Tosa Higiênica Completa'
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState<'morning' | 'afternoon'>('morning');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      if (initialData.species) setSpecies(initialData.species);
      if (initialData.size) setSize(initialData.size);
      if (initialData.serviceName) setServiceName(initialData.serviceName);
    }
  }, [initialData]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!tutorName.trim()) newErrors.tutorName = 'Informe seu nome completo';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Informe um telefone/WhatsApp válido com DDD';
    }
    if (!petName.trim()) newErrors.petName = 'Informe o nome do seu pet';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const link = generateWhatsAppLink({
      tutorName,
      phone,
      petName,
      species,
      size,
      serviceName,
      estimatedPrice: initialData?.estimatedPrice || 95,
      preferredDate,
      preferredPeriod,
      notes,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-[#FAFAF7]">
          <div>
            <h2 id="booking-modal-title" className="text-base font-bold text-stone-900">
              {submitted ? 'Agendamento Encaminhado!' : 'Solicitar Horário na Clínica Vet & Pet'}
            </h2>
            <p className="text-xs text-stone-500">
              Unidade Asa Norte · CLN 116 Bloco E, Ed. Flamboyant
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-200/50 transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  Perfeito, {tutorName}!
                </h3>
                <p className="text-sm text-stone-600 mt-1 max-w-sm mx-auto leading-relaxed">
                  Os dados do <strong>{petName}</strong> foram registrados. Clique abaixo para enviar diretamente ao nosso WhatsApp e confirmar os horários livres.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">Serviço:</span>
                  <span className="font-semibold text-stone-900">{serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Pet:</span>
                  <span className="font-semibold text-stone-900 capitalize">{petName} ({species === 'dog' ? 'Cão' : 'Gato'} - Porte {size})</span>
                </div>
                {preferredDate && (
                  <div className="flex justify-between">
                    <span className="text-stone-500">Data sugerida:</span>
                    <span className="font-semibold text-stone-900">{preferredDate} ({preferredPeriod === 'morning' ? 'Manhã' : 'Tarde'})</span>
                  </div>
                )}
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirmar pelo WhatsApp Oficial (61) 3272-1002</span>
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tutor & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tutor-name" className="block text-xs font-bold text-stone-800 mb-1">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <input
                      id="tutor-name"
                      type="text"
                      value={tutorName}
                      onChange={(e) => setTutorName(e.target.value)}
                      placeholder="Ex: Ana Clara"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                    <User className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                  </div>
                  {errors.tutorName && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.tutorName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="tutor-phone" className="block text-xs font-bold text-stone-800 mb-1">
                    WhatsApp / Telefone *
                  </label>
                  <div className="relative">
                    <input
                      id="tutor-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(61) 98765-4321"
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                    />
                    <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Pet Name, Species, Size */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="pet-name" className="block text-xs font-bold text-stone-800 mb-1">
                    Nome do Pet *
                  </label>
                  <input
                    id="pet-name"
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Ex: Frederico"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                  {errors.petName && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.petName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Espécie
                  </label>
                  <div className="grid grid-cols-2 gap-1 bg-stone-100 p-0.5 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setSpecies('dog')}
                      className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        species === 'dog' ? 'bg-white text-emerald-900 shadow-xs' : 'text-stone-600'
                      }`}
                    >
                      Cão
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpecies('cat')}
                      className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        species === 'cat' ? 'bg-white text-emerald-900 shadow-xs' : 'text-stone-600'
                      }`}
                    >
                      Gato
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="pet-size" className="block text-xs font-bold text-stone-800 mb-1">
                    Porte
                  </label>
                  <select
                    id="pet-size"
                    value={size}
                    onChange={(e) => setSize(e.target.value as PetSize)}
                    className="w-full px-2.5 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-none focus:border-emerald-600"
                  >
                    <option value="pequeno">Pequeno (até 10kg)</option>
                    <option value="medio">Médio (11 a 20kg)</option>
                    <option value="grande">Grande (21 a 35kg)</option>
                    <option value="gigante">Gigante (+35kg)</option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service-type" className="block text-xs font-bold text-stone-800 mb-1">
                  Serviço Pretendido
                </label>
                <select
                  id="service-type"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-none focus:border-emerald-600"
                >
                  <optgroup label="Banho & Tosa (Estética)">
                    <option value="Banho Terapêutico & Hidratante">Banho Terapêutico & Hidratante</option>
                    <option value="Banho + Tosa Higiênica Completa">Banho + Tosa Higiênica Completa</option>
                    <option value="Banho + Tosa da Raça / Tosa Geral">Banho + Tosa da Raça / Tosa Geral</option>
                    <option value="Spa VIP com Ozonioterapia">Spa VIP com Ozonioterapia</option>
                  </optgroup>
                  <optgroup label="Clínica Veterinária (Saúde)">
                    <option value="Consulta Clínica Geral">Consulta Clínica Geral</option>
                    <option value="Vacinação Ética & Imunização">Vacinação Ética & Imunização</option>
                    <option value="Check-up Preventivo Sênior/Adulto">Check-up Preventivo Completo</option>
                    <option value="Consulta Dermatológica & Alergias">Consulta Dermatológica & Alergias</option>
                    <option value="Avaliação Odontológica / Profilaxia">Avaliação Odontológica / Profilaxia</option>
                  </optgroup>
                </select>
              </div>

              {/* Date & Period */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferred-date" className="block text-xs font-bold text-stone-800 mb-1">
                    Data de Preferência
                  </label>
                  <input
                    id="preferred-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-800 mb-1">
                    Turno de Preferência
                  </label>
                  <div className="grid grid-cols-2 gap-1 bg-stone-100 p-0.5 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setPreferredPeriod('morning')}
                      className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        preferredPeriod === 'morning'
                          ? 'bg-white text-emerald-900 shadow-xs'
                          : 'text-stone-600'
                      }`}
                    >
                      Manhã (08h-12h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredPeriod('afternoon')}
                      className={`py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                        preferredPeriod === 'afternoon'
                          ? 'bg-white text-emerald-900 shadow-xs'
                          : 'text-stone-600'
                      }`}
                    >
                      Tarde (13h-18h)
                    </button>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="booking-notes" className="block text-xs font-bold text-stone-800 mb-1">
                  Observações ou Cuidados Especiais do Pet
                </label>
                <textarea
                  id="booking-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Pet tem medo de barulho alto, possui alergia na barriga, vacinas em dia..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-stone-200 focus:outline-none focus:border-emerald-600"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Avançar para Agendamento</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center">
                Retornamos rapidamente pelo WhatsApp com a confirmação do horário.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
