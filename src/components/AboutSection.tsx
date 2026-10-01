import {
  Globe,
  ShieldCheck,
  Wrench,
  Award,
  Check,
  MapPin,
  Phone,
  Send,
  Mail,
  Clock,
  CalendarDays,
  CircleDollarSign,
  Repeat,
  Truck,
} from "lucide-react";
import aboutDealerAsset from "@/assets/about-dealer.webp";
const aboutDealer = aboutDealerAsset;
import aboutShippingAsset from "@/assets/ship-1.webp";
const aboutShipping = aboutShippingAsset;
import aboutWarehouseAsset from "@/assets/ship-2.webp";
const aboutWarehouse = aboutWarehouseAsset;
import aboutServiceAsset from "@/assets/ship-3.webp";
const aboutService = aboutServiceAsset;

const PILLARS = [
  { icon: Globe, title: "Прямые поставки", lines: ["из США", "без посредников"] },
  { icon: ShieldCheck, title: "Прозрачные сделки", lines: ["Полный пакет", "документов"] },
  { icon: Wrench, title: "Сервис и запчасти", lines: ["Собственный склад", "и сервисный центр"] },
  { icon: Award, title: "Опыт работы", lines: ["Более 10 лет", "на рынке"] },
];

const REASONS = [
  "Официальный импортёр и поставщик",
  "Только новые автомобили 2024–2025 года",
  "Полное соответствие стандартам РФ",
  "Гарантия 1 год или 100 000 км",
  "Кредит, лизинг, trade-in",
  "Доставка в любой регион России",
  "Прозрачное ценообразование",
];

const CARDS = [
  {
    image: aboutShipping,
    title: "Поставки из США",
    text: "Прямые поставки с аукционов и дилерских центров без посредников.",
  },
  {
    image: aboutWarehouse,
    title: "Склад запчастей",
    text: "Оригинальные запчасти и расходники в наличии и под заказ.",
  },
  {
    image: aboutService,
    title: "Сервисный центр",
    text: "Профессиональное обслуживание, диагностика и ремонт любой сложности.",
  },
];

const CONTACTS = [
  { icon: MapPin, text: "Москва, ул 1 Дорожный проезд д. 5" },
  { icon: Phone, text: "+7 (499) 711 - 9161" },
  { icon: Send, text: "@kirillvsevenduro" },
  { icon: Mail, text: "info@ducatocenter.ru" },
  { icon: Mail, text: "k.potamoshnev@autodt.ru" },
  { icon: Clock, text: "Ежедневно с 10:00 до 19:00" },
];

