export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  description: string;
  ogImage: string;
  twitter: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: string;
  nav: NavItem[];
  footerNav: NavItem[];
  social: { label: string; href: string; icon: string }[];
  bookingHref: string;
}

export const site: SiteConfig = {
  name: 'Carlin Nordstrom',
  shortName: 'Carlin Nordstrom',
  url: 'https://carlinnordstrom.com',
  description:
    'Carlin Nordstrom is an Indigenous motivational and keynote speaker, former professional hockey player, and founder of Kisik Youth Wellness and Kisik Pathways to Success. Empowering youth and inspiring communities across Canada with a story of overcoming adversity.',
  ogImage: '/og-default.jpg',
  twitter: '@carlinnordstrom',
  email: 'carlin@carlinnordstrom.ca',
  phone: '+1-306-716-5761',
  phoneDisplay: '(306) 716-5761',
  location: 'Saskatchewan, Canada',
  bookingHref: '/contact',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Keynotes', href: '/keynotes' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Kisik', href: '/kisik-youth-wellness' },
    { label: 'Pathways', href: '/pathways-to-success' },
    { label: 'Contact', href: '/contact' },
  ],
  footerNav: [
    { label: 'About Me', href: '/about' },
    { label: 'Keynotes', href: '/keynotes' },
    { label: 'Workshops', href: '/workshops' },
    { label: 'Kisik Youth Wellness', href: '/kisik-youth-wellness' },
    { label: 'Pathways to Success', href: '/pathways-to-success' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Where Carlin Speaks', href: '/speaking' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  social: [
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
  ],
};

export const bookingHref = site.bookingHref;
