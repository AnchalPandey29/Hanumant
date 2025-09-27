'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#services', label: 'Training' },
  { href: '#students', label: 'Placement' },
  { href: '#contact', label: 'Branches' },
  { href: '#', label: 'Certificate' },
  { href: '#contact', label: 'Contact Us' },
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
  
  if (!isMounted) {
    return (
        <header className="sticky top-0 z-50 w-full bg-transparent">
             <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
                    <Mountain className="h-7 w-7 text-secondary" />
                    <span className="font-headline">Hanumant</span>
                </Link>
                <div className="h-10 w-10 md:hidden" />
            </div>
      </header>
    );
  }

  const headerClasses = isScrolled 
    ? 'bg-background/80 shadow-md backdrop-blur-sm' 
    : 'bg-transparent';
  
  const textClasses = isScrolled
    ? 'text-primary'
    : 'text-primary';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className={`flex items-center gap-2 font-headline text-2xl font-bold transition-colors duration-300 ${textClasses}`}>
          <Mountain className="h-7 w-7 text-secondary" />
          <span className="font-headline">Hanumant</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-primary/80 hover:text-primary'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
           <Button variant="secondary" className="text-secondary-foreground rounded-full shadow-lg shadow-secondary/20 hover:shadow-secondary/30 transition-shadow">Get in Touch</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border-border bg-background/50 backdrop-blur-sm">
                <Menu className="h-6 w-6 text-primary" />
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
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button variant="secondary" className="w-full text-secondary-foreground">Get in Touch</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