const TERMS = [
  {
    icon: CalendarDays,
    title: "Сроки поставки",
    lines: ["Под заказ из США", "30–45 ДНЕЙ", "Со склада СВХ", "5–7 ДНЕЙ", "С ПТС – 10 ДНЕЙ"],
    bold: [1, 3, 4],
  },
  {
    icon: ShieldCheck,
    title: "Гарантия",
    lines: ["1 ГОД", "ИЛИ 100 000 КМ", "на все автомобили", "и работы"],
    bold: [0, 1],
  },
  {
    icon: CircleDollarSign,
    title: "Формы оплаты",
    lines: ["• Наличный расчёт", "• Безналичный расчёт", "• Кредит", "• Лизинг"],
    bold: [],
  },
  {
    icon: Repeat,
    title: "Trade-in",
    lines: ["Примем ваш автомобиль", "в зачёт стоимости", "нового RAM ProMaster"],
    bold: [],
  },
  {
    icon: Truck,
    title: "Доставка",
    lines: ["Организуем доставку", "в любой регион России", "и страны СНГ"],
    bold: [],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="border-border border-t">
      <div className="bg-accent text-accent-foreground relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] bg-cover bg-center lg:block"
          style={{ backgroundImage: `url(${aboutDealer})` }}
          aria-hidden="true"
        />
        
        <div className="relative mx-auto grid max-w-[1600px] gap-10 px-6 py-14 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-brand font-display text-xs font-bold">07</span>
              <span className="text-xs font-semibold tracking-normal uppercase">О нас</span>
            </div>

            <div className="font-display mt-6 text-4xl leading-none font-bold tracking-tight uppercase sm:text-5xl">
              RAM Promaster Center
            </div>
            <p className="font-sans mt-[10px] text-2xl leading-none font-light tracking-tight uppercase opacity-70 sm:text-3xl">
              Официальный поставщик
              <br />в России
            </p>

            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Мы специализируемся на поставках и продаже RAM ProMaster из США. Гарантируем
              прозрачные сделки, честные условия и профессиональный подход.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-4">
              {PILLARS.map(({ icon: Icon, title, lines }, i) => (
                <div
                  key={title}
                  className={i > 0 ? "border-white/10 sm:border-l sm:pl-6" : undefined}
                >
                  <Icon className="text-brand h-7 w-7" strokeWidth={1.3} />
                  <div className="font-sans mt-4 text-xs font-medium tracking-tight uppercase">
                    {title}
                  </div>
                  {lines.map((l) => (
                    <p key={l} className="mt-1 text-[11px] leading-snug opacity-65">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:hidden">
            <img
              src={aboutDealer}
              alt="Дилерский центр RAM ProMaster Center"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-[1600px] px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)_minmax(0,0.75fr)]">
          <div>
            <div className="font-display text-xl leading-tight font-bold tracking-tight uppercase">
              Почему выбирают
              <br />
              RAM Promaster Center?
            </div>
            <ul className="mt-6 space-y-2.5">
              {REASONS.map((r) => (
                <li key={r} className="text-muted-foreground flex gap-2.5 text-xs leading-snug">
                  <Check className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {CARDS.map((c) => (
              <div key={c.title} className="relative overflow-hidden rounded-[6px]">
                <img
                  src={c.image}
                  alt={c.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full min-h-[240px] w-full object-cover"
                />
                <div className="text-accent-foreground absolute inset-x-0 bottom-0 w-full bg-black/40 p-4">
                  <div className="font-sans text-sm font-medium tracking-tight uppercase">
                    {c.title}
                  </div>
                  <p className="mt-1.5 text-[11px] leading-snug opacity-75">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-border rounded-[6px] border p-6">
            <div className="font-display text-base leading-tight font-bold tracking-tight uppercase">
              ПРИЕЗЖАЙТЕ К НАМ
              <br />
              RAM PROMASTER CENTER
            </div>
            <ul className="mt-5 space-y-3">
              {CONTACTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-2.5 text-[11px] leading-snug">
                  <Icon className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                  {text.startsWith("+") ? (
                    <a href="tel:+74997119161" className="hover:text-brand transition-colors">
                      {text}
                    </a>
                  ) : text.includes("@") ? (
                    <a href={`mailto:${text}`} className="hover:text-brand transition-colors">
                      {text}
                    </a>
                  ) : text}
                </li>
              ))}
            </ul>
            <a
              href="https://yandex.ru/maps/?text=Москва%2C%20ул.%201-й%20Дорожный%20проезд%2C%20д.%205"
              target="_blank"
              rel="noreferrer"
              className="border-brand text-brand mt-6 inline-flex rounded-[5px] border px-6 py-3 text-[11px] font-bold tracking-normal uppercase transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Построить маршрут
            </a>
          </div>
        </div>

        <div className="bg-accent text-accent-foreground font-sans mt-10 grid gap-8 rounded-[8px] p-8 sm:grid-cols-2 lg:grid-cols-5">
          {TERMS.map(({ icon: Icon, title, lines, bold }, idx) => (
            <div
              key={title}
              className={`flex gap-4 ${idx > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}
            >
              <Icon className="text-brand h-8 w-8 shrink-0" strokeWidth={1.3} />
              <div>
                <div className="font-sans text-sm font-medium tracking-tight uppercase">{title}</div>
                <div className="mt-2 space-y-0.5">
                  {lines.map((l, i) =>
                    bold.includes(i) ? (
                      <p
                        key={l}
                        className="font-sans text-lg leading-tight font-medium tracking-tight uppercase"
                      >
                        {l}
                      </p>
                    ) : (
                      <p key={l} className="text-[11px] leading-snug opacity-65">
                        {l}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
