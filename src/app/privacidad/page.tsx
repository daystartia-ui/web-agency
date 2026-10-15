import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import OwnerDetails from "@/components/OwnerDetails";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad · DaystartIA",
  robots: { index: false },
};

export default function Privacidad() {
  return (
    <LegalPage title="Política de privacidad" updated="15 de octubre de 2026">
      <p>
        Aquí te explicamos qué datos recogemos cuando pides la auditoría gratuita, para qué los
        usamos y qué derechos tienes, conforme al Reglamento General de Protección de Datos (RGPD)
        y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>Responsable del tratamiento</h2>
      <OwnerDetails />

      <h2>Qué datos recogemos</h2>
      <p>Solo los que escribes en el formulario de auditoría:</p>
      <ul>
        <li>Tu nombre, email y teléfono.</li>
        <li>El nombre y el tipo de tu clínica, y su número de gabinetes.</li>
        <li>Cómo nos has conocido y, si quieres, qué te preocupa de tu agenda.</li>
      </ul>
      <p>
        No pedimos datos de salud. Por favor, no escribas en el formulario información sobre
        pacientes.
      </p>

      <h2>Para qué los usamos</h2>
      <ul>
        <li>Contactarte para preparar y entregarte la auditoría gratuita que has pedido.</li>
        <li>Enviarte información sobre nuestros servicios relacionada con esa solicitud.</li>
      </ul>
      <p>No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.</p>

      <h2>Por qué podemos tratarlos</h2>
      <p>
        Por tu consentimiento, que das al marcar la casilla del formulario, y porque son
        necesarios para atender tu solicitud antes de un posible contrato (artículo 6.1.a y 6.1.b
        del RGPD). Puedes retirar tu consentimiento en cualquier momento.
      </p>

      <h2>Cuánto tiempo los guardamos</h2>
      <p>
        Mientras tengamos contacto contigo sobre la auditoría y, si no llegamos a trabajar juntos,
        un máximo de 12 meses. Si te haces cliente, durante la relación y los plazos que exija la
        ley.
      </p>

      <h2>Quién más puede verlos</h2>
      <p>
        No vendemos ni cedemos tus datos. Para que la web funcione usamos estos proveedores, que
        solo los tratan siguiendo nuestras instrucciones:
      </p>
      <ul>
        <li>
          <strong>FormSubmit</strong>, que nos reenvía por email lo que escribes en el formulario.
        </li>
        <li>
          <strong>Google</strong> (Gmail), donde recibimos y guardamos esos correos.
        </li>
        <li>
          <strong>Vercel</strong>, que aloja la web.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. En
        ese caso lo hacen con las garantías que exige el RGPD, como el Marco de Privacidad de Datos
        UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes pedirnos acceder a tus datos, corregirlos, borrarlos, limitar su uso, oponerte a él
        o llevártelos a otro proveedor. Escríbenos a{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> indicando qué derecho quieres ejercer.
        Te responderemos en un mes como máximo.
      </p>
      <p>
        Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de
        Protección de Datos en <a href="https://www.aepd.es">www.aepd.es</a>.
      </p>
    </LegalPage>
  );
}
