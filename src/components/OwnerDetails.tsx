import { owner, site } from "@/lib/site";

// Datos identificativos del titular, comunes a aviso legal y privacidad
export default function OwnerDetails() {
  return (
    <dl>
      <dt>Titular</dt>
      <dd>{owner.name}, que actúa con el nombre comercial {site.name}</dd>
      <dt>NIF</dt>
      <dd>{owner.nif}</dd>
      {owner.address && (
        <>
          <dt>Domicilio</dt>
          <dd>{owner.address}</dd>
        </>
      )}
      <dt>Email</dt>
      <dd>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </dd>
      <dt>Teléfono</dt>
      <dd>
        <a href={site.phoneHref}>{site.phone}</a>
      </dd>
    </dl>
  );
}
