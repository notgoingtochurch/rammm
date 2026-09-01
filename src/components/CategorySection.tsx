import {
  CircleCheck,
  CircleAlert,
  Cog,
  Gauge,
  Box,
  Weight,
  Users,
  FileText,
  ArrowRight,
  Headphones,
} from "lucide-react";
import catWhiteAsset from "@/assets/vs-1-3.png";
const catWhite = catWhiteAsset;
import catDarkAsset from "@/assets/vs-2-3.png";
const catDark = catDarkAsset;
import catConsult from "@/assets/cat-consult.jpg";

import vsBanner from "@/assets/vs-0-3.png";
import photo1Asset from "@/assets/vs-3-2.png";
import photo2Asset from "@/assets/vs-4-2.png";
import photo3Asset from "@/assets/vs-5-3.png";
import photo4Asset from "@/assets/vs-6-2.png";


const CARDS = [
  {
    letter: "B",
    name: "RAM 2500",
    sub: '159" HIGH ROOF',
    image: catWhite,
    positive: true,
    points: [
      "Полная масса до 3 500 кг",
      "Права категории B",
      "Без тахографа",
      "Городская эксплуатация",
      "Доставка и сервисные компании",
      "Межрегиональные перевозки",
    ],
    specs: [
      { icon: Cog, label: "Двигатель", value: "3.6 Pentastar V6" },
      { icon: Gauge, label: "Мощность", value: "276 л.с." },
      { icon: Box, label: "Объём", value: "13 м³" },
    ],
    payload: "до 1 820 кг",
    price: "от 5 350 000 ₽",
  },
  {
    letter: "C",
    name: "RAM 3500 EXTENDED",
    sub: "",
    image: catDark,
    positive: false,
    points: [
      "Требуется категория C",
      "Полная масса более 3 500 кг",
      "Тахограф",
      "Коммерческие перевозки",
      "Максимальная грузоподъёмность",
    ],
    specs: [
      { icon: Cog, label: "Двигатель", value: "3.6 Pentastar V6" },
      { icon: Gauge, label: "Мощность", value: "276 л.с." },
      { icon: Box, label: "Объём", value: "16 м³" },
    ],
    payload: "до 2 300 кг",
    price: "от 5 850 000 ₽",
  },
];

const KNOW = [
  { badge: "B", title: "Категория B", text: "До 3 500 кг полной массы. Можно управлять с правами категории B." },
  { badge: "C", title: "Категория C", text: "Свыше 3 500 кг полной массы. Требуется водительское удостоверение категории C." },
  { icon: FileText, title: "Тахограф", text: "Требуется для коммерческой эксплуатации отдельных модификаций категории C." },
  { icon: Users, title: "Что выбирают клиенты", text: "95% покупателей выбирают RAM 2500 под категорию B." },
];

const PHOTOS = [
  { src: photo1Asset, caption: "RAM 2500 High Roof" },
  { src: photo2Asset, caption: "RAM 3500 Extended" },
  { src: photo3Asset, caption: "Просторный грузовой отсек" },
  { src: photo4Asset, caption: "Погрузка европаллет" },
];

const HELP = [
  "права категории B или C",
  "задачи вашего бизнеса",
  "объём перевозок",
  "бюджет компании",
  "требования к грузоподъёмности",
  "условия эксплуатации",
];

