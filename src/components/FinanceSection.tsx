import {
  Percent,
  Briefcase,
  Repeat,
  ShieldCheck,
  Plus,
  Wrench,
  Check,
  FileText,
  Cpu,
  Fuel,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import leasingBgAsset from "@/assets/leasing-bg.webp";
import finCreditAsset from "@/assets/fin-credit.webp";
const finCredit = finCreditAsset;
import finLeasingAsset from "@/assets/fin-leasing-2.webp";
import warrantyBgAsset from "@/assets/warranty-bg.webp";
const finLeasing = finLeasingAsset;
import finTradeinAsset from "@/assets/fin-tradein.webp";
const finTradein = finTradeinAsset;
import finServiceAsset from "@/assets/fin-service-2.webp";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { sendContactEmail } from "@/lib/contact-email";

const finService = finServiceAsset;

const TimingBeltIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 432.138 432.138" fill="currentColor" className={className} aria-hidden="true">
    <path d="M92.093,274.582c-36.172,0-65.6,29.428-65.6,65.599c0,36.172,29.428,65.6,65.6,65.6c36.171,0,65.599-29.428,65.599-65.6C157.692,304.009,128.264,274.582,92.093,274.582z M92.093,387.78c-26.247,0-47.6-21.353-47.6-47.6c0-26.246,21.353-47.599,47.6-47.599c26.246,0,47.599,21.353,47.599,47.599C139.692,366.427,118.339,387.78,92.093,387.78z" />
    <path d="M92.093,316.684c-12.956,0-23.497,10.541-23.497,23.497s10.541,23.497,23.497,23.497s23.497-10.541,23.497-23.497S105.049,316.684,92.093,316.684z M92.093,345.677c-3.031,0-5.497-2.466-5.497-5.497s2.466-5.497,5.497-5.497s5.497,2.466,5.497,5.497S95.124,345.677,92.093,345.677z" />
    <path d="M144.976,107.529c18.55,0,33.642-15.092,33.642-33.642c0-18.55-15.091-33.642-33.642-33.642s-33.642,15.092-33.642,33.642C111.334,92.437,126.426,107.529,144.976,107.529z M144.976,58.245c8.625,0,15.642,7.017,15.642,15.642s-7.017,15.642-15.642,15.642s-15.642-7.017-15.642-15.642S136.351,58.245,144.976,58.245z" />
    <circle cx="374.542" cy="189.021" r="13.707" />
    <path d="M404.55,237.99c16.452-10.118,27.451-28.278,27.451-48.968c0-20.441-10.738-38.411-26.86-48.599L182.014,9.944l0.021,0.063C171.132,3.657,158.476,0,144.976,0c-32.441,0-60.047,21.024-69.955,50.156c-0.368,1.083-72.058,267.258-72.55,269.392l-0.004,0.016l0.001-0.001c-1.525,6.63-2.332,13.531-2.332,20.617c0,50.705,41.252,91.957,91.957,91.957c17.403,0,33.69-4.862,47.58-13.295C140.869,418.117,404.231,238.186,404.55,237.99z M362.096,245.108L179.038,370.13c3.245-9.393,5.012-19.468,5.012-29.949c0-50.705-41.252-91.957-91.957-91.957c-21.426,0-41.163,7.367-56.814,19.699l43.234-161.784c11.998,24.625,37.279,41.635,66.463,41.635c40.742,0,73.887-33.146,73.887-73.887c0-8.354-1.414-16.379-3.981-23.875l143.47,83.886c-23.824,7.01-41.271,29.061-41.271,55.123C317.082,216.431,336.378,239.405,362.096,245.108z M374.542,228.481c-21.758,0-39.46-17.702-39.46-39.46c0-21.759,17.702-39.46,39.46-39.46s39.46,17.702,39.46,39.46C414.002,210.78,396.3,228.481,374.542,228.481z M144.976,18c30.816,0,55.887,25.071,55.887,55.887s-25.071,55.887-55.887,55.887s-55.887-25.071-55.887-55.887S114.159,18,144.976,18z M18.136,340.181c0-40.78,33.177-73.957,73.957-73.957s73.957,33.177,73.957,73.957s-33.177,73.957-73.957,73.957S18.136,380.961,18.136,340.181z" />
  </svg>
);

