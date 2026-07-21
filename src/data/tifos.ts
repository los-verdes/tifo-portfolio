// Tifo portfolio data for Los Verdes ATX.
//
// Each entry describes a single tifo display: when and against whom it was
// raised, the artist(s) who designed it, the descriptive write-up, the photo
// credit, and a link to the full-size photo. Images live in
// `public/tifos/<imageSlug>.webp` (full size shown in the lightbox) and
// `public/tifos/thumbs/<imageSlug>.webp` (grid thumbnail). The "View original
// photo" link (`sourceUrl`) points to a self-hosted, lightly-optimized JPEG in
// `public/tifos/originals/<imageSlug>.jpg` (max 2400px), so it works for all
// visitors without a Google Drive login.
//
// Ordered as they appear in the source document.

export interface Tifo {
  /** Stable identifier, also used for the image filenames. */
  readonly imageSlug: string;
  /** Human-readable display date, e.g. "June 19, 2021". */
  readonly displayDate: string;
  /** ISO date (YYYY-MM-DD) for sorting and year filtering. */
  readonly isoDate: string;
  /** Match opponent. */
  readonly opponent: string;
  /** Designing artist(s). */
  readonly artist: string;
  /** Tifo title. */
  readonly title: string;
  /** Long-form description / story behind the tifo. */
  readonly description: string;
  /** Photographer credit. */
  readonly photoCredit: string;
  /** Optional link to the self-hosted full-size photo (see file header). */
  readonly sourceUrl?: string;
  /** Optional link to a Los Verdes blog post with further information. */
  readonly blogUrl?: string;
}

/**
 * Base URL the app is served from (Vite's `BASE_URL`, e.g. "/"). Prepended to
 * self-hosted asset paths so `sourceUrl` resolves correctly whether the app is
 * deployed at a domain root or a sub-path.
 */
const BASE = import.meta.env.BASE_URL;

