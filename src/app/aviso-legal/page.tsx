import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import OwnerDetails from "@/components/OwnerDetails";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal · DaystartIA",
  robots: { index: false },
};

export default function AvisoLegal() {
  return (
    <LegalPage title="Aviso legal" updated="15 de octubre de 2026">
      <h2>Quién es el titular de esta web</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), estos son los datos del titular de{" "}
        <a href={site.url}>{site.url.replace("https://", "")}</a>:
      </p>
      <OwnerDetails />

      <h2>Para qué sirve esta web</h2>
      <p>
        Esta web informa sobre el servicio de recepción con inteligencia artificial de{" "}
        {site.name} para clínicas y permite solicitar una auditoría gratuita. Usarla implica
        aceptar este aviso legal.
      </p>

      <h2>Uso de la web</h2>
      <p>
        Te comprometes a usar la web de forma lícita y a no dañar su funcionamiento ni el de los
        sistemas que la alojan. Los datos que envíes por el formulario deben ser ciertos.
      </p>

      <h2>Precios y condiciones</h2>
      <p>
        Los precios que aparecen en la web no incluyen IVA. Las condiciones definitivas de cada servicio se acuerdan por escrito
        con cada clínica antes de empezar.
      </p>

      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, el logotipo, el diseño y el código de esta web pertenecen a {site.name} o se
        usan con permiso de sus autores. Las fotografías proceden de Unsplash y se usan conforme a
        su licencia. No está permitido copiarlos ni reutilizarlos sin autorización.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        Intentamos que la información de la web sea correcta y esté actualizada, pero puede
        contener errores. {site.name} no responde de los daños derivados de un uso indebido de la
        web ni de interrupciones del servicio ajenas a su control. Los enlaces a otras webs se
        ofrecen solo como referencia.
      </p>

      <h2>Datos personales y cookies</h2>
      <p>
        Cómo tratamos tus datos se explica en la <a href="/privacidad">política de privacidad</a>,
        y el uso de cookies en la <a href="/cookies">política de cookies</a>.
      </p>

      <h2>Ley aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Si eres consumidor, podrás acudir a
        los juzgados de tu domicilio.
      </p>
    </LegalPage>
  );
}
