import {
  Phone,
  MessageCircle,
  Mail,
  Globe,
  CircleCheck,
  MapPin,
  Truck,
  ShieldCheck,
  FileText,
  Users,
  Youtube,
  Send,
} from "lucide-react";
import contactHeroAsset from "@/assets/contact-0.png.asset.json";
import contactMap from "@/assets/contact-map.jpg";
import contactManagerAsset from "@/assets/contact-men.png.asset.json";
import footerLogoAsset from "@/assets/footer-logo.png.asset.json";

const CONTACTS = [
  {
    icon: Phone,
    label: "Телефон",
    value: "8 (800) 555-98-72",
    lines: ["Ежедневно с 9:00 до 21:00. Звонок по России бесплатный"],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / Telegram",
    value: "+7 (980) 158-88-31",
    lines: ["Напишите нам ответим в течение 5 минут"],
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@ducatocenter.ru",
    lines: ["Для коммерческих предложений и сотрудничества"],
  },
  {
    icon: Globe,
    label: "Сайт",
    value: "https://ducatocenter.ru/",
    lines: ["Вся информация о моделях, ценах и услугах"],
  },
];

const OFFICE = [
  "15 минут от МКАД по трассе М-4 «Дон»",
  "Удобный заезд для грузового транспорта",
  "Большая закрытая территория",
  "Демонстрационные автомобили в наличии",
  "Сервис и подготовка автомобилей",
];

const WHY = [
  { icon: Truck, title: "Прямые поставки из США", text: "Работаем без посредников. Лучшие цены и честные условия." },
  { icon: ShieldCheck, title: "Гарантия и поддержка", text: "Официальная гарантия. Сервис и запчасти в наличии." },
  { icon: FileText, title: "Полный комплекс услуг", text: "Подготовка, переоборудование, оформление, доставка." },
  { icon: Users, title: "Индивидуальный подход", text: "Подбираем решения под задачи вашего бизнеса." },
];

const FOOTER_COLS = [
  {
    title: "Модели",
    items: ["RAM 1500", "RAM 2500 PROMASTER", "RAM 3500 PROMASTER", "RAM 3500 EXTENDED"],
  },
  {
    title: "Покупателям",
    items: ["Категория B или C", "Подготовка и тюнинг", "Гарантия", "Доставка и оплата", "Документы"],
  },
  {
    title: "Компания",
    items: ["О компании", "Контакты", "Партнёрам", "Отзывы", "Новости"],
  },
];

