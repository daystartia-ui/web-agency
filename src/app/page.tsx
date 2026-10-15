import Image from "next/image";
import HeroChat from "@/components/HeroChat";
import DemoForm from "@/components/DemoForm";
import Logo from "@/components/Logo";
import ResultsPanel from "@/components/ResultsPanel";
import RevealObserver from "@/components/RevealObserver";
import ScrollStory from "@/components/ScrollStory";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

const pains = [
  {
    title: "El teléfono suena mientras recepción cobra",
    text: "Nadie puede cogerlo y el paciente llama a la siguiente clínica de su lista.",
  },
  {
    title: "Pacientes que no vienen y no avisan",
    text: "Huecos de última hora que ya no da tiempo a rellenar.",
  },
  {
    title: "Fuera de horario, la clínica no existe",
    text: "Quien llama a las 20:30 o escribe un domingo pide cita en otra parte.",
  },
];

const messages = [
  {
    title: "Cada llamada atendida es una cita",
    text: "La IA contesta cuando tu equipo no puede: fuera de horario, los fines de semana y cuando recepción está ocupada.",
    support: "La auditoría inicial te muestra cuántos contactos se pierden hoy.",
  },
  {
    title: "Resultados en euros, no promesas",
    text: "Cada mes recibes un panel con las citas agendadas, las cancelaciones recuperadas y su valor estimado.",
    support: "Garantía de 60 días ligada a resultados.",
  },
  {
    title: "Tu equipo, más libre",
    text: "Recordatorios, confirmaciones y preguntas frecuentes van solos. Tu equipo se dedica a los pacientes.",
    support: "Si el paciente prefiere a una persona o es algo clínico, se le pasa a recepción.",
  },
];

const specialties = [
  {
    name: "Clínicas dentales",
    src: "/images/consulta.jpg",
    alt: "Dentista conversando con una paciente sonriente en una consulta luminosa",
    items: [
      "Resuelve dudas sobre limpiezas, ortodoncia o implantes antes de la primera visita",
      "Agenda primeras valoraciones y urgencias según tu disponibilidad",
      "Recuerda revisiones e higienes a los pacientes que llevan meses sin venir",
    ],
  },
  {
    name: "Clínicas de estética",
    src: "/images/estetica-facial.jpg",
    alt: "Paciente relajada recibiendo un tratamiento facial en una clínica de estética",
    items: [
      "Informa de tratamientos y precios orientativos a cualquier hora",
      "Agenda valoraciones y sesiones, y confirma cada cita el día antes",
      "Avisa cuando toca la siguiente sesión o el mantenimiento del tratamiento",
    ],
  },
  {
    name: "Fisioterapia",
    src: "/images/fisio-rodilla.jpg",
    alt: "Fisioterapeuta tratando la rodilla de un paciente tumbado en la camilla",
    items: [
      "Reserva sesiones y bonos según la agenda de cada fisioterapeuta",
      "Ofrece las cancelaciones de última hora a la lista de espera",
      "Recuerda la siguiente sesión para que el tratamiento no se corte",
    ],
  },
];

const steps = [
  {
    title: "Auditoría «paciente misterioso»",
    text: "Llamamos y escribimos a tu clínica en distintos horarios y te entregamos un informe de cuántos contactos se pierden. Gratis.",
  },
  {
    title: "Implantación a medida",
    text: "Configuramos la IA con tus horarios, tratamientos y forma de hablar, y la conectamos con tu agenda. En remoto y con una visita de arranque.",
  },
  {
    title: "La IA atiende",
    text: "Contesta llamadas perdidas y WhatsApp, agenda citas, envía recordatorios y ofrece las cancelaciones a la lista de espera.",
  },
  {
    title: "Informe mensual",
    text: "Cada mes te enseñamos qué ha recuperado el sistema, en citas y en euros.",
  },
];

const stack = [
  ["Recepción IA de llamadas y WhatsApp 24/7", "1.200 €"],
  ["Recordatorios y confirmación de citas", "400 €"],
  ["Bono 1 · Auditoría «paciente misterioso»", "300 €"],
  ["Bono 2 · Lista de espera automática", "500 €"],
  ["Bono 3 · Panel de resultados mensual", "400 €"],
];

