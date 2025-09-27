'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#students', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = isMounted && isScrolled 
    ? 'bg-background/80 shadow-md backdrop-blur-sm' 
    : 'bg-transparent';
  
  const textClasses = isMounted && isScrolled
    ? 'text-primary'
    : 'text-white';
  
  const getMobileButtonClasses = () => {
    let classes = 'md:hidden rounded-full bg-background/20 backdrop-blur-sm shadow-lg transition-colors duration-300 ';
    if (isMenuOpen) {
        classes += 'bg-secondary text-secondary-foreground ';
    } else {
        classes += isScrolled ? 'text-primary border-border ' : 'text-white border-white/20 ';
    }
    return classes;
  };


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className={`flex items-center gap-2 font-headline text-2xl font-bold transition-colors duration-300 ${textClasses}`}>
          <Mountain className="h-7 w-7 text-secondary" />
          <span className="font-headline">Hanumant</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
           <Button variant="secondary" className="hidden md:inline-flex">Get in Touch</Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className={getMobileButtonClasses()}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  <Mountain className="h-6 w-6 text-secondary" />
                  <span className="font-headline">Hanumant</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button variant="secondary" className="w-full">Get in Touch</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
