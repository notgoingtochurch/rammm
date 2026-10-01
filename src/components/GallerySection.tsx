import { useState } from "react";
import { Camera, BadgeCheck, Eye, ShieldCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
const PHOTOS: { src: string; alt: string; cat?: string }[] = [
  { src: "/ram-images/ram-1.webp", alt: "RAM ProMaster фото 1", cat: "Детали" },
  { src: "/ram-images/ram-2.webp", alt: "RAM ProMaster фото 2", cat: "Детали" },
  { src: "/ram-images/ram-3.webp", alt: "RAM ProMaster фото 3", cat: "Детали" },
  { src: "/ram-images/ram-4.webp", alt: "RAM ProMaster фото 4", cat: "Детали" },
  { src: "/ram-images/ram-5.webp", alt: "RAM ProMaster фото 5", cat: "Детали" },
  { src: "/ram-images/ram-6.webp", alt: "RAM ProMaster фото 6", cat: "Детали" },
  { src: "/ram-images/ram-7.webp", alt: "RAM ProMaster фото 7", cat: "Детали" },
  { src: "/ram-images/ram-8.webp", alt: "RAM ProMaster фото 8", cat: "Детали" },
  { src: "/ram-images/ram-9.webp", alt: "RAM ProMaster фото 9", cat: "Детали" },
  { src: "/ram-images/ram-10.webp", alt: "RAM ProMaster фото 10", cat: "Детали" },
  { src: "/ram-images/ram-11.webp", alt: "RAM ProMaster фото 11", cat: "Детали" },
  { src: "/ram-images/ram-12.webp", alt: "RAM ProMaster фото 12", cat: "Детали" },
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const photos = PHOTOS;
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  const showPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % photos.length);
  };

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
        </div>

        <div className="ram-gallery-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p, index) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="bg-surface group cursor-pointer overflow-hidden rounded-[8px] text-left"
              aria-label={`Открыть фото: ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={800}
                height={600}
                loading="lazy"
                className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
          <DialogContent className="w-[calc(100vw-32px)] max-w-5xl border-0 bg-black/95 p-3 sm:p-5">
            <DialogTitle className="sr-only">{selectedPhoto?.alt ?? "Фотография"}</DialogTitle>
            <DialogDescription className="sr-only">Просмотр фотографий галереи</DialogDescription>
            {selectedPhoto ? (
              <div className="relative flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-h-[78vh] w-full object-contain"
                />
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Предыдущее фото"
                  className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-2xl text-black transition-colors hover:bg-white sm:left-4"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Следующее фото"
                  className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-2xl text-black transition-colors hover:bg-white sm:right-4"
                >
                  ›
                </button>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>

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
