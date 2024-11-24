import React from 'react';
import Image from 'next/image';
import logo from "../assets/logo.png";
import desktop from "../assets/desktopfooter.jpg";
import mobile from "../assets/mobilefooter.jpg";

const footerItems = [
  { title: 'Categories', links: ['Online Business for Sale', 'Ready made Websites for sale', 'Social media linking websites', 'Blogs for Sale', 'Custom Software development', 'Enterprise application development', 'Software integration'] },
  { title: 'Web', links: ['SaaS development', 'UI/UX design', 'Website development', 'SEO optimization', 'E-commerce solutions', 'Content management systems (CMS)', 'Web application development'] },
  { title: 'App Development', links: ['Native app development (iOS, Android)', 'Hybrid app development', 'Cross-platform app development'] },
];

const Footer = () => {
  return (
    <footer className="relative mt-8 py-12">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image src={mobile} alt="Footer Mobile Background" layout="fill" objectFit="cover" quality={100} className="block md:hidden" />
        <Image src={desktop} alt="Footer Background" layout="fill" objectFit="cover" quality={100} className="hidden md:block" />
      </div>
      
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="text-white font-bold text-2xl">
            <Image src={logo} alt="Logo" height={50} className="w-full md:max-w-[150px] max-w-[100px]" />
          </div>
          {footerItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h2 className="font-bold text-white md:text-2xl">{item.title}</h2>
              {item.links.map((link, linkIndex) => (
                <a key={linkIndex} href="/about" className="text-gray-300 font-light text-sm md:text-[15px] hover:text-gray-300">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center text-gray-400 mt-10">
          © 2024 infinnity-developers.com. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
