'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "../assets/logo.png"

const services = [
  { name: 'UI/UX Design', path: '/services/design' },
  { name: 'SEO Optimization', path: '/services/seo' },
  { name: 'SaaS Development', path: '/services/saas' },
  { name: 'App Development', path: '/services/appdev' },
  { name: 'Web Development', path: '/services/webdev' }
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-full max-w-[100px] md:max-w-[120px]" />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={`text-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/' ? 'text-white' : ''}`}>
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button 
                className={`text-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname.startsWith('/services') ? 'text-white' : ''}`}
                onClick={toggleServices}
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                Services
                <svg className={`ml-2 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.path}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${pathname === service.path ? 'bg-gray-100 text-gray-900' : ''}`}
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/about" className={`text-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/about' ? 'text-white' : ''}`}>
              About
            </Link>
            <Link href="/gallery" className={`text-gray-200 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium ${pathname === '/gallery' ? 'text-white' : ''}`}>
              Gallery
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="bg-white hover:bg-gray-200 text-black py-2 px-10 rounded-md text-sm transition duration-150 ease-in-out">
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white hover:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-gray-300 rounded-tr-3xl transition duration-600 ease-in-out z-50 md:hidden`}>
        <div className="p-8">
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-black hover:text-gray-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="mt-8">
            <Link href="/" className={`block text-black hover:text-gray-600 py-2.5 ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
            <div>
              <button onClick={toggleServices} className="flex items-center justify-between w-full text-black py-2.5">
                Services
                <svg className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`pl-4 ${isServicesOpen ? 'block' : 'hidden'}`}>
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.path} 
                    className={`block text-black hover:text-gray-600 py-2 ${pathname === service.path ? 'font-bold' : ''}`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className={`block text-black hover:text-gray-600 py-2.5 ${pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
            <Link href="/gallery" className={`block text-black hover:text-gray-600 py-2.5 ${pathname === '/gallery' ? 'font-bold' : ''}`}>Gallery</Link>
            <button className="mt-20 bg-white hover:bg-black text-black py-2 px-10 rounded-md text-sm transition duration-150 ease-in-out w-full">
              Get in Touch
            </button>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;