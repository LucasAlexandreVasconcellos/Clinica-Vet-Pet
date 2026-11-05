# Clínica Vet & Pet 🐾

> Landing page moderna, fluida e com estética *clean* para a **Clínica Vet & Pet** em Brasília (Asa Norte), focada em excelência em saúde animal e serviços completos de banho e tosa.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)

---

## 📍 Sobre a Clínica

* **Nome:** Clínica Vet & Pet
* **Endereço:** CLN 116, Bloco E, Loja 63 (Edifício Flamboyant) — Asa Norte, Brasília - DF, CEP 70773-550
* **Telefone / WhatsApp:** (61) 3272-1002
* **Horários:**
  * Segunda a Sexta: 08:00 às 18:00
  * Sábado: 08:00 às 14:00
  * Domingo e Feriados: Fechado
* **Localização no Google Maps:** [Ver no Google Maps](https://www.google.com/maps/place/Clinica+Vet+%26+Pet/@-15.7370594,-47.8962094,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3b6c4c131459:0x3e9c567aaabc4c9!8m2!3d-15.7370646!4d-47.8936291!16s%2Fg%2F11grv4y007)

---

## ✨ Funcionalidades da Aplicação

1. **Top Bar & Navegação Fluida**: Conforme padrões de design limpo, com acesso direto a todas as seções e ação primária de agendamento.
2. **Hero Section Acolhedora**: Apresentação de valor, métricas de confiança (15+ anos na Asa Norte, vidro panorâmico no banho, protocolo *Low-Stress*).
3. **Saúde & Clínica Veterinária**: Consultas gerais, vacinação ética com imunizantes importados, exames laboratoriais, dermatologia, odontologia preventiva e cirurgias.
4. **Centro Estético de Banho & Tosa**:
   * Dermocosméticos hipoalergênicos e água climatizada;
   * Toalhas individuais esterilizadas;
   * Tosa higiênica, tosa da raça e tosa na tesoura;
   * Hidratação profunda e banho com ozonioterapia;
   * Visor panorâmico para tutores acompanharem o atendimento.
5. **Simulador Interativo de Preços & Tempo**:
   * Cálculo em tempo real baseado em espécie (cão ou gato), porte (pequeno, médio, grande, gigante), comprimento de pêlo e adicionais de spa;
   * Botão para gerar a mensagem formatada e abrir diretamente no WhatsApp oficial da clínica.
6. **Depoimentos Reais de Tutores**: Experiências reais de clientes da Asa Norte.
7. **Guia de Localização & Acesso**: Card interativo com endereço, botão de cópia rápida para GPS/Waze e rota direta no Google Maps.
8. **FAQ & Perguntas Frequentes**: Respostas sobre vacinas, cuidados pré-banho e formas de pagamento.
9. **Modal de Agendamento Acessível**: Formulário com validação completa para solicitação de horários.

---

## 🛠️ Tecnologias Utilizadas

* **React 19**
* **TypeScript**
* **Tailwind CSS v4**
* **Lucide React** (Ícones limpos e consistentes)
* **Node.js Test Runner** (`node:test` e `node:assert/strict` para lógica pura de precificação)
* **Vite**

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/LucasAlexandreVasconcellos/Clinica-Vet-Pet.git

# Acesse a pasta do projeto
cd Clinica-Vet-Pet

# Instale as dependências
npm install

# Execute os testes unitários da calculadora de serviços
npm test # ou: npx tsx --test src/utils/pricing.test.ts

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.