const plans = [
  {
    name: "Agenda Segura",
    level: "Básico",
    setup: "297 €",
    monthly: "197",
    forWho: "Clínicas de 1-2 gabinetes que empiezan",
    features: [
      "Recordatorios y confirmación de citas por WhatsApp",
      "Lista de espera automática",
      "Informe mensual",
    ],
  },
  {
    name: "Recepción 24/7",
    level: "Intermedio",
    setup: "597 €",
    monthly: "397",
    forWho: "Clínicas de 2-4 gabinetes",
    featured: true,
    features: [
      "Todo lo del plan Agenda Segura",
      "IA que atiende llamadas perdidas y WhatsApp 24/7",
      "Agenda citas directamente",
      "Auditoría inicial gratuita",
      "Panel de resultados mensual",
    ],
  },
  {
    name: "Clínica Completa",
    level: "Premium",
    setup: "997 €",
    monthly: "697",
    forWho: "Clínicas con varias sedes o mucho volumen",
    features: [
      "Todo lo del plan Recepción 24/7",
      "Reactivación de pacientes dormidos",
      "Seguimiento de presupuestos no aceptados",
      "Gestión de reseñas en Google",
      "Revisión mensual de estrategia",
    ],
  },
];

const faqs = [
  {
    q: "Ya he pagado agencias que me prometían pacientes. ¿Por qué esto es diferente?",
    a: "No vendemos pacientes nuevos ni publicidad. Te ayudamos a no perder los que ya te llaman. Antes de cobrarte nada te decimos cuántas llamadas no atiende tu clínica, y cada mes te enseñamos cuántas citas ha recuperado el sistema, en euros.",
  },
  {
    q: "¿A mis pacientes no les molestará hablar con una máquina?",
    a: "La IA solo actúa cuando tu equipo no puede: fuera de horario o cuando el teléfono está ocupado. Si el paciente prefiere a una persona, se le pasa a recepción. La alternativa hoy no es una persona: es que nadie conteste.",
  },
  {
    q: "¿Y si la IA dice algo que no debe? Son datos de salud.",
    a: "La IA no da diagnósticos ni consejos médicos: solo gestiona citas, confirma y recoge datos básicos. Tú defines qué puede hacer y qué no, y las urgencias se derivan siempre a la clínica. El tratamiento de datos se revisa con un asesor antes de arrancar.",
  },
  {
    q: "Mi programa de gestión es antiguo. ¿Se puede conectar?",
    a: "Si se puede integrar, lo integramos. Si no, empezamos con una agenda compartida y avisos a recepción, sin que tengas que cambiar de programa.",
  },
  {
    q: "Ahora no tengo tiempo para implantar nada nuevo.",
    a: "La implantación la hacemos nosotros, en remoto y con una visita de arranque. Tu parte es contarnos cómo funciona tu clínica.",
  },
  {
    q: "¿Sustituye a mi recepcionista?",
    a: "No. La IA se ocupa de lo repetitivo y de lo que llega cuando recepción no puede atender. Las personas siguen con los pacientes.",
  },
];

function YellowButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block btn btn-sun rounded-full bg-sun px-6 py-3.5 font-semibold text-navy hover:bg-[#f2df00]"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Barra superior */}
      <div className="bg-[#12316a] text-sm text-white/90">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2 sm:px-8">
          <a href="#auditoria" className="hover:text-sun">
            Auditoría gratuita: descubre cuántas llamadas pierde tu clínica
          </a>
          <div className="hidden gap-5 sm:flex">
            <a href={site.phoneHref} className="hover:text-sun">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-sun">{site.email}</a>
          </div>
        </div>
      </div>

      <header className="site-header sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2 sm:px-8">
          <a href="#" aria-label="DaystartIA, inicio">
            <Logo className="h-12 w-auto sm:h-14" />
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-navy">
            <a href="#especialidades" className="hidden lg:inline hover:text-royal">Especialidades</a>
            <a href="#como-funciona" className="hidden md:inline hover:text-royal">Cómo funciona</a>
            <a href="#precios" className="hidden md:inline hover:text-royal">Precios</a>
            <a href="#garantia" className="hidden md:inline hover:text-royal">Garantía</a>
            <a href="#faq" className="hidden md:inline hover:text-royal">Preguntas</a>
            <a href="#auditoria" className="rounded-full bg-sun px-4 py-2 font-semibold text-navy hover:bg-[#f2df00]">
              Auditoría gratuita
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="hero relative overflow-hidden bg-navy text-white">
          <div aria-hidden className="hero-glow hero-glow-a" />
          <div aria-hidden className="hero-glow hero-glow-b" />
          <div aria-hidden className="hero-grid" />
          <div className="hero-inner relative mx-auto grid w-full max-w-6xl gap-12 px-5 pb-28 pt-14 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:pt-20">
            <div className="hero-copy">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-sun ring-1 ring-white/15">
                <span className="live-dot" aria-hidden />
                Recepción con IA para clínicas
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.5rem,5.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em]">
                Tu clínica nunca pierde una cita.
              </h1>
              <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/85">
                Convertimos llamadas perdidas en citas confirmadas, 24/7 y sin trabajo extra para
                tu equipo. La IA contesta llamadas y WhatsApp, agenda, recuerda cada cita y rellena
                las cancelaciones.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <YellowButton href="#auditoria">Pedir auditoría gratuita</YellowButton>
                <a href="#precios" className="btn rounded-full border-2 border-white/70 px-6 py-3 font-semibold hover:bg-white/10">
                  Ver planes
                </a>
              </div>
              <p className="mt-5 text-sm text-white/70">
                Antes de cobrarte nada, te decimos cuántas llamadas pierde tu clínica.
              </p>
            </div>
            <HeroChat />
          </div>
          <svg aria-hidden viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-12 w-full sm:h-20">
            <path d="M0 80V40C240 0 480 0 720 26s480 54 720 14v40Z" fill="#f7f9fb" />
          </svg>
        </section>

        {/* Problema */}
        <section className="bg-paper">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
              <blockquote data-reveal className="font-display text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold leading-tight text-navy">
                «Mi clínica funciona bien… hasta que suena el teléfono y no hay nadie para cogerlo».
              </blockquote>
              <div data-reveal className="relative aspect-[3/2] overflow-hidden rounded-3xl">
                <Image
                  src="/images/recepcion.jpg"
                  alt="Equipo de una clínica revisando documentos en el mostrador de recepción, con el teléfono al lado"
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {pains.map((p) => (
                <li key={p.title} data-reveal className="lift rounded-2xl border-t-4 border-royal bg-white p-6 shadow-[0_12px_30px_-20px_rgba(25,65,135,0.35)]">
                  <h3 className="font-display text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-display text-xl font-semibold text-royal">
              Una llamada perdida es una cita regalada a otra clínica.
            </p>
          </div>
        </section>

        {/* Especialidades */}
        <section id="especialidades" className="scroll-mt-20 bg-mist">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <h2 data-reveal className="max-w-2xl font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-tight text-navy">
            Para clínicas dentales, de estética y de fisioterapia
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Configuramos la IA con los tratamientos, horarios y forma de hablar de tu especialidad.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {specialties.map((s) => (
              <article key={s.name} data-reveal className="lift group overflow-hidden rounded-3xl border border-line bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 360px, 100vw" className="zoom object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">{s.name}</h3>
                  <ul className="mt-4 grid gap-3">
                    {s.items.map((item) => (
                      <li key={item} className="border-l-2 border-sky pl-3 text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          </div>
        </section>

        {/* Mensajes clave + panel */}
        <section className="mx-auto grid w-full max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <div>
            <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-tight text-navy">
              Tú atiendes pacientes; nosotros, el teléfono.
            </h2>
            <ul className="mt-10 grid gap-8">
              {messages.map((m) => (
                <li key={m.title} data-reveal className="border-l-4 border-sky pl-5">
                  <h3 className="font-display text-xl font-semibold text-navy">{m.title}</h3>
                  <p className="mt-2 text-ink">{m.text}</p>
                  <p className="mt-1.5 text-sm text-muted">{m.support}</p>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <ResultsPanel />
          </div>
        </section>

        {/* Un día en tu clínica: recorrido con scroll */}
        <ScrollStory />

        {/* Cómo funciona */}
        <section id="como-funciona" className="scroll-mt-20 bg-mist">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold text-navy">
              Cómo funciona
            </h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li key={step.title} data-reveal className="lift rounded-2xl bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Oferta Agenda Llena 24/7 */}
        <section className="bg-royal text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold leading-tight">
                Agenda Llena 24/7
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/85">
                La recepción con IA que atiende lo que tu clínica no llega a coger, con tres bonos
                pensados para que veas resultados desde el primer mes.
              </p>
              <ul className="mt-8 grid gap-4">
                {[
                  ["Auditoría «paciente misterioso»", "Para saber si de verdad te hace falta."],
                  ["Lista de espera automática", "Porque los huecos no son inevitables."],
                  ["Panel de resultados mensual", "Para que nunca dudes de si funciona."],
                ].map(([title, text]) => (
                  <li key={title} data-reveal className="flex gap-3">
                    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-sun" fill="currentColor" aria-hidden>
                      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
                    </svg>
                    <span>
                      <strong className="font-semibold">{title}.</strong>{" "}
                      <span className="text-white/80">{text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-6 text-ink sm:p-8">
              <table className="w-full text-left">
                <caption className="sr-only">Qué incluye y su valor</caption>
                <tbody className="divide-y divide-line">
                  {stack.map(([item, value]) => (
                    <tr key={item}>
                      <th scope="row" className="py-3 pr-4 font-normal">{item}</th>
                      <td className="py-3 text-right tabular-nums text-muted">{value}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" className="py-3 pr-4 font-semibold text-navy">Valor total</th>
                    <td className="py-3 text-right font-semibold tabular-nums text-muted line-through">2.800 €</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 rounded-2xl bg-navy p-5 text-white">
                <p className="text-sm text-white/75">Tu inversión con el plan Recepción 24/7</p>
                <p className="mt-1 font-display text-2xl font-bold">
                  597 € <span className="text-base font-semibold text-white/80">implantación</span> +{" "}
                  <span className="text-sun">397 €/mes</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="scroll-mt-20 bg-paper">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
            <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold text-navy">
              Planes para cada tamaño de clínica
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              Con que recupere unas pocas citas al mes, el sistema se paga solo. Y cada mes te
              enseñamos los números.
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  data-reveal
                  className={`lift relative flex flex-col rounded-3xl p-7 ${
                    plan.featured
                      ? "bg-navy text-white shadow-[0_30px_60px_-30px_rgba(25,65,135,0.7)] lg:-my-4 lg:py-11"
                      : "border border-line bg-white"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3.5 left-7 rounded-full bg-sun px-3 py-1 text-sm font-semibold text-navy">
                      Recomendado
                    </span>
                  )}
                  <p className={`text-sm ${plan.featured ? "text-white/70" : "text-muted"}`}>{plan.level}</p>
                  <h3 className={`font-display text-2xl font-bold ${plan.featured ? "" : "text-navy"}`}>{plan.name}</h3>
                  <p className="mt-5">
                    <span className="font-display text-5xl font-bold">{plan.monthly} €</span>
                    <span className={plan.featured ? "text-white/70" : "text-muted"}>/mes</span>
                  </p>
                  <p className={`mt-1 text-sm ${plan.featured ? "text-white/70" : "text-muted"}`}>
                    + {plan.setup} de implantación
                  </p>
                  <p className={`mt-5 text-sm font-medium ${plan.featured ? "text-sun" : "text-royal"}`}>{plan.forWho}</p>
                  <ul className="mt-4 grid flex-1 content-start gap-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <svg viewBox="0 0 20 20" className={`mt-0.5 h-5 w-5 shrink-0 ${plan.featured ? "text-sun" : "text-sky"}`} fill="currentColor" aria-hidden>
                          <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
                        </svg>
                        <span className={plan.featured ? "text-white/90" : ""}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#auditoria"
                    className={`btn mt-8 block rounded-full px-6 py-3.5 text-center font-semibold ${
                      plan.featured
                        ? "bg-sun text-navy hover:bg-[#f2df00]"
                        : "bg-royal text-white hover:bg-navy"
                    }`}
                  >
                    Empezar con la auditoría
                  </a>
                </article>
              ))}
            </div>
            <p className="mt-10 rounded-2xl bg-mist p-5 text-ink">
              <strong className="font-semibold text-navy">Precio fundador para las 5 primeras clínicas</strong>{" "}
              a cambio de un testimonio y permiso para compartir sus resultados. Implantamos solo 3
              clínicas nuevas al mes, porque cada puesta en marcha es personalizada.
            </p>
          </div>
        </section>

        {/* Garantía */}
        <section id="garantia" className="scroll-mt-20 bg-navy text-white">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-[auto_1fr]">
            <div data-reveal className="guarantee-badge relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-sun text-center">
              <span className="font-display text-5xl font-bold text-sun">60</span>
              <span className="text-sm text-white/80">días</span>
            </div>
            <div>
              <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold">
                Garantía de 60 días ligada a resultados
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
                Si con el sistema bien implantado no recuperas al menos el valor de la mensualidad
                en citas, te devolvemos las mensualidades pagadas. Antes de empezar acordamos
                contigo qué cuenta como cita recuperada y cuál es el valor medio de una cita en tu
                clínica.
              </p>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:order-2">
            <Image
              src="/images/profesional-paciente.jpg"
              alt="Profesional sanitaria sonriendo mientras habla con una paciente en la consulta"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
          <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold text-navy">
            Por qué existe DaystartIA
          </h2>
          <div className="mt-6 grid gap-4 text-lg leading-relaxed text-ink">
            <p>Una lesión de rodilla me sacó del campo y me sentó delante de un ordenador.</p>
            <p>
              Meses de rehabilitación, de clínicas, de llamadas que nadie cogía y de citas que se
              perdían. Ahí descubrí dos cosas: que la tecnología me apasionaba, y que las clínicas
              que cuidan de nosotros no tienen a nadie que cuide de su agenda.
            </p>
            <p>
              Fundé DaystartIA para eso: una recepción con IA que contesta llamadas y WhatsApp las
              24 horas, para que las clínicas dentales, de estética y de fisioterapia no pierdan ni una cita y su equipo pueda
              centrarse en los pacientes.
            </p>
          </div>
          <p className="mt-8 border-l-4 border-sun pl-5 font-display text-xl font-semibold text-navy">
            Quien cuida de la salud de los demás merece que alguien cuide de su agenda.
          </p>
          {/* TODO: añadir nombre y foto del fundador */}
          <p className="mt-4 text-muted">Fundador de DaystartIA</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 bg-mist">
          <div className="mx-auto w-full max-w-3xl px-5 py-20 sm:px-8">
            <h2 data-reveal className="font-display text-[clamp(1.75rem,3vw,2rem)] font-semibold text-navy">
              Preguntas frecuentes
            </h2>
            <div className="mt-8 grid gap-3">
              {faqs.map((f) => (
                <details key={f.q} data-reveal className="group rounded-2xl bg-white px-6 py-5 transition-shadow hover:shadow-[0_12px_30px_-20px_rgba(25,65,135,0.45)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-navy">
                    {f.q}
                    <span aria-hidden className="text-2xl text-royal transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Auditoría + contacto */}
        <section id="auditoria" className="scroll-mt-20 bg-navy">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 text-white sm:px-8 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 data-reveal className="font-display text-[clamp(2rem,4vw,2.75rem)] font-bold leading-tight">
                ¿Cuántas llamadas crees que se te escapan a la semana?
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">
                Pide la auditoría «paciente misterioso». Llamamos y escribimos a tu clínica en
                distintos horarios y te enviamos un informe con lo que se pierde. Gratis y sin
                compromiso.
              </p>
              <dl className="mt-10 grid gap-5">
                {[
                  ["Teléfono", site.phone, site.phoneHref],
                  ["Email", site.email, `mailto:${site.email}`],
                  ["Horario", site.hours, null],
                ].map(([label, value, href]) => (
                  <div key={label} className="border-l-4 border-sun pl-4">
                    <dt className="text-sm text-white/70">{label}</dt>
                    <dd className="text-lg font-medium">
                      {href ? <a href={href} className="hover:text-sun">{value}</a> : value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div data-reveal>
              <DemoForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#12316a] text-sm text-white/75">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div>
            <Logo variant="negativo" className="h-14 w-auto" />
            <p className="mt-4 max-w-xs leading-relaxed">
              {site.tagline} Recepción con IA para clínicas.
            </p>
          </div>
          <nav aria-label="Producto" className="grid content-start gap-2">
            <a href="#como-funciona" className="hover:text-white">Cómo funciona</a>
            <a href="#precios" className="hover:text-white">Precios</a>
            <a href="#garantia" className="hover:text-white">Garantía</a>
            <a href="#faq" className="hover:text-white">Preguntas frecuentes</a>
            <a href="#auditoria" className="hover:text-white">Auditoría gratuita</a>
          </nav>
          <div className="grid content-start gap-2">
            <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            <span>{site.hours}</span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-between gap-4 px-5 py-5 sm:px-8">
            <span>© 2026 DaystartIA</span>
            <nav aria-label="Legal" className="flex flex-wrap gap-5">
              <a href="/aviso-legal" className="hover:text-white">Aviso legal</a>
              <a href="/privacidad" className="hover:text-white">Privacidad</a>
              <a href="/cookies" className="hover:text-white">Cookies</a>
            </nav>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <RevealObserver />
    </>
  );
}
