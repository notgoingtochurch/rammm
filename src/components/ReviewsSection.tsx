import { useState } from "react";
import { Play, ShieldCheck, Wrench, Boxes, Handshake, ArrowRight, Check } from "lucide-react";
import reviewThumb from "@/assets/review-0.png";
import ytThumb from "@/assets/review-00.png";
import reviewBg from "@/assets/review-bg.png";

const IMAGES = [reviewThumb];

const FILTERS = ["Все отзывы", "Фургон", "Шасси", "Перевозки", "Бизнес", "Сервис"] as const;

type Review = {
  title: string;
  author: string;
  tag: string;
  time: string;
  cat: (typeof FILTERS)[number];
};

const REVIEWS: Review[] = [
  { title: "Почему выбрали RAM ProMaster", author: "Игорь, владелец автопарка", tag: "Фургон L4H3", time: "03:42", cat: "Бизнес" },
  { title: "Отзыв о работе и экономичности", author: "Алексей, курьерская служба", tag: "Фургон L2H2", time: "02:18", cat: "Фургон" },
  { title: "Идеальный помощник для бизнеса", author: "Сергей, владелец бизнеса", tag: "Фургон L3H2", time: "01:57", cat: "Бизнес" },
  { title: "Работаем каждый день без проблем", author: "Дмитрий, логистическая компания", tag: "Шасси", time: "02:34", cat: "Шасси" },
  { title: "Грузоподъёмность и надёжность", author: "Николай, строительная компания", tag: "Шасси", time: "02:49", cat: "Шасси" },
  { title: "Доставка мебели по всей России", author: "Роман, транспортная компания", tag: "Фургон L3H3", time: "03:11", cat: "Перевозки" },
  { title: "Комфорт водителя на дальних маршрутах", author: "Максим, междугородние перевозки", tag: "Фургон L4H3", time: "02:05", cat: "Перевозки" },
  { title: "Отзыв о сервисе и поддержке", author: "Евгений, владелец компании", tag: "Сервис", time: "02:39", cat: "Сервис" },
  { title: "Почему лучше, чем конкуренты", author: "Павел, служба доставки", tag: "Фургон L2H2", time: "02:22", cat: "Фургон" },
  { title: "Выбор для крупного бизнеса", author: "Антон, руководитель автопарка", tag: "Фургон L4H3", time: "03:28", cat: "Бизнес" },
  { title: "Лёгкость управления и манёвренность", author: "Олег, курьерская служба", tag: "Фургон L2H2", time: "01:44", cat: "Фургон" },
  { title: "Надёжность в любых условиях", author: "Владимир, монтажная компания", tag: "Шасси", time: "02:16", cat: "Шасси" },
  { title: "Удобство погрузки и вместительность", author: "Станислав, перевозки", tag: "Фургон L3H2", time: "02:31", cat: "Перевозки" },
  { title: "Работаем 24/7 без простоев", author: "Андрей, логистическая компания", tag: "Фургон L4H3", time: "02:47", cat: "Перевозки" },
  { title: "Честный отзыв владельца", author: "Константин, частный предприниматель", tag: "Фургон L2H2", time: "02:14", cat: "Фургон" },
  { title: "Почему рекомендую RAM ProMaster", author: "Илья, владелец бизнеса", tag: "Фургон L3H2", time: "03:03", cat: "Бизнес" },
];

const YT_POINTS = [
  "Реальные истории клиентов",
  "Видео с выдач и поставок",
  "Обзоры комплектаций и доработок",
  "Советы по эксплуатации",
];

const GUARANTEES = [
  { icon: ShieldCheck, title: "1 год\nили 20 000 км", text: "гарантия на все автомобили RAM ProMaster" },
  { icon: Wrench, title: "Сервис\nпо всей России", text: "собственные и партнёрские сервисные центры" },
  { icon: Boxes, title: "Склад запчастей\nв наличии", text: "оригинальные запчасти и аналоги для всех моделей" },
  { icon: Handshake, title: "Поддержка 24/7", text: "мы всегда на связи и готовы помочь вам в любой ситуации" },
];

