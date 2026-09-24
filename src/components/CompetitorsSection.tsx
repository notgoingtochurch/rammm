import {
  Cog,
  Gauge,
  Settings2,
  GitFork,
  Box,
  Weight,
  Ruler,
  CalendarClock,
  ShieldCheck,
  CircleDollarSign,
  Tag,
  Shield,
  Package,
  Wrench,
  Truck,
  Headphones,
  ArrowRight,
} from "lucide-react";
import vsRam from "@/assets/vs-ram.jpg";
import compareBg from "@/assets/compare-bg.png";
import vsTransit from "@/assets/vs-transit.jpg";
import vsSprinter from "@/assets/vs-sprinter.jpg";
import vsCrafter from "@/assets/vs-crafter.jpg";

const RIVALS = [
  { name: "RAM ProMaster", image: vsRam, ours: true },
  { name: "Ford Transit", image: vsTransit, ours: false },
  { name: "Mercedes-Benz Sprinter", image: vsSprinter, ours: false },
  { name: "VW Crafter", image: vsCrafter, ours: false },
];

const ROWS: { icon: typeof Cog; label: string; values: string[]; accent?: boolean }[] = [
  {
    icon: Cog,
    label: "Двигатель",
    values: ["2.2 MultiJet III дизель", "2.0 EcoBlue дизель", "2.0 CDI дизель", "2.0 TDI дизель"],
  },
  { icon: Gauge, label: "Мощность", values: ["140 / 180 л.с.", "130 / 170 л.с.", "114 / 150 / 190 л.с.", "102 / 140 / 177 л.с."] },
  {
    icon: Settings2,
    label: "Коробка передач",
    values: [
      "6-ст. механическая\n9-ст. автомат (опция)",
      "6-ст. механическая\n10-ст. автомат (опция)",
      "6-ст. механическая\n9-ст. автомат (опция)",
      "6-ст. механическая\n8-ст. автомат (опция)",
    ],
  },
  {
    icon: GitFork,
    label: "Привод",
    values: ["Передний", "Передний / Полный (AWD)", "Задний / Полный (4MATIC)", "Передний / Полный (4MOTION)"],
  },
  { icon: Box, label: "Грузовой объём (max)", values: ["17,0 м³", "15,1 м³", "17,0 м³", "16,1 м³"] },
  { icon: Weight, label: "Полезная нагрузка (max)", values: ["до 1 820 кг", "до 1 708 кг", "до 2 158 кг", "до 2 136 кг"] },
  { icon: Ruler, label: "Высота кузова (max)", values: ["2 765 мм (H3)", "2 786 мм (H3)", "2 796 мм (H3)", "2 798 мм (H3)"] },
  { icon: Ruler, label: "Длина кузова (max)", values: ["6 363 мм (L4)", "6 706 мм (L4)", "6 967 мм (L4)", "6 836 мм (L4)"] },
  { icon: CalendarClock, label: "Межсервисный интервал", values: ["20 000 км / 1 год", "20 000 км / 1 год", "25 000 км / 1 год", "20 000 км / 1 год"] },
  {
    icon: ShieldCheck,
    label: "Гарантия",
    values: ["1 год или 20 000 км", "2 года без ограничения пробега", "2 года без ограничения пробега", "2 года без ограничения пробега"],
    accent: true,
  },
  {
    icon: CircleDollarSign,
    label: "Стоимость (от)",
    values: ["от 4 280 000 ₽", "от 4 950 000 ₽", "от 6 450 000 ₽", "от 5 480 000 ₽"],
    accent: true,
  },
];

