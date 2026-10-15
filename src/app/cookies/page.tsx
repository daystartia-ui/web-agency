import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies · DaystartIA",
  robots: { index: false },
};

export default function Cookies() {
  return (
    <LegalPage title="Política de cookies" updated="15 de octubre de 2026">
      <h2>Qué son las cookies</h2>
      <p>
        Son pequeños archivos que algunas webs guardan en tu navegador para recordar información,
        por ejemplo tus preferencias o qué páginas has visitado.
      </p>

      <h2>Qué cookies usa esta web</h2>
      <p>
        <strong>Ninguna.</strong> Esta web no instala cookies propias ni de terceros: no usamos
        herramientas de analítica, publicidad ni redes sociales que rastreen tu navegación. Por eso
        no te mostramos ningún aviso para aceptarlas.
      </p>
      <p>
        El botón de WhatsApp es un enlace normal. Solo al pulsarlo pasas a la web o la aplicación
        de WhatsApp, que tiene su propia política de cookies.
      </p>

      <h2>Si esto cambia</h2>
      <p>
        Si en el futuro añadimos cookies que no sean imprescindibles, actualizaremos esta página y
        te pediremos permiso antes de instalarlas.
      </p>

      <h2>Dudas</h2>
      <p>
        Puedes escribirnos a <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
