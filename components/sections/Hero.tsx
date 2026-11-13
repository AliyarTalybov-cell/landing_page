import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/sections/Navbar";

/**
 * The signature section: a rounded gradient container inset from the
 * viewport edges, holding both the nav and the hero content.
 */
export function Hero() {
  const { hero, featuredWork } = siteConfig;

  return (
    <div className="mx-2 mt-2 lg:mx-4">
      <div className="gradient-mesh relative overflow-hidden rounded-[2.5rem] ring-1 ring-black/5 dark:ring-white/10">
        <Navbar />

        <div className="relative grid gap-8 px-6 pb-14 pt-10 sm:px-10 sm:pb-18 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.58fr)] lg:items-center lg:gap-10 lg:px-14 lg:pb-20 lg:pt-16">
          <div>
          {/* Announcement pill */}
          <a
            href={hero.announcement.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-white/60 px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white/80 dark:bg-white/10 dark:text-gray-200 dark:ring-white/10 dark:hover:bg-white/15"
          >
            {hero.announcement.label}
            <span aria-hidden="true">&rarr;</span>
          </a>

          {/* Headline */}
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tighter text-gray-950 sm:text-6xl lg:text-7xl dark:text-white">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-gray-700 sm:text-lg dark:text-gray-300">
            {hero.subline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-gray-800 hover:shadow-lg dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white/70 px-7 py-3.5 text-base font-semibold text-gray-950 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/20"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          </div>

          <a
            href={featuredWork.href}
            target="_blank"
            rel="noreferrer"
            className="group w-full max-w-md justify-self-end rounded-3xl bg-white/70 p-2.5 shadow-2xl ring-1 ring-black/10 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white dark:bg-white/10 dark:ring-white/10 dark:hover:bg-white/15"
          >
            <div className="overflow-hidden rounded-2xl bg-gray-950">
              <video
                className="aspect-[4/3] w-full object-cover"
                src={featuredWork.overviewVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Превью проекта English Platform"
              />
            </div>
            <div className="px-2 pb-2 pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{featuredWork.eyebrow}</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">{featuredWork.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{featuredWork.description}</p>
              <div className="mt-3 grid grid-cols-[92px_1fr] items-center gap-3">
                <div className="overflow-hidden rounded-xl bg-gray-950/10 dark:bg-white/10">
                  <video className="aspect-video w-full object-cover" src={featuredWork.aiVideo} muted loop playsInline preload="metadata" aria-label="Пример ИИ-учителя" />
                </div>
                <p className="self-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">{featuredWork.aiDescription}</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{featuredWork.note}</p>
              <span className="mt-3 inline-flex text-sm font-semibold text-gray-950 group-hover:underline dark:text-white">Открыть проект →</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
