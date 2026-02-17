export interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  target: '_blank' | '_self' | '_parent' | '_top';
}

export const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    target: '_self',
  },
  {
    name: 'Shop',
    href: '/shop',
    target: '_self',
  },
  {
    name: 'Categories',
    href: '/categories',
    target: '_self',
  },
  {
    name: 'Farm Fresh',
    href: '/farm-fresh',
    target: '_self',
  },
  {
    name: 'About Us',
    href: '/about',
    target: '_self',
  },
  {
    name: 'Blog',
    href: '/blog',
    target: '_self',
  },
  {
    name: 'Contact',
    href: '/contact',
    target: '_self',
  },
];
