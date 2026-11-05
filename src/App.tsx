import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VetCareSection } from './components/VetCareSection';
import { GroomingSection } from './components/GroomingSection';
import { PricingCalculator } from './components/PricingCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal, BookingModalInitialData } from './components/BookingModal';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<BookingModalInitialData | null>(null);
  const [calcInitialService, setCalcInitialService] = useState<string>('banho_relaxante');

  const handleOpenBooking = () => {
    setModalInitialData(null);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithData = (data: BookingModalInitialData) => {
    setModalInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSelectServiceFromSection = (serviceId: string) => {
    setCalcInitialService(serviceId);
    const simulatorEl = document.getElementById('simulador');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSimulator = () => {
    const simulatorEl = document.getElementById('simulador');
    if (simulatorEl) {
      simulatorEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-stone-800">
      {/* Top Bar Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateToSimulator={handleNavigateToSimulator}
        />
        <AboutSection />
        <VetCareSection
          onSelectService={handleSelectServiceFromSection}
          onOpenBooking={handleOpenBooking}
        />
        <GroomingSection
          onSelectGrooming={handleSelectServiceFromSection}
          onOpenBooking={handleOpenBooking}
        />
        <PricingCalculator
          initialServiceId={calcInitialService}
          onOpenBookingModalWithData={handleOpenBookingWithData}
        />
        <TestimonialsSection />
        <LocationSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessible Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={modalInitialData}
      />

      {/* Floating Quiet Contact Button for WhatsApp */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/556132721002?text=Ol%C3%A1%2C%20Cl%C3%ADnica%20Vet%20%26%20Pet!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20e%20banho%20e%20tosa."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-lg transition-all transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          aria-label="Falar no WhatsApp com a Clínica Vet & Pet"
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
            Falar no WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
