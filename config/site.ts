/**
 * ─────────────────────────────────────────────────────────────────────────────
 * LaunchPad — site configuration
 *
 * This file is the single source of truth for every word on the page.
 * Change the copy here and every section updates. No component edits needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type NavLink = { label: string; href: string };

export type Feature = {
  title: string;
  description: string;
  /** Which CSS-drawn visual the bento card renders. */
  visual: "chart" | "kanban" | "messages" | "toggles";
  /** Bento layout: the first "wide" card spans 2 columns on lg screens. */
  wide?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  /** Two-letter initials shown in the gradient avatar circle. */
  initials: string;
  /** One accent card per grid adds visual spice. */
  accent?: boolean;
};

export type PricingTier = {
  name: string;
  id: string;
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  cta: string;
  href: string;
  /** The featured tier renders as the elevated dark card. */
  featured?: boolean;
};

export type FaqItem = { question: string; answer: string };

export type FooterColumn = { heading: string; links: NavLink[] };

export const siteConfig = {
  name: "Название проекта",
  url: "https://example.com",
  title: "Название проекта — чат-боты для бизнеса",
  description:
    "Создание и интеграция чат-ботов для бизнеса. Получите консультацию и демонстрацию решения.",

  nav: {
    links: [
      { label: "Возможности", href: "#features" },
      { label: "Тарифы", href: "#pricing" },
      { label: "Вопросы и ответы", href: "#faq" },
    ] satisfies NavLink[],
    cta: { label: "Получить демо", href: "#pricing" },
  },

  hero: {
    announcement: {
      label: "Временная заглушка",
      href: "#features",
    },
    headline: "Сайты и чат-боты для бизнеса под ключ",
    subline:
      "Название проекта создаёт современные сайты и умных чат-ботов, которые помогают привлекать клиентов и автоматизировать процессы.",
    primaryCta: { label: "Получить демо", href: "#pricing" },
    secondaryCta: { label: "Посмотреть тарифы", href: "#pricing" },
  },

  featuredWork: {
    eyebrow: "Пример работы",
    title: "English Platform",
    description:
      "Портал для преподавателей и учеников по английскому языку: современный инструмент для обучения с уровня A0 до A2 и выше.",
    aiDescription:
      "ИИ-учитель для индивидуальной практики, обратной связи и самостоятельного обучения.",
    note: "Сайт разработан на современной архитектуре и легко масштабируется под потребности проекта.",
    href: "https://english-platform-orcin.vercel.app/",
    overviewVideo: "/videos/english-platform-overview.mp4",
    aiVideo: "/videos/english-platform-ai.mp4",
  },

  logoCloud: {
    tagline: "Временные логотипы клиентов",
    companies: ["Компания 1", "Компания 2", "Компания 3", "Компания 4", "Компания 5"],
  },

  features: {
    eyebrow: "Что мы делаем",
    headline: "Сайт и бот, которые помогают бизнесу каждый день",
    subline:
      "Создадим лендинг для продаж и настроим чат-бота под ваши задачи: от первого сценария до интеграции с рабочими системами.",
    items: [
      {
        title: "Лендинг для продаж",
        description:
          "Соберём понятный сайт с сильным предложением, формой заявки и нужными интеграциями.",
        visual: "chart",
        wide: true,
      },
      {
        title: "Чат-бот для клиентов",
        description:
          "Бот отвечает на вопросы, квалифицирует лидов, показывает услуги и принимает заявки 24/7.",
        visual: "kanban",
      },
      {
        title: "Сценарии и структура",
        description:
          "Продумываем структуру сайта и ветки диалога под реальные вопросы ваших клиентов.",
        visual: "messages",
      },
      {
        title: "Подключение сервисов",
        description:
          "Подключаем Telegram, сайт, CRM и другие сервисы. Конкретные интеграции уточним после консультации.",
        visual: "toggles",
      },
    ] satisfies Feature[],
  },

  screenshot: {
    eyebrow: "Интерфейс бота",
    headline: "Сайт, диалоги, заявки и аналитика в одном месте",
    subline:
      "Здесь будет изображение интерфейса бота или личного кабинета. Пока используется демонстрационная заглушка для сайта и бота.",
    url: "bot.example.com/demo",
  },

  testimonials: {
    eyebrow: "Отзывы клиентов",
    headline: "Истории клиентов",
    subline:
      "Показываем, как сайты и чат-боты помогают компаниям привлекать клиентов, ускорять работу и развивать сервис.",
    items: [
      {
        quote: "После запуска бота мы перестали терять обращения вечером и в выходные. Клиенты сразу получают ответ, а менеджеры подключаются только к важным вопросам.",
        name: "Алина Морозова",
        title: "Руководитель онлайн-школы",
        initials: "АМ",
      },
      {
        quote: "Новый лендинг помог упаковать предложение и сделать путь клиента понятнее. Уже на первых неделях мы получили больше качественных заявок.",
        name: "Дмитрий Волков",
        title: "Основатель сервиса для бизнеса",
        initials: "ДВ",
        accent: true,
      },
      {
        quote: "Команда быстро разобралась в наших процессах и предложила понятный сценарий автоматизации. Запустились без долгой перестройки работы.",
        name: "Елена Соколова",
        title: "Операционный директор",
        initials: "ЕС",
      },
      {
        quote: "Нам нужен был не просто красивый сайт, а инструмент для продаж. Получили аккуратный лендинг, форму заявки и понятную аналитику.",
        name: "Илья Крылов",
        title: "Коммерческий директор",
        initials: "ИК",
      },
      {
        quote: "Интеграция с Telegram упростила обработку обращений. Теперь вся команда видит новые заявки и быстрее отвечает клиентам.",
        name: "Мария Лебедева",
        title: "Руководитель отдела продаж",
        initials: "МЛ",
      },
      {
        quote: "Мы начали с небольшой задачи, а затем постепенно добавили новые сценарии. Архитектура проекта позволяет развивать его без переделки с нуля.",
        name: "Роман Егоров",
        title: "Руководитель продукта",
        initials: "РЕ",
      },
    ] satisfies Testimonial[],
  },

  pricing: {
    eyebrow: "Тарифы",
    headline: "Тарифы на создание чат-бота",
    subline:
      "Временные цены. Финальная стоимость зависит от сценариев, интеграций и объёма работ.",
    annualBadge: "Уточняется",
    tiers: [
      {
        name: "Старт",
        id: "hobby",
        monthly: 0,
        annual: 0,
        description: "Для простого сценария и первичной консультации.",
        features: [
          "Один базовый сценарий",
          "Настройка диалога",
          "Подключение одного канала",
          "Консультация команды",
        ],
        cta: "Получить консультацию",
        href: "/thanks/",
      },
      {
        name: "Бизнес",
        id: "pro",
        monthly: 19,
        annual: 190,
        description: "Для компаний, которым нужен рабочий бот.",
        features: [
          "Несколько сценариев",
          "Telegram и сайт",
          "Интеграция с CRM",
          "Передача заявок менеджеру",
          "Поддержка после запуска",
          "Базовая аналитика",
        ],
        cta: "Обсудить проект",
        href: "/thanks/",
        featured: true,
      },
      {
        name: "Индивидуальный",
        id: "team",
        monthly: 49,
        annual: 490,
        description: "Для сложных процессов и нескольких отделов.",
        features: [
          "Все возможности тарифа «Бизнес»",
          "Индивидуальная архитектура",
          "Несколько каналов",
          "Расширенные интеграции",
          "Приоритетная поддержка",
          "Отдельная оценка проекта",
        ],
        cta: "Запросить расчёт",
        href: "/thanks/",
      },
    ] satisfies PricingTier[],
  },

  faq: {
    eyebrow: "Вопросы и ответы",
    headline: "Частые вопросы о чат-ботах",
    items: [
      {
        question: "Сколько стоит создание чат-бота?",
        answer:
          "Стоимость зависит от количества сценариев, каналов и интеграций. Оставьте заявку, и мы подготовим предварительную оценку.",
      },
      {
        question: "Где будет работать бот?",
        answer:
          "В Telegram, на сайте или в других каналах после согласования задачи. Конкретный набор подключений укажем в предложении.",
      },
      {
        question: "Можно ли подключить CRM?",
        answer:
          "Да, если у CRM есть подходящий API или готовая интеграция. Детали определим после знакомства с вашей системой.",
      },
      {
        question: "Сможет ли бот передать диалог сотруднику?",
        answer:
          "Да. Можно настроить передачу обращения менеджеру по определённому условию или при запросе клиента.",
      },
      {
        question: "Можно ли начать с простого сценария?",
        answer:
          "Да. Рекомендуем начать с одного понятного сценария, проверить результат и затем расширять бота.",
      },
      {
        question: "Как получить демонстрацию?",
        answer:
          "Оставьте заявку через форму, и мы свяжемся с вами. Поля формы пока являются заглушкой.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    headline: "Готовы обсудить свой проект?",
    subline:
      "Оставьте заявку, и мы покажем, какой сайт или чат-бот поможет вашему бизнесу.",
    cta: { label: "Получить демо", href: "#pricing" },
  },

  footer: {
    tagline: "Создание и интеграция чат-ботов для бизнеса.",
    columns: [
      {
        heading: "Услуги",
        links: [
          { label: "Возможности", href: "#features" },
          { label: "Тарифы", href: "#pricing" },
          { label: "Вопросы и ответы", href: "#faq" },
          { label: "Как это работает", href: "#" },
        ],
      },
      {
        heading: "О нас",
        links: [
          { label: "Создаём сайты и чат-ботов для бизнеса", href: "#features" },
        ],
      },
      {
        heading: "Документы",
        links: [
          { label: "Политика конфиденциальности", href: "#" },
          { label: "Условия использования", href: "#" },
        ],
      },
    ] satisfies FooterColumn[],
    attribution: {
      label: "Название компании — заглушка",
      href: "#",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
