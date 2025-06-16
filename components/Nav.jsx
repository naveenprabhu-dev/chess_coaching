"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'coaching philosophy', path: '/coaching_philosophy'},
    { name: 'services', path: '/services'},

]

const Nav = () => {
    const pathname = usePathname(); 
    return (
      <nav className='flex gap-8'>
        {links.map((link, index) => (
          <Link 
            href={link.path} 
            key={index} 
            className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all ease-in-out duration-300`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    );
  };

export default Nav;