export const TIFOS: readonly Tifo[] = [
  {
    imageSlug: "legends-of-austin",
    displayDate: "June 19, 2021",
    isoDate: "2021-06-19",
    opponent: "San Jose Quakes",
    artist: "Luis “Uloang” Angulo",
    title: "Legends of Austin",
    description:
      "For the first MLS game at Q2 Stadium, supporters raised a tifo referencing the legends of Austin, highlighting the city’s skyline and state capitol. The Barton Springs salamander, nine-banded armadillos, and the Mexican freetail bats who call Austin home, along with human legends Stevie Ray Vaughan, Matthew McConaughey, Raul Salinas, Barbara Jordan, Leslie Cochran and Willie Nelson are featured front and center.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/legends-of-austin.jpg`,
  },
  {
    imageSlug: "atx-pride",
    displayDate: "June 27, 2021",
    isoDate: "2021-06-27",
    opponent: "Columbus Crew",
    artist: "Terry Childers",
    title: "ATX Pride",
    description:
      "To celebrate Pride, Austin supporters raised colored paper sheets, filling the South end and creating a large rainbow flag, spelling out ATX in the trans flag colors. Y’all means all, for Austin here we go!",
    photoCredit: "Gina Rivera",
    sourceUrl:
      `${BASE}tifos/originals/atx-pride.jpg`,
  },
  {
    imageSlug: "selena",
    displayDate: "September 26, 2021",
    isoDate: "2021-09-26",
    opponent: "LA Galaxy",
    artist: "Joel Corral",
    title: "Selena",
    description:
      "Stealing lyrics from one of our favorite La Murga songs, Austin supporters raised a tifo highlighting the Queen of Tejano music, Selena Quintanilla-Pérez. In addition to the painted fabric, her outfit glittered with hundreds of stick-on rhinestones making her sparkle just like the real Selena. ¡Cinco! ¡Uno! ¡Dos! clap clap clap",
    photoCredit: "Duc Minh Tran",
    sourceUrl:
      `${BASE}tifos/originals/selena.jpg`,
  },
  {
    imageSlug: "greetings-from-austin",
    displayDate: "March 6, 2022",
    isoDate: "2022-03-06",
    opponent: "Inter Miami",
    artist: "Luis “Uloang” Angulo",
    title: "Greetings from Austin",
    description:
      "Drawing inspiration from the iconic South 1st St mural, Greetings from Austin highlights players in key moments from our first season. This includes Diego Fagundez celebrating the first Austin FC goal, John Gallagher celebrating the first Q2 Stadium home goal, along with Brad Stuver, Moussa Djitte, Alex Ring, and others.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/greetings-from-austin.jpg`,
  },
  {
    imageSlug: "ya-basta-enough",
    displayDate: "June 25, 2022",
    isoDate: "2022-06-25",
    opponent: "FC Dallas",
    artist: "Mateo Clarke",
    title: "¡Ya Basta! Enough!",
    description:
      "Following the tragic shooting at Robb Elementary in Uvalde, supporters made a banner calling out each of the victims and demanding an end to gun violence. Unfortunately, this banner has been sent around the league to other teams who have dealt with similar tragedies.",
    photoCredit: "Zach Lyons",
    sourceUrl:
      `${BASE}tifos/originals/ya-basta-enough.jpg`,
  },
  {
    imageSlug: "and-love-is-love",
    displayDate: "August 13, 2022",
    isoDate: "2022-08-13",
    opponent: "Sporting KC",
    artist: "Chap Torian",
    title: "And Love is Love is Love is Love",
    description:
      "For Pride 2022, Austin supporters unfurled a banner unequivocally stating that And Love is Love is Love is Love, highlighting the many shades that make up Austin FC supporters. Inspired by the words of Lin Manuel Miranda remembering the victims of Pulse Nightclub in his speech at the Tony Awards on June 12th, 2016, this tifo reminds us that no matter what any individual or government says or does “And love is love is love is love is love is love is love is love; cannot be killed or swept aside”.",
    photoCredit: "Tela Mange",
    sourceUrl:
      `${BASE}tifos/originals/and-love-is-love.jpg`,
  },
  {
    imageSlug: "verde-hasta-la-muerte",
    displayDate: "October 16, 2022",
    isoDate: "2022-10-16",
    opponent: "Real Salt Lake",
    artist: "Joel Corral",
    title: "Verde Hasta La Muerte",
    description:
      "For our first playoff game ever, artist Joel Corral created a back-from-the-dead bat with the statement Verde Hasta La Muerte to highlight the supporters’ unending support for their team.",
    photoCredit: "Katie Ensign",
    sourceUrl:
      `${BASE}tifos/originals/verde-hasta-la-muerte.jpg`,
  },
  {
    imageSlug: "playoff-crest",
    displayDate: "October 23, 2022",
    isoDate: "2022-10-23",
    opponent: "FC Dallas",
    artist: "Nando Orozco",
    title: "Playoff Crest",
    description:
      "With less than a week between games, supporters rushed to create a tifo for our second home playoff game against an in-state rival that sucks. Using the crest and streamers as our first “roll-over” tifo helped drive the energy in the stadium, leading the team to their second playoff win and moving us onto the 2022 Western Conference Final.",
    photoCredit: "Aries Silva",
    sourceUrl:
      `${BASE}tifos/originals/playoff-crest.jpg`,
  },
  {
    imageSlug: "siempre-verde",
    displayDate: "February 25, 2023",
    isoDate: "2023-02-25",
    opponent: "St Louis CITY",
    artist: "Fabian Rey",
    title: "Siempre Verde",
    description:
      "For our 2023 season opener, supporters went large with one of our biggest tifos yet. Designed by Fabian Rey in his signature style, he highlighted La Murga de Austin’s Bombo drums, the large bass drums/cymbals which drive the beat of our songs, chants, and stadium (specifically the Man of the Match bombo that is used after every home game).",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/siempre-verde.jpg`,
  },
  {
    imageSlug: "verde-on-my-mind",
    displayDate: "April 29, 2023",
    isoDate: "2023-04-29",
    opponent: "San Jose",
    artist: "Beth Smith",
    title: "Verde Always on My Mind",
    description:
      "On his 90th birthday, Austin supporters celebrated their own Red-Headed Stranger, Willie Nelson, by lifting a tifo in his honor. Reflective material on his glasses and a smoke cloud playing off of Willie’s love of the “verde” showed how much Austin FC fans treasure him and his impact on Austin.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/verde-on-my-mind.jpg`,
  },
  {
    imageSlug: "marsha-p-johnson",
    displayDate: "June 24, 2023",
    isoDate: "2023-06-24",
    opponent: "Houston Dynamo",
    artist: "Sam “Fergie” Fergus, Jesse Sosa & Beth Smith",
    title: "Marsha P. Johnson",
    description:
      "For Pride in 2023, Austin supporters decided to celebrate activist Marsha P. Johnson and the galvanizing night of the Stonewall Riots when she and a diverse group of members of the queer LGBTQIA+ community pushed back on police violence and discrimination. The featured quote from Marsha herself highlights the need for solidarity in our ongoing struggle to achieve equality for everyone.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/marsha-p-johnson.jpg`,
  },
  {
    imageSlug: "juntos-somos-familia",
    displayDate: "October 7, 2023",
    isoDate: "2023-10-07",
    opponent: "LAFC",
    artist: "Marcos Morales",
    title: "Juntos Somos Familia",
    description:
      "Juntos Somos Familia, Juntos Somos Futbol is the text that borders our Hispanic Heritage Month tifo. “The overall message I wanted to convey with this tifo is community and interconnectedness. Although my style of art is abstract, there are some elements and symbols that are apparent. The center heart, the big tree, and the stick people holding hands are some that come to mind. All represent growth, unity, and connection to our roots. For me, those are Hispanic roots and this tifo allowed me to celebrate my Mexican heritage. Like a tree, this community stands strong and flourishes, for our team, family, and Austin. Juntos somos familia, Juntos somos Fútbol.” — Marcos Morales",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/juntos-somos-familia.jpg`,
  },
  {
    imageSlug: "heartbeat-of-austin",
    displayDate: "February 24, 2024",
    isoDate: "2024-02-24",
    opponent: "Minnesota United",
    artist: "Nando Orozco",
    title: "Heartbeat of Austin",
    description:
      "The Heartbeat of Austin highlighted in this tifo represents and celebrates one of our pre-game rituals. Local Austinites join the South End and beat the bombo drum while supporters perform a call and response of ¡Listos!/¡Verde! to build the energy in the stadium. This beautiful corazón tifo, ringed with La Murga lyrics “Verde Es En Sentimiento” kicked off our 2024 season.",
    photoCredit: "Gina Rivera",
    sourceUrl:
      `${BASE}tifos/originals/heartbeat-of-austin.jpg`,
  },
  {
    imageSlug: "campeones",
    displayDate: "March 15, 2024",
    isoDate: "2024-03-15",
    opponent: "Tacoma Defiance (Austin FC II)",
    artist: "Beth Smith",
    title: "Campeones",
    description:
      "Following their 2023 MLS Next Pro Cup win, Austin fans celebrated the second team with a rollover tifo showing the crest adorned with a brand new star.",
    photoCredit: "David Serrins",
    sourceUrl:
      `${BASE}tifos/originals/campeones.jpg`,
  },
  {
    imageSlug: "thats-my-copa",
    displayDate: "March 30, 2024",
    isoDate: "2024-03-30",
    opponent: "FC Dallas",
    artist: "Cheryl and Clair Rollman-Tinajero",
    title: "That’s My Copa, I Don’t Know You!",
    description:
      "To celebrate the beloved Texas-based animated series King of the Hill (as well as troll our North Texas rivals), supporters created a Bobby Hill tifo for this Copa Tejas match. Depicting a well-known scene from the series, the text “That’s my Copa, I don’t know you!” references Austin FC’s defending its Copa Tejas 2022 and 2023 titles. The shape and border of the design were chosen specifically as a nod to Austin’s growing patch culture.",
    photoCredit: "Chris Schmidt",
    sourceUrl:
      `${BASE}tifos/originals/thats-my-copa.jpg`,
  },
  {
    imageSlug: "protect-the-legend",
    displayDate: "May 18, 2024",
    isoDate: "2024-05-18",
    opponent: "Houston Dynamo",
    artist: "Bobby Dixon",
    title: "Protect the Legend",
    description:
      "To celebrate Asian American and Pacific Islander Month, supporters played with the club’s motto “Grow the Legend” with a classic AAPI image, the dragon. Often considered protectors in AAPI legends, the dragon is shown gripping a soccer ball floating amongst the clouds.",
    photoCredit: "Zach Lyons",
    sourceUrl:
      `${BASE}tifos/originals/protect-the-legend.jpg`,
  },
  {
    imageSlug: "dont-mess-with-trans-texans",
    displayDate: "August 31, 2024",
    isoDate: "2024-08-31",
    opponent: "Vancouver Whitecaps",
    artist: "Jesse Sosa",
    title: "Don’t Mess with Trans Texans",
    description:
      "Every good Texan knows that you don’t mess with Texas, but for 2024 Pride, Austin FC supporters pushed back against a growing number of anti-trans bills being pushed through at the state and federal level. Using the Trans Rights colors in place of the Texas state flag, we raised our support for our trans brothers and sisters and let them know that y’all means all in the South End.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/dont-mess-with-trans-texans.jpg`,
  },
  {
    imageSlug: "always-here-year-after-year",
    displayDate: "February 22, 2025",
    isoDate: "2025-02-22",
    opponent: "Sporting KC",
    artist: "Joel Corral",
    title: "Always Here Year After Year",
    description:
      "The tifo is a combination of iconic Austin images such as the Congress bridge and the violet crown sunset, and celebrates how just like the Mexican Freetail bats return to their home every year, the Austin FC fans come back to celebrate our community and support our city and team. In addition to Joel’s wonderful work, local graffiti artists Nando and Drib were pulled in to create realistic artwork on the bridge pylons.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/always-here-year-after-year.jpg`,
    blogUrl: "https://www.losverdesatx.org/blog/season-opener-tifo-2025",
  },
  {
    imageSlug: "legends-never-die",
    displayDate: "April 19, 2025",
    isoDate: "2025-04-19",
    opponent: "LA Galaxy",
    artist:
      "Elyse Barmettler, Sonya Hernandez, Dustin Wyatt, Stefanie Torres, Jesse Sosa, Anisa Morales, Brian Hensley, Kerry Tillery, Joel Corral, Octavio Sosa, Christine Hanley & Michelle Frasch, Edith Valle, Harley Hightower, London Farris, and Nando Orozco",
    title: "Legends Never Die",
    description:
      "17 individual portraits of Austin FC players were combined into a single tifo image, tied together with tree branches and leaves, sitting above a banner that says Legends Never Die highlighting the importance of every individual member of our team. The portraits were designed by over a dozen artists, each bringing their own distinct style to the project. Included in the lower left is a leaf highlighting Marcos Anaya Jr, a young Austin FC fan who tragically passed away shortly before the tifo was raised.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/legends-never-die.jpg`,
  },
  {
    imageSlug: "abolish-ice",
    displayDate: "June 14, 2025",
    isoDate: "2025-06-14",
    opponent: "New York Red Bulls",
    artist: "Nando Orozco",
    title: "Abolish ICE",
    description:
      "Following an escalation of violence in ICE activity throughout the US, Austin supporters unified to paint and display a banner calling for the abolishment of the group. Due to MLS and front office regulations, the banner was not allowed in the stadium, so supporters snuck it in and displayed it without support.",
    photoCredit: "Ari Gernaat",
    sourceUrl:
      `${BASE}tifos/originals/abolish-ice.jpg`,
  },
  {
    imageSlug: "we-will-ride-with-you-forever",
    displayDate: "February 21, 2026",
    isoDate: "2026-02-21",
    opponent: "Minnesota United",
    artist: "Chris Tobar, Marcos Morales",
    title: "We Will Ride With You Forever",
    description:
      "For our 2026 season opener, supporters raised an image of a group of black cowboys with the phrase We Will Ride With You Forever. The design—created in collaboration between Chris Tobar, Marcos Morales, and Rico Hernandez—is a tribute to the rich history of Black cowboys here in Texas, kept alive in vivid detail at the Black Cowboy Museum founded by Larry Callies. In addition to showing our supporters’ passion for the team, there was also a fundraiser for the Black Cowboy Museum, raising over $2,000 in donations and merch sales to help drive their expansion and further work.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/we-will-ride-with-you-forever.jpg`,
    blogUrl:
      "https://www.losverdesatx.org/blog/2026-season-opener-tifo-legacy-of-the-black-cowboy",
  },
  {
    imageSlug: "we-are-groot",
    displayDate: "May 20, 2023",
    isoDate: "2023-05-20",
    opponent: "Toronto FC",
    artist: "Luis “Uloang” Angulo",
    title: "We Are Groot",
    description:
      "Playing off the intertwining Live Oaks in the Austin FC badge and the traditional “We are Austin” phrase used by the club, Collectifo created this amazing image of beloved Marvel superhero Groot, a living tree known for his fierce loyalty and strength (along with his repeated and only dialogue “I am Groot”). Texas bluebonnets, a perennial harbinger of spring in Austin, decorate his hands and body, and the statement “We Are Groot” reminds every opponent that we are stronger together. We are all one Verde family.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/we-are-groot.jpg`,
  },
  {
    imageSlug: "verde-listo-a-ganar",
    displayDate: "October 1, 2025",
    isoDate: "2025-10-01",
    opponent: "Nashville SC",
    artist: "Octavio Sosa",
    title: "Verde Listo A Ganar",
    description:
      "In 2025, Austin FC hosted the final of the Lamar Hunt US Open Cup, the longest-running soccer tournament in the US dating back to 1914. To celebrate the achievement in getting to a tournament final for the very first time and encourage our team to finish the job, Collectifo artists designed this scarf-carrying skeleton, backlit by the moon and surrounded by Mexican free-tailed bats. The skeleton sports a bucket hat, a universal soccer symbol, and is joined by Speedbump, the nine-banded armadillo mascot seen frequently during Austin FC home games.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/verde-listo-a-ganar.jpg`,
  },
  {
    imageSlug: "del-austin-para-siempre",
    displayDate: "November 2, 2025",
    isoDate: "2025-11-02",
    opponent: "LAFC",
    artist: "Homero",
    title: "Del Austin Para Siempre",
    description:
      "After a hard-fought 2025 season, Austin FC finished 6th in the West and achieved the playoffs again after being absent for a few seasons. We ended up playing LAFC, and after a close first game in LA, the teams came to Austin for the second leg. Collectifo reached out to local graffiti artist Homero to design a tifo for the team. Using the banderas from the supporters section as a backdrop, the statement “Del Austin Para Siempre” and a winner’s laurel around the crest showed that our fans and this club will be here forever.",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      `${BASE}tifos/originals/del-austin-para-siempre.jpg`,
  },
] as const;

