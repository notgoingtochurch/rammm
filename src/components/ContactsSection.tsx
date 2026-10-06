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
  Layers3,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { sendContactEmail } from "@/lib/contact-email";
import { formatRussianPhone } from "@/lib/phone";
import contactHeroAsset from "@/assets/contact-0.webp";
import contactManagerAsset from "@/assets/contact-men.webp";
import footerLogoAsset from "@/assets/footer-logo.webp";

const AGREEMENT_TEXT = [
  "Пользователь, оставляя обращение, заявку на сайте ramvan.ru (далее также – сайт), создавая аккаунт и/или соглашаясь с офертой на сайте, принимает настоящее Согласие на обработку персональных данных.",
  "Пользователь, действуя свободно, своей волей и в своём интересе, подтверждая свою дееспособность, даёт своё согласие ООО «ДТ» (ОГРН: 1267700021896, ИНН: 9714087010, КПП: 771401001, адрес юридического лица: 125040, город Москва, вн.тер. г. Муниципальный Округ Беговой, ул. Скаковая, дом 17, строение 1) на обработку своих персональных данных как с использованием, так и без использования средств автоматизации для целей обработки входящих запросов физических лиц (пользователей), консультирования, направления комментариев физическим лицам (пользователям), аналитики действий пользователя на сайте и функционирования сайта, а также выполнения обязательств по договору оферты, принятому пользователем на сайте.",
  "Согласие предоставлено для использования моих следующих персональных данных: фамилия, имя, отчество; номера контактных телефонов; адреса электронной почты; место работы и занимаемая должность; адрес; сведения о местоположении; тип, версия и язык операционной системы и браузера; тип устройства и разрешение его экрана; страницы, открываемые пользователем; IP-адрес.",
  "Обработка моих персональных данных может включать следующие действия: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение.",
  "Настоящее согласие может быть отозвано путём направления субъектом персональных данных (пользователем) или его представителем письменного заявления по адресу: ООО «ДТ», 125040, город Москва, вн.тер. г. Муниципальный Округ Беговой, ул. Скаковая, дом 17, строение 1, либо по адресу электронной почты: info@autodt.ru. В случае отзыва согласия ООО «ДТ» вправе продолжить обработку персональных данных в случаях, предусмотренных пунктами 2–11 части 1 статьи 6, пунктами 2–10 части 2 статьи 10 и частью 2 статьи 11 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».",
  "Настоящее согласие предоставляется на неопределённый срок и действует весь период обработки персональных данных. Запросы относительно персональных данных могут быть направлены по электронному адресу: info@ducatocenter.ru.",
];

