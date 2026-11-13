import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function FeaturedWork() {
  const { featuredWork } = siteConfig;

  return (
    <section id="work" className="px-6 py-20 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {featuredWork.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tighter text-gray-950 sm:text-5xl dark:text-white">
              {featuredWork.title}
            </h2>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">{featuredWork.description}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-gray-950 shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <video
                className="aspect-video w-full object-cover"
                src={featuredWork.overviewVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="Демонстрация English Platform"
              />
              <div className="p-5 text-white">
                <h3 className="text-lg font-semibold">Портал для преподавателей и учеников</h3>
                <p className="mt-2 text-sm text-gray-300">Обучение английскому языку с уровня A0 до A2 и выше.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gray-950 shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <video
                className="aspect-video w-full object-cover"
                src={featuredWork.aiVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="Демонстрация ИИ-учителя English Platform"
              />
              <div className="p-5 text-white">
                <h3 className="text-lg font-semibold">ИИ-учитель для индивидуального обучения</h3>
                <p className="mt-2 text-sm text-gray-300">Практика, обратная связь и персональный сценарий занятий.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-7 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="max-w-3xl text-sm leading-relaxed text-gray-500 dark:text-gray-400">{featuredWork.note}</p>
          <a
            href={featuredWork.href}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            Открыть проект →
          </a>
        </div>
      </div>
    </section>
  );
}
