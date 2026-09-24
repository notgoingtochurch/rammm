import { useState } from "react";
import { Camera, BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import extFrontAsset from "@/assets/gal-ext-front-new.png";
import extRearAsset from "@/assets/gal-ext-rear-new.png";
import extSideAsset from "@/assets/gal-ext-side-new.png";
import extSide2Asset from "@/assets/gal-ext-side2-new.png";
import intDashAsset from "@/assets/gal-int-3-new.png";
import cargoNewAsset from "@/assets/gal-cargo-new.png";
import engineNewAsset from "@/assets/gal-engine-new.png";
import wheelNewAsset from "@/assets/gal-wheel-new.png";
import badgeNewAsset from "@/assets/gal-badge-new.png";

import intCabinAsset from "@/assets/gal-int-1-new.png";
import intSeatsAsset from "@/assets/gal-int-2-new.png";
import detLightNewAsset from "@/assets/gal-det-light-new.png";

const FILTERS = ["Все фото", "Экстерьер", "Интерьер", "Грузовой отсек", "Детали"] as const;
type Filter = (typeof FILTERS)[number];

const PHOTOS: { src: string; alt: string; cat: Exclude<Filter, "Все фото"> }[] = [
  { src: extFrontAsset, alt: "RAM ProMaster вид спереди", cat: "Экстерьер" },
  { src: extRearAsset, alt: "RAM ProMaster вид сзади", cat: "Экстерьер" },
  { src: extSideAsset, alt: "RAM ProMaster вид сбоку", cat: "Экстерьер" },
  { src: extSide2Asset, alt: "RAM ProMaster вид сбоку", cat: "Экстерьер" },
  { src: intCabinAsset, alt: "Салон RAM ProMaster", cat: "Интерьер" },
  { src: intSeatsAsset, alt: "Сиденья RAM ProMaster", cat: "Интерьер" },
  { src: intDashAsset, alt: "Панель приборов RAM ProMaster", cat: "Интерьер" },
  { src: cargoNewAsset, alt: "Грузовой отсек RAM ProMaster", cat: "Грузовой отсек" },
  { src: detLightNewAsset, alt: "Фара RAM ProMaster", cat: "Детали" },
  { src: engineNewAsset, alt: "Двигатель Pentastar V6", cat: "Детали" },
  { src: wheelNewAsset, alt: "Колесо RAM ProMaster", cat: "Детали" },
  { src: badgeNewAsset, alt: "Шильдик 2500 ProMaster", cat: "Детали" },
];

const NOTES = [
  { icon: Camera, title: "Реальные фото", lines: ["Все фото сделаны", "нашими специалистами"] },
  {
    icon: BadgeCheck,
    title: "Актуальные комплектации",
    lines: ["Только реальные автомобили,", "которые поставляем"],
  },
  { icon: Eye, title: "Детальные ракурсы", lines: ["Показываем всё: от кузова", "до технических деталей"] },
  { icon: ShieldCheck, title: "Полная прозрачность", lines: ["Вы точно знаете, что", "покупаете"] },
];

export function GallerySection() {
  const [filter, setFilter] = useState<Filter>("Все фото");
  const photos = filter === "Все фото" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  return (
    <section id="gallery" className="border-border border-t py-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="text-muted-foreground flex items-center gap-3 text-xs">
          <span className="text-brand font-display font-bold">08</span>
          <span>/</span>
          <span className="text-foreground font-semibold tracking-normal uppercase">
            Фотогалерея
          </span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)_minmax(0,1.3fr)] lg:items-center">
          <div>
            <div className="font-display text-4xl leading-none font-bold tracking-tight uppercase sm:text-5xl">
              RAM Promaster
            </div>
            <p className="text-muted-foreground font-sans mt-1 text-2xl leading-none font-light tracking-tight uppercase sm:text-3xl">
              Фотогалерея
            </p>
          </div>

          <p className="text-muted-foreground text-xs leading-relaxed">
            Реальные фотографии автомобилей RAM ProMaster из поставок в Россию. Актуальные
            комплектации, детали интерьера и экстерьера, грузовой отсек.
          </p>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`font-sans rounded-[8px] border px-5 py-2.5 text-[11px] font-medium tracking-normal uppercase transition-colors ${
                  filter === f
                    ? "bg-brand text-brand-foreground border-brand"
                    : "border-border hover:bg-surface"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p) => (
            <div key={p.alt} className="bg-surface group overflow-hidden rounded-[8px]">
              <img
                src={p.src}
                alt={p.alt}
                width={800}
                height={600}
                loading="lazy"
                className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="bg-surface mt-10 grid gap-8 rounded-[8px] p-8 sm:grid-cols-2 lg:grid-cols-4">
          {NOTES.map(({ icon: Icon, title, lines }, i) => (
            <div
              key={title}
              className={`flex gap-4 ${i > 0 ? "border-border lg:border-l lg:pl-8" : ""}`}
            >
              <Icon className="text-brand h-7 w-7 shrink-0" strokeWidth={1.3} />
              <div>
                <div className="font-sans text-xs font-medium tracking-tight uppercase">{title}</div>
                {lines.map((l) => (
                  <p key={l} className="text-muted-foreground mt-1 text-[11px] leading-snug">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
