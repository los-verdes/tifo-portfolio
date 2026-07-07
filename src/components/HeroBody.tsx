import type { Language } from "../i18n.ts";

/**
 * The intro copy shown in the hero. It carries many inline links to supporters
 * groups, local businesses, and social accounts, so each language is authored
 * as its own JSX block rather than stored as plain strings. The links and their
 * destinations are identical across languages.
 */
export function HeroBody({ language }: { readonly language: Language }) {
  if (language === "es") {
    return (
      <div className="hero__body">
        <p>
          La palabra <em>tifo</em> proviene del término italiano{" "}
          <em>tifosi</em>, que significa “aficionados” o “seguidores”. En el
          mundo del fútbol, ha llegado a representar cualquier despliegue visual
          de gran escala creado por la afición, ya sea una imagen levantada
          sobre una red, una enorme manta desplegada sobre una sección del
          estadio, un mosaico formado por tarjetas levantadas al mismo tiempo
          para crear una imagen o simples pancartas mostradas en momentos clave.
          Estos mensajes suelen ser inspiradores, de agradecimiento, políticos o
          simplemente una forma de provocar a los rivales, pero sin importar el
          formato o el mensaje, el objetivo es siempre el mismo: apoyar a nuestro
          equipo, demostrar nuestra pasión y crear una atmósfera que compita con
          la de cualquier otro club del mundo.
        </p>
        <p>
          El tifo es un proyecto comunitario que requiere miles de horas de
          trabajo. Desde el diseño inicial, la costura, el trazado de
          cuadrículas, la pintura, el corte, el encintado, la colocación de
          ojillos y, finalmente, su despliegue el día del partido, ninguno de
          estos proyectos sería posible sin una enorme cantidad de esfuerzo
          colectivo. Aunque compartimos estas imágenes en el sitio web de Los
          Verdes, cada uno de estos tifos representa el trabajo voluntario, las
          donaciones y el apoyo de toda la afición de Austin FC, así como de
          grupos de seguidores como{" "}
          <a href="https://austinanthem.org/" target="_blank" rel="noopener noreferrer">
            Austin Anthem
          </a>
          ,{" "}
          <a href="https://lamurgadeaustin.org/" target="_blank" rel="noopener noreferrer">
            La Murga de Austin
          </a>
          ,{" "}
          <a href="https://www.collectifoatx.org/" target="_blank" rel="noopener noreferrer">
            Collectifo
          </a>
          ,{" "}
          <a href="https://www.fightinglesliesdc.com/#/" target="_blank" rel="noopener noreferrer">
            Fighting Leslies
          </a>{" "}
          y muchos más.
        </p>
        <p>
          También queremos expresar nuestro agradecimiento a los negocios
          locales como{" "}
          <a href="https://www.hopsquad.com/" target="_blank" rel="noopener noreferrer">
            Hopsquad Brewing Co
          </a>
          ,{" "}
          <a href="https://www.southernheightsbrewing.com/" target="_blank" rel="noopener noreferrer">
            Southern Heights Brewing Company
          </a>
          ,{" "}
          <a href="https://austinbeerworks.com/" target="_blank" rel="noopener noreferrer">
            Austin Beerworks
          </a>
          ,{" "}
          <a href="https://www.zachtheater.org/" target="_blank" rel="noopener noreferrer">
            Zach Theater
          </a>
          ,{" "}
          <a href="https://www.thesteamteam.com/" target="_blank" rel="noopener noreferrer">
            Steam Team
          </a>{" "}
          y a la{" "}
          <a href="https://www.youtube.com/watch?v=R-LMgGZUdGQ" target="_blank" rel="noopener noreferrer">
            personal de Austin FC
          </a>
          , quienes durante años nos han permitido utilizar sus espacios. Sin un
          techo bajo el cual trabajar, nada de esto sería posible.
        </p>
        <p>
          Además de la energía y el espacio que se necesitan para crear estos
          gigantescos despliegues, el costo de la tela, la pintura, los pinceles
          y muchísima cinta también se acumula. Puedes apoyar los próximos tifos
          haciéndote{" "}
          <a
            href="https://store.losverdesatx.org/2026-los-verdes-annual-membership/"
            target="_blank"
            rel="noopener noreferrer"
          >
            miembro de Los Verdes
          </a>
          , comprando{" "}
          <a href="https://store.losverdesatx.org/" target="_blank" rel="noopener noreferrer">
            mercancía
          </a>{" "}
          o donando directamente. Y si quieres formar parte de la creación de
          nuestro próximo tifo, síguenos en{" "}
          <a href="https://www.instagram.com/losverdesatx" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          ,{" "}
          <a href="https://bsky.app/profile/losverdesatx.bsky.social" target="_blank" rel="noopener noreferrer">
            Bluesky
          </a>{" "}
          y{" "}
          <a href="https://facebook.com/LosVerdesATX/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          , o únete al canal #team-tifo en el Slack de LV para más información.
        </p>
      </div>
    );
  }

  return (
    <div className="hero__body">
      <p>
        The word <em>tifo</em> comes from the Italian word <em>tifosi</em>,
        meaning “supporters” or “fans.” In the soccer world, it has come to mean
        any large-scale, fan-produced visual display — whether that is a single
        image raised on a net, a large banner rolled over a section, a mosaic of
        cards raised together to create an image, or simple banners displayed at
        key moments. These messages are often aspirational, appreciative,
        political, or simply just to taunt your rivals, but no matter the medium
        or the message, the goal is the same: to support our team, show our
        passion, and create an atmosphere that rivals any other club in the
        world.
      </p>
      <p>
        Tifo is a community project that takes thousands of work-hours. From
        initial design, sewing, gridding, painting, cutting, taping, grommeting,
        and finally raising it on gameday, none of these projects would happen
        without a tremendous amount of work. While we host these images on the
        Los Verdes website, each of these tifos represents the volunteers,
        donations, and support of all Austin FC supporters and supporters groups
        like{" "}
        <a href="https://austinanthem.org/" target="_blank" rel="noopener noreferrer">
          Austin Anthem
        </a>
        ,{" "}
        <a href="https://lamurgadeaustin.org/" target="_blank" rel="noopener noreferrer">
          La Murga de Austin
        </a>
        ,{" "}
        <a href="https://www.collectifoatx.org/" target="_blank" rel="noopener noreferrer">
          Collectifo
        </a>
        ,{" "}
        <a href="https://www.fightinglesliesdc.com/#/" target="_blank" rel="noopener noreferrer">
          Fighting Leslies
        </a>
        , and many others.
      </p>
      <p>
        We’d also like to show our appreciation to all the local businesses
        like{" "}
        <a href="https://www.hopsquad.com/" target="_blank" rel="noopener noreferrer">
          Hopsquad Brewing Co
        </a>
        ,{" "}
        <a href="https://www.southernheightsbrewing.com/" target="_blank" rel="noopener noreferrer">
          Southern Heights Brewing Company
        </a>
        ,{" "}
        <a href="https://austinbeerworks.com/" target="_blank" rel="noopener noreferrer">
          Austin Beerworks
        </a>
        ,{" "}
        <a href="https://www.zachtheater.org/" target="_blank" rel="noopener noreferrer">
          Zach Theatre
        </a>
        ,{" "}
        <a href="https://www.thesteamteam.com/" target="_blank" rel="noopener noreferrer">
          Steam Team
        </a>
        , and the{" "}
        <a href="https://www.youtube.com/watch?v=R-LMgGZUdGQ" target="_blank" rel="noopener noreferrer">
          Austin FC staff
        </a>{" "}
        that have let us use their spaces over the years, as we couldn’t create
        these without a roof over our heads.
      </p>
      <p>
        In addition to the energy and space it takes to create these giant
        displays, the cost to buy fabric, paint, brushes, and so, so, so much
        tape also adds up. You can support future tifos by becoming a{" "}
        <a
          href="https://store.losverdesatx.org/2026-los-verdes-annual-membership/"
          target="_blank"
          rel="noopener noreferrer"
        >
          member of Los Verdes
        </a>
        , purchasing{" "}
        <a href="https://store.losverdesatx.org/" target="_blank" rel="noopener noreferrer">
          merch
        </a>
        , or donating to us directly. And if you’d like to be part of creating
        our next tifo, follow us on{" "}
        <a href="https://www.instagram.com/losverdesatx" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        ,{" "}
        <a href="https://bsky.app/profile/losverdesatx.bsky.social" target="_blank" rel="noopener noreferrer">
          Bluesky
        </a>
        , and{" "}
        <a href="https://facebook.com/LosVerdesATX/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        , or join #team-tifo in LV Slack for more information!
      </p>
    </div>
  );
}
