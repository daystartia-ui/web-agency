import Link from "next/link";
import Logo from "@/components/Logo";

// Plantilla común para aviso legal, privacidad y cookies
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" aria-label="DaystartIA, volver al inicio">
            <Logo className="h-11 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-medium text-royal hover:text-navy">
            Volver a la web
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8">
        <h1 className="font-display text-[clamp(2rem,4vw,2.5rem)] font-bold leading-tight text-navy">{title}</h1>
        <p className="mt-2 text-sm text-muted">Última actualización: {updated}</p>
        <div className="legal mt-10">{children}</div>
      </main>
      <footer className="bg-[#12316a] text-sm text-white/75">
        <nav aria-label="Legal" className="mx-auto flex w-full max-w-3xl flex-wrap gap-5 px-5 py-6 sm:px-8">
          <span>© 2026 DaystartIA</span>
          <Link href="/aviso-legal" className="hover:text-white">Aviso legal</Link>
          <Link href="/privacidad" className="hover:text-white">Privacidad</Link>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
        </nav>
      </footer>
    </>
  );
}
