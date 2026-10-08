export interface ProvinceData {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string[];
  testimonialOrgMatch: string | null;
}

export const provinces: ProvinceData[] = [
  {
    slug: 'saskatchewan',
    name: 'Saskatchewan',
    eyebrow: 'Home Province',
    title: 'Motivational Speaker in Saskatchewan',
    description:
      'Carlin Nordstrom is a Saskatchewan-based Indigenous motivational and keynote speaker, available for schools, First Nations communities, and organizations across the province.',
    intro: [
      "Carlin grew up in Warman, Saskatchewan, and Saskatchewan remains home base for his speaking and youth wellness work today. His story — battling adversity in minor hockey as the only First Nations player on his team, through to professional hockey and a career as a speaker — is rooted in this province.",
      'Carlin has presented to schools including Ahtahkakoop School, and spoke at the 11th Annual Peter Ballantyne Child & Family Services Inc. Staff Development Conference in Saskatoon. He continues to work with Saskatchewan schools, First Nations organizations, and communities looking for an authentic, locally-grounded voice on leadership, resilience, and youth development.',
    ],
    testimonialOrgMatch: 'Ahtahkakoop',
  },
  {
    slug: 'alberta',
    name: 'Alberta',
    eyebrow: 'Western Canada',
    title: 'Motivational Speaker in Alberta',
    description:
      'Carlin Nordstrom brings keynotes and workshops on Indigenous leadership, resilience, and youth development to schools and organizations across Alberta.',
    intro: [
      'Carlin has presented to Alberta schools, including an assembly for the entire student population — grades 9 through 12 — at J.A. Williams High School in Lac La Biche, where nearly half the students identify as First Nations, Métis, or Inuit.',
      "Alberta's First Nations communities, school divisions, and corporate organizations continue to be a core part of Carlin's work, bringing lessons from professional hockey, perseverance, and community leadership to audiences across the province.",
    ],
    testimonialOrgMatch: 'J.A. Williams',
  },
  {
    slug: 'british-columbia',
    name: 'British Columbia',
    eyebrow: 'Western Canada',
    title: 'Motivational Speaker in British Columbia',
    description:
      'Carlin Nordstrom is available for keynotes and workshops at schools, First Nations communities, and organizations across British Columbia.',
    intro: [
      'Carlin has presented at Fort Nelson Secondary in British Columbia, bringing his message of perseverance, leadership, and Indigenous identity to students in northern BC.',
      "British Columbia's diverse communities — from northern and remote First Nations to urban school districts and corporate organizations — are a growing part of Carlin's speaking schedule across Western Canada.",
    ],
    testimonialOrgMatch: 'Fort Nelson',
  },
  {
    slug: 'manitoba',
    name: 'Manitoba',
    eyebrow: 'Western Canada',
    title: 'Motivational Speaker in Manitoba',
    description:
      'Carlin Nordstrom is available for keynotes and workshops on Indigenous leadership, resilience, and youth development for schools and organizations in Manitoba.',
    intro: [
      "Manitoba's First Nations communities, schools, and organizations are a natural fit for Carlin's message — a story of overcoming adversity as an Indigenous athlete, combined with practical leadership and resilience strategies for youth and corporate audiences alike.",
      'Carlin is now accepting school and community bookings across Manitoba for keynotes, workshops, and the RISE UP Mental Health, Prevention and Fitness Program for First Nations youth.',
    ],
    testimonialOrgMatch: null,
  },
  {
    slug: 'ontario',
    name: 'Ontario',
    eyebrow: 'Central Canada',
    title: 'Motivational Speaker in Ontario',
    description:
      'Carlin Nordstrom brings keynotes and workshops on Indigenous leadership, resilience, and youth development to schools, communities, and corporate organizations in Ontario.',
    intro: [
      'From conference keynotes to school assemblies, Carlin brings a message that bridges Indigenous leadership, athletic experience, and corporate motivation to Ontario audiences.',
      'Carlin is now accepting school, community, and organization bookings across Ontario for keynotes, workshops, and youth programming through Kisik Youth Wellness and Kisik Pathways to Success.',
    ],
    testimonialOrgMatch: null,
  },
];
