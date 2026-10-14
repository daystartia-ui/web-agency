"use client";

import { useEffect, useRef, useState } from "react";

const format = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// Cuenta desde 0 hasta `to` cuando el número entra en pantalla.
export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = Date.now();
        const duration = 1400;
        setValue(0);
        timer = setInterval(() => {
          const t = Math.min(1, (Date.now() - start) / duration);
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t === 1) clearInterval(timer);
        }, 30);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(value)}
      {suffix}
    </span>
  );
}