/** Distinct years present in the data, newest first, for the filter UI. */
export const TIFO_YEARS: readonly number[] = Array.from(
  new Set(TIFOS.map((tifo) => new Date(tifo.isoDate).getUTCFullYear())),
).sort((a, b) => b - a);

/** Spanish translation of a tifo's title and description. */
export interface TifoTranslation {
  readonly title: string;
  readonly description: string;
}

/**
 * Spanish translations keyed by `imageSlug`. Only the title and description are
 * translated; dates are formatted per-locale at render time, and artist/photo
 * credits are proper names that stay the same across languages. A slug missing
 * here simply falls back to the English fields via {@link localizeTifo}.
 */
export const TIFO_ES: Readonly<Record<string, TifoTranslation>> = {
  "legends-of-austin": {
    title: "Leyendas de Austin",
    description:
      "Para el primer partido de la MLS en el estadio Q2, la afición desplegó un tifo inspirado en las leyendas de Austin, destacando el horizonte de la ciudad y el Capitolio del Estado de Texas. En la imagen aparecen la salamandra de Barton Springs, los armadillos de nueve bandas y los murciélagos cola libre mexicanos que habitan en Austin, junto con figuras icónicas de la ciudad como Stevie Ray Vaughan, Matthew McConaughey, Raúl Salinas, Barbara Jordan, Leslie Cochran y Willie Nelson, quienes ocupan un lugar central en el diseño.",
  },
  "atx-pride": {
    title: "Orgullo ATX",
    description:
      "Para celebrar el Mes del Orgullo, la afición de Austin levantó hojas de papel de colores que llenaron la Tribuna Sur y formaron una enorme bandera arcoíris, mientras las letras ATX aparecían en los colores de la bandera trans. Porque aquí, “Y’all means all” (todos son bienvenidos). ¡Por Austin, aquí vamos!",
  },
  selena: {
    title: "Selena",
    description:
      "Tomando prestada una frase de una de nuestras canciones favoritas de La Murga, la afición de Austin desplegó un tifo en honor a la Reina de la Música Tejana, Selena Quintanilla-Pérez. Además de la tela pintada, su vestuario fue adornado con cientos de brillantes adhesivos que la hacían resplandecer tal como la verdadera Selena. ¡Cinco! ¡Uno! ¡Dos! clap clap clap",
  },
  "greetings-from-austin": {
    title: "Saludos desde Austin",
    description:
      "Inspirado en el icónico mural de la calle South 1st, Saludos desde Austin destaca a varios jugadores en momentos clave de nuestra primera temporada. Entre ellos se encuentran Diego Fagúndez celebrando el primer gol en la historia de Austin FC, John Gallagher celebrando el primer gol como local en el Q2 Stadium, así como Brad Stuver, Moussa Djitté, Alex Ring y otros jugadores que dejaron huella durante aquella campaña inaugural.",
  },
  "ya-basta-enough": {
    title: "¡Ya Basta!",
    description:
      "Tras el trágico tiroteo en la Escuela Primaria Robb de Uvalde, la afición creó una pancarta que incluía el nombre y la edad de cada una de las víctimas, además de exigir el fin de la violencia armada. Lamentablemente, esta pancarta ha sido compartida con otros clubes de la liga cuyas comunidades también han enfrentado tragedias similares.",
  },
  "and-love-is-love": {
    title: "Y el Amor es Amor es Amor es Amor",
    description:
      "Para el Mes del Orgullo 2022, la afición de Austin desplegó una pancarta que proclamaba de manera inequívoca que el Amor es Amor es Amor es Amor, destacando la diversidad de identidades y experiencias que conforman la comunidad de seguidores de Austin FC. Inspirado en las palabras de Lin-Manuel Miranda al recordar a las víctimas del club nocturno Pulse durante su discurso en los Premios Tony del 12 de junio de 2016, este tifo nos recuerda que, sin importar lo que cualquier persona o gobierno diga o haga, “el amor es amor es amor es amor es amor es amor es amor es amor; no puede ser eliminado ni dejado de lado”.",
  },
  "verde-hasta-la-muerte": {
    title: "Verde Hasta La Muerte",
    description:
      "Para el primer partido de playoffs en la historia del club, el artista Joel Corral creó un murciélago resucitado acompañado de la frase Verde Hasta La Muerte, destacando el apoyo inquebrantable y eterno de la afición hacia su equipo.",
  },
  "playoff-crest": {
    title: "Escudo de los playoffs",
    description:
      "Con menos de una semana entre partidos, los aficionados se apuraron a crear un tifo para nuestro segundo partido de playoffs en casa, frente a un rival estatal. El uso del escudo y las serpentinas como nuestro primer tifo “desplegable” contribuyó a elevar la energía en el estadio, guiando al equipo hacia su segunda victoria en los playoffs y clasificándose para la Final de la Conferencia Oeste de 2022.",
  },
  "siempre-verde": {
    title: "Siempre Verde",
    description:
      "Para el partido inaugural de la temporada 2023, la afición apostó en grande con uno de los tifos más grandes que habíamos hecho hasta ese momento. Diseñado por Fabian Rey en su característico estilo artístico, el tifo destacó los bombos de La Murga de Austin, los grandes tambores y platillos que marcan el ritmo de nuestras canciones, cánticos y de todo el estadio (en particular, el bombo del Jugador del Partido, que se utiliza después de cada encuentro como local).",
  },
  "verde-on-my-mind": {
    title: "Verde Siempre en Mi Mente",
    description:
      "En su cumpleaños número 90, la afición de Austin rindió homenaje a su propio Red-Headed Stranger, Willie Nelson, con un tifo creado en su honor. El material reflectante utilizado en sus lentes y una nube de humo inspirada en el amor de Willie por lo “verde” demostraron cuánto aprecian los aficionados de Austin FC a esta leyenda y el impacto que ha tenido en la ciudad de Austin.",
  },
  "marsha-p-johnson": {
    title: "Marsha P. Johnson",
    description:
      "Para el Mes del Orgullo de 2023, la afición de Austin decidió rendir homenaje a la activista Marsha P. Johnson y a la histórica noche de los Disturbios de Stonewall, cuando ella y un diverso grupo de integrantes de la comunidad LGBTQIA+ se enfrentaron a la violencia policial y la discriminación. La cita destacada de la propia Marsha resalta la importancia de la solidaridad en nuestra lucha continua por alcanzar la igualdad para todas las personas.",
  },
  "juntos-somos-familia": {
    title: "Juntos Somos Familia",
    description:
      "Juntos Somos Familia, Juntos Somos Futbol es el mensaje que enmarca nuestro tifo del Mes de la Herencia Hispana. “Con este tifo quise transmitir un mensaje de comunidad e interconexión. Aunque mi estilo artístico es abstracto, hay varios elementos y símbolos fácilmente reconocibles. El corazón en el centro del gran árbol y las figuras tomadas de la mano son algunos de ellos. Todos representan crecimiento, unidad y conexión con nuestras raíces. Para mí, esas son raíces hispanas, y este tifo me permitió celebrar mi herencia mexicana. Como un árbol, esta comunidad se mantiene fuerte y florece por nuestro equipo, nuestra familia y Austin. Juntos somos familia, juntos somos fútbol.” — Marcos Morales",
  },
  "heartbeat-of-austin": {
    title: "El Latido de Austin",
    description:
      "El Latido de Austin representado en este tifo celebra uno de nuestros rituales previos al partido. Austinites de toda la comunidad se unen en la Tribuna Sur para tocar el bombo mientras la afición participa en el tradicional llamado y respuesta de ¡Listos! ¡Verde!, generando la energía que impulsa al estadio. Este hermoso tifo en forma de corazón, rodeado por la frase de La Murga “Verde Es Un Sentimiento”, marcó el inicio de nuestra temporada 2024.",
  },
  campeones: {
    title: "Campeones",
    description:
      "Tras la victoria en la MLS Next Pro Cup de 2023, los aficionados de Austin celebraron al segundo equipo con un tifo que mostraba el escudo adornado con una nueva estrella.",
  },
  "thats-my-copa": {
    title: "¡Esa es mi Copa, no te conozco!",
    description:
      "Para celebrar la querida serie animada “King of the Hill”, ambientada en Texas y, de paso, trolear a nuestros rivales del norte de Texas, los aficionados crearon un tifo de Bobby Hill para este partido de la Copa Tejas. Representando una escena muy conocida de la serie, el texto “¡Esa es mi Copa, no te conozco!” hace referencia a la defensa, por parte del Austin FC, de sus títulos de la Copa Tejas de 2022 y 2023. La forma y el borde del diseño se eligieron específicamente como un guiño a la creciente cultura de los parches en Austin.",
  },
  "protect-the-legend": {
    title: "Protege la leyenda",
    description:
      "Para celebrar el Mes de la Herencia de los Asiáticos Americanos e Isleños del Pacífico, los aficionados jugaron con el lema del club “Cultiva La Leyenda” utilizando una imagen clásica de esta comunidad: el dragón. Considerado un protector en las leyendas de los asiáticos americanos e isleños del Pacífico, el dragón aparece en las nubes sosteniendo un balón de fútbol.",
  },
  "dont-mess-with-trans-texans": {
    title: "No te metas con los texanos trans",
    description:
      "Todo buen texano sabe que no debes meterte con Texas. Sin embargo, para el Mes del Orgullo de 2024, la afición de Austin FC alzó la voz frente al creciente número de iniciativas legislativas anti-trans impulsadas a nivel estatal y federal. Utilizando los colores de la bandera trans en lugar de la bandera del estado de Texas, mostramos nuestro apoyo a nuestros hermanos y hermanas trans y les recordamos que en la Tribuna Sur, Y’all means All — aquí todas las personas son bienvenidas.",
  },
  "always-here-year-after-year": {
    title: "Siempre Aquí, Año Tras Año",
    description:
      "Este tifo combina imágenes icónicas de Austin, como el Puente de Congress Avenue y los atardeceres característicos de la Violet Crown. La obra celebra cómo, al igual que los murciélagos cola libre mexicanos regresan a su hogar cada año, la afición de Austin FC vuelve temporada tras temporada para celebrar a nuestra comunidad y apoyar a nuestra ciudad y a nuestro equipo. Además del extraordinario trabajo de Joel, los artistas locales de grafiti, Nando y Drib, colaboraron para crear un arte realista en los pilares del puente. Puedes encontrar más información en nuestra publicación del blog.",
  },
  "legends-never-die": {
    title: "Las Leyendas Nunca Mueren",
    description:
      "Diecisiete retratos individuales de jugadores de Austin FC se combinaron en una sola imagen de tifo, unidos por ramas y hojas de árboles sobre una pancarta con la frase Las Leyendas Nunca Mueren, destacando la importancia de cada integrante de nuestro equipo. Los retratos fueron creados por más de una docena de artistas, cada uno aportando su propio estilo y visión al proyecto. En la esquina inferior izquierda se incluyó una hoja en homenaje a Marcos Anaya Jr., un joven aficionado de Austin FC que falleció trágicamente poco antes de que se desplegara el tifo.",
  },
  "abolish-ice": {
    title: "Abolir ICE",
    description:
      "Tras una escalada en las acciones y la violencia asociadas con las operaciones de ICE en distintas partes de Estados Unidos, la afición de Austin se unió para pintar y exhibir una pancarta que pedía la abolición de la agencia. Debido a las regulaciones de la MLS y de la directiva del club, la pancarta no fue autorizada para mostrarse dentro del estadio. Aun así, los aficionados lograron ingresarla y desplegarla por su cuenta.",
  },
  "we-will-ride-with-you-forever": {
    title: "Siempre Cabalgaremos Contigo",
    description:
      "Para el partido inaugural de la temporada 2026, la afición desplegó una imagen de un grupo de vaqueros afroamericanos acompañada de la frase Siempre Cabalgaremos Contigo. El diseño, creado en colaboración por Chris Tobar, Marcos Morales y Rico Hernández, rinde homenaje a la rica historia de los vaqueros afroamericanos en Texas, una herencia preservada y celebrada en el Black Cowboy Museum fundado por Larry Callies. Además de reflejar la pasión de nuestra afición por el equipo, el proyecto también sirvió como una recaudación de fondos para el Black Cowboy Museum, generando más de $2,000 dólares en donaciones y ventas de mercancía para apoyar su expansión y continuar su importante labor. Para más información, consulta nuestra publicación en el blog.",
  },
  "we-are-groot": {
    title: "Somos Groot",
    description:
      "Inspirándose en los robles entrelazados del escudo de Austin FC y en la tradicional frase del club, “Somos Austin”, Collectifo creó esta increíble imagen del querido superhéroe de Marvel, Groot, un árbol viviente conocido por su inquebrantable lealtad y fortaleza (además de su única y famosa frase: “Soy Groot”). Sus manos y cuerpo están decorados con bluebonnets de Tejas, las flores silvestres que anuncian cada primavera en Austin, mientras que la frase “Somos Groot” les recuerda a todos nuestros rivales que juntos somos más fuertes. Todos somos una sola familia Verde.",
  },
  "verde-listo-a-ganar": {
    title: "Verde Listo a Ganar",
    description:
      "En 2025, Austin FC fue sede de la final de la Lamar Hunt U.S. Open Cup, el torneo de fútbol más antiguo de Estados Unidos, cuya historia se remonta a 1914. Para celebrar que el club alcanzó por primera vez una final de este torneo y motivar al equipo a completar la hazaña, los artistas de Collectifo diseñaron este esqueleto con una bufanda, iluminado por la luna y rodeado de murciélagos de cola libre mexicanos. El esqueleto lleva un sombrero tipo bucket hat, un símbolo muy representativo de la cultura futbolera, y está acompañado por Speedbump, el armadillo de nueve bandas que con frecuencia hace acto de presencia durante los partidos de Austin FC como local.",
  },
  "del-austin-para-siempre": {
    title: "Del Austin Para Siempre",
    description:
      "Tras una temporada 2025 muy disputada, Austin FC terminó en el sexto lugar de la Conferencia Oeste y consiguió regresar a los playoffs después de varias temporadas de ausencia. El equipo enfrentó a LAFC, y después del primer partido competitivo en Los Ángeles, regresaron a Austin para el segundo encuentro. Collectifo encargó al artista de grafiti local Homero la creación del tifo. Utilizando las banderas de la sección de animación como fondo, la frase “Del Austin Para Siempre” y una corona de laureles alrededor del escudo transmitían un mensaje claro: nuestra afición y este club estarán aquí para siempre.",
  },
};

