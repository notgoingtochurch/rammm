import { ShieldCheck, Sparkles, Star, Check, ArrowRight, Wrench, Truck, Percent } from "lucide-react";
import trimWhiteAsset from "@/assets/ram-white.png";
import trimSilverAsset from "@/assets/ram-grey.png";
import trimBlackAsset from "@/assets/ram-black.png";

const INTRO_FEATURES = [
  { icon: ShieldCheck, title: "Надёжность", text: "Проверенные решения и компоненты" },
  { icon: Sparkles, title: "Практичность", text: "Максимум функций для работы" },
  { icon: Star, title: "Комфорт", text: "Удобство и технологии на каждый день" },
];

const TRIMS = [
  {
    name: "Tradesman",
    subtitle: "Практичность и надёжность",
    price: "4 950 000",
    image: trimWhiteAsset,
    featured: false,
    features: [
      "3.6L V6 Pentastar, 276 л.с.",
      "9-ступ. автоматическая коробка",
      "Передний привод",
      "Кондиционер",
      "Мультимедиа Uconnect 5 с 7\"",
      "Apple CarPlay / Android Auto",
      "Камера заднего вида",
      "Базовые системы безопасности",
    ],
  },
  {
    name: "SLT",
    subtitle: "Больше комфорта и технологий",
    price: "5 350 000",
    image: trimSilverAsset,
    featured: true,
    features: [
      "Всё из комплектации Tradesman",
      "Климат-контроль",
      "Круиз-контроль",
      "Датчики парковки задние",
      "Противотуманные фары",
      "Руль и ручка КПП в коже",
      "16\" стальные диски",
      "Дополнительная шумоизоляция",
    ],
  },
  {
    name: "SLT+",
    subtitle: "Максимум возможностей",
    price: "5 850 000",
    image: trimBlackAsset,
    featured: false,
    features: [
      "Всё из комплектации SLT",
      "Мультимедиа Uconnect 5 с 10\"\u00a0",
      "Камера 360°",
      "Датчики парковки перед/зад",
      "Слепые зоны контроля",
      "Электропривод и обогрев зеркал",
      "Подогрев сидений",
      "Противоугонная система",
    ],
  },
];

const COMPARE_COLS = ["Tradesman", "SLT", "SLT+", "Super High Roof"];

const COMPARE_ROWS: { label: string; values: string[] }[] = [
  { label: "Двигатель 3.6L V6, 276 л.с.", values: ["✓", "✓", "✓", "✓"] },
  { label: "9-ступенчатая АКПП", values: ["✓", "✓", "✓", "✓"] },
  { label: "Климат-контроль", values: ["✓", "✓", "✓", "✓"] },
  { label: "Мультимедиа Uconnect 5", values: ["7\"", "7\"", "10\"\u00a0", "10\"\u00a0"] },
  { label: "Камера заднего вида", values: ["✓", "✓", "✓", "✓"] },
  { label: "Камера 360°", values: ["—", "—", "✓", "✓"] },
  { label: "Слепые зоны контроля", values: ["—", "—", "✓", "✓"] },
  { label: "Объём грузового отсека (макс.)", values: ["до 16,0 м³", "до 16,0 м³", "до 16,0 м³", "до 16,0 м³"] },
  { label: "Полезная нагрузка (макс.)", values: ["до 1600 кг", "до 1600 кг", "до 1600 кг", "до 1820 кг"] },
];

const GUARANTEES = [
  { icon: ShieldCheck, title: "Гарантия 1 год", text: "или 100 000 км пробега" },
  { icon: Wrench, title: "Сервис по всей России", text: "Официальные партнёры" },
  { icon: Truck, title: "Быстрая доставка", text: "от 30 до 45 дней" },
  { icon: Percent, title: "Лизинг и кредит", text: "Выгодные условия" },
];

