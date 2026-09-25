import {
  Cog,
  Gauge,
  Settings2,
  GitFork,
  Box,
  Weight,
  Ruler,
  DoorOpen,
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
import compDucato from "@/assets/comp-ducato.jpg";
import vsSprinter from "@/assets/vs-sprinter.jpg";
import vsCrafter from "@/assets/vs-crafter.jpg";

const RIVALS = [
  { name: 'RAM ProMaster 2500 159" High Roof', image: vsRam, ours: true },
  { name: "FIAT Ducato MAXI L3H2", image: compDucato, ours: false },
  { name: "Mercedes-Benz Sprinter", image: vsSprinter, ours: false },
  { name: "Volkswagen Crafter", image: vsCrafter, ours: false },
];

const ROWS: { icon: typeof Cog; label: string; values: string[]; accent?: boolean }[] = [
  {
    icon: Tag,
    label: "Рынок / происхождение",
    values: ["США / производство Мексика", "Европа / Stellantis", "Европа", "Европа"],
  },
  {
    icon: Cog,
    label: "Двигатель",
    values: ["3.6 Pentastar V6, бензин", "2.2 MultiJet, дизель", "2.0 CDI, дизель", "2.0 TDI, дизель"],
  },
  { icon: Gauge, label: "Мощность", values: ["276 л.с.", "140 л.с.", "190 л.с. (сравниваемая версия)", "170 л.с. (сравниваемая версия)"] },
  {
    icon: Settings2,
    label: "Коробка передач",
    values: ["9-ступенчатый автомат", "6-ступенчатая механика", "9-ступенчатый автомат", "8-ступенчатый автомат"],
  },
  {
    icon: GitFork,
    label: "Привод",
    values: ["Передний", "Передний", "Задний / полный (в зависимости от версии)", "Передний / задний / полный 4MOTION"],
  },
  { icon: Weight, label: "Полная масса", values: ["4 037 кг", "до 4 000 кг (MAXI)", "зависит от версии", "зависит от версии"] },
  { icon: Weight, label: "Полезная нагрузка", values: ["до 1 820 кг", "зависит от исполнения", "зависит от исполнения", "зависит от исполнения"] },
  { icon: Box, label: "Объём грузового отсека", values: ["≈13,0–13,3 м³", "≈13,0 м³", "зависит от длины/высоты кузова", "зависит от длины/высоты кузова"] },
  { icon: Ruler, label: "Длина автомобиля", values: ["5 998 мм", "5 998 мм", "зависит от версии", "зависит от версии"] },
  { icon: Ruler, label: "Высота автомобиля", values: ["≈2 760 мм", "≈2 524 мм", "зависит от версии", "зависит от версии"] },
  { icon: Ruler, label: "Длина грузового отсека", values: ["≈3 705–3 736 мм", "≈3 705 мм", "зависит от версии", "зависит от версии"] },
  { icon: Ruler, label: "Высота грузового отсека", values: ["≈1 930–1 971 мм", "≈1 932 мм", "зависит от версии", "зависит от версии"] },
  { icon: DoorOpen, label: "Задние двери", values: ["открывание 260°", "до 270° в соответствующей комплектации", "зависит от исполнения", "зависит от исполнения"] },
  {
    icon: ShieldCheck,
    label: "Цена в России",
    values: ["8 300 000 ₽", "4 910 000 ₽", "≈13 500 000 ₽", "≈11 200 000–11 600 000 ₽"],
    accent: true,
  },
  {
    icon: CircleDollarSign,
    label: "Примечание по цене",
    values: ["Цена пользователя / RAM ProMaster Center", "Цена FIAT Ducato Center, L3H2 MAXI 2025", "Ориентир по актуальным предложениям РФ", "Ориентир по актуальным предложениям РФ"],
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
          <table className="w-full min-w-[1400px] border-collapse text-xs">
            <thead>
              <tr>
                <th className="border-border w-[20%] border-b px-5 py-3 text-left text-[11px] font-bold tracking-[0.12em] uppercase">
                  Параметры
                </th>
                {RIVALS.map((r) => (
                  <th
                    key={r.name}
                    className={`border-border border-b border-l px-4 py-3 text-center text-[11px] font-bold tracking-[0.12em] uppercase ${
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
                <tr key={label} className={`border-border border-b last:border-b-0 ${label === "Цена в России" ? "bg-[#efefef]" : ""}`}>
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-3 text-[11px] font-semibold tracking-wide uppercase">
                      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.3} />
                      {label}
                    </span>
                  </td>
                  {values.map((v, i) => (
                    <td
                      key={i}
                      className={`text-foreground border-l border-border px-4 py-3 text-center leading-snug whitespace-pre-line ${
                        label === "Стоимость (от)" ? "font-semibold" : "font-medium"
                      } ${label === "Цена в России" && i === 0 ? "bg-brand text-white font-bold" : i === 0 ? `bg-brand/5 ${accent ? "text-brand" : ""}` : ""}`}
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