/**
 * Returns the title and description for a tifo in the requested language,
 * falling back to the English fields when a Spanish translation is missing.
 */
export function localizeTifo(
  tifo: Tifo,
  language: "en" | "es",
): { readonly title: string; readonly description: string } {
  if (language === "es") {
    const translation = TIFO_ES[tifo.imageSlug];
    if (translation) {
      return translation;
    }
  }
  return { title: tifo.title, description: tifo.description };
}

/** A span of text within a tifo's artist or description that links out. */
export interface InlineLink {
  /** Exact substring to turn into a link (artist name or inline phrase). */
  readonly text: string;
  /** Destination URL (mostly the artist's Instagram). */
  readonly url: string;
}

/**
 * Inline links carried over from the source document, keyed by `imageSlug`.
 * These wrap artist names (→ their Instagram) and a few inline phrases inside
 * the description. The blog-post links are handled separately via `blogUrl`,
 * and photo links via `sourceUrl`, so they are intentionally not repeated here.
 */
export const TIFO_LINKS: Readonly<Record<string, readonly InlineLink[]>> = {
  "legends-of-austin": [
    { text: "Luis “Uloang” Angulo", url: "https://www.instagram.com/uloang/" },
  ],
  selena: [
    { text: "Joel Corral", url: "https://www.instagram.com/abstractalberto/" },
    {
      text: "¡Cinco! ¡Uno! ¡Dos!",
      url: "https://www.youtube.com/watch?v=mZT1xlajOsI",
    },
    {
      text: "clap clap clap",
      url: "https://www.youtube.com/watch?v=mZT1xlajOsI",
    },
  ],
  "greetings-from-austin": [
    { text: "Luis “Uloang” Angulo", url: "https://www.instagram.com/uloang/" },
  ],
  "ya-basta-enough": [
    { text: "Mateo Clarke", url: "https://www.instagram.com/mateoclarke" },
  ],
  "and-love-is-love": [
    { text: "Chap Torian", url: "https://www.instagram.com/happychapster01/" },
  ],
  "verde-hasta-la-muerte": [
    { text: "Joel Corral", url: "https://www.instagram.com/abstractalberto/" },
  ],
  "playoff-crest": [
    { text: "Nando Orozco", url: "https://www.instagram.com/nvndovision/" },
  ],
  "siempre-verde": [
    { text: "Fabian Rey", url: "https://www.instagram.com/fabianrey/" },
    {
      text: "specifically the Man of the Match bombo that is used after every home game",
      url: "https://fabianrey.carbonmade.com/projects/7243636",
    },
  ],
  "verde-on-my-mind": [
    { text: "Beth Smith", url: "http://instagram.com/bethbeeart/" },
  ],
  "marsha-p-johnson": [
    { text: "Jesse Sosa", url: "https://www.instagram.com/mestarsosa/" },
    { text: "Beth Smith", url: "http://instagram.com/bethbeeart/" },
  ],
  "juntos-somos-familia": [
    { text: "Marcos Morales", url: "https://www.instagram.com/_keezii" },
  ],
  "heartbeat-of-austin": [
    { text: "Nando Orozco", url: "https://www.instagram.com/nvndovision/" },
  ],
  campeones: [
    { text: "Beth Smith", url: "http://instagram.com/bethbeeart/" },
  ],
  "thats-my-copa": [
    {
      text: "Cheryl and Clair Rollman-Tinajero",
      url: "https://www.instagram.com/oddcoloredsheep/",
    },
  ],
  "protect-the-legend": [
    { text: "Bobby Dixon", url: "https://www.instagram.com/klctvefusion/" },
  ],
  "dont-mess-with-trans-texans": [
    { text: "Jesse Sosa", url: "https://www.instagram.com/mestarsosa/" },
  ],
  "always-here-year-after-year": [
    { text: "Joel Corral", url: "https://www.instagram.com/abstractalberto/" },
    { text: "Drib", url: "https://www.instagram.com/this_bird_" },
  ],
  "legends-never-die": [
    { text: "Elyse Barmettler", url: "https://www.instagram.com/artonwhimsy" },
    { text: "Sonya Hernandez", url: "https://www.instagram.com/nonyite/" },
    {
      text: "Stefanie Torres",
      url: "https://www.instagram.com/stefmakesstuff",
    },
    { text: "Jesse Sosa", url: "https://www.instagram.com/mestarsosa/" },
    { text: "Anisa Morales", url: "https://www.instagram.com/fishhdraws/" },
    { text: "Brian Hensley", url: "https://www.instagram.com/STONEHENS22/" },
    { text: "Kerry Tillery", url: "https://www.instagram.com/invisiblekerry/" },
    { text: "Joel Corral", url: "https://www.instagram.com/abstractalberto/" },
    { text: "Octavio Sosa", url: "https://www.instagram.com/octavio_art_/" },
    { text: "Christine Hanley", url: "https://www.instagram.com/chanley865/" },
    { text: "Michelle Frasch", url: "http://www.instagram.com/grackleops" },
    { text: "Edith Valle", url: "https://www.instagram.com/edithvalle.design/" },
    {
      text: "London Farris",
      url: "https://www.instagram.com/londonfarris_art_/",
    },
    { text: "Nando Orozco", url: "https://www.instagram.com/nvndovision/" },
  ],
  "abolish-ice": [
    { text: "Nando Orozco", url: "https://www.instagram.com/nvndovision/" },
  ],
  "we-will-ride-with-you-forever": [
    { text: "Chris Tobar", url: "https://www.instagram.com/tobartakeover/" },
    { text: "Marcos Morales", url: "https://www.instagram.com/_keezii" },
  ],
  "we-are-groot": [
    { text: "Luis “Uloang” Angulo", url: "https://www.instagram.com/uloang/" },
  ],
  "verde-listo-a-ganar": [
    { text: "Octavio Sosa", url: "https://www.instagram.com/octavio_art_/" },
  ],
};
