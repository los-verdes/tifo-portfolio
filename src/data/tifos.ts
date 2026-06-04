// Tifo portfolio data for Los Verdes ATX.
//
// Each entry describes a single tifo display: when and against whom it was
// raised, the artist(s) who designed it, the descriptive write-up, the photo
// credit, and an optional external link (Google Drive / Slack) to the original
// high-resolution photo. Images live in `public/tifos/<imageSlug>.webp` (full
// size) and `public/tifos/thumbs/<imageSlug>.webp` (grid thumbnail).
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
  /** Optional external link to the original full-resolution photo. */
  readonly sourceUrl?: string;
  /** Optional link to a Los Verdes blog post with further information. */
  readonly blogUrl?: string;
}

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
      "https://drive.google.com/file/d/1hQeJX5sKin3S2McWMU-thHMPcEkuL-n1/view?usp=drive_link",
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
      "https://losverdesatx.slack.com/archives/C013YCYJNE5/p1779061488116459?thread_ts=1779061257.134039&cid=C013YCYJNE5",
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
      "https://losverdesatx.slack.com/archives/C013CBC5JFL/p1779291518002079?thread_ts=1779286773.354859&cid=C013CBC5JFL",
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
      "https://drive.google.com/file/d/1SoX6-B8ZiJdNVXSYS_Z-XfA5aH0LOOQp/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1TXwg7Qs2mDP8wu2D3pc9uamXQoKdeAzY/view?usp=drive_link",
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
      "https://losverdesatx.slack.com/archives/C013YCYJNE5/p1779068489356399?thread_ts=1779061389.012509&cid=C013YCYJNE5",
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
      "https://drive.google.com/file/d/1iN4AYp2obvy_uL5LAZHm8vfNtFGFsx2E/view?usp=drive_link",
  },
  {
    imageSlug: "playoff-crest",
    displayDate: "October 23, 2023",
    isoDate: "2023-10-23",
    opponent: "FC Dallas",
    artist: "Nando Orozco",
    title: "Playoff Crest",
    description:
      "With less than a week between games, supporters rushed to create a tifo for our second home playoff game against an in-state rival that sucks. Using the crest and streamers as our first “roll-over” tifo helped drive the energy in the stadium, leading the team to their second playoff win and moving us onto the 2023 Western Conference Final.",
    photoCredit: "Aries Silva",
    sourceUrl:
      "https://losverdesatx.slack.com/archives/C013YCYJNE5/p1779064494631589?thread_ts=1779061339.155109&cid=C013YCYJNE5",
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
      "https://drive.google.com/file/d/18CFkAg42VyiQtIletB6seH8ipI5Polyt/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1h16gsDSFm1_v5Fgrj9UZzenUdFr8xhft/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1NF7l5f7PKdNkLI3IsFY0UdszwRfFGnsd/view?usp=drive_link",
  },
  {
    imageSlug: "juntos-somos-familia",
    displayDate: "October 7, 2023",
    isoDate: "2023-10-07",
    opponent: "LA FC",
    artist: "Marcos Morales",
    title: "Juntos Somos Familia",
    description:
      "Juntos Somos Familia, Juntos Somos Futbol is the text that borders our Hispanic Heritage Month tifo. “The overall message I wanted to convey with this tifo is community and interconnectedness. Although my style of art is abstract, there are some elements and symbols that are apparent. The center heart, the big tree, and the stick people holding hands are some that come to mind. All represent growth, unity, and connection to our roots. For me, those are Hispanic roots and this tifo allowed me to celebrate my Mexican heritage. Like a tree, this community stands strong and flourishes, for our team, family, and Austin. Juntos somos familia, Juntos somos Fútbol.” — Marcos Morales",
    photoCredit: "Alex Rubio/Cinco Soles Media",
    sourceUrl:
      "https://drive.google.com/file/d/12amhky3EfA81Zwwy8CMXmDoRgy8702hg/view?usp=drive_link",
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
      "https://losverdesatx.slack.com/archives/C013YCYJNE5/p1779062082935669?thread_ts=1779061348.673019&cid=C013YCYJNE5",
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
      "https://losverdesatx.slack.com/archives/C013YCYJNE5/p1779064971590259?thread_ts=1779061380.997099&cid=C013YCYJNE5",
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
      "https://drive.google.com/file/d/1JaVVezvsQrTM9996xkDf_NXpCdRLAm-V/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1Zk-Fstm6werKTyqLncVzj3S3M0bCDOmS/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1MkmSaHrOdue2J7ZRgR2RFcwZxP6TvZik/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1onImRYT4Q8jMgNKQXnums7rcFu0LpYaq/view?usp=drive_link",
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
      "https://drive.google.com/file/d/1uZgPrZFh7z4z5eVOQ9IJVveEx0Imj-US/view?usp=drive_link",
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
      "https://losverdesatx.slack.com/archives/C013CBC5JFL/p1779300569108699?thread_ts=1779286773.354859&cid=C013CBC5JFL",
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
      "https://drive.google.com/file/d/1FPg-4EJEnHRJhRG0IUUb0eYiESJ9SjC2/view?usp=drive_link",
    blogUrl:
      "https://www.losverdesatx.org/blog/2026-season-opener-tifo-legacy-of-the-black-cowboy",
  },
] as const;

/** Distinct years present in the data, newest first, for the filter UI. */
export const TIFO_YEARS: readonly number[] = Array.from(
  new Set(TIFOS.map((tifo) => parseInt(tifo.isoDate.slice(0, 4), 10))),
).sort((a, b) => b - a);

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
};