const PROGRAMS = [
  {
    icon: Percent,
    title: "Автокредит",
    subtitle: "Быстрое решение — ваш RAM ProMaster",
    items: [
      "Ставка от 8,9% годовых",
      "Решение за 1 день",
      "Первоначальный взнос от 0%",
      "Срок до 84 месяцев",
      "Досрочное погашение без штрафов",
    ],
    cta: "Рассчитать кредит",
    image: finCredit,
  },
  {
    icon: Briefcase,
    title: "Лизинг для бизнеса",
    subtitle: "Выгодные условия для юридических лиц",
    items: [
      "Аванс от 10%",
      "Срок лизинга до 60 месяцев",
      "Экономия на налогах",
      "Ускоренная амортизация",
      "Одобрение за 1 день",
    ],
    cta: "Рассчитать лизинг",
    image: finLeasing,
  },
  {
    icon: Repeat,
    title: "Trade-in",
    subtitle: "Обменяйте свой автомобиль с выгодой",
    items: [
      "Оценка за 1 час",
      "Бесплатная диагностика",
      "Любой автомобиль",
      "Выгода до 300 000 ₽",
      "Зачёт в стоимость нового RAM",
    ],
    cta: "Оценить авто",
    image: finTradein,
  },
];

const TransmissionIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M4 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 6V8C20 9.88562 20 10.8284 19.4142 11.4142C18.8284 12 17.8856 12 16 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M18 15V14.25C17.5858 14.25 17.25 14.5858 17.25 15H18ZM17.25 22C17.25 22.4142 17.5858 22.75 18 22.75C18.4142 22.75 18.75 22.4142 18.75 22H17.25ZM21.3604 22.3916C21.5766 22.7449 22.0384 22.8559 22.3916 22.6396C22.7449 22.4234 22.8559 21.9616 22.6396 21.6084L21.3604 22.3916ZM18 15.75H20.2857V14.25H18V15.75ZM18.75 18.5V15H17.25V18.5H18.75ZM21.25 16.75C21.25 17.3169 20.8038 17.75 20.2857 17.75V19.25C21.6612 19.25 22.75 18.1161 22.75 16.75H21.25ZM20.2857 15.75C20.8038 15.75 21.25 16.1831 21.25 16.75H22.75C22.75 15.3839 21.6612 14.25 20.2857 14.25V15.75ZM20.2857 17.75H19.8571V19.25H20.2857V17.75ZM19.8571 17.75H18V19.25H19.8571V17.75ZM19.2175 18.8916L21.3604 22.3916L22.6396 21.6084L20.4968 18.1084L19.2175 18.8916ZM17.25 18.5V22H18.75V18.5H17.25Z" fill="currentColor"/>
  </svg>
);

