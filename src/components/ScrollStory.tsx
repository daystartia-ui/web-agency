"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Scene = {
  minutes: number;
  src: string;
  alt: string;
  title: string;
  text: string;
  notice: { label: string; body: string };
};

const scenes: Scene[] = [
  {
    minutes: 9 * 60 + 12,
    src: "/images/dentista-paciente.jpg",
    alt: "Odontólogo explicando un tratamiento a una paciente en la consulta",
    title: "Estás con un paciente en el sillón.",
    text: "Suena el teléfono y nadie puede cogerlo.",
    notice: { label: "Llamada perdida atendida", body: "La IA escribe por WhatsApp a Laura y le ofrece dos huecos." },
  },
  {
    minutes: 13 * 60 + 40,
    src: "/images/estetica-cabina.jpg",
    alt: "Profesional de estética aplicando un tratamiento facial en cabina",
    title: "Recepción está cobrando.",
    text: "Mientras tanto, entran tres mensajes preguntando precios.",
    notice: { label: "Cita reservada", body: "Valoración facial, jueves a las 11:00. Recordatorio programado." },
  },
  {
    minutes: 18 * 60 + 55,
    src: "/images/fisio-rodilla.jpg",
    alt: "Fisioterapeuta tratando la rodilla de un paciente tumbado en la camilla",
    title: "Una cancelación de última hora.",
    text: "Antes, ese hueco se quedaba vacío.",
    notice: { label: "Hueco recuperado", body: "Ofrecido a la lista de espera y ocupado en 6 minutos." },
  },
  {
    minutes: 21 * 60 + 30,
    src: "/images/sala-espera.jpg",
    alt: "Sala de espera de una clínica con sofás y luz cálida",
    title: "La clínica ya ha cerrado.",
    text: "Tus pacientes siguen recibiendo respuesta.",
    notice: { label: "Nueva paciente", body: "Primera visita mañana a las 10:00, confirmada por WhatsApp." },
  },
];

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const fmt = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(Math.floor(m % 60)).padStart(2, "0")}`;

// Recorrido con scroll: la «cámara» atraviesa cada escena hacia la siguiente
// mientras el reloj avanza a lo largo del día.
export default function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  const clock = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = [...section.querySelectorAll<HTMLElement>("[data-scene]")];
    const copies = [...section.querySelectorAll<HTMLElement>("[data-copy]")];
    const last = scenes.length - 1;
    let frame = 0;

    const render = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      // Cada escena se queda quieta un rato y luego vuela a la siguiente
      const raw = clamp(-rect.top / total) * last;
      const seg = Math.min(Math.floor(raw), last - 1);
      const p = seg + clamp((raw - seg - 0.4) / 0.6);

      layers.forEach((el, i) => {
        const t = p - i; // <0 por venir, 0 en foco, >0 alejándose
        if (reduce) {
          el.style.opacity = String(Math.round(p) === i ? 1 : 0);
          return;
        }
        if (t >= 0) {
          // La cámara vuela hacia dentro: la escena crece y se desvanece
          const k = ease(clamp(t));
          el.style.opacity = String(1 - clamp((t - 0.35) / 0.55));
          el.style.transform = `scale(${1 + k * 0.55})`;
          el.style.filter = `blur(${clamp((t - 0.3) / 0.7) * 8}px)`;
        } else {
          // La siguiente escena espera detrás y se asienta al llegar
          const k = ease(clamp(t + 1));
          el.style.opacity = "1";
          el.style.transform = `scale(${1.18 - k * 0.18})`;
          el.style.filter = "none";
        }
        el.style.zIndex = String(scenes.length - i);
      });

      copies.forEach((el, i) => {
        const d = p - i;
        const o = clamp(1 - Math.abs(d) * 3);
        el.style.opacity = String(o);
        el.style.transform = reduce ? "none" : `translateY(${d * -40}px)`;
        el.style.visibility = o > 0 ? "visible" : "hidden";
      });

      const i = Math.min(Math.floor(p), last - 1);
      const f = p - i;
      const mins = scenes[i].minutes + (scenes[i + 1].minutes - scenes[i].minutes) * f;
      if (clock.current) clock.current.textContent = fmt(mins);
      if (bar.current) bar.current.style.transform = `scaleX(${p / last})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={root}
      aria-label="Un día en tu clínica"
      className="relative bg-navy text-white"
      style={{ height: `${scenes.length * 100 + 40}svh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {scenes.map((s, i) => (
          <div key={s.src} data-scene className="story-layer absolute inset-0" style={{ zIndex: scenes.length - i }}>
            <Image src={s.src} alt={s.alt} fill sizes="100vw" priority={i === 0} className="object-cover" />
          </div>
        ))}
        <div aria-hidden className="story-shade absolute inset-0 z-10" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-6xl flex-col justify-between px-5 pb-10 pt-24 sm:px-8 sm:pb-14">
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-xs text-lg font-medium text-white/85">Un día en tu clínica</p>
            <span
              ref={clock}
              aria-hidden
              className="font-display text-[clamp(3.5rem,12vw,9rem)] font-bold leading-none tabular-nums tracking-[-0.04em] text-white/95"
            >
              {fmt(scenes[0].minutes)}
            </span>
          </div>

          <div className="relative grid min-h-[16rem] items-end sm:min-h-[13rem]">
            {scenes.map((s, i) => (
              <div
                key={s.title}
                data-copy
                className="story-copy col-start-1 row-start-1 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end"
                style={i ? { opacity: 0, visibility: "hidden" } : undefined}
              >
                <div>
                  <h3 className="max-w-xl font-display text-[clamp(1.9rem,4.2vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-lg text-white/85">{s.text}</p>
                </div>
                <div className="story-notice mr-16 max-w-sm justify-self-start md:mr-0 rounded-2xl bg-white p-4 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] md:justify-self-end">
                  <p className="flex items-center gap-2 text-sm font-semibold text-royal">
                    <span className="h-2 w-2 rounded-full bg-[#25d366]" aria-hidden />
                    {s.notice.label}
                  </p>
                  <p className="mt-1 text-[0.95rem] leading-snug">{s.notice.body}</p>
                </div>
              </div>
            ))}
          </div>

          <span aria-hidden className="absolute inset-x-5 bottom-5 h-0.5 overflow-hidden rounded-full bg-white/20 sm:inset-x-8">
            <span ref={bar} className="block h-full origin-left scale-x-0 bg-sun" />
          </span>
        </div>
      </div>
    </section>
  );
}
