// Sponsor logos, shared by the homepage, Kisik Youth Wellness and
// Pathways to Success pages.
//
// `height` is the display height in pixels at normal size. Logos are sized
// so they look equally prominent rather than all sharing one height: a
// wide wordmark (SaskPower) is shorter, a stacked logo (Cameco) is taller,
// and K+S is a little smaller because it is a solid block of colour.
// `width`/`height` of the files are kept for layout stability.

export interface Sponsor {
  name: string;
  logo: string;
  fileWidth: number;
  fileHeight: number;
  height: number;
}

export const sponsors: Sponsor[] = [
  { name: 'SaskPower', logo: '/images/sponsors/saskpower.webp', fileWidth: 396, fileHeight: 56, height: 30 },
  { name: 'K+S', logo: '/images/sponsors/ks.webp', fileWidth: 738, fileHeight: 252, height: 40 },
  { name: 'Nutrien', logo: '/images/sponsors/nutrien.webp', fileWidth: 434, fileHeight: 91, height: 38 },
  { name: 'Cameco', logo: '/images/sponsors/cameco.webp', fileWidth: 910, fileHeight: 656, height: 68 },
];

export const sponsorsByName = (names: string[]) =>
  names
    .map((name) => sponsors.find((s) => s.name === name))
    .filter((s): s is Sponsor => Boolean(s));