const ChassisIcon = ({ className }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M371.2,179.2h51.2c14.14,0,25.6-11.46,25.6-25.6v-128C448,11.46,436.54,0,422.4,0h-51.2c-14.14,0-25.6,11.46-25.6,25.6V64h-53.555C286.746,49.135,272.666,38.4,256,38.4S225.263,49.135,219.955,64H166.4V25.6c0-14.14-11.46-25.6-25.6-25.6H89.6C75.46,0,64,11.46,64,25.6v128c0,14.14,11.46,25.6,25.6,25.6h51.2c14.14,0,25.6-11.46,25.6-25.6v-64h53.555c3.866,10.846,12.399,19.379,23.245,23.245v286.319c-10.846,3.866-19.379,12.399-23.245,23.245H166.4V358.4c0-14.14-11.46-25.6-25.6-25.6H89.6c-14.14,0-25.6,11.46-25.6,25.6v128c0,14.14,11.46,25.6,25.6,25.6h51.2c14.14,0,25.6-11.46,25.6-25.6V448h53.555c5.299,14.865,19.379,25.6,36.045,25.6s30.737-10.735,36.045-25.6H345.6v38.4c0,14.14,11.46,25.6,25.6,25.6h51.2c14.14,0,25.6-11.46,25.6-25.6v-128c0-14.14-11.46-25.6-25.6-25.6h-51.2c-14.14,0-25.6,11.46-25.6,25.6v64h-53.555c-3.866-10.846-12.399-19.379-23.245-23.245v-286.31c10.846-3.866,19.379-12.399,23.245-23.245H345.6v64C345.6,167.74,357.06,179.2,371.2,179.2z M371.2,25.6h51.2v128h-51.2V25.6z M140.8,153.6H89.6v-128h51.2V153.6z M140.8,486.4H89.6v-128h51.2V486.4z M371.2,358.4h51.2v128h-51.2V358.4z M256,448c-7.066,0-12.8-5.734-12.8-12.8c0-7.074,5.734-12.8,12.8-12.8c7.066,0,12.8,5.726,12.8,12.8C268.8,442.266,263.066,448,256,448z M256,89.6c-7.066,0-12.8-5.734-12.8-12.8c0-7.074,5.734-12.8,12.8-12.8c7.066,0,12.8,5.726,12.8,12.8C268.8,83.866,263.066,89.6,256,89.6z" />
  </svg>
);

const WARRANTY_PARTS = [
  { icon: TimingBeltIcon, label: "Двигатель" },
  { icon: TransmissionIcon, label: "Коробка передач" },
  { icon: Cpu, label: "Электроника" },
  { icon: Fuel, label: "Топливная система" },
  { icon: ChassisIcon, label: "Ходовая часть" },
];

const EXTENDED = [
  "Покрытие большинства узлов и агрегатов",
  "Действует по всей территории России",
  "Оригинальные запчасти и сервис",
  "Передаётся новому владельцу",
];

const SERVICE = [
  "Квалифицированные специалисты",
  "Современное диагностическое оборудование",
  "Склад оригинальных запчастей",
  "Быстрое устранение неисправностей",
];

const ADVANTAGES = [
  "Минимум документов",
  "Индивидуальный подход к каждому клиенту",
  "Специальные программы для бизнеса",
  "Все автомобили застрахованы на этапе поставки",
];

