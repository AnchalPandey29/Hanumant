'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mountain, Linkedin, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
  { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
];

const usefulLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#', label: 'Verify Certificate' },
    { href: '#', label: 'Career' },
    { href: '#contact', label: 'Contact Us' },
    { href: '#', label: 'FAQ' },
    { href: '#', label: 'Privacy & Policy' },
    { href: '#', label: 'Terms & Conditions' },
];

const servicesLinks = [
    { href: '#services', label: 'Website Development' },
    { href: '#services', label: 'Website Designing' },
    { href: '#services', label: 'Graphic Designing' },
    { href: '#services', label: 'Digital Marketing' },
    { href: '#services', label: 'App Development' },
    { href: '#services', label: 'AutoCAD' },
    { href: '#services', label: 'Data Science & Data Analytics' },
];


export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <footer className="bg-primary h-[500px]"></footer>;
  }
  
  return (
    <footer className="relative bg-primary text-primary-foreground/80 pt-24 sm:pt-32 pb-12">
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -mt-px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px] sm:h-[160px]"
        >
          <path
            fill="hsl(var(--background))"
            fillOpacity="1"
            d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,112C672,139,768,181,864,192C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pt-16 border-t border-white/10">
          
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-white">
                <Mountain className="h-7 w-7 text-secondary" />
                <span>Hanumant</span>
            </Link>
            <p className="max-w-md">Empowering the next generation of tech talent through innovative and practical education.</p>
            <div className="flex space-x-2 pt-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-secondary/30">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-lg font-semibold text-white">Contact Us</h4>
             <div className="space-y-4">
                 <div className="flex items-start gap-4">
                    <div className="text-secondary mt-1"><Phone size={20} /></div>
                    <div>
                        <a href="tel:+919454461808" className="block text-sm hover:text-white transition-colors">+91-9454461808</a>
                        <a href="tel:+916386198028" className="block text-sm hover:text-white transition-colors">+91-6386198028</a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="text-secondary mt-1"><Mail size={20} /></div>
                    <div>
                        <a href="mailto:info@hanumanttechnology.com" className="block text-sm hover:text-white transition-colors">info@hanumanttechnology.com</a>
                        <a href="mailto:hanumanttechnology@gmail.com" className="block text-sm hover:text-white transition-colors">hanumanttechnology@gmail.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-secondary mt-1"><MapPin size={20} /></div>
                    <div>
                        <h5 className="font-semibold text-white">Lucknow - Aashiyana</h5>
                        <p className="text-sm">1st Floor, Sadafal Plaza, Sector I, Lucknow-226012</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="text-secondary mt-1"><MapPin size={20} /></div>
                    <div>
                        <h5 className="font-semibold text-white">Lucknow - Aliganj</h5>
                        <p className="text-sm">2nd Floor, Hira Tower 1, Sector C, Aliganj, Lucknow-226024</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-white">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors duration-200 relative group"><span>{link.label}</span><span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map(link => (
                  <li key={link.label}><Link href={link.href} className="hover:text-white transition-colors duration-200 relative group"><span>{link.label}</span><span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span></Link></li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-sm">Subscribe to get the latest updates and offers.</p>
            <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:ring-secondary"/>
                <Button variant="secondary" size="icon" aria-label="Subscribe"><Mail className="w-5 h-5"/></Button>
            </form>
          </div>

        </div>


        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hanumant Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
