import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";

const socials = [
  {
    label: "VK — ссылка появится позже",
    href: "#",
    icon: <span className="text-[10px] font-bold">VK</span>,
  },
  {
    label: "Telegram — ссылка появится позже",
    href: "#",
    icon: <span className="text-[10px] font-bold">TG</span>,
  },
  {
    label: "WhatsApp — ссылка появится позже",
    href: "#",
    icon: <span className="text-[10px] font-bold">WA</span>,
  },
];

export function Footer() {
  const { footer, name } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 px-6 py-16 lg:px-10 dark:border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-gray-500 dark:text-gray-400">
              {footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-9 w-9 cursor-help items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:text-gray-500 dark:hover:bg-white/10 dark:hover:text-gray-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row dark:border-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {year} {name}. Все права защищены.
          </p>
          <a
            href={footer.attribution.href}
            target="_blank"
            rel="noopener"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
          >
            {footer.attribution.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
