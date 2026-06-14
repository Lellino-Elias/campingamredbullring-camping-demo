import type { CampsiteConfig } from "../types";

/**
 * Camping Rot — Camping am Red Bull Ring, Spielberg (Murtal, Steiermark).
 * Event-/Motorsport-Campingplatz direkt an der Rennstrecke (über 60.000 m²,
 * nur 150 m zur Strecke). Inhalte zu 100 % aus raw/digest abgeleitet.
 * Quelle nennt KEINE Preise → pricesArePlaceholder mit offenem priceNote.
 * Quelle nennt KEINE Telefonnummer (Kontakt ausdrücklich nur per E-Mail) →
 * Telefon-Slot honest auf eine E-Mail-Anfrage umgeleitet (kein erfundenes Tel).
 * Bildarm: nur 3 echte Fotos + 1 Marken-Bild + 3 platzeigene Pläne → Galerie
 * blendet sich ehrlich aus (keine 4 freien Foto-Kacheln übrig).
 */
const IMG = "/campsites/campingamredbullring";

const campingRot: CampsiteConfig = {
  name: "Camping Rot am Red Bull Ring",
  shortName: "Camping Rot",
  slug: "campingamredbullring",
  ort: "Spielberg",
  region: "Steiermark",
  brandKind: "Camping am Red Bull Ring",
  regionLong: "Spielberg · Murtal · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping in Pole Position",
  claimEmphasis: "Pole Position",
  emailDetail: "eure Lage nur 150 Meter neben der Rennstrecke",
  intro:
    "Über 60.000 m² Parkanlage, nur 150 Meter von der Rennstrecke: Ob mit Zelt und PKW, Wohnwagen, Wohnmobil oder Bike — hier schlägst du dein Lager direkt am Red Bull Ring auf und bist beim ersten Motorengeräusch schon dabei.",

  logo: { src: `${IMG}/logo.png`, alt: "Logo Camping Rot am Red Bull Ring" },

  statement: {
    text: "Nur 150 Meter trennen deinen Stellplatz von der Strecke — morgens hörst du die Motoren, bevor du den Reißverschluss am Zelt öffnest.",
    emphasis: "150 Meter",
  },

  pillars: [
    {
      title: "Über 60.000 m² Platz",
      text: "Genug Raum für Zelt und PKW, Wohnwagen, Wohnmobil oder Bike — der Stellplatz wird bei der Ankunft zugewiesen.",
      image: { src: `${IMG}/platz-parkanlage.webp`, alt: "Erschließungsstraße durch das Camping-Rot-Gelände in Spielberg: Wohnmobile, Transporter und Wohnwagen auf der weitläufigen Stellfläche, steirisches Bergpanorama im Hintergrund" },
    },
    {
      title: "Bis tief in die Nacht",
      text: "Wenn die Strecke ruht, sitzt du mit anderen Fans zusammen — Renn-Atmosphäre, die erst nach Mitternacht endet.",
      image: { src: `${IMG}/daemmerung.webp`, alt: "Camping Rot in der Dämmerung mit Zelten und Wohnmobilen unter dem Mond" },
    },
    {
      title: "Mitten in der Obersteiermark",
      text: "Zwischen den Rennen findest du auf der weitläufigen Parkanlage Grün und die steirische Bergkulisse ringsum.",
      image: { src: `${IMG}/bergkulisse.webp`, alt: "Weite steirische Landschaft mit Baumreihen und der Bergkulisse der Obersteiermark rund um Camping Rot am Red Bull Ring" },
    },
  ],

  usps: [
    "150 m zur Rennstrecke",
    "Über 60.000 m² Fläche",
    "Warmwasser-Sanitäranlagen",
    "Personal rund um die Uhr",
    "Strom am Platz",
    "Befestigte Zufahrt",
  ],

  trust: {
    heading: "Drei Renn-Wochenenden, ein Basislager",
    headingEmphasis: "ein Basislager",
    intro:
      "Ob DTM im April, Formel 1 im Juni oder MotoGP im September — von hier sind es nur 150 Meter bis an die Strecke. Über 60.000 m² Platz, Warmwasser-Sanitär und Personal rund um die Uhr machen den Platz zum Lager direkt am Geschehen.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-zeltstadt.webp`, alt: "Panoramablick über die Zeltstadt von Camping Rot am Red Bull Ring bei Sonnenuntergang: hunderte Camper auf dem Großgelände vor der Bergkulisse der Obersteiermark" },
  },

  camping: {
    heading: "Platz, Strecke und Anreise auf einen Blick",
    intro:
      "Großzügige Parkanlage mit Warmwasser-Sanitär, Strom am Platz und befestigten Zufahrtsstraßen — und du siehst schon vorab, wo dein Stellplatz, die Strecke und die Anfahrt liegen.",
    features: [
      {
        title: "Alles am Platz",
        text: "Warmwasser-Sanitär, Wasser, Strom, Gastronomie und Entsorgung — der Lageplan zeigt dir, wo auf den über 60.000 m² alles liegt.",
        image: { src: `${IMG}/lageplan.webp`, alt: "Lageplan von Camping Rot mit Sanitär, Wasser, Strom, Gastronomie und Entsorgungsstation" },
      },
      {
        title: "Nur 150 Meter zur Strecke",
        text: "Camping Rot grenzt direkt an den Red Bull Ring — morgens bist du in wenigen Minuten an deinem Platz an der Rennstrecke.",
        image: { src: `${IMG}/strecke-zonen.webp`, alt: "Lageplan: Camping Rot direkt neben der Rennstrecke des Red Bull Ring" },
      },
      {
        title: "Klare Anreise über die S36",
        text: "Über die S36, Ausfahrt Zeltweg West, fährst du direkt an — die Ausfahrt Zeltweg Ost wird nicht empfohlen.",
        image: { src: `${IMG}/anfahrtsplan.webp`, alt: "Offizieller Anfahrtsplan zu den Campingplätzen am Red Bull Ring über die S36" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Ring",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Schnellstraße S36, Ausfahrt Zeltweg West (nicht Zeltweg Ost). Von dort folgst du der ausgeschilderten Camping-Route bis zum Platz.",
      },
      {
        title: "Mit der Bahn",
        text: "Nächste Bahnhöfe sind Zeltweg und Knittelfeld an der Linie Wien–Villach; die letzten Kilometer zum Ring per Taxi oder Transfer.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Graz liegt rund eine Autostunde entfernt, Salzburg und Wien sind in etwa zwei bis zweieinhalb Stunden erreichbar.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro: "Eindrücke von Camping Rot am Red Bull Ring.",
    tag: "Renn-Wochenenden",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Ring",
    headingEmphasis: "am Ring",
    intro:
      "Wähle Zeitraum und Fahrzeugtyp — für die großen Renn-Wochenenden 2026 meldet sich das Team von Camping Rot mit Verfügbarkeit und Preis.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Stellplatzpreis pro Nacht; Renn-Pakete laufen über den offiziellen Ticketshop.",
    highlight: {
      title: "Renn-Wochenenden 2026",
      text: "DTM 24.–26. April, Formel 1 26.–28. Juni, MotoGP 18.–20. September — Plätze über den offiziellen Ticketshop.",
    },
    categories: [
      { id: "zelt", label: "PKW + Zelt", perNight: 38, perExtraGuest: 0 },
      { id: "wohnmobil", label: "Wohnmobil bis 7 m", perNight: 44, perExtraGuest: 0 },
      { id: "maxi", label: "Maxi über 7 m", perNight: 52, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    coords: { lat: 47.217395, lng: 14.762749 },
    tel: "Anfrage per E-Mail",
    telHref: "mailto:info@campingamredbullring.at?subject=Anfrage%20Camping%20Rot",
    mail: "info@campingamredbullring.at",
    adresse: "Kattigarweg · 8724 Spielberg · Steiermark",
  },

  languages: ["DE"],

  nav: [
    { label: "Platz & Lage", href: "#camping" },
    { label: "Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default campingRot;