export function ReviewsSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Все отзывы");
  const list = REVIEWS.filter((r) => filter === "Все отзывы" || r.cat === filter);

  return (
    <section id="reviews" className="border-border border-t">
      <div className="relative overflow-hidden bg-[#fbfbfb]">
        <div
          className="relative mx-auto grid max-w-[1600px] items-center gap-8 bg-contain bg-right bg-no-repeat px-6 py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          style={{ backgroundImage: `url(${reviewBg})` }}
        >
          <div>
            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <span className="text-brand font-display font-bold">11</span>
              <span>/</span>
              <span className="text-foreground font-semibold tracking-normal uppercase">
                Видеоотзывы
              </span>
            </div>
            <h2 className="font-display mt-5 text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              Видеоотзывы клиентов
            </h2>
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

      <div className="mx-auto max-w-[1600px] px-6 py-10">
        <div className="flex flex-wrap items-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-[5px] border px-6 py-2.5 font-sans text-[11px] font-bold tracking-normal uppercase transition-colors ${
                filter === f
                  ? "bg-brand text-brand-foreground border-brand"
                  : "border-border hover:border-brand hover:text-brand"
              }`}
            >
              {f}
            </button>
          ))}
          <a
            href="https://rutube.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-brand hover:text-brand ml-auto rounded-[5px] border px-6 py-2.5 font-sans text-[11px] font-bold tracking-normal uppercase transition-colors"
          >
            Смотреть все на RUTUBE
          </a>
        </div>

        <div className="mt-6 grid gap-6 font-sans tracking-normal sm:grid-cols-2 lg:grid-cols-4">
          {list.map((r, i) => (
            <article key={r.title} className="border-border group overflow-hidden rounded-[6px] border">
              <div className="relative overflow-hidden">
                <img
                  src={IMAGES[i % IMAGES.length]}
                  alt={r.title}
                  width={1024}
                  height={576}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90">
                    <Play className="h-5 w-5 fill-white text-white" />
                  </span>
                </div>
                <span className="absolute right-2 bottom-2 bg-black/75 px-2 py-1 font-sans text-[10px] font-bold text-white">
                  {r.time}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-sans text-xs leading-snug font-bold">{r.title}</h3>
                <p className="text-muted-foreground mt-1.5 font-sans text-[11px]">{r.author}</p>
                <span className="bg-surface text-muted-foreground mt-3 inline-block px-2 py-1 font-sans text-[9px] font-bold tracking-normal uppercase">
                  {r.tag}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="border-border mt-8 grid items-center gap-8 rounded-[5px] border bg-[#fbfbfb] p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_auto]">
          <div className="flex items-start gap-4">
            <span className="border-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2">
              <Play className="fill-brand text-brand h-5 w-5" />
            </span>
            <div>
              <h3 className="font-sans text-base leading-tight font-bold tracking-normal uppercase">
                БОЛЬШЕ ОТЗЫВОВ
                <br />
                НА НАШЕМ RUTUBE КАНАЛЕ
              </h3>
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
          <div className="relative">
            <img
              src={ytThumb}
              alt="RAM ProMaster Center на RUTUBE"
              width={1024}
              height={576}
              loading="lazy"
              className="h-[110px] w-full rounded-[15px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-[15px] bg-black/30">
              <span className="bg-brand flex h-10 w-10 items-center justify-center rounded-full">
                <Play className="h-4 w-4 fill-white text-white" />
              </span>
            </div>
            <span className="absolute bottom-2 left-2 text-[10px] font-bold tracking-[0.14em] text-white uppercase whitespace-pre-line">
              {"\n\n"}
            </span>
          </div>
          <a
            href="https://rutube.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-brand-foreground hover:bg-accent inline-flex items-center justify-center gap-3 rounded-[5px] px-8 py-3.5 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors"
          >
            ПЕРЕЙТИ НА RUTUBE
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="border-border mt-6 grid items-stretch gap-0 overflow-hidden rounded-[5px] border sm:grid-cols-2 lg:grid-cols-4">
          {GUARANTEES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="relative flex gap-3 p-4 after:absolute after:right-0 after:top-1/2 after:hidden after:h-[70%] after:w-px after:-translate-y-1/2 after:bg-border sm:[&:nth-child(odd)]:after:block lg:after:block lg:last:after:hidden before:absolute before:bottom-0 before:left-1/2 before:h-px before:w-[70%] before:-translate-x-1/2 before:bg-border last:before:hidden sm:[&:nth-last-child(-n+2)]:before:hidden lg:before:hidden"
            >
              <Icon className="text-foreground h-9 w-9 shrink-0" strokeWidth={1.3} />
              <div>
                <h4 className="text-brand font-sans text-[13px] leading-tight font-medium tracking-normal whitespace-pre-line uppercase">
                  {title}
                </h4>
                <p className="text-muted-foreground mt-1 font-sans text-[10px] leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