export function ContactsSection() {
  return (
    <section id="contacts" className="border-border border-t bg-[#FDFDFE] pt-0 pb-16">
      <div className="mx-auto max-w-[1600px] px-6">
        <div
          className="grid min-h-[420px] items-center gap-8 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroAsset.url})` }}
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="text-brand font-display text-xs font-bold">14</span>
              <span className="text-xs font-semibold tracking-normal uppercase">/ Контакты</span>
            </div>
            <h2 className="font-display mt-6 text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              RAM Promaster
              <br />
              <span className="text-brand font-medium">Center</span>
            </h2>
            <p className="font-sans text-muted-foreground mt-3 text-lg font-medium tracking-tight uppercase">
              Надёжный партнёр для вашего бизнеса
            </p>
            <p className="mt-5 max-w-[400px] text-sm leading-relaxed text-black">
              Мы поставляем новые RAM ProMaster напрямую из США и помогаем вашему бизнесу двигаться
              вперёд. Свяжитесь с нами любым удобным способом.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACTS.map(({ icon: Icon, label, value, lines }) => (
            <div key={label} className="border-border bg-card rounded-[5px] border p-5">
              <div className="flex items-start gap-3">
                <span className="border-brand text-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] uppercase">{label}</p>
                  <p className="font-sans mt-1 text-sm font-bold tracking-tight break-all">
                    {value}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-xs leading-relaxed text-black">
                <p>{lines.join(' · ')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-border bg-card mt-6 grid gap-0 overflow-hidden rounded-[5px] border lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)]">
          <div className="p-8">
            <h3 className="font-sans text-xl font-medium tracking-tight uppercase">
              Наш офис и склад
            </h3>
            <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
              Московская область, г. Домодедово,
              <br />
              мкр. Белые Столбы, ул. Промышленная, 10
              <br />
              (территория логистического комплекса)
            </p>
            <ul className="mt-5 grid gap-2.5">
              {OFFICE.map((o) => (
                <li key={o} className="text-muted-foreground flex gap-2.5 text-xs leading-snug">
                  <CircleCheck className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                  {o}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="border-brand text-brand mt-6 rounded-[5px] border px-6 py-3 text-[11px] font-bold tracking-normal uppercase transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Построить маршрут
            </button>
          </div>
          <div className="relative min-h-[320px]">
            <img
              src={contactMap}
              alt="Карта проезда к RAM ProMaster Center"
              width={1200}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
              <MapPin className="text-brand h-8 w-8 shrink-0 fill-brand/20" strokeWidth={1.5} />
              <div className="bg-card border-border border px-4 py-2">
                <p className="font-display text-[11px] font-bold tracking-tight uppercase">
                  RAM ProMaster Center
                </p>
                <p className="text-muted-foreground text-[10px]">ул. Промышленная, 10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="border-border rounded-[5px] border p-8">
            <h3 className="font-sans text-xl font-medium tracking-tight uppercase">
              Оставьте заявку
            </h3>
            <p className="text-muted-foreground mt-3 text-[11px] leading-relaxed">
              Наш специалист свяжется с вами и ответит на все вопросы
            </p>
            <form className="mt-5 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                  placeholder="Ваше имя"
                />
                <input
                  className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                  placeholder="Телефон"
                />
              </div>
              <input
                className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                placeholder="E-mail"
              />
              <textarea
                rows={4}
                className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                placeholder="Комментарий"
              />
              <label className="text-muted-foreground flex items-start gap-2.5 text-[10px] leading-snug">
                <input type="checkbox" className="accent-brand mt-0.5 h-3.5 w-3.5 shrink-0" />
                Я согласен на обработку персональных данных
              </label>
              <button
                type="submit"
                className="bg-brand text-brand-foreground mt-1 rounded-[5px] px-6 py-3 text-[11px] font-bold tracking-normal uppercase transition-opacity hover:opacity-90"
              >
                Отправить заявку
              </button>
            </form>
          </div>

          <div className="border-border rounded-[5px] border p-8">
            <h3 className="font-sans text-xl font-medium tracking-tight uppercase">
              Почему выбирают нас
            </h3>
            <div className="mt-6 grid gap-6">
              {WHY.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="border-brand text-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <Icon className="h-4 w-4" strokeWidth={1.4} />
                  </span>
                  <div>
                    <h4 className="font-sans text-xs font-bold tracking-tight uppercase">
                      {title}
                    </h4>
                    <p className="text-muted-foreground mt-1.5 text-[11px] leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-accent text-accent-foreground relative overflow-hidden rounded-[5px] bg-contain bg-right-bottom bg-no-repeat p-8"
            style={{ backgroundImage: `url(${contactManagerAsset.url})` }}
          >
            <h3 className="font-sans text-xl font-medium tracking-tight uppercase">
              Нужна консультация?
            </h3>
            <p className="mt-4 max-w-[60%] text-[11px] leading-relaxed opacity-70">
              Наш эксперт поможет подобрать подходящую модель и комплектацию под ваш бизнес и
              бюджет.
            </p>
            <span className="bg-brand mt-6 block h-0.5 w-14" />
            <p className="mt-5 text-[11px] leading-relaxed opacity-80">
              Алексей — руководитель отдела продаж
            </p>
            <ul className="mt-5 grid gap-3 text-[11px]">
              <li className="flex items-center gap-3">
                <Phone className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                +7 (980) 158-88-31
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                sales@ducatocenter.ru
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <MessageCircle className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                Ежедневно с 9:00 до 21:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-accent text-accent-foreground mt-16">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,0.8fr))_minmax(0,1.2fr)]">
          <div>
            <img
              src={footerLogoAsset.url}
              alt="RAM ProMaster Center"
              width={191}
              height={71}
              loading="lazy"
              className="h-auto w-[190px]"
            />
            <p className="mt-5 text-[11px] leading-relaxed opacity-65">
              Официальный поставщик коммерческих автомобилей RAM ProMaster в России. Поставки
              напрямую из США.
            </p>
            <div className="mt-6 flex gap-3">
              {[Youtube, Send, MessageCircle, Globe].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
              ))}
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs font-bold tracking-[0.14em] uppercase">
                {col.title}
              </h4>
              <ul className="mt-5 grid gap-2.5">
                {col.items.map((i) => (
                  <li key={i} className="text-[11px] opacity-65 transition-opacity hover:opacity-100">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-sans text-xs font-bold tracking-[0.14em] uppercase">Контакты</h4>
            <ul className="mt-5 grid gap-3 text-[11px]">
              <li className="flex gap-3">
                <Phone className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>
                  <a href="tel:88005559872" className="hover:text-brand transition-colors">
                    8 (800) 555-98-72
                  </a>
                  <br />
                  <span className="opacity-60">Ежедневно с 9:00 до 21:00</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href="tel:+79801588831" className="hover:text-brand transition-colors">
                  +7 (980) 158-88-31
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@ducatocenter.ru" className="hover:text-brand transition-colors">
                  info@ducatocenter.ru
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a
                  href="https://ducatocenter.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  https://ducatocenter.ru/
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                МО, г. Домодедово, мкр. Белые Столбы, ул. Промышленная, 10
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-5 text-[10px] opacity-60">
            <p>© 2026 RAM ProMaster Center. Все права защищены.</p>
            <p className="flex gap-6">
              <span>Политика конфиденциальности</span>
              <span>Пользовательское соглашение</span>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