export function TrimsSection() {
  return (
    <section id="trims" className="hidden border-border border-t py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="flex items-center gap-3">
          <span className="text-brand font-display text-xs font-bold">07</span>
          <span className="text-xs font-semibold tracking-normal uppercase">Комплектации</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)_minmax(0,1.15fr)] lg:items-start">
          <div>
            <div className="font-display text-4xl leading-none font-bold tracking-tight uppercase sm:text-5xl">
              RAM Promaster
            </div>
            <p className="text-muted-foreground font-display mt-1 text-2xl leading-none font-light tracking-tight uppercase sm:text-3xl">
              Выберите свою комплектацию
            </p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Разные комплектации для разных задач вашего бизнеса. Практичность, технологии и комфорт
            в каждой детали.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {INTRO_FEATURES.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`flex gap-3 ${i > 0 ? "border-border sm:border-l sm:pl-6" : ""}`}
              >
                <Icon className="mt-0.5 h-6 w-6 shrink-0" strokeWidth={1.3} />
                <div>
                  <div className="font-sans text-xs font-medium tracking-tight uppercase">{title}</div>
                  <p className="text-muted-foreground mt-1 text-[11px] leading-snug">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TRIMS.map((trim) => (
            <div
              key={trim.name}
              className={`bg-card relative flex flex-col rounded-[8px] border p-6 ${
                trim.featured ? "border-brand shadow-lg" : "border-border"
              }`}
            >
              {trim.featured && (
                <span className="bg-brand text-brand-foreground absolute -top-3 left-6 flex items-center gap-1.5 rounded-[5px] px-3 py-1 text-[10px] font-bold tracking-[0.14em] uppercase">
                  <Star className="h-3 w-3 fill-current" /> Оптимальный выбор
                </span>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-2xl leading-none font-bold tracking-tight uppercase">
                    {trim.name}
                  </div>
                  <p className="text-muted-foreground mt-1.5 font-sans text-[11px] font-medium tracking-wide uppercase">
                    {trim.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground text-[10px] tracking-wide uppercase">от</span>
                  <p className="font-display text-xl font-bold tracking-tight">
                    {trim.price} <span className="text-brand">₽</span>
                  </p>
                </div>
              </div>

              <img
                src={trim.image}
                alt={`RAM ProMaster ${trim.name}`}
                width={1024}
                height={640}
                loading="lazy"
                className="mt-4 w-full object-contain"
              />

              <ul className="mt-4 mb-[20px] grid gap-x-5 gap-y-2 sm:grid-cols-2">
                {trim.features.map((f) => (
                  <li key={f} className="text-muted-foreground flex gap-2 text-[11px] leading-snug">
                    <Check className="text-brand mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`mt-auto flex items-center justify-between gap-4 rounded-[6px] border px-5 py-3 pt-3 text-[11px] font-bold tracking-normal uppercase transition-colors ${
                  trim.featured
                    ? "bg-brand text-brand-foreground border-brand hover:opacity-90"
                    : "border-border hover:bg-surface"
                } mt-[20px]`}
              >
                Подробнее о комплектации
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-accent text-accent-foreground mt-8 overflow-x-auto rounded-[8px] p-5">
          <table className="w-full min-w-[720px] border-collapse text-xs">
            <thead>
              <tr>
                <th className="w-[28%] pb-3 text-left align-top">
                  <span className="block font-sans text-lg leading-none font-medium tracking-tight uppercase">
                    Сравнение
                    <br />
                    комплектаций
                  </span>
                </th>
                {COMPARE_COLS.map((c) => (
                  <th
                    key={c}
                    className="pb-3 text-center font-sans text-sm font-medium tracking-tight uppercase"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row) => (
                <tr key={row.label} className="border-t border-white/10">
                  <td className="py-1.5 opacity-80">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="py-1.5 text-center opacity-90">
                      {v === "✓" ? (
                        <Check className="mx-auto h-3.5 w-3.5" strokeWidth={2.5} />
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-border mt-6 grid gap-5 rounded-[8px] border p-5 sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`flex items-center justify-center gap-3 ${i % 2 === 1 ? "sm:border-border sm:border-l sm:pl-5" : ""} ${i % 4 !== 0 ? "lg:border-border lg:border-l lg:pl-5" : "lg:border-l-0 lg:pl-0"}`}
            >
              <Icon className="h-8 w-8 shrink-0" strokeWidth={1.3} />
              <div>
                <div className="font-sans text-xs font-medium tracking-tight uppercase">{title}</div>
                <p className="text-muted-foreground mt-1 text-[11px]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
