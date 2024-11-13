import { cn } from '@/lib/utils';
import { HelpCircle, Search, ShoppingCart, UserRound } from 'lucide-react';
import { Pacifico, Dancing_Script } from 'next/font/google';
import Link from 'next/link';

const pages = [
  {
    path: 'shop',
    label: 'Shop',
  },
  {
    path: 'about',
    label: 'About',
  },
  {
    path: 'blogs',
    label: 'Blogs',
  },
  {
    path: 'sales',
    label: 'Sales',
  },
];

const links = [
  {
    path: 'search',
    label: <Search />,
  },
  {
    path: 'login',
    label: <UserRound />,
  },
  {
    path: 'help',
    label: <HelpCircle />,
  },
  {
    path: 'cart',
    label: <ShoppingCart />,
  },
];

export const pacificoFont = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
});
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between h-14  shadow-custom-light fixed z-20 top-0 w-full bg-white'>
      <div className='flex items-center justify-between gap-4 md:ml-7 uppercase text-[12px] font-bold'>
        {pages.map((page) => (
          <Link
            href={page.path}
            key={page.label}
            className={`${page.label === 'Sales' && 'text-red-500'}`}
          >
            {page.label}
          </Link>
        ))}
      </div>

      <h2
        className={cn(
          'text-3xl font-extralight italic',
          pacificoFont.className,
        )}
      >
        <Link href='/'>ababil</Link>
      </h2>
      <div className='flex items-center justify-between gap-4 md:mr-7'>
        {links.map((link) => (
          <Link href={link.path} key={link.path}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