export function FinanceSection() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const selectCls =
    "border-border bg-background focus:border-brand mt-2 h-[38px] w-full rounded-[6px] border px-3 text-xs outline-none";

  const handleFinanceSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("sending");

    try {
      await sendContactEmail({
        data: {
          source: "Заявка по финансированию",
          name: String(formData.get("name") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          website: String(formData.get("website") ?? ""),
        },
      });
      form.reset();
      setFormStatus("sent");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="finance" className="border-border border-t">
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[calc(100vh-32px)] w-[calc(100vw-32px)] max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Согласие на обработку персональных данных</DialogTitle>
          <DialogDescription className="sr-only">Текст согласия на обработку персональных данных</DialogDescription>
          <div className="max-h-[calc(100vh-32px)] overflow-y-auto px-6 py-8 text-sm leading-relaxed">
            <div className="font-display mb-6 text-2xl font-bold uppercase">
              Согласие на обработку персональных данных
            </div>
            <div className="grid gap-4">
              <p>Пользователь, оставляя обращение или заявку на сайте ramvan.ru, создавая аккаунт и/или соглашаясь с офертой на сайте, принимает настоящее Согласие на обработку персональных данных.</p>
              <p>Пользователь, действуя свободно, своей волей и в своём интересе, подтверждая свою дееспособность, даёт своё согласие ООО «ДТ» (ОГРН: 1267700021896, ИНН: 9714087010, КПП: 771401001, адрес юридического лица: 125040, город Москва, вн.тер. г. Муниципальный Округ Беговой, ул. Скаковая, дом 17, строение 1) на обработку своих персональных данных как с использованием, так и без использования средств автоматизации для целей обработки входящих запросов физических лиц, консультирования, направления комментариев, аналитики действий пользователя на сайте и функционирования сайта, а также выполнения обязательств по договору оферты, принятому пользователем на сайте.</p>
              <p>Согласие предоставлено для использования следующих персональных данных: фамилия, имя, отчество; номера контактных телефонов; адреса электронной почты; место работы и занимаемая должность; адрес; сведения о местоположении; тип, версия и язык операционной системы и браузера; тип устройства и разрешение его экрана; страницы, открываемые пользователем; IP-адрес.</p>
              <p>Обработка персональных данных может включать следующие действия: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.</p>
              <p>Настоящее согласие может быть отозвано путём направления субъектом персональных данных или его представителем письменного заявления по адресу: ООО «ДТ», 125040, город Москва, вн.тер. г. Муниципальный Округ Беговой, ул. Скаковая, дом 17, строение 1, либо по адресу электронной почты: info@autodt.ru. В случае отзыва согласия ООО «ДТ» вправе продолжить обработку персональных данных в случаях, предусмотренных Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
              <p>Настоящее согласие предоставляется на неопределённый срок и действует весь период обработки персональных данных. Запросы относительно персональных данных могут быть направлены по электронному адресу: info@ducatocenter.ru.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="bg-surface relative overflow-hidden">
        <div
          className="ram-finance-hero ram-mobile-gutter relative mx-auto grid max-w-[1600px] items-center gap-8 bg-contain bg-right bg-no-repeat px-6 py-12 lg:grid-cols-2"
          style={{ backgroundImage: `url(${leasingBgAsset})` }}
        >
          <div>
            <div className="text-muted-foreground flex items-center gap-3 text-xs">
              <span className="text-brand font-display font-bold">09</span>
              <span>/</span>
              <span className="text-foreground font-semibold tracking-normal uppercase">
                Финансовые программы и защита
              </span>
            </div>
            <div className="ram-mobile-section-title font-display mt-5 text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              Кредит, лизинг и гарантия
            </div>
            <p className="text-foreground mt-5 max-w-md text-xs leading-relaxed">
              Мы предлагаем гибкие финансовые решения для бизнеса и частных клиентов, а также
              надёжную гарантию на все автомобили RAM ProMaster.
            </p>
          </div>
        </div>
      </div>

      <div className="ram-mobile-gutter mx-auto max-w-[1600px] space-y-4 px-6 py-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {PROGRAMS.map(({ icon: Icon, title, subtitle, items, cta, image }) => (
            <div key={title} className="border-border relative overflow-hidden rounded-[6px] border p-4">
              <img
                src={image}
                alt={title}
                width={800}
                height={600}
                loading="lazy"
                className="ram-finance-program-image pointer-events-none absolute right-0 bottom-0 h-44 w-[54%] object-contain object-right mix-blend-multiply"
              />
              <div className="relative">
                <div className="flex items-start gap-3">
                  <Icon className="text-brand h-6 w-6 shrink-0" strokeWidth={1.4} />
                  <div>
                    <div className="font-sans text-base font-bold uppercase">
                      {title}
                    </div>
                    <p className="text-muted-foreground mt-0.5 text-[11px] tracking-tight uppercase">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {items.map((i) => (
                    <li key={i} className="flex gap-2 text-[11px] leading-snug">
                      <Check className="text-brand mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div
            className="ram-warranty-card bg-accent text-accent-foreground rounded-[6px] p-4"
            style={{
              backgroundImage: `url(${warrantyBgAsset})`,
              backgroundSize: "100% 100%",
              
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-stretch gap-3">
              <ShieldCheck className="h-auto w-10 shrink-0 self-stretch text-white" strokeWidth={1.4} />
              <div>
                <div className="font-sans text-sm font-bold uppercase">
                  Гарантия производителя
                </div>
                <p className="font-sans mt-1 text-xl leading-none font-bold uppercase">
                  1 год / 100 000 км
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-[50%] text-[11px] leading-relaxed opacity-65">
              Гарантия распространяется на все узлы и агрегаты автомобиля при соблюдении условий
              эксплуатации и прохождения планового ТО.
            </p>
            <div className="ram-warranty-parts mt-5 grid grid-cols-5 gap-2">
              {WARRANTY_PARTS.map(({ icon: Icon, label }) => (
                <div key={label}>
                  <Icon className="h-6 w-6" strokeWidth={1.3} />
                  <p className="mt-1.5 text-[10px] leading-snug opacity-65">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-border rounded-[6px] border p-4">
            <div className="flex items-start gap-3">
              <Plus className="text-brand h-6 w-6 shrink-0" strokeWidth={1.4} />
              <div>
                <div className="font-sans text-sm font-bold uppercase">
                  Расширенная гарантия
                </div>
                <p className="font-sans mt-1 text-xl leading-none font-bold uppercase">
                  До 3 лет / 150 000 км
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-3 text-[11px] leading-relaxed">
              Дополнительная защита вашего автомобиля от непредвиденных расходов на ремонт.
            </p>
            <ul className="mt-3 space-y-1.5">
              {EXTENDED.map((i) => (
                <li key={i} className="flex gap-2 text-[11px] leading-snug">
                  <Check className="text-brand mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border grid overflow-hidden rounded-[6px] border sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <Wrench className="text-brand h-6 w-6 shrink-0" strokeWidth={1.4} />
                <div className="font-sans text-sm leading-tight font-bold uppercase">
                  Сервисная поддержка
                  <br />
                  по всей России
                </div>
              </div>
              <p className="text-muted-foreground mt-3 text-[11px] leading-relaxed">
                Собственный сервисный центр и партнёрская сеть позволяют обслуживать ваш RAM
                ProMaster в любом регионе страны.
              </p>
              <ul className="mt-3 space-y-1.5">
                {SERVICE.map((i) => (
                  <li key={i} className="flex gap-2 text-[11px] leading-snug">
                    <Check className="text-brand mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={finService}
              alt="Сервисный специалист RAM ProMaster"
              width={800}
              height={900}
              loading="lazy"
              className="hidden h-full w-full object-cover sm:block"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)_minmax(0,0.9fr)]">
          <div className="border-border rounded-[6px] border p-4">
            <div className="font-sans text-sm font-bold uppercase">
              Преимущества финансирования
            </div>
            <ul className="mt-3 space-y-1.5">
              {ADVANTAGES.map((i) => (
                <li key={i} className="flex gap-2 text-[11px] leading-snug">
                  <Check className="text-brand mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border rounded-[6px] border p-4">
            <div className="font-sans text-sm font-bold uppercase">Оставьте заявку</div>
            <p className="text-muted-foreground mt-2 text-[11px] leading-relaxed">
              Мы свяжемся с вами и расскажем об условиях покупки, кредита и лизинга.
            </p>
            <form className="mt-4 grid gap-3" onSubmit={handleFinanceSubmit}>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input className={selectCls} name="name" placeholder="Ваше имя" required />
                <input className={selectCls} name="phone" type="tel" placeholder="Телефон" required />
              </div>
              <label className="ram-consent-label text-muted-foreground flex items-start gap-2 text-[10px] leading-snug">
                <input type="checkbox" required className="mt-0.5 accent-brand" />
                Я согласен на обработку{" "}
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  персональных данных
                </button>
              </label>
              <button type="submit" disabled={formStatus === "sending"} className="font-sans bg-brand text-brand-foreground rounded-[6px] px-6 py-3 text-[11px] font-bold uppercase disabled:opacity-50">
                {formStatus === "sending" ? "Отправка..." : "Отправить заявку"}
              </button>
              {formStatus === "sent" ? <p className="text-brand text-[11px] font-semibold uppercase">Заявка отправлена</p> : null}
              {formStatus === "error" ? <p className="text-destructive text-[11px]">Не удалось отправить заявку. Позвоните нам по телефону.</p> : null}
            </form>
          </div>

          <div className="border-border rounded-[6px] border p-4">
            <FileText className="text-brand h-7 w-7" strokeWidth={1.3} />
            <div className="font-sans mt-3 text-sm leading-tight font-bold uppercase">
              Полная защита
              <br />
              вашего бизнеса
            </div>
            <p className="text-muted-foreground mt-2 text-[11px] leading-relaxed">
              Вы получаете не только надёжный автомобиль, но и уверенность в завтрашнем дне.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
