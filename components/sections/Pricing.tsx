"use client";

import { useState } from "react";
import { siteConfig, type PricingTier } from "@/config/site";
import { Reveal } from "@/components/Reveal";

function CheckIcon({ featured }: { featured?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-5 w-5 shrink-0 ${featured ? "text-indigo-300" : "text-indigo-600 dark:text-indigo-400"}`}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TierCard({
  tier,
  annual,
  onSelect,
}: {
  tier: PricingTier;
  annual: boolean;
  onSelect: () => void;
}) {
  const featured = tier.featured;

  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 ${
        featured
          ? "bg-gray-950 text-white shadow-2xl ring-1 ring-gray-950 lg:-my-4 lg:py-12 dark:bg-white/[0.07] dark:ring-white/20"
          : "bg-white shadow-sm ring-1 ring-black/5 dark:bg-white/[0.03] dark:ring-white/10"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3.5 py-1 text-xs font-semibold text-white shadow-sm lg:-top-1.5">
          Популярный тариф
        </span>
      )}

      <h3
        className={`text-lg font-semibold tracking-tight ${
          featured ? "text-white" : "text-gray-950 dark:text-white"
        }`}
      >
        {tier.name}
      </h3>
      <p className={`mt-1.5 text-sm ${featured ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-1.5">
        <span className={`text-5xl font-bold tracking-tighter ${featured ? "text-white" : "text-gray-950 dark:text-white"}`}>
          Цена
        </span>
        <span className={`text-sm font-medium ${featured ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
          
        </span>
      </div>
      <div className={`mt-1.5 h-5 text-xs ${featured ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
        " "
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onSelect();
        }}
        className={`mt-6 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
          featured
            ? "bg-white text-gray-950 hover:bg-gray-200"
            : "bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        }`}
      >
        {tier.cta}
      </button>

      <ul className="mt-8 space-y-3.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon featured={featured} />
            <span className={`text-sm ${featured ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { pricing } = siteConfig;

  const openModal = (tier: PricingTier) => {
    setSelectedTier(tier);
    setSubmitted(false);
    setModalVisible(false);
    window.setTimeout(() => setModalVisible(true), 20);
  };

  const closeModal = () => {
    setModalVisible(false);
    window.setTimeout(() => setSelectedTier(null), 220);
  };

  return (
    <section id="pricing" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {pricing.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl dark:text-white">
              {pricing.headline}
            </h2>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
              {pricing.subline}
            </p>
          </div>

        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-0">
            {pricing.tiers.map((tier) => (
              <div key={tier.id} className={tier.featured ? "lg:z-10" : ""}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    openModal(tier);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      openModal(tier);
                    }
                  }}
                >
                  <TierCard tier={tier} annual={false} onSelect={() => openModal(tier)} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {selectedTier && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-6 py-10 backdrop-blur-sm transition-all duration-200 ease-out ${modalVisible ? "bg-gray-950/60 opacity-100" : "bg-gray-950/0 opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-form-title"
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl transition-all duration-200 ease-out dark:bg-gray-900 ${modalVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-5 top-5 text-2xl leading-none text-gray-400 hover:text-gray-950 dark:hover:text-white"
              aria-label="Закрыть форму"
              onClick={closeModal}
            >
              <span className="block transition-transform duration-200 hover:rotate-90">×</span>
            </button>
            {submitted ? (
              <div className="py-10 text-center">
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white">Заявка принята</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Мы свяжемся с вами по указанным контактам.</p>
                <button
                  type="button"
                  className="mt-7 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-gray-950"
                  onClick={closeModal}
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Тариф: {selectedTier.name}</p>
                <h3 id="demo-form-title" className="mt-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-white">Получить демо</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Оставьте контакты, и мы подготовим предложение.</p>
                <div className="mt-6 space-y-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Имя
                    <input required name="name" type="text" placeholder="Ваше имя" className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                  </label>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                    <input required name="email" type="email" placeholder="name@example.com" className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                  </label>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Телефон
                    <input required name="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-white" />
                  </label>
                </div>
                <button type="submit" className="mt-6 w-full rounded-full bg-gray-950 px-5 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
