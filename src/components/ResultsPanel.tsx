import CountUp from "@/components/CountUp";

// Maqueta ilustrativa del panel mensual (Bono 3). Las cifras son de ejemplo.
const stats = [
  { value: 14, label: "citas agendadas fuera de horario" },
  { value: 38, label: "llamadas atendidas con recepción ocupada" },
  { value: 6, label: "cancelaciones rellenadas con lista de espera" },
];

const weeks = [
  { label: "Sem. 1", value: 3 },
  { label: "Sem. 2", value: 5 },
  { label: "Sem. 3", value: 4 },
  { label: "Sem. 4", value: 8 },
];
const maxWeek = Math.max(...weeks.map((w) => w.value));

export default function ResultsPanel() {
  return (
    <figure className="panel rounded-3xl bg-navy p-6 text-white shadow-[0_30px_60px_-30px_rgba(25,65,135,0.6)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-display font-semibold">Informe de octubre</p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">Ejemplo</span>
      </div>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-white/[0.07] p-4">
            <dt className="mt-1 text-sm leading-snug text-white/75">{s.label}</dt>
            <dd className="font-display text-4xl font-bold text-white">
              <CountUp to={s.value} />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 rounded-2xl bg-white/[0.07] p-4">
        <p className="text-sm text-white/75">Citas recuperadas por semana</p>
        <div className="mt-3 flex h-24 items-end gap-3" aria-hidden>
          {weeks.map((w, i) => (
            <div key={w.label} className="flex h-full flex-1 flex-col items-center gap-1.5">
              <div className="relative w-full flex-1">
                <div
                  className={`bar absolute inset-x-0 bottom-0 rounded-t-lg ${i === weeks.length - 1 ? "bg-sun" : "bg-sky"}`}
                  style={{ height: `${(w.value / maxWeek) * 100}%`, animationDelay: `${0.3 + 0.15 * i}s` }}
                />
              </div>
              <span className="text-[11px] text-white/60">{w.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 rounded-2xl bg-white/[0.07] p-4">
        <span className="text-sm text-white/75">Valor estimado de las citas recuperadas</span>
        <span className="font-display text-3xl font-bold text-sun">
          <CountUp to={1160} suffix=" €" />
        </span>
      </div>
      <figcaption className="mt-4 text-[13px] text-white/60">
        Cifras ilustrativas. El informe real usa el valor medio de cita de tu clínica.
      </figcaption>
    </figure>
  );
}
