import { BUBBLE, HANDS, IA, WORD } from "@/lib/logo-paths";

// Logo oficial de marca. "principal" sobre fondos claros, "negativo" sobre navy.
const variants = {
  principal: { bubble: "#194187", ring: "#0B88F9", hands: "#FDEC17", word: "#194187", ia: "#0B88F9" },
  negativo: { bubble: "#FFFFFF", ring: "#194187", hands: "#194187", word: "#FFFFFF", ia: "#FDEC17" },
};

export default function Logo({
  variant = "principal",
  className = "h-9 w-auto",
}: {
  variant?: keyof typeof variants;
  className?: string;
}) {
  const c = variants[variant];
  return (
    <svg viewBox="-4 -4 1566 460" className={className} role="img" aria-label="DaystartIA">
      <path fill={c.bubble} d={BUBBLE} />
      <circle cx="192" cy="180" r="100" fill="none" stroke={c.ring} strokeWidth="28" />
      <path d={HANDS} fill="none" stroke={c.hands} strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
      <path fill={c.word} d={WORD} />
      <path fill={c.ia} d={IA} />
    </svg>
  );
}

// Símbolo "cita reservada": globo con check amarillo
export function BookedMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="-4 -4 392 460" className={className} aria-hidden>
      <path fill="#194187" d={BUBBLE} />
      <path d="M100,184 L160,242 L288,104" fill="none" stroke="#FDEC17" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
