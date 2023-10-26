import React from 'react';
import Image from 'next/image';
import Logo from '@/../../public/svg/logo-no-background.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-4 sm:py-6"> 
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="max-h-[55px] overflow-hidden flex justify-center items-center mb-4 sm:mb-0">
          <Image src={Logo} alt="logo_img" width={180} height={50} />
        </div>

        <div className="space-x-3 text-center sm:text-left">
          <Link href="/about" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/products" className="hover:text-gray-400">
            Products
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
      <hr className="my-2 sm:my-6 w-full md:w-[90%] mx-auto" />
      <p className="text-center font-serif">&copy; {new Date().getFullYear()} Ecom-Web. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
