"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '@/assets/ecommerce-logo2.png';

const navlink = [
  {
    routeName: 'Home',
    path: '/'
  },
  {
    routeName: 'Brands',
    path: '/brands'
  },
  {
    routeName: 'Products',
    path: '/laptops'
  },
  {
    routeName: 'Flash Sale',
    path: '/flash-sale'
  },
  {
    routeName: 'About Us',
    path: '/about-us'
  },
  {
    routeName: 'Contact Us',
    path: '/contact-us'
  },
  {
    routeName: 'Dashboard',
    path: '/dashboard'
  }
];

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: any) => path === pathname;

  return (
    <nav className="bg-white border-gray-200 py-2.5 fixed top-0 left-0 w-full z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl container mx-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" width={70} height={100} />
          <span className="self-center text-xl font-semibold whitespace-nowrap">LapHub</span>
        </Link>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {navlink.map((item, i) => (
              <li key={i} className="py-2 pl-3 pr-4 text-black rounded lg:bg-transparent hover:text-green-500" aria-current="page">
                <Link href={item.path} className={isActive(item.path) ? 'active' : ''}>{item.routeName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