const PRIVACY_POLICY_TEXT = [
  "1. ОБЩИЕ ПОЛОЖЕНИЯ",
  "Настоящее Положение об обработке персональных данных разработано в соответствии с Конституцией Российской Федерации, Трудовым кодексом Российской Федерации, Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и иными нормативными правовыми актами Российской Федерации.",
  "Оператором персональных данных является ООО «ДТ» (ОГРН: 1267700021896, ИНН: 9714087010, КПП: 771401001, адрес: 125040, город Москва, вн.тер. г. Муниципальный Округ Беговой, ул. Скаковая, дом 17, строение 1).",
  "Целью настоящего Положения является обеспечение защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты права на неприкосновенность частной жизни, личную и семейную тайну.",
  "Обработка персональных данных осуществляется на законной и справедливой основе, ограничивается достижением конкретных, заранее определённых и законных целей и не допускает обработки данных, несовместимой с целями их сбора.",
  "Оператор назначает ответственное лицо за организацию обработки персональных данных, принимает необходимые правовые, организационные и технические меры для защиты данных от неправомерного доступа, изменения, раскрытия, блокирования и уничтожения.",
  "2. ОБЕСПЕЧЕНИЕ ОПЕРАТОРОМ ПРАВ СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ",
  "Субъект персональных данных имеет право получать сведения об обработке своих персональных данных, требовать их уточнения, блокирования или уничтожения, если данные являются неполными, устаревшими, неточными, незаконно полученными или не нужны для заявленной цели обработки.",
  "Оператор обеспечивает возможность ознакомления субъекта с документами и сведениями, определяющими политику в отношении обработки персональных данных, а также отвечает на обращения и запросы субъекта или его представителя в порядке, установленном законодательством Российской Федерации.",
  "Распространение персональных данных и использование их в целях продвижения товаров, работ и услуг допускаются только при наличии предварительного согласия субъекта персональных данных.",
  "3. ПОЛУЧЕНИЕ, ОБРАБОТКА И ХРАНЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ",
  "Оператор получает персональные данные непосредственно от субъекта либо от его представителя. Обработка осуществляется с согласия субъекта, за исключением случаев, предусмотренных законодательством Российской Федерации.",
  "К обрабатываемым данным могут относиться фамилия, имя, отчество, номера телефонов, адрес электронной почты, адрес, сведения о местоположении, данные об устройстве и браузере, посещённых страницах и IP-адресе.",
  "Оператор не обрабатывает специальные категории персональных данных, касающиеся расовой или национальной принадлежности, политических взглядов, религиозных или философских убеждений и интимной жизни, если иное прямо не предусмотрено законом.",
  "Персональные данные хранятся в форме, позволяющей определить субъекта, не дольше, чем этого требуют цели обработки. По достижении целей обработки или при утрате необходимости их достижения данные уничтожаются либо обезличиваются.",
  "4. ПЕРЕДАЧА ПЕРСОНАЛЬНЫХ ДАННЫХ",
  "Оператор вправе передавать персональные данные третьим лицам только в случаях, предусмотренных законодательством Российской Федерации, договором с субъектом или его согласием.",
  "Передача данных государственным органам и органам местного самоуправления осуществляется в соответствии с требованиями закона и в пределах их полномочий.",
  "При поручении обработки персональных данных другому лицу оператор обеспечивает соблюдение этим лицом требований законодательства, конфиденциальность данных и безопасность их обработки.",
  "Трансграничная передача персональных данных допускается только при соблюдении требований Федерального закона № 152-ФЗ «О персональных данных».",
  "5. ДОСТУП К ПЕРСОНАЛЬНЫМ ДАННЫМ",
  "Доступ к персональным данным имеют только работники оператора и иные лица, которым данные необходимы для выполнения обязанностей или исполнения договора. Эти лица обязаны сохранять конфиденциальность персональных данных.",
  "Субъект персональных данных вправе обратиться к оператору с запросом о предоставлении сведений об обработке его данных. Запрос должен позволять идентифицировать заявителя и подтверждать его личность или полномочия представителя.",
  "Копирование и предоставление персональных данных третьим лицам осуществляются только в случаях и порядке, предусмотренных законодательством Российской Федерации.",
  "6. ОТВЕТСТВЕННОСТЬ ЗА НАРУШЕНИЕ ТРЕБОВАНИЙ ПОЛОЖЕНИЯ",
  "Лица, виновные в нарушении требований законодательства Российской Федерации и настоящего Положения, несут ответственность в соответствии с законодательством Российской Федерации.",
  "Контроль за соблюдением требований настоящего Положения осуществляет ответственное лицо, назначенное оператором. Положение подлежит пересмотру при изменении законодательства или условий обработки персональных данных.",
];

const CONTACTS = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (499) 711 - 9161",
    lines: ["Ежедневно с 10:00 до 19:00"],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / Telegram",
    value: "+7 (499) 711 - 9161",
    lines: ["Напишите нам ответим в течение 5 минут"],
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@ducatocenter.ru",
    lines: ["Для коммерческих предложений и сотрудничества"],
  },
];

