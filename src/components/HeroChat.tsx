const messages = [
  { from: "patient", text: "Hola, ¿tenéis hueco para una limpieza esta semana?", delay: 0.3 },
  { from: "bot", text: "Hola, Marta. Sí: el jueves a las 17:30 o el viernes a las 10:00. ¿Cuál te viene mejor?", delay: 1.3 },
  { from: "patient", text: "Jueves perfecto", delay: 2.4 },
  { from: "bot", text: "Hecho. Te he reservado el jueves 16 a las 17:30 con la Dra. Ruiz. Te recordaré la cita el día antes.", delay: 3.3 },
] as const;

const agenda = [
  { time: "16:00", label: "Revisión · Javier P." },
  { time: "16:45", label: "Ortodoncia · Lucía M." },
  { time: "17:30", label: "Limpieza · Marta G.", booked: true },
  { time: "18:15", label: "Libre" },
];

export default function HeroChat() {
  return (
    <div className="relative grid items-start gap-4 sm:grid-cols-[1.15fr_1fr]">
      {/* Conversación */}
      <div
        className="float-a rounded-3xl bg-white p-4 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)]"
        aria-label="Ejemplo de conversación por WhatsApp a las 23:47"
      >
        <div className="mb-3 flex items-center gap-3 border-b border-line pb-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist">
            <svg viewBox="-4 -4 392 460" className="h-5 w-5" aria-hidden>
              <path fill="#194187" d="M56,0 H328 Q384,0 384,56 V304 Q384,360 328,360 H140 L44,452 V360 Q0,360 0,304 V56 Q0,0 56,0 Z" />
              <circle cx="192" cy="180" r="100" fill="none" stroke="#0B88F9" strokeWidth="32" />
              <path d="M192,124 V180 L236,210" fill="none" stroke="#FDEC17" strokeWidth="32" strokeLinecap="round" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate font-display text-sm font-semibold text-navy">Clínica Dental Ruiz</span>
            <span className="flex items-center gap-1.5 text-xs text-[#1a9e55]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden />
              en línea
            </span>
          </span>
          <span className="text-xs tabular-nums text-muted">23:47</span>
        </div>
        <ul className="flex flex-col gap-2 text-[0.92rem] leading-snug">
          {messages.map((m) => (
            <li
              key={m.text}
              className={`msg max-w-[88%] rounded-2xl px-3.5 py-2.5 ${
                m.from === "patient"
                  ? "self-end rounded-br-md bg-cobalt text-white"
                  : "self-start rounded-bl-md bg-mist"
              }`}
              style={{ animationDelay: `${m.delay}s` }}
            >
              {m.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Agenda */}
      <div className="float-b relative rounded-3xl bg-royal p-4 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.55)] ring-1 ring-white/15 sm:mt-16">
        <p className="mb-3 font-display text-sm font-semibold">Jueves 16</p>
        <ol className="flex flex-col gap-1.5 text-sm">
          {agenda.map((slot) => (
            <li
              key={slot.time}
              className={`flex gap-3 rounded-xl px-3 py-2 ${
                slot.booked
                  ? "slot-booked bg-sun font-medium text-navy"
                  : "bg-white/10 text-white/80"
              }`}
              style={slot.booked ? { animationDelay: "4.3s" } : undefined}
            >
              <span className="w-11 shrink-0 tabular-nums">{slot.time}</span>
              <span>{slot.label}</span>
            </li>
          ))}
        </ol>

        {/* Notificación de cita confirmada */}
        <div
          className="toast absolute -bottom-14 left-1/2 flex w-max -translate-x-1/2 items-center gap-2.5 rounded-2xl bg-white py-2.5 pl-2.5 pr-4 text-ink shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
          role="status"
        >
          <svg viewBox="-4 -4 392 460" className="h-7 w-7" aria-hidden>
            <path fill="#194187" d="M56,0 H328 Q384,0 384,56 V304 Q384,360 328,360 H140 L44,452 V360 Q0,360 0,304 V56 Q0,0 56,0 Z" />
            <path d="M100,184 L160,242 L288,104" fill="none" stroke="#FDEC17" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm">
            <span className="block font-semibold text-navy">Cita confirmada</span>
            <span className="text-xs text-muted">Recordatorio programado</span>
          </span>
        </div>
      </div>
    </div>
  );
}
