import { useState } from "react";
import { Play, ArrowRight, Check } from "lucide-react";
import ytThumb from "@/assets/rutube-promaster-thumb.webp";
import reviewBg from "@/assets/review-bg.webp";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const REVIEW_IMAGES = import.meta.glob("../assets/reviews/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type Review = {
  title: string;
  author: string;
  videoId: string;
};

const REVIEWS: Review[] = [
  { title: "Еще одна машина уехала в СПБ, отзыв Бориса", author: "Борис, клиент Fiat Ducato Center", videoId: "6ab450fa0f47b5f4825ef71bffe5dd64" },
  { title: "Отзыв Дмитрия о приобретении Fiat Ducato", author: "Дмитрий, клиент Fiat Ducato Center", videoId: "3f775383fe55d033c32c90b7e005de80" },
  { title: "Отзыв о приобретении фургона Ducato в Fiat Ducato Center", author: "Клиент из Екатеринбурга", videoId: "3335a68a1a4144d215d9ea9ee65e039a" },
  { title: "Очередной отзыв по нашему фургону Fiat Ducato", author: "Клиент Fiat Ducato Center", videoId: "e0859c50bb7f47d6a4e646627be738cb" },
  { title: "Елена из Чехова стала счастливой обладательницей нового FIAT Ducato!", author: "Елена, Чехов", videoId: "a4b30d0eb3411d0a1f17587f0d522347" },
  { title: "Отец сделал лучший подарок сыну — новый FIAT Ducato для мотоциклов", author: "Валерий, Чехов", videoId: "0d6350e8bf75bd7519c03a1a5331115d" },
  { title: "Виталий в течение 15 дней получил полностью подготовленный FIAT DUCATO", author: "Виталий, клиент Fiat Ducato Center", videoId: "74da63964c0db851037d8e34705239e1" },
  { title: "Александр из Твери занимается производством масел и игл", author: "Александр, Тверь", videoId: "54267d988bc0547162092d56403802b9" },
  { title: "Зашёл на ducatocenter.ru из Новосибирска и просто КУПИЛ", author: "Клиент из Новосибирска", videoId: "1f98d02b083e8f8cb97ae85844b5f505" },
  { title: "Егорьевск на связи!", author: "Клиент из Егорьевска", videoId: "ff39c7c49faf8efda069ebf20a732366" },
  { title: "Индийский чай теперь будет ездить на FIAT Ducato", author: "ASHA GROUP", videoId: "157157f2b95b439617ff3787a2a8bf7c" },
  { title: "Кирилл из Анапы выбрал FIAT DUCATO CENTER", author: "Кирилл, Анапа", videoId: "c9ba1e2cc27db8becc87ed4fa1ec7f66" },
  { title: "Игорь Вячеславович получил свой новый FIAT Ducato", author: "Игорь Вячеславович, Вышний Волочёк", videoId: "a47b6239c7dc18bb2cc9dfaeb797ef44" },
  { title: "Что в мире доработки Fiat Ducato? Поехали на Caravanex 2026", author: "Fiat Ducato Center", videoId: "7822bb879290bd2604b59b41e7a484fa" },
  { title: "Самый дальний FIAT Ducato от FIAT DUCATO CENTER!", author: "Сергей, Норильск", videoId: "9aa4d728535c37ac1b370e0373f434a8" },
  { title: "Владислав Владимирович забрал Fiat Ducato для перевозки цветов", author: "Владислав Владимирович", videoId: "1cb0857c676ff756c0a04568af902708" },
  { title: "Новый Fiat Ducato уехал к ребятам из Яндекс", author: "Клиенты Яндекс", videoId: "453a7a9c956cf5dff8de732185f6924a" },
  { title: "Очередной Fiat Ducato уезжает в Каширу — сразу в работу", author: "Клиент из Каширы", videoId: "1145d44bec29614ee9afe5c502180f5c" },
  { title: "Сделали Fiat DUCATO для перевозки мотоциклов", author: "Клиент Fiat Ducato Center", videoId: "a9959eb26a21ba45a5a4b067f3243ad0" },
  { title: "Город Иваново на связи!", author: "Клиент из Иваново", videoId: "f6dd37af9aa7dd14284335e73abf0e13" },
  { title: "Егор получил свой FIAT Ducato", author: "Егор, клиент Fiat Ducato Center", videoId: "64728d0f63efa4dcf67b8881458e6896" },
  { title: "Андрей из Коломны забрал свой Fiat Ducato", author: "Андрей, Коломна", videoId: "b96b150d99392a6ad8dfc777d5930627" },
  { title: "Михаил из Твери забрал свой Fiat Ducato", author: "Михаил, Тверь", videoId: "cfd2b2e1c557ff6867c6882b8620c54a" },
  { title: "Fiat Ducato под мотоцикл и рыбалку — готов к работе!", author: "Клиент Fiat Ducato Center", videoId: "d2c417c715472cdb33aa140bd0764b1a" },
  { title: "Так работают под ключ: заказал — приехал — уехал на готовом Ducato", author: "Клиент Fiat Ducato Center", videoId: "e35bd78b0439f82e9b2967fdd0a9c4b3" },
  { title: "Компания «Анкас» о покупке Fiat Ducato", author: "Компания «Анкас»", videoId: "f7857e6308fc1d3cee8fbcb5c668e665" },
  { title: "Компания «Смарт» купила новый Fiat Ducato", author: "Компания «Смарт»", videoId: "afbd02b82367c182e03a826ad17f069b" },
  { title: "Александр из Брянска купил Fiat Ducato для бизнеса", author: "Александр, Брянск", videoId: "814eb094f4ce88a171cacbc0c3521986" },
  { title: "Забрали 3 новых Fiat Ducato — честный отзыв клиента", author: "Компания Air Smith", videoId: "03ec6e4cb3305b9e0671b50ddcd62f8b" },
  { title: "Андрей из Коломны купил Fiat Ducato для своей столярной мастерской", author: "Андрей, Коломна", videoId: "f0ee9a99a71874cb907185dfd76f06bc" },
];