const OFFICE = [
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
  const [agreementOpen, setAgreementOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("sending");

    try {
      await sendContactEmail({
        data: {
          source: "Форма в разделе контактов",
          name: String(formData.get("name") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          comment: String(formData.get("comment") ?? ""),
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
    <section id="contacts" className="border-border border-t bg-[#FDFDFE] pt-0 pb-0">
      <Dialog open={agreementOpen} onOpenChange={setAgreementOpen}>
        <DialogContent className="max-h-[calc(100vh-32px)] w-[calc(100vw-32px)] max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Пользовательское соглашение</DialogTitle>
          <DialogDescription className="sr-only">Текст пользовательского соглашения</DialogDescription>
          <div className="max-h-[calc(100vh-32px)] overflow-y-auto px-6 py-8 text-sm leading-relaxed">
            <div className="font-display mb-6 text-2xl font-bold uppercase">
              Согласие на обработку персональных данных
            </div>
            <div className="grid gap-4">
              {AGREEMENT_TEXT.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-h-[calc(100vh-32px)] w-[calc(100vw-32px)] max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Политика обработки персональных данных</DialogTitle>
          <DialogDescription className="sr-only">Текст политики обработки персональных данных</DialogDescription>
          <div className="max-h-[calc(100vh-32px)] overflow-y-auto px-6 py-8 text-sm leading-relaxed">
            <div className="font-display mb-6 text-2xl font-bold uppercase">
              Положение об обработке персональных данных
            </div>
            <div className="grid gap-4">
              {PRIVACY_POLICY_TEXT.map((paragraph, index) => (
                <p key={`${index}-${paragraph}`} className={paragraph.match(/^\d+\./) ? "font-bold" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="ram-mobile-gutter mx-auto max-w-[1600px] px-6">
        <div
          className="ram-contacts-hero grid min-h-[420px] items-center gap-8 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${contactHeroAsset})` }}
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="text-brand font-display text-xs font-bold">12</span>
              <span className="text-xs font-semibold tracking-normal uppercase">/ Контакты</span>
            </div>
            <div className="ram-mobile-section-title font-display mt-6 text-4xl leading-none font-medium tracking-tight uppercase sm:text-5xl">
              RAM Promaster
              <br />
              <span className="text-brand font-medium">Center</span>
            </div>
            <p className="font-sans text-muted-foreground mt-3 text-lg font-medium tracking-tight uppercase">
              Надёжный партнёр для вашего бизнеса
            </p>
            <p className="mt-5 max-w-[400px] text-sm leading-relaxed text-black">
              Мы поставляем новые RAM ProMaster напрямую из США и помогаем вашему бизнесу двигаться
              вперёд. Свяжитесь с нами любым удобным способом.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTS.map(({ icon: Icon, label, value, lines }) => (
            <div key={label} className="border-border bg-card rounded-[5px] border p-5">
              <div className="flex items-start gap-3">
                <span className="border-brand text-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] uppercase">{label}</p>
                  <p className="font-sans mt-1 text-sm font-bold tracking-tight break-all">
                    {value.startsWith("+") ? (
                      <a href="tel:+74997119161" className="hover:text-brand transition-colors">
                        {value}
                      </a>
                    ) : value.includes("@") ? (
                      <a href={`mailto:${value}`} className="hover:text-brand transition-colors">
                        {value}
                      </a>
                    ) : value}
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
            <div className="font-sans text-xl font-medium tracking-tight uppercase">
              Наш офис и склад
            </div>
            <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
              Москва, ул. 1-й Дорожный проезд, д. 5
            </p>
            <ul className="mt-5 grid gap-2.5">
              {OFFICE.map((o) => (
                <li key={o} className="text-muted-foreground flex gap-2.5 text-xs leading-snug">
                  <CircleCheck className="text-brand mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.6} />
                  {o}
                </li>
              ))}
            </ul>
            <a
              href="https://yandex.ru/maps/?text=Москва%2C%20ул.%201-й%20Дорожный%20проезд%2C%20д.%205"
              target="_blank"
              rel="noreferrer"
              className="border-brand text-brand mt-6 inline-flex rounded-[5px] border px-6 py-3 text-[11px] font-bold tracking-normal uppercase transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Построить маршрут
            </a>
          </div>
          <div className="relative min-h-[320px]">
            <iframe
              title="Карта проезда к Fiat Ducato Центр"
              src="https://yandex.ru/map-widget/v1/?ll=37.621417%2C55.615151&z=16&l=map&pt=37.621417%2C55.615151%2Cpm2rdm"
              loading="lazy"
              allowFullScreen
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="border-border rounded-[5px] border p-8">
            <div className="font-sans text-xl font-medium tracking-tight uppercase">
              Оставьте заявку
            </div>
            <p className="text-muted-foreground mt-3 text-[11px] leading-relaxed">
              Наш специалист свяжется с вами и ответит на все вопросы
            </p>
            <form className="mt-5 grid gap-3" onSubmit={handleContactSubmit}>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                  placeholder="Ваше имя"
                  name="name"
                  required
                />
                <input
                  className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                  placeholder="+7 (___) ___-__-__"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  onChange={(event) => {
                    event.currentTarget.value = formatRussianPhone(event.currentTarget.value);
                  }}
                  required
                />
              </div>
              <textarea
                rows={4}
                className="border-border bg-background placeholder:text-muted-foreground rounded-[5px] border px-4 py-3 text-[11px] outline-none focus:border-brand"
                placeholder="Комментарий"
                name="comment"
              />
              <label className="ram-consent-label text-muted-foreground flex items-start gap-2.5 text-[10px] leading-snug">
                <input type="checkbox" required className="accent-brand mt-0.5 h-3.5 w-3.5 shrink-0" />
                Я согласен на обработку{" "}
                <button
                  type="button"
                  onClick={() => setAgreementOpen(true)}
                  className="underline underline-offset-2 hover:text-foreground"
                >
                  персональных данных
                </button>
              </label>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="ram-ripple-button bg-brand text-brand-foreground mt-1 rounded-[5px] px-6 py-3 text-[11px] font-bold tracking-normal uppercase transition-opacity hover:opacity-90"
              >
                {formStatus === "sending" ? "Отправка..." : "Отправить заявку"}
              </button>
              {formStatus === "sent" ? <p className="text-brand text-[11px] font-semibold uppercase">Заявка отправлена</p> : null}
              {formStatus === "error" ? <p className="text-destructive text-[11px]">Не удалось отправить заявку. Позвоните нам по телефону.</p> : null}
            </form>
          </div>

          <div className="border-border rounded-[5px] border p-8">
            <div className="font-sans text-xl font-medium tracking-tight uppercase">
              Почему выбирают нас
            </div>
            <div className="mt-6 grid gap-6">
              {WHY.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="border-brand text-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                    <Icon className="h-4 w-4" strokeWidth={1.4} />
                  </span>
                  <div>
                    <div className="font-sans text-xs font-bold tracking-tight uppercase">
                      {title}
                    </div>
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
            style={{ backgroundImage: `url(${contactManagerAsset})` }}
          >
            <div className="font-sans text-xl font-medium tracking-tight uppercase">
              Нужна консультация?
            </div>
            <p className="mt-4 max-w-[60%] text-[11px] leading-relaxed opacity-70">
              Если хотите обсудить покупку, поставку автомобиля, комплектацию или сервис лично,
              звоните в любое удобное время.
            </p>
            <span className="bg-brand mt-6 block h-0.5 w-14" />
            <p className="mt-5 text-[11px] leading-relaxed opacity-80">
              Кирилл Васильевич — директор
            </p>
            <ul className="mt-5 grid gap-3 text-[11px]">
              <li className="flex items-center gap-3">
                <Phone className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href="tel:+79801588831" className="hover:text-brand transition-colors">
                  +7 (980) 158-88-31
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@ducatocenter.ru" className="hover:text-brand transition-colors">
                  info@ducatocenter.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                Москва, ул 1 Дорожный проезд д. 5
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <MessageCircle className="text-brand h-4 w-4 shrink-0" strokeWidth={1.5} />
                Ежедневно с 10:00 до 19:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ram-gift-section text-white">
        <div className="ram-gift-overlay" aria-hidden="true" />
        <div className="ram-gift-container relative z-10 mx-auto flex min-h-[620px] max-w-[1600px] items-center justify-end px-6 py-16">
          <div className="ram-gift-content w-full max-w-[760px]">
            <div className="flex items-center gap-5">
              <p className="font-sans text-sm tracking-[0.2em] uppercase sm:text-base">При покупке RAM ProMaster</p>
              <span className="h-px flex-1 bg-white/55" />
            </div>
            <div className="font-display mt-4 text-[clamp(54px,6vw,96px)] leading-[0.9] font-bold tracking-tight uppercase">
              Вам — <span className="text-brand">подарки</span>
            </div>
            <div className="ram-gift-benefits mt-10 grid grid-cols-3 gap-6">
              <div>
                <ShieldCheck className="h-12 w-12" strokeWidth={1.8} />
                <p className="mt-4 text-sm font-bold uppercase">Безоговорочно</p>
                <p className="mt-1 text-2xl font-bold uppercase">1 год гарантии</p>
                <p className="mt-1 text-sm font-semibold uppercase opacity-55">или 100 000 км пробега</p>
              </div>
              <div className="ram-gift-benefit border-l border-white/45 pl-7">
                <Layers3 className="h-12 w-12" strokeWidth={1.8} />
                <p className="mt-4 text-sm font-bold uppercase">Обшивка кузова</p>
                <p className="mt-1 text-2xl font-bold uppercase">Влагостойкой фанерой</p>
              </div>
              <div className="ram-gift-benefit border-l border-white/45 pl-7">
                <Paintbrush className="h-12 w-12" strokeWidth={1.8} />
                <p className="mt-4 text-sm font-bold uppercase">Полная обработка</p>
                <p className="mt-1 text-2xl font-bold uppercase">Антикором</p>
              </div>
            </div>
            <form className="ram-gift-form mt-10" onSubmit={handleContactSubmit}>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input type="hidden" name="name" value="Заявка на подарки" />
              <input type="hidden" name="comment" value="Получить подарки при покупке RAM ProMaster" />
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1.08fr)_minmax(280px,1fr)]">
                <label className="relative block">
                  <span className="sr-only">Ваш телефон</span>
                  <Phone className="absolute top-1/2 left-6 h-5 w-5 -translate-y-1/2 text-white/45" strokeWidth={2} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__"
                    onChange={(event) => {
                      event.currentTarget.value = formatRussianPhone(event.currentTarget.value);
                    }}
                    className="h-[82px] w-full rounded-[5px] border border-white/30 bg-black/25 pr-5 pl-[15px] text-lg text-white outline-none backdrop-blur-sm placeholder:text-white/45 focus:border-brand"
                  />
                </label>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="ram-ripple-button bg-brand flex h-[82px] items-center justify-center gap-5 rounded-[5px] px-8 text-base font-bold uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Отправка..." : "Получить подарки"}
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <label className="mt-4 flex items-center gap-3 text-xs whitespace-nowrap text-white/50">
                <input type="checkbox" required className="accent-brand h-4 w-4 shrink-0" />
                <span>
                  Я согласен на обработку{" "}
                  <button
                    type="button"
                    onClick={() => setAgreementOpen(true)}
                    className="ram-gift-consent-link underline underline-offset-2 hover:text-white"
                  >
                    персональных данных
                  </button>
                </span>
              </label>
              {formStatus === "sent" ? <p className="mt-3 text-sm font-semibold text-white">Заявка отправлена</p> : null}
              {formStatus === "error" ? <p className="mt-3 text-sm text-red-300">Не удалось отправить заявку. Позвоните нам по телефону.</p> : null}
            </form>
          </div>
        </div>
      </div>

      <footer className="ram-footer bg-accent text-accent-foreground">
        <div className="hidden mx-auto grid max-w-[1600px] gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,0.8fr))_minmax(0,1.2fr)]">
          <div>
            <img
              src={footerLogoAsset}
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
              <div className="font-sans text-xs font-bold tracking-[0.14em] uppercase">
                {col.title}
              </div>
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
            <div className="font-sans text-xs font-bold tracking-[0.14em] uppercase">Контакты</div>
            <ul className="mt-5 grid gap-3 text-[11px]">
              <li className="flex gap-3">
                <Phone className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>
                  <a href="tel:+74997119161" className="hover:text-brand transition-colors">
                    +7 (499) 711 - 9161
                  </a>
                  <br />
                  <span className="opacity-60">Ежедневно с 10:00 до 19:00</span>
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href="tel:+74997119161" className="hover:text-brand transition-colors">
                  +7 (499) 711 - 9161
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@ducatocenter.ru" className="hover:text-brand transition-colors">
                  info@ducatocenter.ru
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="text-brand mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                Москва, ул. 1-й Дорожный проезд, д. 5
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="ram-footer-bottom mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-5 text-[10px] opacity-60">
            <p>© 2026 RAM ProMaster Center. Все права защищены.</p>
            <p className="ram-footer-links flex gap-6">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Политика обработки персональных данных
              </button>
              <button
                type="button"
                onClick={() => setAgreementOpen(true)}
                className="underline-offset-2 transition-colors hover:text-white hover:underline"
              >
                Пользовательское соглашение
              </button>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
