import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateServiceEstimate,
  formatBRL,
  generateWhatsAppLink,
  VET_SERVICES,
  GROOMING_SERVICES,
} from './pricing';

test('calculateServiceEstimate calculates correct grooming estimate for small dog with short coat', () => {
  const result = calculateServiceEstimate({
    species: 'dog',
    size: 'pequeno',
    coat: 'curto',
    serviceId: 'banho_relaxante',
    selectedAddonIds: [],
  });

  assert.equal(result.category, 'grooming');
  assert.equal(result.serviceFinalPrice, 70);
  assert.equal(result.totalPrice, 70);
  assert.equal(result.estimatedMinutes, 45);
});

test('calculateServiceEstimate applies multipliers for large dog with long coat and addons', () => {
  const result = calculateServiceEstimate({
    species: 'dog',
    size: 'grande',
    coat: 'longo',
    serviceId: 'banho_relaxante',
    selectedAddonIds: ['hidratacao_profunda'],
  });

  // Base 70 * 1.6 * 1.3 = 145.6 -> rounded to 145
  assert.equal(result.serviceFinalPrice, 145);
  // Addon hidratacao_profunda is 40
  assert.equal(result.addonsTotal, 40);
  assert.equal(result.totalPrice, 185);
  // Base minutes 45 * 1.45 = 65 + 15 = 80 min
  assert.equal(result.estimatedMinutes, 80);
});

test('calculateServiceEstimate handles veterinary fixed services properly without size markup', () => {
  const result = calculateServiceEstimate({
    species: 'cat',
    size: 'pequeno',
    coat: 'curto',
    serviceId: 'consulta_geral',
    selectedAddonIds: [],
  });

  assert.equal(result.category, 'vet');
  assert.equal(result.totalPrice, 180);
  assert.equal(result.estimatedMinutes, 45);
});

test('formatBRL formats Brazilian Real amounts properly', () => {
  const formatted = formatBRL(120);
  assert.match(formatted, /120/);
});

test('generateWhatsAppLink produces an encoded URL with clinic number and booking details', () => {
  const url = generateWhatsAppLink({
    tutorName: 'Mariana Lima',
    phone: '(61) 98765-4321',
    petName: 'Pipoca',
    species: 'dog',
    size: 'pequeno',
    serviceName: 'Banho + Tosa Higiênica Completa',
    estimatedPrice: 95,
    preferredDate: '2026-11-10',
    preferredPeriod: 'morning',
    notes: 'Pet dócil mas tem medo de secador alto',
  });

  assert.ok(url.startsWith('https://wa.me/556132721002?text='));
  assert.ok(url.includes(encodeURIComponent('Pipoca')));
  assert.ok(url.includes(encodeURIComponent('Mariana Lima')));
  assert.ok(url.includes(encodeURIComponent('Asa Norte')));
});
