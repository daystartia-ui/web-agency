"use client";

import { useState } from "react";
import { BookedMark } from "@/components/Logo";
import { site } from "@/lib/site";

// FormSubmit reenvía cada solicitud al email de DaystartIA (sin servidor propio)
const endpoint = `https://formsubmit.co/ajax/${site.email}`;

const labels: Record<string, string> = {
  name: "Nombre",
  clinic: "Clínica",
  email: "Email",
  phone: "Teléfono",
  type: "Tipo de clínica",
  rooms: "Gabinetes",
  source: "Cómo nos ha conocido",
  message: "Qué le preocupa",
};

const inputClass =
  "rounded-xl border border-line bg-paper px-3.5 py-3 text-base font-normal";

export default function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sent = status === "sent";

  if (sent) {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 text-ink">
        <BookedMark />
        <p className="mt-4 font-display text-2xl font-semibold text-navy">Auditoría solicitada</p>
        <p className="mt-2 text-muted">
          Te escribiremos en menos de 24 horas laborables para explicarte cómo haremos la prueba
          y cuándo tendrás el informe.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-3xl bg-white p-6 text-ink sm:grid-cols-2 sm:p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        if (data.get("_honey")) return;
        const body: Record<string, string> = {
          _subject: `Nueva auditoría: ${data.get("clinic")}`,
          _template: "table",
          _replyto: String(data.get("email")),
        };
        for (const [key, label] of Object.entries(labels)) body[label] = String(data.get(key) ?? "");
        setStatus("sending");
        try {
          const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(body),
          });
          const json = await res.json().catch(() => null);
          setStatus(res.ok && String(json?.success) === "true" ? "sent" : "error");
        } catch {
          setStatus("error");
        }
      }}
    >
      {/* Campo trampa para bots: las personas no lo ven */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <Field label="Tu nombre" name="name" autoComplete="name" />
      <Field label="Nombre de la clínica" name="clinic" autoComplete="organization" />
      <Field label="Email" name="email" type="email" autoComplete="email" />
      <Field label="Teléfono" name="phone" type="tel" autoComplete="tel" />
      <Select label="Tipo de clínica" name="type" options={["Dental", "Estética", "Fisioterapia", "Varias especialidades"]} />
      <Select label="Número de gabinetes" name="rooms" options={["1", "2", "3", "4", "Más de 4"]} />
      <div className="grid sm:col-span-2">
        <Select
          label="¿Cómo nos has conocido?"
          name="source"
          options={["Google", "Instagram", "LinkedIn", "Colegio profesional", "Recomendación", "Otro"]}
        />
      </div>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
        ¿Qué te preocupa más de tu agenda? (opcional)
        <textarea name="message" rows={3} className={inputClass} />
      </label>
      <label className="flex items-start gap-3 text-sm text-muted sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-royal" />
        <span>
          Acepto la <a href="/privacidad" className="underline">política de privacidad</a> y que
          DaystartIA me contacte sobre la auditoría.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2">
          No se ha podido enviar la solicitud. Inténtalo de nuevo o escríbenos a{" "}
          <a href={`mailto:${site.email}`} className="underline">{site.email}</a> o al{" "}
          <a href={site.phoneHref} className="underline">{site.phone}</a>.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-sun px-6 py-3.5 font-semibold text-navy transition-colors hover:bg-[#f2df00] disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Enviando…" : "Pedir auditoría gratuita"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      <input name={name} type={type} required autoComplete={autoComplete} className={inputClass} />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-1.5 text-sm font-medium">
      {label}
      <select name={name} required defaultValue="" className={inputClass}>
        <option value="" disabled>
          Elige una opción
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