const REASONS = [
  { icon: Tag, title: "Лучшая цена", text: "Оптимальное соотношение цены и возможностей. Выгода до 1 500 000 ₽ по сравнению с аналогами." },
  { icon: Shield, title: "Надёжность и простота", text: "Проверенные агрегаты и простая конструкция — минимум поломок, низкая стоимость владения." },
  { icon: Package, title: "Максимальный объём", text: "Один из лучших показателей грузового объёма в своём классе." },
  { icon: Wrench, title: "Доступное обслуживание", text: "Собственный сервис и склад запчастей по всей России." },
  { icon: Truck, title: "Прямые поставки", text: "Прямые поставки из США — минуя лишних посредников и переплаты." },
  { icon: Headphones, title: "Поддержка 24/7", text: "Всегда на связи и готовы помочь в любой ситуации." },
];

type CompetitorsSectionProps = {
  onDiscountClick?: () => void;
};

export function CompetitorsSection({ onDiscountClick }: CompetitorsSectionProps) {
  return (
    <section id="competitors" className="border-border border-t bg-[#f8f9f9] py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="flex items-center gap-3">
          <span className="text-brand font-display text-xs font-bold">11</span>
          <span className="text-xs font-semibold tracking-normal uppercase">
            / Сравнение с конкурентами
          </span>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:items-center">
          <div>
            <div className="font-display text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              RAM Promaster
              <br />
              vs конкуренты
            </div>
            <p className="font-sans text-muted-foreground mt-[8px] text-xl leading-none font-light tracking-normal uppercase sm:text-2xl">
              Честное сравнение параметров
            </p>
            <p className="text-foreground mt-4 text-sm leading-relaxed">
              Сравните RAM ProMaster с основными конкурентами на рынке коммерческих автомобилей и
              убедитесь, почему его выбирают профессионалы.
            </p>
          </div>

          <img
            src={compareBg}
            alt="RAM ProMaster, Ford Transit, Mercedes-Benz Sprinter и VW Crafter"
            loading="lazy"
            className="w-full object-contain"
          />
        </div>

        <div className="border-border mt-12 overflow-x-auto rounded-[5px] border">
          <table className="w-full min-w-[900px] border-collapse text-xs">
            <thead>
              <tr>
                <th className="border-border w-[20%] border-b px-5 py-3 text-left text-[11px] font-bold tracking-[0.12em] uppercase">
                  Параметры
                </th>
                {RIVALS.map((r) => (
                  <th
                    key={r.name}
                    className={`border-border border-b px-4 py-3 text-center text-[11px] font-bold tracking-[0.12em] uppercase ${
                      r.ours ? "bg-brand text-brand-foreground" : ""
                    }`}
                  >
                    {r.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ icon: Icon, label, values, accent }) => (
                <tr key={label} className="border-border border-b last:border-b-0">
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-3 text-[11px] font-semibold tracking-wide uppercase">
                      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.3} />
                      {label}
                    </span>
                  </td>
                  {values.map((v, i) => (
                    <td
                      key={i}
                      className={`text-foreground px-4 py-3 text-center leading-snug whitespace-pre-line ${
                        label === "Стоимость (от)" ? "font-semibold" : "font-medium"
                      } ${i === 0 ? `bg-brand/5 ${accent ? "text-brand" : ""}` : ""}`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="font-sans mt-12 text-center text-xl font-medium tracking-normal uppercase sm:text-2xl">
          Почему <span className="text-brand">RAM Promaster</span> выгоднее
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-border bg-card rounded-[6px] border p-5">
              <Icon className="text-brand h-7 w-7" strokeWidth={1.3} />
              <div className="font-sans mt-3 text-xs font-medium tracking-normal uppercase">
                {title}
              </div>
              <p className="text-muted-foreground mt-2 text-[11px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted-foreground text-[11px]">
            * Итоговая стоимость зависит от комплектации и условий поставки. Уточните у менеджера.
          </p>
          <button
            type="button"
            onClick={onDiscountClick}
            className="font-sans bg-brand text-brand-foreground flex items-center gap-3 rounded-[5px] px-6 py-3 text-[11px] font-bold tracking-normal uppercase transition-opacity hover:opacity-90"
          >
            Получить скидку
            <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}