const YT_POINTS = [
  "Реальные истории клиентов",
  "Видео с выдач и поставок",
  "Обзоры комплектаций и доработок",
  "Советы по эксплуатации",
];

export function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [featuredVideoOpen, setFeaturedVideoOpen] = useState(false);

  return (
    <section id="reviews" className="border-border border-t">
      <div className="relative overflow-hidden bg-[#fbfbfb]">
        <div
          className="ram-reviews-hero ram-mobile-gutter relative mx-auto grid max-w-[1600px] items-center gap-8 bg-contain bg-right bg-no-repeat px-6 py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          style={{ backgroundImage: `url(${reviewBg})` }}
        >
          <div>
            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <span className="text-brand font-display font-bold">10</span>
              <span>/</span>
              <span className="text-foreground font-semibold tracking-normal uppercase">
                Видеоотзывы
              </span>
            </div>
            <div className="ram-mobile-section-title font-display mt-5 text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              Видеоотзывы клиентов
            </div>
            <p className="font-sans text-muted-foreground mt-3 text-lg font-medium tracking-tight uppercase">
              Реальный опыт — лучше любых слов
            </p>
            <p className="mt-5 max-w-md text-xs leading-relaxed text-black">
              Смотрите честные отзывы владельцев RAM ProMaster о работе с нашей компанией, качестве
              автомобилей и сервиса. Прозрачность и доверие — наш приоритет.
            </p>
          </div>
        </div>
      </div>

      <div className="ram-reviews-list ram-mobile-gutter mx-auto max-w-[1600px] px-6 py-10">
        <div className="ram-reviews-grid mt-6 grid gap-6 font-sans tracking-normal sm:grid-cols-2 lg:grid-cols-5">
          {REVIEWS.map((r) => (
            <article
              key={r.videoId}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedReview(r)}
              onKeyDown={(event) => event.key === "Enter" && setSelectedReview(r)}
              className="border-border group cursor-pointer overflow-hidden rounded-[6px] border"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#161616]">
                <img
                  src={REVIEW_IMAGES[`../assets/reviews/${r.videoId}.webp`]}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90 transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5 fill-white text-white" />
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="font-sans text-xs leading-snug font-bold">{r.title}</div>
                <p className="text-muted-foreground mt-1.5 font-sans text-[11px]">{r.author}</p>
              </div>
            </article>
          ))}
        </div>

        <Dialog open={Boolean(selectedReview)} onOpenChange={(open) => !open && setSelectedReview(null)}>
          <DialogContent className="w-[calc(100vw-32px)] max-w-[520px] rounded-[8px] border-border bg-black p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="font-display text-lg font-bold tracking-tight text-white uppercase">
                {selectedReview?.title}
              </DialogTitle>
              <DialogDescription className="text-white/70">{selectedReview?.author}</DialogDescription>
            </DialogHeader>
            {selectedReview && (
              <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-[6px] bg-black">
                <iframe
                  src={`https://rutube.ru/play/embed/${selectedReview.videoId}`}
                  title={selectedReview.title}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        <div className="border-border mt-8 grid items-center gap-8 rounded-[5px] border bg-[#fbfbfb] p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_auto]">
          <div className="flex items-start gap-4">
            <span className="border-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2">
              <Play className="fill-brand text-brand h-5 w-5" />
            </span>
            <div>
              <div className="font-sans text-base leading-tight font-bold tracking-normal uppercase">
                БОЛЬШЕ ОТЗЫВОВ
                <br />
                НА НАШЕМ RUTUBE КАНАЛЕ
              </div>
              <p className="text-muted-foreground mt-2 text-[11px] leading-relaxed">
                Сотни видеоотзывов от реальных клиентов о наших автомобилях и сервисе.
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            {YT_POINTS.map((p) => (
              <li key={p} className="flex gap-2 text-[11px] leading-snug">
                <Check className="text-brand mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setFeaturedVideoOpen(true)}
            aria-label="Смотреть видео Ram ProMaster"
            className="group relative w-full cursor-pointer text-left shadow-none"
          >
            <img
              src={ytThumb}
              alt="Превью видео Ram ProMaster на RUTUBE"
              width={1024}
              height={576}
              loading="lazy"
              className="ram-featured-video-img h-[210px] w-full rounded-[15px] object-cover shadow-none"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-[15px]">
              <span className="bg-brand flex h-10 w-10 items-center justify-center rounded-full">
                <Play className="h-4 w-4 fill-white text-white transition-transform group-hover:scale-110" />
              </span>
            </div>
            <span className="absolute bottom-2 left-2 text-[10px] font-bold tracking-[0.14em] text-white uppercase whitespace-pre-line">
              {"\n\n"}
            </span>
          </button>
          <a
            href="https://rutube.ru/channel/25956461/"
            target="_blank"
            rel="noopener noreferrer"
            className="ram-ripple-button bg-brand text-brand-foreground hover:bg-accent inline-flex items-center justify-center gap-3 rounded-[5px] px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors"
          >
            ПЕРЕЙТИ НА RUTUBE
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <Dialog open={featuredVideoOpen} onOpenChange={setFeaturedVideoOpen}>
          <DialogContent className="w-[calc(100vw-32px)] max-w-5xl rounded-[8px] border-border bg-black p-3 sm:p-5">
            <DialogTitle className="sr-only">Ram ProMaster как одна из вершин концерна Stellantis</DialogTitle>
            <DialogDescription className="sr-only">Видео на RUTUBE</DialogDescription>
            <div className="aspect-video w-full overflow-hidden rounded-[6px] bg-black">
              <iframe
                src="https://rutube.ru/play/embed/d4762685f4fbe494c4151ce4d2ddf85d"
                title="Ram ProMaster как одна из вершин концерна Stellantis"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