export function CategorySection() {
  return (
    <section id="category" className="border-border border-t pt-0 pb-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-brand font-display text-xs font-bold">13</span>
              <span className="text-xs font-semibold uppercase">
                / КАТЕГОРИИ B ИЛИ C
              </span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              RAM Promaster

              <br />
              категория B или C?
            </h2>
            <span className="bg-brand mt-5 block h-0.5 w-14" />
            <p className="text-foreground mt-5 max-w-[400px] text-sm leading-relaxed">
              Какой RAM ProMaster можно эксплуатировать с обычными правами категории B, а когда
              потребуется категория C?
            </p>
          </div>

          <img
            src={vsBanner}
            alt="RAM 2500 категория B против RAM 3500 Extended категория C"
            loading="lazy"
            className="h-fit w-auto object-contain"
          />

        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CARDS.map((c) => (
            <div key={c.letter} className="border-border bg-card rounded-[5px] border p-6">
              <p className="text-foreground text-[10px] font-semibold uppercase">
                Категория
              </p>
              <div className="mt-2 flex items-center gap-5">
                <span className="font-display text-brand text-5xl leading-none font-bold">
                  {c.letter}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-none font-bold tracking-tight uppercase">
                    {c.name}
                  </h3>
                  {c.sub && (
                    <p className="font-display mt-1 text-xl leading-none font-bold tracking-tight uppercase">
                      {c.sub}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid items-center gap-5 sm:grid-cols-2">
                <img src={c.image} alt={c.name} width={1024} height={700} loading="lazy" className="w-full object-contain" />
                <ul className="grid gap-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[11px] leading-snug">
                      {c.positive ? (
                        <CircleCheck className="text-brand h-4 w-4 shrink-0" strokeWidth={1.6} />
                      ) : (
                        <CircleAlert className="text-brand h-4 w-4 shrink-0" strokeWidth={1.6} />
                      )}
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-border mt-6 grid grid-cols-3 overflow-hidden rounded-t-[5px] border">
                {c.specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="border-border border-r px-4 py-3 last:border-r-0">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase">
                      <Icon className="h-4 w-4 shrink-0" strokeWidth={1.3} />
                      {label}
                    </span>
                    <p className="text-foreground mt-1.5 text-[11px]">{value}</p>
                  </div>
                ))}
              </div>
              <div className="border-border grid grid-cols-2 overflow-hidden rounded-b-[5px] border border-t-0">
                <div className="border-border border-r px-4 py-3">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase">
                    <Weight className="h-4 w-4 shrink-0" strokeWidth={1.3} />
                    Полезная нагрузка
                  </span>
                  <p className="text-foreground mt-1.5 text-[11px]">{c.payload}</p>
                </div>
                <div className="px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase">
                    Стоимость
                  </span>
                  <p className="text-brand font-sans mt-1.5 text-sm font-bold">{c.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-border mt-8 rounded-[5px] border p-8">
          <h3 className="font-sans text-xl font-bold tracking-tight uppercase">
            Что нужно знать?
          </h3>
          <div className="divide-border mt-6 grid sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {KNOW.map((k) => (
              <div key={k.title} className="flex gap-4 px-6 py-4 first:pl-0 last:pr-0">
                {k.badge ? (
                  <span className="border-brand text-brand font-display flex h-15 w-15 shrink-0 items-center justify-center rounded-full border text-[27px] font-bold">
                    {k.badge}
                  </span>
                ) : (
                  k.icon && (
                    <span className="border-brand text-brand flex h-15 w-15 shrink-0 items-center justify-center rounded-full border">
                      <k.icon className="h-6 w-6" strokeWidth={1.4} />
                    </span>
                  )
                )}
                <div>
                  <h4 className="font-sans text-xs font-bold tracking-tight uppercase">
                    {k.title}
                  </h4>
                  <p className="text-muted-foreground mt-2 text-[11px] leading-relaxed">{k.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PHOTOS.map((p) => (
            <figure key={p.caption} className="relative overflow-hidden rounded-[5px]">
              <img src={p.src} alt={p.caption} width={900} height={640} loading="lazy" className="h-[290px] w-full rounded-[5px] object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 font-['Montserrat',sans-serif] text-[10px] font-bold tracking-wide text-white uppercase">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="border-border mt-6 grid items-center gap-6 rounded-[5px] border p-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h3 className="font-['Montserrat',sans-serif] text-xl leading-[1.25] font-bold tracking-tight uppercase sm:text-2xl">
              Не уверены, какой <span className="text-brand">RAM</span>
              <br />
              вам подойдёт?
            </h3>
            <p className="text-muted-foreground mt-2 text-xs">
              Наши специалисты помогут подобрать автомобиль под:
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {HELP.map((h) => (
                <li key={h} className="text-muted-foreground flex gap-2 text-[11px]">
                  <CircleCheck className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="bg-brand text-brand-foreground flex items-center gap-3 rounded-[5px] px-5 py-2.5 text-[11px] font-bold tracking-normal uppercase transition-opacity hover:opacity-90"
              >
                Получить консультацию
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
              <span className="text-muted-foreground flex items-center gap-3 text-[11px] leading-snug">
                <Headphones className="h-5 w-5 shrink-0" strokeWidth={1.2} />
                Быстрый ответ
                <br />и профессиональная консультация
              </span>
            </div>
          </div>
          <img src={catConsult} alt="Загруженный фургон RAM ProMaster" width={1100} height={640} loading="lazy" className="w-full rounded-[5px] object-cover" />
        </div>
      </div>
    </section>
  );
}
